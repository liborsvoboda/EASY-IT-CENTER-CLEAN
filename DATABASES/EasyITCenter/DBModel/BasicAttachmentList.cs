using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("BasicAttachmentList")]
    [Index("ParentId", "InheritedParentRecordType", Name = "IX_AttachmentList")]
    [Index("ParentId", "FileName", Name = "UX_AttachmentList", IsUnique = true)]
    public partial class BasicAttachmentList
    {
        [Key]
        public int Id { get; set; }
        public int ParentId { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedParentRecordType { get; set; } = null!;
        [StringLength(150)]
        [Unicode(false)]
        public string FileName { get; set; } = null!;
        public byte[] Attachment { get; set; } = null!;
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedParentRecordTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("BasicAttachmentLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
