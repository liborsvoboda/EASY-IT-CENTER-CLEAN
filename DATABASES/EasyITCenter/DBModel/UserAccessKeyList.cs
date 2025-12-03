using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("UserAccessKeyList")]
    [Index("SystemName", "UserId", Name = "IX_UserAccessKeyList", IsUnique = true)]
    public partial class UserAccessKeyList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string? InheritedClientType { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string SystemName { get; set; } = null!;
        [StringLength(512)]
        [Unicode(false)]
        public string? RegisteredAppId { get; set; }
        [StringLength(512)]
        [Unicode(false)]
        public string? AppClientId { get; set; }
        [StringLength(512)]
        [Unicode(false)]
        public string? AppClientSecret { get; set; }
        [StringLength(512)]
        [Unicode(false)]
        public string? UserName { get; set; }
        [StringLength(512)]
        [Unicode(false)]
        public string? Password { get; set; }
        [Unicode(false)]
        public string? ApiKey { get; set; }
        [Unicode(false)]
        public string Value { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public bool Public { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList? InheritedClientTypeNavigation { get; set; }
        [ForeignKey("UserId")]
        [InverseProperty("UserAccessKeyLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
