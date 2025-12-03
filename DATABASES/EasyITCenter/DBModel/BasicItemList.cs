using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("BasicItemList")]
    [Index("PartNumber", Name = "IX_ItemList", IsUnique = true)]
    public partial class BasicItemList
    {
        public BasicItemList()
        {
            LicSrvLicenseAlgorithmLists = new HashSet<LicSrvLicenseAlgorithmList>();
            LicSrvUsedLicenseLists = new HashSet<LicSrvUsedLicenseList>();
        }

        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string PartNumber { get; set; } = null!;
        [StringLength(150)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        [StringLength(10)]
        [Unicode(false)]
        public string Unit { get; set; } = null!;
        [Column(TypeName = "numeric(10, 2)")]
        public decimal Price { get; set; }
        public int VatId { get; set; }
        public int CurrencyId { get; set; }
        public int UserId { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("CurrencyId")]
        [InverseProperty("BasicItemLists")]
        public virtual BasicCurrencyList Currency { get; set; } = null!;
        public virtual BasicUnitList UnitNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("BasicItemLists")]
        public virtual SolutionUserList User { get; set; } = null!;
        [ForeignKey("VatId")]
        [InverseProperty("BasicItemLists")]
        public virtual BasicVatList Vat { get; set; } = null!;
        [InverseProperty("Item")]
        public virtual ICollection<LicSrvLicenseAlgorithmList> LicSrvLicenseAlgorithmLists { get; set; }
        [InverseProperty("Item")]
        public virtual ICollection<LicSrvUsedLicenseList> LicSrvUsedLicenseLists { get; set; }
    }
}
