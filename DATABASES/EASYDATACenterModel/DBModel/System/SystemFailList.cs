namespace EASYDATACenter.DBModel {

    [Table("SystemFailList")]
    public partial class SystemFailList {

        [Key]
        public int Id { get; set; }

        public int? UserId { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string? UserName { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string LogLevel { get; set; } = null!;

        [Column(TypeName = "text")]
        public string Message { get; set; } = null!;

        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SystemFailLists")]
        public virtual UserList? User { get; set; }
    }
}