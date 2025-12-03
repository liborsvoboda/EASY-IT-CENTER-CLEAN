using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("ServerStartUpScriptList")]
    [Index("Name", Name = "IX_ServerStartUpScriptList", IsUnique = true)]
    public partial class ServerStartUpScriptList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedOsType { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedProcessType { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string? WorkingDirectory { get; set; }
        [Unicode(false)]
        public string? InstallCommand { get; set; }
        [Unicode(false)]
        public string? StartCommand { get; set; }
        public bool RunOnServerStartUp { get; set; }
        public int? Pid { get; set; }
        public bool Installed { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedOsTypeNavigation { get; set; } = null!;
        public virtual SolutionMixedEnumList InheritedProcessTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("ServerStartUpScriptLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
