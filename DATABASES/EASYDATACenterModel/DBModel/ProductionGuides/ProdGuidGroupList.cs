namespace EASYDATACenter.DBModel {

    [Table("ProdGuidGroupList")]
    public partial class ProdGuidGroupList {

        public ProdGuidGroupList() {
            ProdGuidPersonLists = new HashSet<ProdGuidPersonList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ProdGuidGroupLists")]
        public virtual UserList User { get; set; } = null!;

        [InverseProperty("Group")]
        public virtual ICollection<ProdGuidPersonList> ProdGuidPersonLists { get; set; }
    }
}