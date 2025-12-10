using System.Data;

/*
* Server Core Helpers
* System Extensions for Correct Core working
* DataTypes Conversion Support, etc.
*/

namespace EASYDATACenter.ServerCoreHelpers {

    /// <summary>
    /// System Helpers for EASY working
    /// </summary>
    public static class SystemHelpers {

        public static List<T> BindList<T>(DataTable dt) {
            var fields = typeof(T).GetProperties();
            List<T> lst = new List<T>();
            foreach (DataRow dr in dt.Rows) {
                var ob = Activator.CreateInstance<T>();
                foreach (var fieldInfo in fields) {
                    foreach (DataColumn dc in dt.Columns) {
                        if (fieldInfo.Name == dc.ColumnName) {
                            object value = dr[dc.ColumnName];
                            fieldInfo.SetValue(ob, value);
                            break;
                        }
                    }
                }
                lst.Add(ob);
            }
            return lst;
        }




    }

}