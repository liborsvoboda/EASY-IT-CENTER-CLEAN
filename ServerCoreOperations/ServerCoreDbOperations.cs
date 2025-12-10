namespace EASYDATACenter.ServerCoreOperations {

    /// <summary>
    /// All Server Definitions of Database Operation method
    /// </summary>
    internal class ServerCoreDbOperations {

        #region Definition for Startup And Reload Tables

        /// <summary>
        /// Method for All Server Defined Table for Local Using As Off line AutoUpdated Tables
        /// </summary>
        /// <param name="onlyThis"></param>
        public static void LoadStaticDbDials(ServerLocalDbDials? onlyThis = null) {
            if (BackendServer.ServerSettings.SpecialUseDbLocalAutoupdatedDials) {
                using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) {
                    foreach (ServerLocalDbDials dbTable in (ServerLocalDbDials[])Enum.GetValues(typeof(ServerLocalDbDials))) {
                        switch (onlyThis != null ? onlyThis.ToString() : dbTable.ToString()) {
                            case "LanguageList":
                                List<LanguageList>? dataLL = new EASYDATACenterContext().LanguageLists.ToList();
                                int indexLL = BackendServer.ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == dataLL.GetType());
                                if (indexLL >= 0) BackendServer.ServerRuntimeData.LocalDBTableList[indexLL] = dataLL; else BackendServer.ServerRuntimeData.LocalDBTableList.Add(dataLL);
                                break;

                            default: break;
                        }
                        if (onlyThis != null) break;
                    }
                }
            }
        }

        #endregion Definition for Startup And Reload Tables

        #region Public definitions for standard using

        /// <summary>
        /// Trigger User Login History
        /// </summary>
        /// <param name="ipAddress"></param>
        /// <param name="userId">   </param>
        /// <param name="userName"> </param>
        public static async void WriteVisit(string ipAddress, int userId, string userName) {
            // Save new visit
            if (!string.IsNullOrWhiteSpace(userName)) {
                LoginHistoryList record = new() { IpAddress = ipAddress, UserId = userId, UserName = userName, Timestamp = DateTimeOffset.Now.DateTime };
                EntityEntry<LoginHistoryList>? result = new EASYDATACenterContext().LoginHistoryLists.Add(record);
                await result.Context.SaveChangesAsync();
            }
        }

        /// <summary>
        /// Default Operation for Call Translation
        /// </summary>
        /// <param name="word">    </param>
        /// <param name="language"></param>
        /// <returns></returns>
        public static string DBTranslate(string word, string language = "cz") {
            return BackendServer.ServerSettings.SpecialUseDbLocalAutoupdatedDials ? DBTranslateOffline(word, language) : DBTranslateOnline(word, language);
        }

        #endregion Public definitions for standard using

        #region Private or On-line/Off-line Definitions

        /// <summary>
        /// Database LanuageList for Off-line Using Definitions
        /// </summary>
        /// <param name="word">    </param>
        /// <param name="language"></param>
        /// <returns></returns>
        private static string DBTranslateOffline(string word, string language = "cz") {
            string result;
            int index = BackendServer.ServerRuntimeData.LocalDBTableList.FindIndex(a => a.GetType() == new List<LanguageList>().GetType());

            //Check Exist AND Insert New
            try {
                if (!((List<LanguageList>)BackendServer.ServerRuntimeData.LocalDBTableList[index]).Where(a => a.SystemName.ToLower() == word.ToLower()).Any()) {
                    result = word;
                    LanguageList newWord = new() { SystemName = word, DescriptionCz = "", DescriptionEn = "", UserId = 1 };
                    new EASYDATACenterContext().LanguageLists.Add(newWord).Context.SaveChanges();
                    LoadStaticDbDials(ServerLocalDbDials.LanguageList);
                    return result;
                }
            } catch { }

            //Return From List
            if (language == "cz") result = ((List<LanguageList>)BackendServer.ServerRuntimeData.LocalDBTableList[index]).Where(a => a.SystemName.ToLower() == word.ToLower()).Select(a => a.DescriptionCz).FirstOrDefault();
            else result = ((List<LanguageList>)BackendServer.ServerRuntimeData.LocalDBTableList[index]).Where(a => a.SystemName.ToLower() == word.ToLower()).Select(a => a.DescriptionEn).FirstOrDefault();

            if (string.IsNullOrWhiteSpace(result)) { result = word; }
            return result;
        }

        /// <summary>
        /// Database LanuageList for On-line Using Definitions
        /// </summary>
        /// <param name="word">    </param>
        /// <param name="language"></param>
        /// <returns></returns>
        private static string DBTranslateOnline(string word, string language = "cz") {
            string result;

            //Check Exist AND Insert New
            try {
                if (!new EASYDATACenterContext().LanguageLists.Where(a => a.SystemName.ToLower() == word.ToLower()).Any()) {
                    result = word;
                    LanguageList newWord = new() { SystemName = word, DescriptionCz = "", DescriptionEn = "", UserId = 1 };
                    new EASYDATACenterContext().LanguageLists.Add(newWord).Context.SaveChanges();
                    return result;
                }
            } catch { }

            //Return From List
            if (language == "cz") result = new EASYDATACenterContext().LanguageLists.Where(a => a.SystemName.ToLower() == word.ToLower()).Select(a => a.DescriptionCz).FirstOrDefault();
            else result = new EASYDATACenterContext().LanguageLists.Where(a => a.SystemName.ToLower() == word.ToLower()).Select(a => a.DescriptionEn).FirstOrDefault();

            if (string.IsNullOrWhiteSpace(result)) { result = word; }
            return result;
        }

        #endregion Private or On-line/Off-line Definitions
    }
}