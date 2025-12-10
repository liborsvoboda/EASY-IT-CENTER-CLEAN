namespace EASYDATACenter.DBModel {

    [Table("PaymentMethodList")]
    [Index("Name", Name = "IX_PaymentMethodList", IsUnique = true)]
    public partial class PaymentMethodList {

        public PaymentMethodList() {
            IncomingInvoiceLists = new HashSet<IncomingInvoiceList>();
            OutgoingInvoiceLists = new HashSet<OutgoingInvoiceList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        public bool Default { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public bool AutoGenerateReceipt { get; set; }
        public bool AllowGenerateReceipt { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("PaymentMethodLists")]
        public virtual UserList User { get; set; } = null!;

        [InverseProperty("PaymentMethod")]
        public virtual ICollection<IncomingInvoiceList> IncomingInvoiceLists { get; set; }

        [InverseProperty("PaymentMethod")]
        public virtual ICollection<OutgoingInvoiceList> OutgoingInvoiceLists { get; set; }
    }
}