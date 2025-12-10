namespace EASYDATACenter.DBModel {

    [Table("AttachmentList")]
    [Index("ParentId", "ParentType", Name = "IX_AttachmentList")]
    [Index("ParentId", "FileName", Name = "UX_AttachmentList", IsUnique = true)]
    public partial class AttachmentList {

        [Key]
        public int Id { get; set; }

        public int ParentId { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string ParentType { get; set; } = null!;

        [StringLength(150)]
        [Unicode(false)]
        public string FileName { get; set; } = null!;

        public byte[] Attachment { get; set; } = null!;
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("AttachmentLists")]
        public virtual UserList User { get; set; } = null!;
    }
}