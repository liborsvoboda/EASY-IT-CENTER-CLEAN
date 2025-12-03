using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("LicSrvLicenseAlgorithmList")]
    [Index("Name", Name = "IX_LicSrvLicenseAlgorithmList", IsUnique = true)]
    public partial class LicSrvLicenseAlgorithmList
    {
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
        [Unicode(false)]
        public string? Description { get; set; }
        public bool LimitActive { get; set; }
        public int? ActivationLimit { get; set; }
        public int UsedCount { get; set; }
        public bool Active { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("AddressId")]
        [InverseProperty("LicSrvLicenseAlgorithmLists")]
        public virtual BusinessAddressList Address { get; set; } = null!;
        [ForeignKey("ItemId")]
        [InverseProperty("LicSrvLicenseAlgorithmLists")]
        public virtual BasicItemList Item { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("LicSrvLicenseAlgorithmLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
