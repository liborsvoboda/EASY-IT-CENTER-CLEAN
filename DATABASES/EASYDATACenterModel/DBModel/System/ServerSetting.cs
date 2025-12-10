namespace EASYDATACenter.DBModel {

    [Table("ServerSetting")]
    public partial class ServerSetting {

        [Key]
        public int Id { get; set; }

        [StringLength(150)]
        public string Key { get; set; } = null!;

        [StringLength(150)]
        public string Value { get; set; } = null!;

        public DateTime Timestamp { get; set; }
        public bool Active { get; set; }
    }
}