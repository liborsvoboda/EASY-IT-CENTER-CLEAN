namespace EASYDATACenter.DBModel {

    [Table("ReceiptList")]
    [Index("DocumentNumber", Name = "IX_ReceiptList", IsUnique = true)]
    public partial class ReceiptList {

        public ReceiptList() {
            OutgoingInvoiceLists = new HashSet<OutgoingInvoiceList>();
            ReceiptItemLists = new HashSet<ReceiptItemList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string DocumentNumber { get; set; } = null!;

        [StringLength(20)]
        [Unicode(false)]
        public string? InvoiceNumber { get; set; }

        [StringLength(512)]
        [Unicode(false)]
        public string Supplier { get; set; } = null!;

        [StringLength(512)]
        [Unicode(false)]
        public string Customer { get; set; } = null!;

        public DateTime IssueDate { get; set; }
        public bool Storned { get; set; }
        public int TotalCurrencyId { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal TotalPriceWithVat { get; set; }

        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual OutgoingInvoiceList? InvoiceNumberNavigation { get; set; }

        [ForeignKey("TotalCurrencyId")]
        [InverseProperty("ReceiptLists")]
        public virtual CurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("ReceiptLists")]
        public virtual UserList User { get; set; } = null!;

        [InverseProperty("Receipt")]
        public virtual ICollection<OutgoingInvoiceList> OutgoingInvoiceLists { get; set; }

        public virtual ICollection<ReceiptItemList> ReceiptItemLists { get; set; }
    }
}