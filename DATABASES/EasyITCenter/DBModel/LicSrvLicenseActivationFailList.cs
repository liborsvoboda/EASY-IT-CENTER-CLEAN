using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("LicSrvLicenseActivationFailList")]
    [Index("IpAddress", Name = "IX_LicenseActivationFailList_IpAddress")]
    [Index("PartNumber", Name = "IX_LicenseActivationFailList_PartNumber")]
    public partial class LicSrvLicenseActivationFailList
    {
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
