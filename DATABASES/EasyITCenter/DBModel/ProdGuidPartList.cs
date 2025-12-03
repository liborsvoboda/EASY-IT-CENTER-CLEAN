using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("ProdGuidPartList")]
    [Index("WorkPlace", "Number", Name = "IX_ProdGuidPartList", IsUnique = true)]
    public partial class ProdGuidPartList
    {
        [Key]
        public int Id { get; set; }
        public int WorkPlace { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Number { get; set; } = null!;
        [StringLength(100)]
        [Unicode(false)]
        public string? Name { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ProdGuidPartLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
