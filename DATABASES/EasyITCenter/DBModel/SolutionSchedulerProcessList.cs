using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SolutionSchedulerProcessList")]
    public partial class SolutionSchedulerProcessList
    {
        [Key]
        public int Id { get; set; }
        public int ScheduledTaskId { get; set; }
        [Unicode(false)]
        public string? ProcessData { get; set; }
        [Unicode(false)]
        public string? ProcessLog { get; set; }
        public bool ProcessCrashed { get; set; }
        public bool ProcessCompleted { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("ScheduledTaskId")]
        [InverseProperty("SolutionSchedulerProcessLists")]
        public virtual SolutionSchedulerList ScheduledTask { get; set; } = null!;
    }
}
