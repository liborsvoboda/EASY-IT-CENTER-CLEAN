using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("WebSettingList")]
    [Index("Key", Name = "IX_WebSettingList", IsUnique = true)]
    public partial class WebSettingList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        public string Key { get; set; } = null!;
        [Unicode(false)]
        public string Value { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("WebSettingLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
