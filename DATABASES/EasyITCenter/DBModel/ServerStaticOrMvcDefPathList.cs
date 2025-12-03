using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("ServerStaticOrMvcDefPathList")]
    [Index("SystemName", Name = "IX_ServerStaticOrMvcDefPathList", IsUnique = true)]
    public partial class ServerStaticOrMvcDefPathList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string SystemName { get; set; } = null!;
        [StringLength(2048)]
        [Unicode(false)]
        public string WebRootSubPath { get; set; } = null!;
        [StringLength(255)]
        [Unicode(false)]
        public string? AliasPath { get; set; }
        [Unicode(false)]
        public string? Description { get; set; }
        public bool IsBrowsable { get; set; }
        public bool IsStaticOrMvcDefOnly { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ServerStaticOrMvcDefPathLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
