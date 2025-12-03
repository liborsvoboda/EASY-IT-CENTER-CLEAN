using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SolutionUserRoleList")]
    [Index("SystemName", Name = "IX_UserRoleList", IsUnique = true)]
    public partial class SolutionUserRoleList
    {
        public SolutionUserRoleList()
        {
            SolutionUserLists = new HashSet<SolutionUserList>();
            TemplateLists = new HashSet<TemplateList>();
        }

        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string SystemName { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public int? UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SolutionUserRoleLists")]
        public virtual SolutionUserList? User { get; set; }
        [InverseProperty("Role")]
        public virtual ICollection<SolutionUserList> SolutionUserLists { get; set; }
        [InverseProperty("Group")]
        public virtual ICollection<TemplateList> TemplateLists { get; set; }
    }
}
