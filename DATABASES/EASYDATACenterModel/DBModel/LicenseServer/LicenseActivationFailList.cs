namespace EASYDATACenter.DBModel {

    [Table("LicenseActivationFailList")]
    [Index("IpAddress", Name = "IX_LicenseActivationFailList_IpAddress")]
    [Index("PartNumber", Name = "IX_LicenseActivationFailList_PartNumber")]
    public partial class LicenseActivationFailList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string IpAddress { get; set; } = null!;

        [StringLength(50)]
        [Unicode(false)]
        public string? UnlockCode { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string? PartNumber { get; set; }

        public DateTime TimeStamp { get; set; }
    }
}