using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("ServerModuleAndServiceList")]
    [Index("Name", Name = "IX_ServerModuleAndServiceList", IsUnique = true)]
    [Index("UrlSubPath", Name = "IX_ServerModuleAndServiceList_2", IsUnique = true)]
    public partial class ServerModuleAndServiceList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedPageType { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedLayoutType { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        [StringLength(100)]
        [Unicode(false)]
        public string? UrlSubPath { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string? OptionalConfiguration { get; set; }
        [StringLength(500)]
        [Unicode(false)]
        public string? AllowedRoles { get; set; }
        public bool RestrictedAccess { get; set; }
        [StringLength(100)]
        [Unicode(false)]
        public string? RedirectPathOnError { get; set; }
        [Unicode(false)]
        public string? CustomHtmlContent { get; set; }
        public bool IsLoginModule { get; set; }
        public bool PathSetAllowed { get; set; }
        public bool RestrictionSetAllowed { get; set; }
        public bool HtmlSetAllowed { get; set; }
        public bool RedirectSetAllowed { get; set; }
        [Required]
        public bool Active { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedLayoutTypeNavigation { get; set; } = null!;
        public virtual SolutionMixedEnumList InheritedPageTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("ServerModuleAndServiceLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
