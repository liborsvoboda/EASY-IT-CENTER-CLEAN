using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SolutionOperationList")]
    [Index("Name", Name = "IX_SolutionOperationList", IsUnique = true)]
    public partial class SolutionOperationList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedOperationType { get; set; } = null!;
        [StringLength(255)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [Unicode(false)]
        public string InputData { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedApiResultType { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public int UserId { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedApiResultTypeNavigation { get; set; } = null!;
        public virtual SolutionMixedEnumList InheritedOperationTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("SolutionOperationLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
