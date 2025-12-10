namespace EASYDATACenter.DBModel {

    [Table("OfferList")]
    [Index("DocumentNumber", Name = "IX_OfferList", IsUnique = true)]
    [Index("Customer", Name = "IX_OfferList_Customer")]
    public partial class OfferList {

        public OfferList() {
            OfferItemLists = new HashSet<OfferItemList>();
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

        public int OfferValidity { get; set; }
        public bool Storned { get; set; }
        public int TotalCurrencyId { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal TotalPriceWithVat { get; set; }

        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("TotalCurrencyId")]
        [InverseProperty("OfferLists")]
        public virtual CurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("OfferLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<OfferItemList> OfferItemLists { get; set; }
    }
}