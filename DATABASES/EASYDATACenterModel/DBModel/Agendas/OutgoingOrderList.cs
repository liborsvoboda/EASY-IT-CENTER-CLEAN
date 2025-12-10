namespace EASYDATACenter.DBModel {

    [Table("OutgoingOrderList")]
    [Index("DocumentNumber", Name = "IX_OutgoingOrderList", IsUnique = true)]
    [Index("Supplier", Name = "IX_OutgoingOrderList_Supplier")]
    public partial class OutgoingOrderList {

        public OutgoingOrderList() {
            OutgoingOrderItemLists = new HashSet<OutgoingOrderItemList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string DocumentNumber { get; set; } = null!;

        [StringLength(512)]
        [Unicode(false)]
        public string Customer { get; set; } = null!;

        [StringLength(512)]
        [Unicode(false)]
        public string Supplier { get; set; } = null!;

        public bool Storned { get; set; }
        public int TotalCurrencyId { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal TotalPriceWithVat { get; set; }

        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("TotalCurrencyId")]
        [InverseProperty("OutgoingOrderLists")]
        public virtual CurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("OutgoingOrderLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<OutgoingOrderItemList> OutgoingOrderItemLists { get; set; }
    }
}