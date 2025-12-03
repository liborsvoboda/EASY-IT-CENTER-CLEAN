using DocumentFormat.OpenXml.Vml;
using System.Data;
using System.Text.RegularExpressions;
//using System.Web.Helpers;
using System.Xml.Linq;


namespace EasyITCenter.ServerCoreStructure {


    /// <summary>
    /// Data Formating and similar Operations Library
    /// </summary>
    public static class DataOperations {

        /// <summary>
        /// Convert String to Generic Enum
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="value"></param>
        /// <returns></returns>
        public static T GenericToEnum<T>(string value) {
            Type enumType = typeof(T);
            if (!enumType.IsEnum) {
                CoreOperations.SendEmail(new SendMailRequest() { Content = "DataOperation GenericToEnum Method line 22: T must be an Enumeration type." + enumType.ToString() });
            } return (T)Enum.Parse(typeof(T), value, true);
        }


        /// <summary>
        /// Generic Convert Data Table To DataList
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dt">The dt.</param>
        /// <returns></returns>
        public static List<T> GenericConvertTableToClassList<T>(DataTable dt) {
            List<T> result = new List<T>();
            try {
                foreach (DataRow dr in dt.Rows) {
                    var typeObject = Activator.CreateInstance<T>();
                    foreach (var fieldInfo in typeof(T).GetProperties()) {
                        foreach (DataColumn dc in dt.Columns) {
                            if (fieldInfo.Name == dc.ColumnName) { fieldInfo.SetValue(typeObject, dr[dc.ColumnName].GetType().FullName == typeof(System.DBNull).FullName ? null : dr[dc.ColumnName]); break; }
                        }
                    }; result.Add(typeObject);
                };
            } 
            catch (Exception ex) { }
            return result;
        }


        /// <summary>
        ///  Convert Data Table To DataList of Type
        /// </summary>
        /// <param name="dt"></param>
        /// <param name="classType"></param>
        /// <returns></returns>
        public static List<object> ConvertTableToClassListByType(DataTable dt, Type classType) {
            List<object> result = new List<object>();
            try {
                foreach (DataRow dr in dt.Rows) {
                    var typeObject = Activator.CreateInstance(classType);
                    foreach (var fieldInfo in classType.GetProperties()) {
                        foreach (DataColumn dc in dt.Columns) {
                            if (fieldInfo.Name == dc.ColumnName) { fieldInfo.SetValue(typeObject, dr[dc.ColumnName]); break; }
                        }
                    }; result.Add(typeObject);
                };
            } catch { }
            return result;
        }

        /// <summary>
        /// Convert Dictionary string,string To Json Suportted Values Bool, Int, String
        /// </summary>
        /// <param name="keyList"></param>
        /// <returns></returns>
        public static string ConvertDictionaryListToJson(Dictionary<string, string> keyList) {
            bool tempBool; int tempInt = 0;
            Dictionary<string, object> exportJsonList = new Dictionary<string, object>();
            keyList.ToList().ForEach(key => {
                string valueType = bool.TryParse(key.Value, out tempBool) ? "bool" : int.TryParse(key.Value, out tempInt) ? "int" : "string";
                exportJsonList.Add(key.Key, (valueType == "bool" ? (object)tempBool : valueType == "int" ? (object)tempInt : (object)key.Value));
            });
            return JsonSerializer.Serialize(exportJsonList);
        }

        /// <summary>
        /// !!! SYSTEM RULE: ClassList with joining fields names must be nullable before API
        /// operation !!! ClassName must contain: "Extended" WORD Extension field in Class - Dataset
        /// must be set as null before Database Operation else is joining to other dataset is valid
        /// and can be blocked by fail key Its Check Extended in ClassName - SYSTEM RULE
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static void NullSetInExtensionFields<T>(ref T dataset) {
            if (dataset.GetType().Name.ToLower().Contains("extended")) {
                foreach (PropertyInfo prop in dataset.GetType().GetProperties()) { 
                    if (prop.DeclaringType.Name.Contains("Extended")) prop.SetValue(dataset, null); }
            }
        }

