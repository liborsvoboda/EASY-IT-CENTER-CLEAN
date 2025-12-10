namespace EASYDATACenter.DBModel {

    [Table("PaymentStatusList")]
    [Index("Name", Name = "IX_PaymentStatusList", IsUnique = true)]
    public partial class PaymentStatusList {

        public PaymentStatusList() {
            IncomingInvoiceLists = new HashSet<IncomingInvoiceList>();
            OutgoingInvoiceLists = new HashSet<OutgoingInvoiceList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        public bool Default { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public bool Receipt { get; set; }
        public bool CreditNote { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("PaymentStatusLists")]
        public virtual UserList User { get; set; } = null!;

        [InverseProperty("PaymentStatus")]
        public virtual ICollection<IncomingInvoiceList> IncomingInvoiceLists { get; set; }

        [InverseProperty("PaymentStatus")]
        public virtual ICollection<OutgoingInvoiceList> OutgoingInvoiceLists { get; set; }
    }
}