using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("WebGlobalPageBlockList")]
    [Index("Name", "InheritedPagePartType", Name = "IX_WebGlobalBodyBlockList", IsUnique = true)]
    public partial class WebGlobalPageBlockList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedPagePartType { get; set; } = null!;
        public int Sequence { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public bool RewriteLowerLevel { get; set; }
        [Unicode(false)]
        public string? GuestHtmlContent { get; set; }
        [Unicode(false)]
        public string? UserHtmlContent { get; set; }
        [Unicode(false)]
        public string? AdminHtmlContent { get; set; }
        [Unicode(false)]
        public string? ProviderHtmlContent { get; set; }
        public bool Active { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedPagePartTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("WebGlobalPageBlockLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
