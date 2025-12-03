using ServerCorePages;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.IdentityModel.Tokens;
using NUglify.Helpers;
using System.Collections.ObjectModel;
using System.Linq;
using System.Linq.Expressions;
using System.Management.Automation;
using System.Net.Mail;
using System.Runtime.InteropServices;
using EasyITCenter.DBModel;

namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// Server Process Operations
    /// PowerShell, System Commands, Scripts Processing
    /// Used *.cmd, *.bat, *.ps1, *.sh 
    /// Linux/Windows has same filename,
    /// File Extension has Auto Change *.sh and *.cmd
    /// </summary>
    public static class ProcessOperations {


        /// <summary>
        /// https://stackoverflow.com/questions/2035193/how-to-run-a-powershell-script
        ///SHELL FROM CMD:   Powershell.exe -File C:\Install\script.ps1
        /// </summary>
        /// <param name="processDefinition">The process definition.</param>
        /// <returns></returns>
        public async static Task<string> ServerProcessStartAsync(RunProcessRequest processDefinition) {
            string resultOutput = "", resultError = "";

            try {
                Process proc = new();

                if (processDefinition.ProcessType == ProcessType.node) {
                    proc.StartInfo.FileName = "node";
                    proc.StartInfo.Arguments = processDefinition.Command ?? null;
                } else if (processDefinition.ProcessType == ProcessType.py) {
                    proc.StartInfo.FileName = "py";
                    proc.StartInfo.Arguments = processDefinition.Command ?? null;
                } else if (processDefinition.ProcessType == ProcessType.py3 ) {
                    proc.StartInfo.FileName = "py3";
                    proc.StartInfo.Arguments = processDefinition.Command ?? null;
                } else if (processDefinition.ProcessType == ProcessType.dotnet) {
                    proc.StartInfo.FileName = "dotnet";
                    proc.StartInfo.Arguments = processDefinition.Command ?? null;
                } else if (processDefinition.ProcessType == ProcessType.cmd) {
                    proc.StartInfo.FileName = "cmd.exe";
                    proc.StartInfo.Arguments = processDefinition.Command ?? null;
                } else if (processDefinition.ProcessType == ProcessType.bat) {
                    proc.StartInfo.FileName = processDefinition.Command;
                    proc.StartInfo.Arguments = null;
                } else if (processDefinition.ProcessType == ProcessType.sh) {
                    proc.StartInfo.FileName = "/bin/bash";
                    proc.StartInfo.Arguments = string.Format(" \"{0}\"", processDefinition.Command);
                } else if (processDefinition.ProcessType == ProcessType.powershellFile) {
                    proc.StartInfo.FileName = "powershell";
                    proc.StartInfo.Arguments = string.Format(" \"{0}\"", processDefinition.Command);
                } else if (processDefinition.ProcessType == ProcessType.powershellScript) {
                    RunPowerShellProcess(processDefinition);
                }

                proc.StartInfo.UseShellExecute = false;
                proc.StartInfo.WorkingDirectory = null;// processDefinition.WorkingDirectory + "\\" ?? null;
                //proc.StartInfo.LoadUserProfile = false;
                proc.StartInfo.CreateNoWindow = true;
                proc.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                proc.StartInfo.RedirectStandardOutput = true;
                proc.StartInfo.RedirectStandardError = true;
                proc.StartInfo.Verb = ( Environment.OSVersion.Version.Major >= 6 ) ? "runas" : "";
                proc.Start();

                ServerStartUpScriptList startupScript = null;
                if (!string.IsNullOrWhiteSpace(processDefinition.StartupScriptName)) { 
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        startupScript = new EasyITCenterContext().ServerStartUpScriptLists.Where(a => a.Name == processDefinition.StartupScriptName).FirstOrDefault();
                    }
                    if (!string.IsNullOrWhiteSpace(startupScript.Id.ToString())) { startupScript.Pid = proc.Id;
                        EntityEntry<ServerStartUpScriptList>? data = new EasyITCenterContext().ServerStartUpScriptLists.Update(startupScript);
                        await data.Context.SaveChangesAsync();
                    }
                }
                SrvRuntime.SrvProcessManager.Add(new Tuple<int, string, string, Process>(proc.Id, !string.IsNullOrWhiteSpace(processDefinition.StartupScriptName) ? processDefinition.StartupScriptName : proc.ProcessName, startupScript.Description, proc));

                //proc.OutputDataReceived +=;
                proc.Exited += ServerProcessFinishedAsync; 
                proc.Disposed += ServerProcessFinishedAsync;
                resultOutput += proc.StandardOutput.ReadToEndAsync();
                resultError += proc.StandardError.ReadToEndAsync();

                if (processDefinition.WaitForExit) {
                    await proc.WaitForExitAsync();
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), InsertedId = 0, RecordCount = 1, ErrorMessage = resultOutput + Environment.NewLine + resultError });
                } else { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), InsertedId = 0, RecordCount = 1, ErrorMessage = resultOutput + Environment.NewLine + resultError }); }

            } catch (Exception ex) { resultError += ex.StackTrace + Environment.NewLine + ex.Message;
                CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(ex) });
            }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.success.ToString(), InsertedId = 0, RecordCount = 1, ErrorMessage = resultOutput + Environment.NewLine + resultError });
        }


        /// <summary>
        /// Server Process Manager Remove Finished Process
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private static async void ServerProcessFinishedAsync(object? sender, EventArgs e) {
            try {
                Tuple<int, string, string, Process>? process = SrvRuntime.SrvProcessManager.Where(a => a.Item4 == (Process)sender).FirstOrDefault();
                if (process != null) { 
                    SrvRuntime.SrvProcessManager.Remove(process); ServerStartUpScriptList startupScript = null;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        startupScript = new EasyITCenterContext().ServerStartUpScriptLists.Where(a => a.Pid == process.Item1).FirstOrDefault();
                    }
                    if (!string.IsNullOrWhiteSpace(startupScript.Id.ToString())) {
                        startupScript.Pid = null;
                        EntityEntry<ServerStartUpScriptList>? data = new EasyITCenterContext().ServerStartUpScriptLists.Update(startupScript);
                        await data.Context.SaveChangesAsync();
                    }
                }
            } catch (Exception ex) {
                CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(ex) });
            }
        }


        /// <summary>
        /// Server Kill Running Process
        /// </summary>
        /// <param name="processName"></param>
        /// <returns></returns>
        public static async void ServerProcessKill(int processPid) {
            try {
                Tuple<int, string, string, Process>? process = SrvRuntime.SrvProcessManager.Where(a => a.Item1 == processPid).FirstOrDefault();
                if (process != null) { 
                    process.Item4.Kill();
                    process.Item4.Dispose();
                    SrvRuntime.SrvProcessManager.Remove(process); ServerStartUpScriptList startupScript = null;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                        startupScript = new EasyITCenterContext().ServerStartUpScriptLists.Where(a => a.Pid == process.Item1).FirstOrDefault();
                    }

                    /*
                    Process[] processes = Process.GetProcesses();
                    foreach (Process runprocess in processes) {
                        if(runprocess.StartInfo.Arguments == startupScript.StartCommand.Replace("wwwroot", SrvRuntime.WebRoot_path)) {
                            runprocess.Kill();
                        }
                    }
                    */


                    if (!string.IsNullOrWhiteSpace(startupScript.Id.ToString())) {
                        startupScript.Pid = null;
                        EntityEntry<ServerStartUpScriptList>? data = new EasyITCenterContext().ServerStartUpScriptLists.Update(startupScript);
                        await data.Context.SaveChangesAsync();
                    }
                }
            } catch (Exception ex) {
                CoreOperations.SendEmail(new SendMailRequest() { Content = DataOperations.GetErrMsg(ex) });
            }
        }


        /// <summary>
        /// https://stackoverflow.com/questions/2035193/how-to-run-a-powershell-script
        /// PowerShell Script Runner
        /// </summary>
        /// <param name="script"></param>
        /// <returns></returns>
        public async static Task<string> RunPowerShellProcess(RunProcessRequest processDefinition) {
            try {
                    using (PowerShell ps = PowerShell.Create()) {
                    //ps.AddArgument = processDefinition.WorkingDirectory
                    Collection<PSObject>? results = ps.AddScript(processDefinition.Command).Invoke();
                    ps.Commands.Clear();
                    return results.AsEnumerable().ToList().ObjectToJson();
                }
            } catch (Exception ex) {
                string err = DataOperations.GetErrMsg(ex);
                CoreOperations.SendEmail(new SendMailRequest() { Content = err });
                return err;
            }

        }


    }
}