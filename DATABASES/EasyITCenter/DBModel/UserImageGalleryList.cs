using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("UserImageGalleryList")]
    [Index("FileName", Name = "UX_UserImageGalleryList", IsUnique = true)]
    public partial class UserImageGalleryList
    {
        [Key]
        public int Id { get; set; }
        public bool IsPrimary { get; set; }
        [StringLength(150)]
        [Unicode(false)]
        public string FileName { get; set; } = null!;
        public byte[] Image { get; set; } = null!;
        [StringLength(150)]
        [Unicode(false)]
        public string? Title { get; set; }
        public byte[]? Description { get; set; }
        [Column(TypeName = "numeric(10, 2)")]
        public decimal? Price { get; set; }
        public bool Public { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("UserImageGalleryLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
