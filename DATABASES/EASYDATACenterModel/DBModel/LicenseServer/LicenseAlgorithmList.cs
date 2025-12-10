namespace EASYDATACenter.DBModel {

    [Table("LicenseAlgorithmList")]
    [Index("Name", Name = "IX_LicenseAlgorithmList", IsUnique = true)]
    public partial class LicenseAlgorithmList {

        [Key]
        public int Id { get; set; }

        public int AddressId { get; set; }
        public int ItemId { get; set; }

        [StringLength(30)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "date")]
        public DateTime? ValidFrom { get; set; }

        [Column(TypeName = "date")]
        public DateTime? ValidTo { get; set; }

        [StringLength(2000)]
        [Unicode(false)]
        public string Algorithm { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public bool LimitActive { get; set; }
        public int? ActivationLimit { get; set; }
        public int UsedCount { get; set; }
        public bool Active { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("AddressId")]
        [InverseProperty("LicenseAlgorithmLists")]
        public virtual AddressList Address { get; set; } = null!;

        [ForeignKey("ItemId")]
        [InverseProperty("LicenseAlgorithmLists")]
        public virtual ItemList Item { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("LicenseAlgorithmLists")]
        public virtual UserList User { get; set; } = null!;
    }
}