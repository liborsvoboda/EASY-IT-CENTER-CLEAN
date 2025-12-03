namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// Server and Hosted Services Runtime Statuses
    /// </summary>
    public enum ServerStatusTypes {
        Running,
        Stopping,
        Stopped,
        InStandbyMode
    }


    /// <summary>
    /// Request Types For Selected correct Layout 
    /// </summary>
    public enum RouteLayoutTypes {
        CentralLayout,
        DevPortalLayout,
        EasyDataLayout,
        EmptyLayout,
        GlobalLayout,
        MetroLayout,
        MultiLangLayout,
        
        RazorTemplateLayout,
        ServerPortalLayout,
        SystemPortalLayout,
        SystemModulesLayout,

        StaticFileLayout,

        ViewerMarkDownFileLayout,
        ViewerReportFileLayout,

    }


    /// <summary>
    /// Routing Command statuses for Control 
    /// Routing and Layout Logic
    /// </summary>
    public enum RoutingActionTypes {
        Next,
        Return,
        None
    }


    /// <summary>
    /// Supported Generating File Types Over Generators
    /// Index Only Support All File Types You can 
    /// </summary>
    public enum SupportGenFileTypes {
        Md,
        Html,
        Docx
    }


    /// <summary>
    /// Special Functions: Definition of Selected tables for Optimal Using to Data nature Its saves
    /// traffic, increases availability and for Example implemented Language is in Develop Auto Fill
    /// Table when is First Using Its can be used for more Dials
    /// </summary>
    public enum ServerLocalDbDialsTypes {
        ServerApiSecurityLists,
        SystemTranslationLists,
        ServerModuleAndServiceLists,
        ServerParameterLists,
        ServerStaticOrMvcDefPathLists,
        WebCoreFileLists,
        WebGlobalPageBlockLists
        
    }
}