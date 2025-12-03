using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SolutionTaskList")]
    [Index("InheritedTargetType", Name = "IX_SolutionTaskList")]
    [Index("InheritedTargetType", "InheritedStatusType", Name = "IX_SolutionTaskList_1")]
    [Index("InheritedStatusType", Name = "IX_SolutionTaskList_2")]
    public partial class SolutionTaskList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedTargetType { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedStatusType { get; set; } = null!;
        [Unicode(false)]
        public string Message { get; set; } = null!;
        [Unicode(false)]
        public string Documentation { get; set; } = null!;
        [StringLength(150)]
        [Unicode(false)]
        public string? ImageName { get; set; }
        public byte[]? Image { get; set; }
        [StringLength(150)]
        [Unicode(false)]
        public string? AttachmentName { get; set; }
        public byte[]? Attachment { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedStatusTypeNavigation { get; set; } = null!;
        public virtual SolutionMixedEnumList InheritedTargetTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("SolutionTaskLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