        /// <summary>
        /// Object To Json Serializer
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public static string ObjectToJson(this object obj) {
            return JsonSerializer.Serialize(obj);
        }

        /// <summary>
        /// Create Object Type By Type Name
        /// Its need For Generic APi For Full Database Support
        /// </summary>
        /// <param name="className"></param>
        /// <returns></returns>
        public static object? CreateObjectTypeByTypeName(string className) {
            var assembly = Assembly.GetExecutingAssembly();
            var type = assembly.GetTypes().First(t => t.Name == className);
            return Activator.CreateInstance(type);
        }

        
        /// <summary>
        /// Change First Character of String
        /// </summary>
        /// <param name="str">The string.</param>
        /// <returns></returns>
        public static string? FirstCharToLowerCase(this string? str) {
            if (!string.IsNullOrEmpty(str) && char.IsUpper(str[0]))
                return str.Length == 1 ? char.ToLower(str[0]).ToString() : char.ToLower(str[0]) + str[1..];

            return str;
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
        /// Mined-ed Error Message For Answer in API Error Response with detailed info about problem
        /// </summary>
        /// <param name="exception"></param>
        /// <param name="msgCount"> </param>
        /// <returns></returns>
        public static string GetUserApiErrMessage(Exception exception, int msgCount = 1) {
            return exception != null ? string.Format("{0}: {1}\n{2}", msgCount, 
                exception.TargetSite?.ReflectedType?.FullName + Environment.NewLine + exception.Message, 
                GetUserApiErrMessage(exception.InnerException, ++msgCount)) : string.Empty;
        }

        /// <summary>
        /// Mined-ed Error Message For System Save to Database For Simple Solving Problem
        /// </summary>
        /// <param name="exception"></param>
        /// <param name="msgCount"> </param>
        /// <returns></returns>
        public static string GetErrMsg(Exception exception, int msgCount = 1) {
            return exception != null ? string.Format("{0}: {1}\n{2}", msgCount, (exception.TargetSite?.ReflectedType?.FullName + Environment.NewLine
                + exception.Message + Environment.NewLine + exception.StackTrace + Environment.NewLine), 
                GetErrMsg(exception.InnerException, ++msgCount)) : string.Empty;
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

        /// <summary>
        /// Separate ByteArray from 64 encode file For inserted file types
        /// </summary>
        /// <param name="strContent">Content of the string.</param>
        /// <returns></returns>
        public static byte[] GetByteArrayFrom64Encode(string strContent) {
            try {
                var base64Data = Regex.Match(strContent, @"data:image/(?<type>.+?),(?<data>.+)").Groups["data"].Value;
                base64Data = base64Data.Length > 0 ? base64Data : Regex.Match(strContent, @"data:text/(?<type>.+?),(?<data>.+)").Groups["data"].Value;
                base64Data = base64Data.Length > 0 ? base64Data : Regex.Match(strContent, @"data:video/(?<type>.+?),(?<data>.+)").Groups["data"].Value;
                base64Data = base64Data.Length > 0 ? base64Data : Regex.Match(strContent, @"data:application/(?<type>.+?),(?<data>.+)").Groups["data"].Value;
                return Convert.FromBase64String(base64Data);
            } catch { }
            return new byte[] { };
        }

        /// <summary>
        /// Determines whether [is valid email] [the specified email].
        /// </summary>
        /// <param name="email">The email.</param>
        /// <returns><c>true</c> if [is valid email] [the specified email]; otherwise, <c>false</c>.</returns>
        public static bool IsValidEmail(string email) {
            var trimmedEmail = email.Trim();
            if (trimmedEmail.EndsWith(".")) { return false; }
            try {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == trimmedEmail;
            } catch { return false; }
        }

        /// <summary>
        /// Removes the whitespace from the String.
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns></returns>
        public static string RemoveWhitespace(this string input) {
            return new string(input.ToCharArray()
                .Where(c => !Char.IsWhiteSpace(c))
                .ToArray());
        }

        /// <summary>
        /// MarkDown Global Resolve End Spaces Characters On Insert/Update API CALS of Managing
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns></returns>
        public static string MarkDownLineEndSpacesResolve(string input) {
            List<string> inputWithSpaces = new();
            input.Split(new[] {'\n' }).ToList().ForEach((line) => { line = line.TrimEnd() + "    "; inputWithSpaces.Add(line); });
            input = string.Join("\n", inputWithSpaces.ToArray());
            return input;
        }

        /// <summary>
        /// Convert String to UTF8
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string StringToUTF8(this string text) {
            return Encoding.UTF8.GetString(Encoding.Default.GetBytes(text));
        }

        /// <summary>
        /// Convert UTF8 to UNICODE
        /// </summary>
        /// <param name="utf8String"></param>
        /// <returns></returns>
        public static string Utf8toUnicode(this string utf8String) {
            byte[] utf8Bytes = new byte[utf8String.Length];
            for (int i = 0; i < utf8String.Length; ++i) { utf8Bytes[i] = (byte)utf8String[i]; }
            return Encoding.UTF8.GetString(utf8Bytes, 0, utf8Bytes.Length);
        }

        /// <summary>
        /// Remove Diactritics
        /// </summary>
        /// <param name="Text"></param>
        /// <returns></returns>
        public static string RemoveDiacritism(string Text) {
            string stringFormD = Text.Normalize(NormalizationForm.FormD);
            StringBuilder retVal = new StringBuilder();
            for (int index = 0; index < stringFormD.Length; index++) {
                if (System.Globalization.CharUnicodeInfo.GetUnicodeCategory(stringFormD[index]) != System.Globalization.UnicodeCategory.NonSpacingMark)
                    retVal.Append(stringFormD[index]);
            }
            return retVal.ToString().Normalize(NormalizationForm.FormC);
        }

        /// <summary>
        /// Convert Generic Tabla To Standard Table For Use Standard System Fields
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="data"></param>
        /// <returns></returns>
        public static GenericTable ConvertGenericClassToStandard<T>(T data) {
            return JsonSerializer.Deserialize<GenericTable>(JsonSerializer.Serialize(data));
        }


        /// <summary>
        /// Converts the data table to xml.
        /// </summary>
        /// <param name="dataTable">The data table.</param>
        /// <param name="tablename">The tablename.</param>
        /// <returns>A XElement.</returns>
        public static XElement ConvertDataTableToXml(DataTable dataTable, string tablename) {
            var xmlTable = new XElement(tablename, dataTable.Rows.Cast<DataRow>()
       .GroupBy(row => (string)row[0]).Select(g =>
           new XElement(dataTable.Columns[0].ColumnName,
               new XElement("label", g.Key),
               g.GroupBy(row => (string)row[1]).Select(g1 =>
                   new XElement(dataTable.Columns[1].ColumnName, new XElement("label", g1.Key),
                       new XElement(dataTable.Columns[2].ColumnName, g1.Select(row => new XElement("label", (string)row[2])))
                   )
               )
            )));
            return xmlTable;
        }


        /// <summary>
        /// Convert String To Enum 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="value"></param>
        /// <returns></returns>
        public static T ParseEnum<T>(string value) {
            return (T)Enum.Parse(typeof(T), value, true);
        }


        /// <summary>
        /// Get HandleBar Partial Variable
        /// </summary>
        /// <param name="template"></param>
        /// <returns></returns>
        public static string GetHandleBarPartialVariable(string template) {
            try {
                return template.Split("}}")[0].Split("{{")[1].Trim();
            } catch { return template.Trim(); }

        }
    }
}