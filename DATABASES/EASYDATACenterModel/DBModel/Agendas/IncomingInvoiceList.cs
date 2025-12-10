namespace EASYDATACenter.DBModel {

    [Table("IncomingInvoiceList")]
    [Index("DocumentNumber", Name = "IX_IncomingInvoiceList", IsUnique = true)]
    public partial class IncomingInvoiceList {

        public IncomingInvoiceList() {
            IncomingInvoiceItemLists = new HashSet<IncomingInvoiceItemList>();
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

        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("MaturityId")]
        [InverseProperty("IncomingInvoiceLists")]
        public virtual MaturityList Maturity { get; set; } = null!;

        [ForeignKey("PaymentMethodId")]
        [InverseProperty("IncomingInvoiceLists")]
        public virtual PaymentMethodList PaymentMethod { get; set; } = null!;

        [ForeignKey("PaymentStatusId")]
        [InverseProperty("IncomingInvoiceLists")]
        public virtual PaymentStatusList PaymentStatus { get; set; } = null!;

        [ForeignKey("TotalCurrencyId")]
        [InverseProperty("IncomingInvoiceLists")]
        public virtual CurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("IncomingInvoiceLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<IncomingInvoiceItemList> IncomingInvoiceItemLists { get; set; }
    }
}