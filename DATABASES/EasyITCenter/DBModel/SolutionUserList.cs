using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SolutionUserList")]
    [Index("UserName", Name = "IX_UserList", IsUnique = true)]
    public partial class SolutionUserList
    {
        public SolutionUserList()
        {
            BasicAttachmentLists = new HashSet<BasicAttachmentList>();
            BasicCalendarLists = new HashSet<BasicCalendarList>();
            BasicCurrencyLists = new HashSet<BasicCurrencyList>();
            BasicImageGalleryLists = new HashSet<BasicImageGalleryList>();
            BasicItemLists = new HashSet<BasicItemList>();
            BasicUnitLists = new HashSet<BasicUnitList>();
            BasicVatLists = new HashSet<BasicVatList>();
            BusinessAddressLists = new HashSet<BusinessAddressList>();
            BusinessBranchLists = new HashSet<BusinessBranchList>();
            BusinessCreditNoteLists = new HashSet<BusinessCreditNoteList>();
            BusinessCreditNoteSupportLists = new HashSet<BusinessCreditNoteSupportList>();
            BusinessExchangeRateLists = new HashSet<BusinessExchangeRateList>();
            BusinessIncomingInvoiceLists = new HashSet<BusinessIncomingInvoiceList>();
            BusinessIncomingInvoiceSupportLists = new HashSet<BusinessIncomingInvoiceSupportList>();
            BusinessIncomingOrderLists = new HashSet<BusinessIncomingOrderList>();
            BusinessIncomingOrderSupportLists = new HashSet<BusinessIncomingOrderSupportList>();
            BusinessMaturityLists = new HashSet<BusinessMaturityList>();
            BusinessNotesLists = new HashSet<BusinessNotesList>();
            BusinessOfferLists = new HashSet<BusinessOfferList>();
            BusinessOfferSupportLists = new HashSet<BusinessOfferSupportList>();
            BusinessOutgoingInvoiceLists = new HashSet<BusinessOutgoingInvoiceList>();
            BusinessOutgoingInvoiceSupportLists = new HashSet<BusinessOutgoingInvoiceSupportList>();
            BusinessOutgoingOrderLists = new HashSet<BusinessOutgoingOrderList>();
            BusinessOutgoingOrderSupportLists = new HashSet<BusinessOutgoingOrderSupportList>();
            BusinessPaymentMethodLists = new HashSet<BusinessPaymentMethodList>();
            BusinessPaymentStatusLists = new HashSet<BusinessPaymentStatusList>();
            BusinessReceiptLists = new HashSet<BusinessReceiptList>();
            BusinessReceiptSupportLists = new HashSet<BusinessReceiptSupportList>();
            BusinessWarehouseLists = new HashSet<BusinessWarehouseList>();
            DocSrvDocTemplateLists = new HashSet<DocSrvDocTemplateList>();
            DocSrvDocumentationGroupLists = new HashSet<DocSrvDocumentationGroupList>();
            DocSrvDocumentationLists = new HashSet<DocSrvDocumentationList>();
            LicSrvLicenseAlgorithmLists = new HashSet<LicSrvLicenseAlgorithmList>();
            PortalApiTableColumnDataLists = new HashSet<PortalApiTableColumnDataList>();
            PortalApiTableLists = new HashSet<PortalApiTableList>();
            ProdGuidGroupLists = new HashSet<ProdGuidGroupList>();
            ProdGuidOperationLists = new HashSet<ProdGuidOperationList>();
            ProdGuidPartLists = new HashSet<ProdGuidPartList>();
            ProdGuidPersonLists = new HashSet<ProdGuidPersonList>();
            ProdGuidWorkLists = new HashSet<ProdGuidWorkList>();
            ServerApiSecurityLists = new HashSet<ServerApiSecurityList>();
            ServerCorsDefAllowedOriginLists = new HashSet<ServerCorsDefAllowedOriginList>();
            ServerHealthCheckTaskLists = new HashSet<ServerHealthCheckTaskList>();
            ServerLiveDataMonitorLists = new HashSet<ServerLiveDataMonitorList>();
            ServerModuleAndServiceLists = new HashSet<ServerModuleAndServiceList>();
            ServerParameterLists = new HashSet<ServerParameterList>();
            ServerStartUpScriptLists = new HashSet<ServerStartUpScriptList>();
            ServerStaticOrMvcDefPathLists = new HashSet<ServerStaticOrMvcDefPathList>();
            ServerToolPanelDefinitionLists = new HashSet<ServerToolPanelDefinitionList>();
            ServerToolTypeLists = new HashSet<ServerToolTypeList>();
            SolutionCodeLibraryLists = new HashSet<SolutionCodeLibraryList>();
            SolutionEmailTemplateLists = new HashSet<SolutionEmailTemplateList>();
            SolutionFailLists = new HashSet<SolutionFailList>();
            SolutionLanguageLists = new HashSet<SolutionLanguageList>();
            SolutionMessageModuleListFromUsers = new HashSet<SolutionMessageModuleList>();
            SolutionMessageModuleListToUsers = new HashSet<SolutionMessageModuleList>();
            SolutionMessageTypeLists = new HashSet<SolutionMessageTypeList>();
            SolutionMixedEnumLists = new HashSet<SolutionMixedEnumList>();
            SolutionMottoLists = new HashSet<SolutionMottoList>();
            SolutionOperationLists = new HashSet<SolutionOperationList>();
            SolutionSchedulerLists = new HashSet<SolutionSchedulerList>();
            SolutionTaskLists = new HashSet<SolutionTaskList>();
            SolutionUserRoleLists = new HashSet<SolutionUserRoleList>();
            SystemCustomPageLists = new HashSet<SystemCustomPageList>();
            SystemDocumentAdviceLists = new HashSet<SystemDocumentAdviceList>();
            SystemGroupMenuLists = new HashSet<SystemGroupMenuList>();
            SystemIgnoredExceptionLists = new HashSet<SystemIgnoredExceptionList>();
            SystemMenuLists = new HashSet<SystemMenuList>();
            SystemModuleLists = new HashSet<SystemModuleList>();
            SystemReportLists = new HashSet<SystemReportList>();
            SystemSvgIconLists = new HashSet<SystemSvgIconList>();
            SystemTranslationLists = new HashSet<SystemTranslationList>();
            TemplateLists = new HashSet<TemplateList>();
            UserAccessKeyLists = new HashSet<UserAccessKeyList>();
            UserImageGalleryLists = new HashSet<UserImageGalleryList>();
            UserParameterLists = new HashSet<UserParameterList>();
            WebBannedIpAddressLists = new HashSet<WebBannedIpAddressList>();
            WebCoreFileLists = new HashSet<WebCoreFileList>();
            WebDeveloperNewsLists = new HashSet<WebDeveloperNewsList>();
            WebDocumentationLists = new HashSet<WebDocumentationList>();
            WebGlobalPageBlockLists = new HashSet<WebGlobalPageBlockList>();
            WebGroupMenuLists = new HashSet<WebGroupMenuList>();
            WebMenuLists = new HashSet<WebMenuList>();
            WebSettingLists = new HashSet<WebSettingList>();
            WebUserSettingLists = new HashSet<WebUserSettingList>();
        }

        [Key]
        public int Id { get; set; }
        public int RoleId { get; set; }
        [StringLength(150)]
        [Unicode(false)]
        public string UserName { get; set; } = null!;
        [StringLength(2048)]
        [Unicode(false)]
        public string Password { get; set; } = null!;
        [StringLength(150)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [StringLength(150)]
        [Unicode(false)]
        public string SurName { get; set; } = null!;
        [StringLength(255)]
        [Unicode(false)]
        public string Email { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
        [Unicode(false)]
        public string? AccessToken { get; set; }
        public DateTime? Expiration { get; set; }
        public byte[]? Photo { get; set; }
        [StringLength(100)]
        [Unicode(false)]
        public string? PhotoMimeType { get; set; }
        public bool EmailConfirmed { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string? Phone { get; set; }
        public bool PhoneConfirmed { get; set; }

        [ForeignKey("RoleId")]
        [InverseProperty("SolutionUserLists")]
        public virtual SolutionUserRoleList Role { get; set; } = null!;
        [InverseProperty("User")]
        public virtual ICollection<BasicAttachmentList> BasicAttachmentLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BasicCalendarList> BasicCalendarLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BasicCurrencyList> BasicCurrencyLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BasicImageGalleryList> BasicImageGalleryLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BasicItemList> BasicItemLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BasicUnitList> BasicUnitLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BasicVatList> BasicVatLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessAddressList> BusinessAddressLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessBranchList> BusinessBranchLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessCreditNoteList> BusinessCreditNoteLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessCreditNoteSupportList> BusinessCreditNoteSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessExchangeRateList> BusinessExchangeRateLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessIncomingInvoiceList> BusinessIncomingInvoiceLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessIncomingInvoiceSupportList> BusinessIncomingInvoiceSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessIncomingOrderList> BusinessIncomingOrderLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessIncomingOrderSupportList> BusinessIncomingOrderSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessMaturityList> BusinessMaturityLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessNotesList> BusinessNotesLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessOfferList> BusinessOfferLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessOfferSupportList> BusinessOfferSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessOutgoingInvoiceList> BusinessOutgoingInvoiceLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessOutgoingInvoiceSupportList> BusinessOutgoingInvoiceSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessOutgoingOrderList> BusinessOutgoingOrderLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessOutgoingOrderSupportList> BusinessOutgoingOrderSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessPaymentMethodList> BusinessPaymentMethodLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessPaymentStatusList> BusinessPaymentStatusLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessReceiptList> BusinessReceiptLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessReceiptSupportList> BusinessReceiptSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessWarehouseList> BusinessWarehouseLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<DocSrvDocTemplateList> DocSrvDocTemplateLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<DocSrvDocumentationGroupList> DocSrvDocumentationGroupLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<DocSrvDocumentationList> DocSrvDocumentationLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<LicSrvLicenseAlgorithmList> LicSrvLicenseAlgorithmLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<PortalApiTableColumnDataList> PortalApiTableColumnDataLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<PortalApiTableList> PortalApiTableLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ProdGuidGroupList> ProdGuidGroupLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ProdGuidOperationList> ProdGuidOperationLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ProdGuidPartList> ProdGuidPartLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ProdGuidPersonList> ProdGuidPersonLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ProdGuidWorkList> ProdGuidWorkLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerApiSecurityList> ServerApiSecurityLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerCorsDefAllowedOriginList> ServerCorsDefAllowedOriginLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerHealthCheckTaskList> ServerHealthCheckTaskLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerLiveDataMonitorList> ServerLiveDataMonitorLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerModuleAndServiceList> ServerModuleAndServiceLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerParameterList> ServerParameterLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerStartUpScriptList> ServerStartUpScriptLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerStaticOrMvcDefPathList> ServerStaticOrMvcDefPathLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerToolPanelDefinitionList> ServerToolPanelDefinitionLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ServerToolTypeList> ServerToolTypeLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionCodeLibraryList> SolutionCodeLibraryLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionEmailTemplateList> SolutionEmailTemplateLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionFailList> SolutionFailLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionLanguageList> SolutionLanguageLists { get; set; }
        [InverseProperty("FromUser")]
        public virtual ICollection<SolutionMessageModuleList> SolutionMessageModuleListFromUsers { get; set; }
        [InverseProperty("ToUser")]
        public virtual ICollection<SolutionMessageModuleList> SolutionMessageModuleListToUsers { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionMessageTypeList> SolutionMessageTypeLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionMixedEnumList> SolutionMixedEnumLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionMottoList> SolutionMottoLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionOperationList> SolutionOperationLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionSchedulerList> SolutionSchedulerLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionTaskList> SolutionTaskLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionUserRoleList> SolutionUserRoleLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemCustomPageList> SystemCustomPageLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemDocumentAdviceList> SystemDocumentAdviceLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemGroupMenuList> SystemGroupMenuLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemIgnoredExceptionList> SystemIgnoredExceptionLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemMenuList> SystemMenuLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemModuleList> SystemModuleLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemReportList> SystemReportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemSvgIconList> SystemSvgIconLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemTranslationList> SystemTranslationLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<TemplateList> TemplateLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<UserAccessKeyList> UserAccessKeyLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<UserImageGalleryList> UserImageGalleryLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<UserParameterList> UserParameterLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebBannedIpAddressList> WebBannedIpAddressLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebCoreFileList> WebCoreFileLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebDeveloperNewsList> WebDeveloperNewsLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebDocumentationList> WebDocumentationLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebGlobalPageBlockList> WebGlobalPageBlockLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebGroupMenuList> WebGroupMenuLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebMenuList> WebMenuLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebSettingList> WebSettingLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WebUserSettingList> WebUserSettingLists { get; set; }
    }
}
