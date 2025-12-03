using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("MigrationsHistoryList")]
    public partial class MigrationsHistoryList
    {
        [Key]
        [StringLength(150)]
        public string MigrationId { get; set; } = null!;
        [StringLength(32)]
        public string ProductVersion { get; set; } = null!;
    }
}
