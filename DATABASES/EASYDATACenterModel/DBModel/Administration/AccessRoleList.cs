namespace EASYDATACenter.DBModel {

    [Table("AccessRoleList")]
    [Index("TableName", Name = "IX_AccessRuleList", IsUnique = true)]
    public partial class AccessRoleList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string TableName { get; set; } = null!;

        [StringLength(1024)]
        [Unicode(false)]
        public string AccessRole { get; set; } = null!;

        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("AccessRoleLists")]
        public virtual UserList User { get; set; } = null!;
    }
}