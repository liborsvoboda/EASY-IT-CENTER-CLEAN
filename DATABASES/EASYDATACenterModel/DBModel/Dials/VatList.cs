namespace EASYDATACenter.DBModel {

    [Table("VatList")]
    [Index("Value", "Active", Name = "IX_VatList", IsUnique = true)]
    public partial class VatList {

        public VatList() {
            ItemLists = new HashSet<ItemList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "numeric(10, 2)")]
        public decimal Value { get; set; }

        public bool Default { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("VatLists")]
        public virtual UserList User { get; set; } = null!;

        [InverseProperty("Vat")]
        public virtual ICollection<ItemList> ItemLists { get; set; }
    }
}