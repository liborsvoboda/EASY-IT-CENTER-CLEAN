namespace EASYDATACenter.DBModel {

    [Table("ParameterList")]
    [Index("SystemName", "UserId", Name = "IX_ParameterList", IsUnique = true)]
    public partial class ParameterList {

        [Key]
        public int Id { get; set; }

        public int? UserId { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string SystemName { get; set; } = null!;

        [StringLength(50)]
        [Unicode(false)]
        public string Value { get; set; } = null!;

        [StringLength(20)]
        [Unicode(false)]
        public string Type { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ParameterLists")]
        public virtual UserList? User { get; set; }
    }
}