using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SystemDocumentAdviceList")]
    [Index("BranchId", "InheritedDocumentType", Name = "IX_DocumentAdviceList")]
    public partial class SystemDocumentAdviceList
    {
        [Key]
        public int Id { get; set; }
        public int BranchId { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedDocumentType { get; set; } = null!;
        [StringLength(10)]
        [Unicode(false)]
        public string Prefix { get; set; } = null!;
        [StringLength(10)]
        [Unicode(false)]
        public string Number { get; set; } = null!;
        [Column(TypeName = "date")]
        public DateTime StartDate { get; set; }
        [Column(TypeName = "date")]
        public DateTime EndDate { get; set; }
        public int UserId { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("BranchId")]
        [InverseProperty("SystemDocumentAdviceLists")]
        public virtual BusinessBranchList Branch { get; set; } = null!;
        public virtual SolutionMixedEnumList InheritedDocumentTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("SystemDocumentAdviceLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
