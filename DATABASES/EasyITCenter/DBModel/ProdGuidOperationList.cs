using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("ProdGuidOperationList")]
    [Index("WorkPlace", "OperationNumber", Name = "IX_ProdGuidOperationList", IsUnique = true)]
    public partial class ProdGuidOperationList
    {
        [Key]
        public int Id { get; set; }
        public int WorkPlace { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string PartNumber { get; set; } = null!;
        public int OperationNumber { get; set; }
        [StringLength(100)]
        [Unicode(false)]
        public string Note { get; set; } = null!;
        public int PcsPerHour { get; set; }
        [Column(TypeName = "numeric(10, 4)")]
        public decimal KcPerKs { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ProdGuidOperationLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
