namespace EASYDATACenter.DBModel {

    [Table("CreditNoteList")]
    [Index("DocumentNumber", Name = "IX_CreditNoteList", IsUnique = true)]
    public partial class CreditNoteList {

        public CreditNoteList() {
            CreditNoteItemLists = new HashSet<CreditNoteItemList>();
            OutgoingInvoiceLists = new HashSet<OutgoingInvoiceList>();
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

        [StringLength(20)]
        [Unicode(false)]
        public string? InvoiceNumber { get; set; }

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
        [InverseProperty("CreditNoteLists")]
        public virtual CurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("CreditNoteLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<CreditNoteItemList> CreditNoteItemLists { get; set; }

        [InverseProperty("CreditNote")]
        public virtual ICollection<OutgoingInvoiceList> OutgoingInvoiceLists { get; set; }
    }
}