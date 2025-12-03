using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("UserParameterList")]
    [Index("SystemName", "UserId", Name = "IX_ParameterList", IsUnique = true)]
    public partial class UserParameterList
    {
        [Key]
        public int Id { get; set; }
        public int? UserId { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedDataType { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string SystemName { get; set; } = null!;
        [Unicode(false)]
        public string Value { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedDataTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("UserParameterLists")]
        public virtual SolutionUserList? User { get; set; }
    }
}
