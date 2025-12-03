using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("ServerParameterList")]
    [Index("Key", Name = "IX_ServerParameterList", IsUnique = true)]
    public partial class ServerParameterList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedServerParamType { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedDataType { get; set; } = null!;
        [StringLength(150)]
        public string Key { get; set; } = null!;
        [StringLength(150)]
        public string Value { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        [StringLength(1024)]
        [Unicode(false)]
        public string? Link { get; set; }
        [StringLength(1024)]
        [Unicode(false)]
        public string? HelpUrl { get; set; }
        public int UserId { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedDataTypeNavigation { get; set; } = null!;
        public virtual SolutionMixedEnumList InheritedServerParamTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("ServerParameterLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
