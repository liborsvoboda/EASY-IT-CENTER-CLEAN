namespace EASYDATACenter.DBModel {

    [Table("UnitList")]
    [Index("Name", Name = "IX_UnitList", IsUnique = true)]
    public partial class UnitList {

        public UnitList() {
            CreditNoteItemLists = new HashSet<CreditNoteItemList>();
            IncomingInvoiceItemLists = new HashSet<IncomingInvoiceItemList>();
            IncomingOrderItemLists = new HashSet<IncomingOrderItemList>();
            ItemLists = new HashSet<ItemList>();
            OutgoingInvoiceItemLists = new HashSet<OutgoingInvoiceItemList>();
            OutgoingOrderItemLists = new HashSet<OutgoingOrderItemList>();
            ReceiptItemLists = new HashSet<ReceiptItemList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(10)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
        public bool Default { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("UnitLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<CreditNoteItemList> CreditNoteItemLists { get; set; }
        public virtual ICollection<IncomingInvoiceItemList> IncomingInvoiceItemLists { get; set; }
        public virtual ICollection<IncomingOrderItemList> IncomingOrderItemLists { get; set; }
        public virtual ICollection<ItemList> ItemLists { get; set; }
        public virtual ICollection<OutgoingInvoiceItemList> OutgoingInvoiceItemLists { get; set; }
        public virtual ICollection<OutgoingOrderItemList> OutgoingOrderItemLists { get; set; }
        public virtual ICollection<ReceiptItemList> ReceiptItemLists { get; set; }
    }
}