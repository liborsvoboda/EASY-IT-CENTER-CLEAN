using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("BasicCurrencyList")]
    public partial class BasicCurrencyList
    {
        public BasicCurrencyList()
        {
            BasicItemLists = new HashSet<BasicItemList>();
            BusinessCreditNoteLists = new HashSet<BusinessCreditNoteList>();
            BusinessExchangeRateLists = new HashSet<BusinessExchangeRateList>();
            BusinessIncomingInvoiceLists = new HashSet<BusinessIncomingInvoiceList>();
            BusinessIncomingOrderLists = new HashSet<BusinessIncomingOrderList>();
            BusinessOfferLists = new HashSet<BusinessOfferList>();
            BusinessOutgoingInvoiceLists = new HashSet<BusinessOutgoingInvoiceList>();
            BusinessOutgoingOrderLists = new HashSet<BusinessOutgoingOrderList>();
            BusinessReceiptLists = new HashSet<BusinessReceiptList>();
        }

        [Key]
        public int Id { get; set; }
        [StringLength(5)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [Column(TypeName = "numeric(10, 2)")]
        public decimal ExchangeRate { get; set; }
        public bool Fixed { get; set; }
        [Unicode(false)]
        public string? Description { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
        public bool Default { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("BasicCurrencyLists")]
        public virtual SolutionUserList User { get; set; } = null!;
        [InverseProperty("Currency")]
        public virtual ICollection<BasicItemList> BasicItemLists { get; set; }
        [InverseProperty("TotalCurrency")]
        public virtual ICollection<BusinessCreditNoteList> BusinessCreditNoteLists { get; set; }
        [InverseProperty("Currency")]
        public virtual ICollection<BusinessExchangeRateList> BusinessExchangeRateLists { get; set; }
        [InverseProperty("TotalCurrency")]
        public virtual ICollection<BusinessIncomingInvoiceList> BusinessIncomingInvoiceLists { get; set; }
        [InverseProperty("TotalCurrency")]
        public virtual ICollection<BusinessIncomingOrderList> BusinessIncomingOrderLists { get; set; }
        [InverseProperty("TotalCurrency")]
        public virtual ICollection<BusinessOfferList> BusinessOfferLists { get; set; }
        [InverseProperty("TotalCurrency")]
        public virtual ICollection<BusinessOutgoingInvoiceList> BusinessOutgoingInvoiceLists { get; set; }
        [InverseProperty("TotalCurrency")]
        public virtual ICollection<BusinessOutgoingOrderList> BusinessOutgoingOrderLists { get; set; }
        [InverseProperty("TotalCurrency")]
        public virtual ICollection<BusinessReceiptList> BusinessReceiptLists { get; set; }
    }
}
