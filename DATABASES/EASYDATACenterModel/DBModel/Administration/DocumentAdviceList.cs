namespace EASYDATACenter.DBModel {

    [Table("DocumentAdviceList")]
    [Index("BranchId", "DocumentType", Name = "IX_DocumentAdviceList")]
    public partial class DocumentAdviceList {

        [Key]
        public int Id { get; set; }

        public int BranchId { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string DocumentType { get; set; } = null!;

        [StringLength(10)]
        [Unicode(false)]
        public string Prefix { get; set; } = null!;

        [StringLength(10)]
        [Unicode(false)]
        public string Number { get; set; } = null!;

        [Column(TypeName = "date")]
        public DateTime StartDate { get; set; }

        [Column(TypeName = "date")]
        public DateTime EndDate { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("BranchId")]
        [InverseProperty("DocumentAdviceLists")]
        public virtual BranchList Branch { get; set; } = null!;

        public virtual DocumentTypeList DocumentTypeNavigation { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("DocumentAdviceLists")]
        public virtual UserList User { get; set; } = null!;
    }
}