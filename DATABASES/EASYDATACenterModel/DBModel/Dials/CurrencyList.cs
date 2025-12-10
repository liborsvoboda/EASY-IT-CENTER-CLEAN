namespace EASYDATACenter.DBModel {

    [Table("CurrencyList")]
    public partial class CurrencyList {

        public CurrencyList() {
            CreditNoteLists = new HashSet<CreditNoteList>();
            ExchangeRateLists = new HashSet<ExchangeRateList>();
            IncomingInvoiceLists = new HashSet<IncomingInvoiceList>();
            IncomingOrderLists = new HashSet<IncomingOrderList>();
            ItemLists = new HashSet<ItemList>();
            OfferLists = new HashSet<OfferList>();
            OutgoingInvoiceLists = new HashSet<OutgoingInvoiceList>();
            OutgoingOrderLists = new HashSet<OutgoingOrderList>();
            ReceiptLists = new HashSet<ReceiptList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(5)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "numeric(10, 2)")]
        public decimal ExchangeRate { get; set; }

        public bool Fixed { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
        public bool Default { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("CurrencyLists")]
        public virtual UserList User { get; set; } = null!;

        [InverseProperty("TotalCurrency")]
        public virtual ICollection<CreditNoteList> CreditNoteLists { get; set; }

        [InverseProperty("Currency")]
        public virtual ICollection<ExchangeRateList> ExchangeRateLists { get; set; }

        [InverseProperty("TotalCurrency")]
        public virtual ICollection<IncomingInvoiceList> IncomingInvoiceLists { get; set; }

        [InverseProperty("TotalCurrency")]
        public virtual ICollection<IncomingOrderList> IncomingOrderLists { get; set; }

        [InverseProperty("Currency")]
        public virtual ICollection<ItemList> ItemLists { get; set; }

        [InverseProperty("TotalCurrency")]
        public virtual ICollection<OfferList> OfferLists { get; set; }

        [InverseProperty("TotalCurrency")]
        public virtual ICollection<OutgoingInvoiceList> OutgoingInvoiceLists { get; set; }

        [InverseProperty("TotalCurrency")]
        public virtual ICollection<OutgoingOrderList> OutgoingOrderLists { get; set; }

        [InverseProperty("TotalCurrency")]
        public virtual ICollection<ReceiptList> ReceiptLists { get; set; }
    }
}