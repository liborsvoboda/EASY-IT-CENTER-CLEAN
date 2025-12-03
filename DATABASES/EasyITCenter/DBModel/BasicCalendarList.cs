using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("BasicCalendarList")]
    public partial class BasicCalendarList
    {
        [Key]
        public int UserId { get; set; }
        [Key]
        [Column(TypeName = "date")]
        public DateTime Date { get; set; }
        [Unicode(false)]
        public string? Notes { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("BasicCalendarLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
