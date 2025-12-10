namespace EASYDATACenter.DBModel {

    [Table("MaturityList")]
    [Index("Name", Name = "IX_MaturityList", IsUnique = true)]
    public partial class MaturityList {

        public MaturityList() {
            IncomingInvoiceLists = new HashSet<IncomingInvoiceList>();
            OutgoingInvoiceLists = new HashSet<OutgoingInvoiceList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        public int Value { get; set; }
        public bool Default { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("MaturityLists")]
        public virtual UserList User { get; set; } = null!;

        [InverseProperty("Maturity")]
        public virtual ICollection<IncomingInvoiceList> IncomingInvoiceLists { get; set; }

        [InverseProperty("Maturity")]
        public virtual ICollection<OutgoingInvoiceList> OutgoingInvoiceLists { get; set; }
    }
}