namespace EASYDATACenter.DBModel {

    [Table("IncomingOrderList")]
    [Index("DocumentNumber", Name = "IX_IncomingOrderList", IsUnique = true)]
    [Index("Supplier", Name = "IX_IncomingOrderList_Supplier")]
    public partial class IncomingOrderList {

        public IncomingOrderList() {
            IncomingOrderItemLists = new HashSet<IncomingOrderItemList>();
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

        public bool Storned { get; set; }
        public int TotalCurrencyId { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string? CustomerOrderNumber { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal TotalPriceWithVat { get; set; }

        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("TotalCurrencyId")]
        [InverseProperty("IncomingOrderLists")]
        public virtual CurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("IncomingOrderLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<IncomingOrderItemList> IncomingOrderItemLists { get; set; }
    }
}