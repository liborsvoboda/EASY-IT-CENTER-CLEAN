using System.Net.Mail;

namespace EASYDATACenter.ServerCoreOperations {

    internal class ServerCoreFunctions {

        /// <summary>
        /// Mined-ed Error Message For Answer in API Error Response with detailed info about problem
        /// </summary>
        /// <param name="exception"></param>
        /// <param name="msgCount"> </param>
        /// <returns></returns>
        public static string GetUserApiErrMessage(Exception exception, int msgCount = 1) {
            return exception != null ? string.Format("{0}: {1}\n{2}", msgCount, exception.Message, GetUserApiErrMessage(exception.InnerException, ++msgCount)) : string.Empty;
        }

        /// <summary>
        /// Mined-ed Error Message For System Save to Database For Simple Solving Problem
        /// </summary>
        /// <param name="exception"></param>
        /// <param name="msgCount"> </param>
        /// <returns></returns>
        public static string GetSystemErrMessage(Exception exception, int msgCount = 1) {
            return exception != null ? string.Format("{0}: {1}\n{2}", msgCount, (exception.Message + Environment.NewLine + exception.StackTrace + Environment.NewLine), GetSystemErrMessage(exception.InnerException, ++msgCount)) : string.Empty;
        }

        /// <summary>
        /// System Mailer sending Emails To service email with detected fail for analyze and
        /// corrections on the Way provide better services every time !!! This You can implement
        /// everywhere, !!! In Debug mode is written to Console, in Release will be sent email
        /// </summary>
        /// <param name="message"></param>
        public static void SendMail(string message) {
            try {
                if (!BackendServer.ServerRuntimeData.DebugMode) {
                    if (BackendServer.ServerSettings.SpecialCoreCheckerEmailSenderActive) {
                        MailMessage Email = new() { From = new MailAddress(BackendServer.ServerSettings.EmailerSMTPLoginUsername) };
                        Email.To.Add(BackendServer.ServerSettings.EmailerServiceEmailAddress);
                        Email.Subject = BackendServer.ServerSettings.SpecialServerServiceName;
                        Email.Body = message;
                        SmtpClient MailClient = new(BackendServer.ServerSettings.EmailerSMTPServerAddress, BackendServer.ServerSettings.EmailerSMTPPort) {
                            Credentials = new NetworkCredential(BackendServer.ServerSettings.EmailerSMTPLoginUsername, BackendServer.ServerSettings.EmailerSMTPLoginPassword),
                            EnableSsl = BackendServer.ServerSettings.EmailerSMTPSslIsEnabled,
                            Host = BackendServer.ServerSettings.EmailerSMTPServerAddress,
                            Port = BackendServer.ServerSettings.EmailerSMTPPort
                        };
                        MailClient.Send(Email);
                    }
            } else {
                Debug.WriteLine(message);
            }
        } catch (Exception) { }
        }

        /// <summary>
        /// Server Local Startup Configuration Its Running as First - Load from Congig.Json After DB
        /// connection Before Server Start Is This configuration Replaced By Data from DB And next
        /// Server Start. Its for situation - Bad Connection Server Start with Configuration from File
        /// </summary>
        public static void LoadSettings() {
            if (!CheckDirectory(BackendServer.ServerRuntimeData.Setting_folder)) {
                CreatePath(BackendServer.ServerRuntimeData.Setting_folder);
                CopyFile(Path.Combine(BackendServer.ServerRuntimeData.Startup_path, BackendServer.ServerRuntimeData.DataPath, BackendServer.ServerRuntimeData.ConfigFile), Path.Combine(BackendServer.ServerRuntimeData.Setting_folder, BackendServer.ServerRuntimeData.ConfigFile));
                CopyFile(Path.Combine(BackendServer.ServerRuntimeData.Startup_path, BackendServer.ServerRuntimeData.DataPath, "Log4Net.config"), Path.Combine(BackendServer.ServerRuntimeData.Setting_folder, "Log4Net.config"));
            }
        }

        /// <summary>
        /// Unicodes to ut f8.
        /// </summary>
        /// <param name="strFrom">The string from.</param>
        /// <returns></returns>
        public static string UnicodeToUTF8(string strFrom) {
            byte[] bytes = Encoding.Default.GetBytes(strFrom);
            return Encoding.UTF8.GetString(bytes);
        }

        /// <summary>
        /// Checks the directory.
        /// </summary>
        /// <param name="directory">The directory.</param>
        /// <returns></returns>
        public static bool CheckDirectory(string directory) {
            return Directory.Exists(directory);
        }

        /// <summary>
        /// Checks the file.
        /// </summary>
        /// <param name="file">The file.</param>
        /// <returns></returns>
        public static bool CheckFile(string file) {
            return File.Exists(file);
        }

        /// <summary>
        /// Copies the file.
        /// </summary>
        /// <param name="from">From.</param>
        /// <param name="to">  To.</param>
        /// <returns></returns>
        public static bool CopyFile(string from, string to) {
            try {
                File.Copy(from, to, true);
                return true;
            } catch { return false; }
        }

