using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("TemplateList")]
    [Index("Name", Name = "IX_TemplateList", IsUnique = true)]
    public partial class TemplateList
    {
        [Key]
        public int Id { get; set; }
        public int GroupId { get; set; }
        public int Sequence { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public int UserId { get; set; }
        public bool Default { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("GroupId")]
        [InverseProperty("TemplateLists")]
        public virtual SolutionUserRoleList Group { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("TemplateLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
