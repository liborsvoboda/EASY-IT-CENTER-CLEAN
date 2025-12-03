using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SolutionMixedEnumList")]
    [Index("ItemsGroup", "Name", Name = "IX_GlobalMixedEnumList", IsUnique = true)]
    [Index("ItemsGroup", Name = "IX_SolutionMixedEnumList")]
    [Index("Name", Name = "IX_SolutionMixedEnumList_1", IsUnique = true)]
    public partial class SolutionMixedEnumList
    {
        public SolutionMixedEnumList()
        {
            BasicAttachmentLists = new HashSet<BasicAttachmentList>();
            DocSrvDocTemplateLists = new HashSet<DocSrvDocTemplateList>();
            PortalApiTableColumnDataLists = new HashSet<PortalApiTableColumnDataList>();
            PortalApiTableLists = new HashSet<PortalApiTableList>();
            ServerApiSecurityLists = new HashSet<ServerApiSecurityList>();
            ServerHealthCheckTaskLists = new HashSet<ServerHealthCheckTaskList>();
            ServerModuleAndServiceListInheritedLayoutTypeNavigations = new HashSet<ServerModuleAndServiceList>();
            ServerModuleAndServiceListInheritedPageTypeNavigations = new HashSet<ServerModuleAndServiceList>();
            ServerParameterListInheritedDataTypeNavigations = new HashSet<ServerParameterList>();
            ServerParameterListInheritedServerParamTypeNavigations = new HashSet<ServerParameterList>();
            ServerStartUpScriptListInheritedOsTypeNavigations = new HashSet<ServerStartUpScriptList>();
            ServerStartUpScriptListInheritedProcessTypeNavigations = new HashSet<ServerStartUpScriptList>();
            ServerToolPanelDefinitionLists = new HashSet<ServerToolPanelDefinitionList>();
            SolutionCodeLibraryLists = new HashSet<SolutionCodeLibraryList>();
            SolutionFailLists = new HashSet<SolutionFailList>();
            SolutionOperationListInheritedApiResultTypeNavigations = new HashSet<SolutionOperationList>();
            SolutionOperationListInheritedOperationTypeNavigations = new HashSet<SolutionOperationList>();
            SolutionSchedulerListInheritedGroupNameNavigations = new HashSet<SolutionSchedulerList>();
            SolutionSchedulerListInheritedIntervalTypeNavigations = new HashSet<SolutionSchedulerList>();
            SolutionTaskListInheritedStatusTypeNavigations = new HashSet<SolutionTaskList>();
            SolutionTaskListInheritedTargetTypeNavigations = new HashSet<SolutionTaskList>();
            SystemCustomPageListInheritedFormTypeNavigations = new HashSet<SystemCustomPageList>();
            SystemCustomPageListInheritedSystemApiCallTypeNavigations = new HashSet<SystemCustomPageList>();
            SystemDocumentAdviceLists = new HashSet<SystemDocumentAdviceList>();
            SystemMenuLists = new HashSet<SystemMenuList>();
            SystemModuleLists = new HashSet<SystemModuleList>();
            UserAccessKeyLists = new HashSet<UserAccessKeyList>();
            UserParameterLists = new HashSet<UserParameterList>();
            WebCoreFileLists = new HashSet<WebCoreFileList>();
            WebGlobalPageBlockLists = new HashSet<WebGlobalPageBlockList>();
        }

        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string ItemsGroup { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public int UserId { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SolutionMixedEnumLists")]
        public virtual SolutionUserList User { get; set; } = null!;
        public virtual ICollection<BasicAttachmentList> BasicAttachmentLists { get; set; }
        public virtual ICollection<DocSrvDocTemplateList> DocSrvDocTemplateLists { get; set; }
        public virtual ICollection<PortalApiTableColumnDataList> PortalApiTableColumnDataLists { get; set; }
        public virtual ICollection<PortalApiTableList> PortalApiTableLists { get; set; }
        public virtual ICollection<ServerApiSecurityList> ServerApiSecurityLists { get; set; }
        public virtual ICollection<ServerHealthCheckTaskList> ServerHealthCheckTaskLists { get; set; }
        public virtual ICollection<ServerModuleAndServiceList> ServerModuleAndServiceListInheritedLayoutTypeNavigations { get; set; }
        public virtual ICollection<ServerModuleAndServiceList> ServerModuleAndServiceListInheritedPageTypeNavigations { get; set; }
        public virtual ICollection<ServerParameterList> ServerParameterListInheritedDataTypeNavigations { get; set; }
        public virtual ICollection<ServerParameterList> ServerParameterListInheritedServerParamTypeNavigations { get; set; }
        public virtual ICollection<ServerStartUpScriptList> ServerStartUpScriptListInheritedOsTypeNavigations { get; set; }
        public virtual ICollection<ServerStartUpScriptList> ServerStartUpScriptListInheritedProcessTypeNavigations { get; set; }
        public virtual ICollection<ServerToolPanelDefinitionList> ServerToolPanelDefinitionLists { get; set; }
        public virtual ICollection<SolutionCodeLibraryList> SolutionCodeLibraryLists { get; set; }
        public virtual ICollection<SolutionFailList> SolutionFailLists { get; set; }
        public virtual ICollection<SolutionOperationList> SolutionOperationListInheritedApiResultTypeNavigations { get; set; }
        public virtual ICollection<SolutionOperationList> SolutionOperationListInheritedOperationTypeNavigations { get; set; }
        public virtual ICollection<SolutionSchedulerList> SolutionSchedulerListInheritedGroupNameNavigations { get; set; }
        public virtual ICollection<SolutionSchedulerList> SolutionSchedulerListInheritedIntervalTypeNavigations { get; set; }
        public virtual ICollection<SolutionTaskList> SolutionTaskListInheritedStatusTypeNavigations { get; set; }
        public virtual ICollection<SolutionTaskList> SolutionTaskListInheritedTargetTypeNavigations { get; set; }
        public virtual ICollection<SystemCustomPageList> SystemCustomPageListInheritedFormTypeNavigations { get; set; }
        public virtual ICollection<SystemCustomPageList> SystemCustomPageListInheritedSystemApiCallTypeNavigations { get; set; }
        public virtual ICollection<SystemDocumentAdviceList> SystemDocumentAdviceLists { get; set; }
        public virtual ICollection<SystemMenuList> SystemMenuLists { get; set; }
        public virtual ICollection<SystemModuleList> SystemModuleLists { get; set; }
        public virtual ICollection<UserAccessKeyList> UserAccessKeyLists { get; set; }
        public virtual ICollection<UserParameterList> UserParameterLists { get; set; }
        public virtual ICollection<WebCoreFileList> WebCoreFileLists { get; set; }
        public virtual ICollection<WebGlobalPageBlockList> WebGlobalPageBlockLists { get; set; }
    }
}
