using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("ServerApiSecurityList")]
    [Index("Name", Name = "IX_ServerApiSecurityList", IsUnique = true)]
    [Index("UrlSubPath", Name = "IX_ServerApiSecurityList_2", IsUnique = true)]
    public partial class ServerApiSecurityList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedApiType { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        [StringLength(100)]
        [Unicode(false)]
        public string? UrlSubPath { get; set; }
        [StringLength(500)]
        [Unicode(false)]
        public string? WriteAllowedRoles { get; set; }
        [StringLength(500)]
        [Unicode(false)]
        public string? ReadAllowedRoles { get; set; }
        public bool WriteRestrictedAccess { get; set; }
        public bool ReadRestrictedAccess { get; set; }
        [StringLength(100)]
        [Unicode(false)]
        public string? RedirectPathOnError { get; set; }
        [Required]
        public bool Active { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedApiTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("ServerApiSecurityLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
