namespace EASYDATACenter.DBModel {

    [Table("LoginHistoryList")]
    [Index("IpAddress", Name = "IX_LoginHistoryList")]
    [Index("UserId", Name = "IX_LoginHistoryList_1")]
    public partial class LoginHistoryList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string IpAddress { get; set; } = null!;

        public int UserId { get; set; }

        [StringLength(150)]
        [Unicode(false)]
        public string UserName { get; set; } = null!;

        public DateTime Timestamp { get; set; }
    }
}