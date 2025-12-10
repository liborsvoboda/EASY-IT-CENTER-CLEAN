namespace EASYDATACenter.DBModel {

    [Table("ItemList")]
    [Index("PartNumber", Name = "IX_ItemList", IsUnique = true)]
    public partial class ItemList {

        public ItemList() {
            LicenseAlgorithmLists = new HashSet<LicenseAlgorithmList>();
            UsedLicenseLists = new HashSet<UsedLicenseList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string PartNumber { get; set; } = null!;

        [StringLength(150)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        [StringLength(10)]
        [Unicode(false)]
        public string Unit { get; set; } = null!;

        [Column(TypeName = "numeric(10, 2)")]
        public decimal Price { get; set; }

        public int VatId { get; set; }
        public int CurrencyId { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("CurrencyId")]
        [InverseProperty("ItemLists")]
        public virtual CurrencyList Currency { get; set; } = null!;

        public virtual UnitList UnitNavigation { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("ItemLists")]
        public virtual UserList User { get; set; } = null!;

        [ForeignKey("VatId")]
        [InverseProperty("ItemLists")]
        public virtual VatList Vat { get; set; } = null!;

        [InverseProperty("Item")]
        public virtual ICollection<LicenseAlgorithmList> LicenseAlgorithmLists { get; set; }

        [InverseProperty("Item")]
        public virtual ICollection<UsedLicenseList> UsedLicenseLists { get; set; }
    }
}