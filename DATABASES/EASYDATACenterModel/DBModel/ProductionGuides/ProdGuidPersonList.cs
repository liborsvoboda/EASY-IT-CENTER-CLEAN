namespace EASYDATACenter.DBModel {

    [Table("ProdGuidPersonList")]
    [Index("PersonalNumber", Name = "IX_ProdGuidPersonList", IsUnique = true)]
    public partial class ProdGuidPersonList {

        public ProdGuidPersonList() {
            ProdGuidWorkLists = new HashSet<ProdGuidWorkList>();
        }

        [Key]
        public int Id { get; set; }

        public int GroupId { get; set; }
        public int PersonalNumber { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [StringLength(100)]
        [Unicode(false)]
        public string SurName { get; set; } = null!;

        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }

        [ForeignKey("GroupId")]
        [InverseProperty("ProdGuidPersonLists")]
        public virtual ProdGuidGroupList Group { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("ProdGuidPersonLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<ProdGuidWorkList> ProdGuidWorkLists { get; set; }
    }
}