        /// <summary>
        /// Creates the path.
        /// </summary>
        /// <param name="path">The path.</param>
        /// <returns></returns>
        public static bool CreatePath(string path) {
            try {
                string[] pathParts = path.Split('\\');

                for (int i = 0; i < pathParts.Length; i++) {
                    if (i > 0)
                        pathParts[i] = Path.Combine(pathParts[i - 1], pathParts[i]);

                    if (!Directory.Exists(pathParts[i]))
                        Directory.CreateDirectory(pathParts[i]);
                }
                return true;
            } catch {
                return false;
            }
        }

        /// <summary>
        /// Files the detect encoding.
        /// </summary>
        /// <param name="FileName">Name of the file.</param>
        /// <returns></returns>
        public static Encoding FileDetectEncoding(string FileName) {
            string enc = "";
            if (File.Exists(FileName)) {
                FileStream filein = new(FileName, FileMode.Open, FileAccess.Read);
                if ((filein.CanSeek)) {
                    byte[] bom = new byte[5];
                    filein.Read(bom, 0, 4);
                    // EF BB BF = utf-8 FF FE = ucs-2le, ucs-4le, and ucs-16le FE FF = utf-16 and
                    // ucs-2 00 00 FE FF = ucs-4
                    if ((((bom[0] == 0xEF) && (bom[1] == 0xBB) && (bom[2] == 0xBF)) || ((bom[0] == 0xFF) && (bom[1] == 0xFE)) || ((bom[0] == 0xFE) && (bom[1] == 0xFF)) || ((bom[0] == 0x0) && (bom[1] == 0x0) && (bom[2] == 0xFE) && (bom[3] == 0xFF))))
                        enc = "Unicode";
                    else
                        enc = "ASCII";
                    // Position the file cursor back to the start of the file
                    filein.Seek(0, SeekOrigin.Begin);
                }
                filein.Close();
            }
            if (enc == "Unicode")
                return Encoding.UTF8;
            else
                return Encoding.Default;
        }

        /// <summary>
        /// Reads the file.
        /// </summary>
        /// <param name="fileName">Name of the file.</param>
        /// <returns></returns>
        public static byte[] ReadFile(string fileName) {
            FileStream f = new(fileName, FileMode.Open, FileAccess.Read);
            int size = (int)f.Length;
            byte[] data = new byte[size];
            size = f.Read(data, 0, size);
            f.Close();
            return data;
        }

        /// <summary>
        /// Gets the self signed certificate For API Security HTTPS.
        /// </summary>
        /// <param name="password">The password.</param>
        /// <returns></returns>
        public static X509Certificate2 GetSelfSignedCertificate(string password) {
            var commonName = BackendServer.ServerSettings.ConfigCertificateDomain;
            var rsaKeySize = 2048;
            var years = 10;
            var hashAlgorithm = HashAlgorithmName.SHA256;

            using (var rsa = RSA.Create(rsaKeySize)) {
                var request = new CertificateRequest($"cn={commonName}", rsa, hashAlgorithm, RSASignaturePadding.Pkcs1);

                SubjectAlternativeNameBuilder subjectAlternativeNameBuilder = new();
                subjectAlternativeNameBuilder.AddDnsName(Assembly.GetExecutingAssembly().GetName().FullName);

                X509BasicConstraintsExtension extension = new();

                request.CertificateExtensions.Add(
                  new X509KeyUsageExtension(X509KeyUsageFlags.DataEncipherment | X509KeyUsageFlags.KeyEncipherment | X509KeyUsageFlags.DigitalSignature | X509KeyUsageFlags.KeyCertSign, false)
                );

                request.CertificateExtensions.Add(
                  new X509EnhancedKeyUsageExtension(
                    new OidCollection { new Oid("1.3.6.1.5.5.7.3.1"), new Oid("1.3.6.1.5.5.7.3.2") }, false)
                );

                var notAfter = DateTimeOffset.Now.AddYears(years);
                var certificate = request.CreateSelfSigned(DateTimeOffset.Now.AddDays(-1), notAfter);
                certificate.FriendlyName = Assembly.GetExecutingAssembly().GetName().FullName;

                return new X509Certificate2(certificate.Export(X509ContentType.Pfx, password), password, X509KeyStorageFlags.Exportable);
            }
        }

        /// <summary>
        /// Set Imported Certificate from file on Server for Https 
        /// </summary>
        /// <returns></returns>
        static X509Certificate2 GetSelfSignedCertificateFromFile() {
            // to create an X509Certificate for testing you need to run MAKECERT.EXE and then PVK2PFX.EXE
            // http://www.digitallycreated.net/Blog/38/using-makecert-to-create-certificates-for-development

            var certificate = File.ReadAllBytes(@"C:\Users\caino\Dropbox\Documents\Cain\Programming\SmtpServer\SmtpServer.pfx");
            var password = BackendServer.ServerSettings.ConfigCertificatePassword;

            return new X509Certificate2(certificate, password);
        }

        /// <summary>
        /// Randoms the string.
        /// </summary>
        /// <param name="length">The length.</param>
        /// <returns></returns>
        public static string RandomString(int length) {
            Random random = new Random();
            const string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}