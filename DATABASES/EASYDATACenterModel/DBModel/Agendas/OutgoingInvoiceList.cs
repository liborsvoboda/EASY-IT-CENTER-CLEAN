namespace EASYDATACenter.DBModel {

    [Table("OutgoingInvoiceList")]
    [Index("DocumentNumber", Name = "IX_OutgoingInvoiceList", IsUnique = true)]
    [Index("Customer", Name = "IX_OutgoingInvoiceList_Customer")]
    public partial class OutgoingInvoiceList {

        public OutgoingInvoiceList() {
            CreditNoteLists = new HashSet<CreditNoteList>();
            OutgoingInvoiceItemLists = new HashSet<OutgoingInvoiceItemList>();
            ReceiptLists = new HashSet<ReceiptList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string DocumentNumber { get; set; } = null!;

        [StringLength(512)]
        [Unicode(false)]
        public string Supplier { get; set; } = null!;

        [StringLength(512)]
        [Unicode(false)]
        public string Customer { get; set; } = null!;

        public DateTime IssueDate { get; set; }
        public DateTime TaxDate { get; set; }
        public DateTime MaturityDate { get; set; }
        public int PaymentMethodId { get; set; }
        public int MaturityId { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string? OrderNumber { get; set; }

        public bool Storned { get; set; }
        public int PaymentStatusId { get; set; }
        public int TotalCurrencyId { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal TotalPriceWithVat { get; set; }

        public int? ReceiptId { get; set; }
        public int? CreditNoteId { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("CreditNoteId")]
        [InverseProperty("OutgoingInvoiceLists")]
        public virtual CreditNoteList? CreditNote { get; set; }

        [ForeignKey("MaturityId")]
        [InverseProperty("OutgoingInvoiceLists")]
        public virtual MaturityList Maturity { get; set; } = null!;

        [ForeignKey("PaymentMethodId")]
        [InverseProperty("OutgoingInvoiceLists")]
        public virtual PaymentMethodList PaymentMethod { get; set; } = null!;

        [ForeignKey("PaymentStatusId")]
        [InverseProperty("OutgoingInvoiceLists")]
        public virtual PaymentStatusList PaymentStatus { get; set; } = null!;

        [ForeignKey("ReceiptId")]
        [InverseProperty("OutgoingInvoiceLists")]
        public virtual ReceiptList? Receipt { get; set; }

        [ForeignKey("TotalCurrencyId")]
        [InverseProperty("OutgoingInvoiceLists")]
        public virtual CurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("OutgoingInvoiceLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<CreditNoteList> CreditNoteLists { get; set; }
        public virtual ICollection<OutgoingInvoiceItemList> OutgoingInvoiceItemLists { get; set; }
        public virtual ICollection<ReceiptList> ReceiptLists { get; set; }
    }
}