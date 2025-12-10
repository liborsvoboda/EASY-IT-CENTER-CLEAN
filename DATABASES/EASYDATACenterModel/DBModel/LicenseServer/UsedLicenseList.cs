namespace EASYDATACenter.DBModel {

    [Table("UsedLicenseList")]
    public partial class UsedLicenseList {

        [Key]
        public int Id { get; set; }

        [StringLength(30)]
        [Unicode(false)]
        public string AlgorithmName { get; set; } = null!;

        [StringLength(50)]
        [Unicode(false)]
        public string PartNumber { get; set; } = null!;

        [StringLength(50)]
        [Unicode(false)]
        public string UnlockCode { get; set; } = null!;

        public int AddressId { get; set; }
        public int ItemId { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string License { get; set; } = null!;

        public DateTime ActivateDate { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string IpAddress { get; set; } = null!;

        [ForeignKey("AddressId")]
        [InverseProperty("UsedLicenseLists")]
        public virtual AddressList Address { get; set; } = null!;

        [ForeignKey("ItemId")]
        [InverseProperty("UsedLicenseLists")]
        public virtual ItemList Item { get; set; } = null!;
    }
}