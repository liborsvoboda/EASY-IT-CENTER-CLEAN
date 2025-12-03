using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("LicSrvUsedLicenseList")]
    public partial class LicSrvUsedLicenseList
    {
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
        public DateTime TimeStamp { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string IpAddress { get; set; } = null!;

        [ForeignKey("AddressId")]
        [InverseProperty("LicSrvUsedLicenseLists")]
        public virtual BusinessAddressList Address { get; set; } = null!;
        [ForeignKey("ItemId")]
        [InverseProperty("LicSrvUsedLicenseLists")]
        public virtual BasicItemList Item { get; set; } = null!;
    }
}
