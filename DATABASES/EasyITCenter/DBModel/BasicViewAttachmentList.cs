using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    
    public partial class BasicViewAttachmentList
    {
        public int Id { get; set; }
        [StringLength(150)]
        [Unicode(false)]
        public string FileName { get; set; } = null!;
        [StringLength(50)]
        [Unicode(false)]
        public string? PartNumber { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
