namespace EASYDATACenter.DBModel {

    [Table("MottoList")]
    [Index("SystemName", Name = "IX_MottoList", IsUnique = true)]
    public partial class MottoList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string SystemName { get; set; } = null!;

        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("MottoLists")]
        public virtual UserList User { get; set; } = null!;
    }
}