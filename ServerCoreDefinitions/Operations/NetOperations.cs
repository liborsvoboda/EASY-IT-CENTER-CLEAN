using DocumentFormat.OpenXml.Vml;
using SoapHttpClient;
using SoapHttpClient.Enums;
using System.Data;
using System.Text.RegularExpressions;
using System.Xml.Linq;


namespace EasyITCenter.ServerCoreStructure {


    /// <summary>
    /// Network Operations Library
    /// Work With Files/Services From Url etc.
    /// </summary>
    public static class NetOperations {

      /// <summary>
      /// used Nuget: SoapHttpClient from https://github.com/pmorelli92/SoapHttpClient
      /// nsUrl = ns definition URL, wsdlUrl = WSDL URL, operation = Operation Name from WSDL Definition
      /// Example: GetSOAPData("http://webservice.riro.rinkai/","https://www.rinkai.eu/riro/WebService10Interface?wsdl","GetVersion10")
      /// </summary>
      /// <returns></returns>
        public static string GetSoapDataFromURL(string nsUrl,string wsdlUrl,string operationName) {
            string result = null;
            try {
                SoapClient soapClient = new SoapClient();
                XNamespace ns = XNamespace.Get(nsUrl);
                HttpResponseMessage response = soapClient.Post(new Uri(wsdlUrl), SoapVersion.Soap11, new XElement(ns.GetName(operationName)));
                result = new StreamReader(response.Content.ReadAsStreamAsync().Result, Encoding.UTF8, true).ReadToEnd();

                return result;
            } catch (Exception Ex) {
                result = DataOperations.GetErrMsg(Ex);
                CoreOperations.SendEmail(new SendMailRequest() { Content = result });
                return result;
            }

        }

    }
}