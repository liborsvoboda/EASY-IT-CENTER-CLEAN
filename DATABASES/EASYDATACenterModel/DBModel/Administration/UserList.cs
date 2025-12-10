namespace EASYDATACenter.DBModel {

    [Table("UserList")]
    [Index("UserName", Name = "IX_UserList", IsUnique = true)]
    public partial class UserList {

        public UserList() {
            AccessRoleLists = new HashSet<AccessRoleList>();
            AddressLists = new HashSet<AddressList>();
            AttachmentLists = new HashSet<AttachmentList>();
            BranchLists = new HashSet<BranchList>();
            Calendars = new HashSet<Calendar>();
            CreditNoteItemLists = new HashSet<CreditNoteItemList>();
            CreditNoteLists = new HashSet<CreditNoteList>();
            CurrencyLists = new HashSet<CurrencyList>();
            DocumentAdviceLists = new HashSet<DocumentAdviceList>();
            DocumentTypeLists = new HashSet<DocumentTypeList>();
            ExchangeRateLists = new HashSet<ExchangeRateList>();
            IgnoredExceptionLists = new HashSet<IgnoredExceptionList>();
            ImageGalleryLists = new HashSet<ImageGalleryList>();
            IncomingInvoiceItemLists = new HashSet<IncomingInvoiceItemList>();
            IncomingInvoiceLists = new HashSet<IncomingInvoiceList>();
            IncomingOrderItemLists = new HashSet<IncomingOrderItemList>();
            IncomingOrderLists = new HashSet<IncomingOrderList>();
            ItemLists = new HashSet<ItemList>();
            LanguageLists = new HashSet<LanguageList>();
            LicenseAlgorithmLists = new HashSet<LicenseAlgorithmList>();
            MaturityLists = new HashSet<MaturityList>();
            MottoLists = new HashSet<MottoList>();
            NotesLists = new HashSet<NotesList>();
            OfferItemLists = new HashSet<OfferItemList>();
            OfferLists = new HashSet<OfferList>();
            OutgoingInvoiceItemLists = new HashSet<OutgoingInvoiceItemList>();
            OutgoingInvoiceLists = new HashSet<OutgoingInvoiceList>();
            OutgoingOrderItemLists = new HashSet<OutgoingOrderItemList>();
            OutgoingOrderLists = new HashSet<OutgoingOrderList>();
            ParameterLists = new HashSet<ParameterList>();
            PaymentMethodLists = new HashSet<PaymentMethodList>();
            PaymentStatusLists = new HashSet<PaymentStatusList>();
            ProdGuidGroupLists = new HashSet<ProdGuidGroupList>();
            ProdGuidOperationLists = new HashSet<ProdGuidOperationList>();
            ProdGuidPartLists = new HashSet<ProdGuidPartList>();
            ProdGuidPersonLists = new HashSet<ProdGuidPersonList>();
            ProdGuidWorkLists = new HashSet<ProdGuidWorkList>();
            ReceiptItemLists = new HashSet<ReceiptItemList>();
            ReceiptLists = new HashSet<ReceiptList>();
            ReportLists = new HashSet<ReportList>();
            SystemFailLists = new HashSet<SystemFailList>();
            TemplateLists = new HashSet<TemplateList>();
            UnitLists = new HashSet<UnitList>();
            VatLists = new HashSet<VatList>();
            WarehouseLists = new HashSet<WarehouseList>();
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

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public bool Active { get; set; }
        public DateTime Timestamp { get; set; }

        [StringLength(2048)]
        [Unicode(false)]
        public string? Token { get; set; }

        public DateTime? Expiration { get; set; }
        public byte[]? Photo { get; set; }

        [StringLength(100)]
        [Unicode(false)]
        public string? MimeType { get; set; }

        [StringLength(500)]
        [Unicode(false)]
        public string? PhotoPath { get; set; }

        [ForeignKey("RoleId")]
        [InverseProperty("UserLists")]
        public virtual UserRoleList Role { get; set; } = null!;

        [InverseProperty("User")]
        public virtual ICollection<AccessRoleList> AccessRoleLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<AddressList> AddressLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<AttachmentList> AttachmentLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<BranchList> BranchLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<Calendar> Calendars { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<CreditNoteItemList> CreditNoteItemLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<CreditNoteList> CreditNoteLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<CurrencyList> CurrencyLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<DocumentAdviceList> DocumentAdviceLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<DocumentTypeList> DocumentTypeLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<ExchangeRateList> ExchangeRateLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<IgnoredExceptionList> IgnoredExceptionLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<ImageGalleryList> ImageGalleryLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<IncomingInvoiceItemList> IncomingInvoiceItemLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<IncomingInvoiceList> IncomingInvoiceLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<IncomingOrderItemList> IncomingOrderItemLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<IncomingOrderList> IncomingOrderLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<ItemList> ItemLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<LanguageList> LanguageLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<LicenseAlgorithmList> LicenseAlgorithmLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<MaturityList> MaturityLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<MottoList> MottoLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<NotesList> NotesLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<OfferItemList> OfferItemLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<OfferList> OfferLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<OutgoingInvoiceItemList> OutgoingInvoiceItemLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<OutgoingInvoiceList> OutgoingInvoiceLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<OutgoingOrderItemList> OutgoingOrderItemLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<OutgoingOrderList> OutgoingOrderLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<ParameterList> ParameterLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<PaymentMethodList> PaymentMethodLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<PaymentStatusList> PaymentStatusLists { get; set; }

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
        public virtual ICollection<ReceiptItemList> ReceiptItemLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<ReceiptList> ReceiptLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<ReportList> ReportLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<SystemFailList> SystemFailLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<TemplateList> TemplateLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<UnitList> UnitLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<VatList> VatLists { get; set; }

        [InverseProperty("User")]
        public virtual ICollection<WarehouseList> WarehouseLists { get; set; }
    }
}