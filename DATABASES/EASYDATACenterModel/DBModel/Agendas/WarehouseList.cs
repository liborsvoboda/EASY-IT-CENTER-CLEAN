namespace EASYDATACenter.DBModel {

    [Table("WarehouseList")]
    [Index("Name", Name = "IX_WarehouseList", IsUnique = true)]
    public partial class WarehouseList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool AllowNegativeStatus { get; set; }
        public bool Default { get; set; }
        public bool LockedByStockTaking { get; set; }
        public DateTime LastStockTaking { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("WarehouseLists")]
        public virtual UserList User { get; set; } = null!;
    }
}