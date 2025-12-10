namespace EASYDATACenter.DBModel {

    [Table("OfferItemList")]
    [Index("DocumentNumber", Name = "IX_OfferItemList")]
    public partial class OfferItemList {

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string DocumentNumber { get; set; } = null!;

        [StringLength(50)]
        [Unicode(false)]
        public string? PartNumber { get; set; }

        [StringLength(150)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [StringLength(10)]
        [Unicode(false)]
        public string Unit { get; set; } = null!;

        [Column(TypeName = "numeric(10, 2)")]
        public decimal PcsPrice { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal Count { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal TotalPrice { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal Vat { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal TotalPriceWithVat { get; set; }

        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual OfferList DocumentNumberNavigation { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("OfferItemLists")]
        public virtual UserList User { get; set; } = null!;
    }
}