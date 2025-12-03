using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("DocSrvDocumentationList")]
    [Index("Name", "DocumentationGroupId", "AutoVersion", "TimeStamp", Name = "IX_DocumentationList", IsUnique = true)]
    public partial class DocSrvDocumentationList
    {
        [Key]
        public int Id { get; set; }
        public int DocumentationGroupId { get; set; }
        [StringLength(150)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        public int Sequence { get; set; }
        [Unicode(false)]
        public string? Description { get; set; }
        [Unicode(false)]
        public string MdContent { get; set; } = null!;
        [Unicode(false)]
        public string HtmlContent { get; set; } = null!;
        public int UserId { get; set; }
        [Required]
        public bool Active { get; set; }
        public int AutoVersion { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("DocumentationGroupId")]
        [InverseProperty("DocSrvDocumentationLists")]
        public virtual DocSrvDocumentationGroupList DocumentationGroup { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("DocSrvDocumentationLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
