namespace EASYDATACenter.DBModel {

    [Keyless]
    public partial class ViewAttachmentList {
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