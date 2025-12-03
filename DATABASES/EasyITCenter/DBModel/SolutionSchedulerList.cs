using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SolutionSchedulerList")]
    [Index("Name", Name = "IX_SolutionSchedulerList", IsUnique = true)]
    public partial class SolutionSchedulerList
    {
        public SolutionSchedulerList()
        {
            SolutionSchedulerProcessLists = new HashSet<SolutionSchedulerProcessList>();
        }

        [Key]
        public int Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedGroupName { get; set; } = null!;
        [StringLength(255)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        public int Sequence { get; set; }
        [StringLength(255)]
        [Unicode(false)]
        public string? Email { get; set; }
        [Unicode(false)]
        public string Data { get; set; } = null!;
        [Unicode(false)]
        public string? Description { get; set; }
        public bool StartNowOnly { get; set; }
        public DateTime? StartAt { get; set; }
        public DateTime? FinishAt { get; set; }
        public int Interval { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string InheritedIntervalType { get; set; } = null!;
        public int UserId { get; set; }
        [Required]
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual SolutionMixedEnumList InheritedGroupNameNavigation { get; set; } = null!;
        public virtual SolutionMixedEnumList InheritedIntervalTypeNavigation { get; set; } = null!;
        [ForeignKey("UserId")]
        [InverseProperty("SolutionSchedulerLists")]
        public virtual SolutionUserList User { get; set; } = null!;
        [InverseProperty("ScheduledTask")]
        public virtual ICollection<SolutionSchedulerProcessList> SolutionSchedulerProcessLists { get; set; }
    }
}
