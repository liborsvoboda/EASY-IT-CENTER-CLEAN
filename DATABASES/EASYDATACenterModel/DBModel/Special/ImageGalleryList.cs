namespace EASYDATACenter.DBModel {

    [Table("ImageGalleryList")]
    [Index("FileName", Name = "UX_ImageGalleryList", IsUnique = true)]
    public partial class ImageGalleryList {

        [Key]
        public int Id { get; set; }

        public bool IsPrimary { get; set; }

        [StringLength(150)]
        [Unicode(false)]
        public string FileName { get; set; } = null!;

        public byte[] Attachment { get; set; } = null!;
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ImageGalleryLists")]
        public virtual UserList User { get; set; } = null!;
    }
}