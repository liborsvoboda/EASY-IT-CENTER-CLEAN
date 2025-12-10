using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EASYDATACenter.DBModel
{
    public partial class ScaffoldContext : DbContext
    {
        public ScaffoldContext()
        {
        }

        public ScaffoldContext(DbContextOptions<ScaffoldContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AccessRoleList> AccessRoleLists { get; set; } = null!;
        public virtual DbSet<AddressList> AddressLists { get; set; } = null!;
        public virtual DbSet<AttachmentList> AttachmentLists { get; set; } = null!;
        public virtual DbSet<BranchList> BranchLists { get; set; } = null!;
        public virtual DbSet<Calendar> Calendars { get; set; } = null!;
        public virtual DbSet<CreditNoteItemList> CreditNoteItemLists { get; set; } = null!;
        public virtual DbSet<CreditNoteList> CreditNoteLists { get; set; } = null!;
        public virtual DbSet<CurrencyList> CurrencyLists { get; set; } = null!;
        public virtual DbSet<DocumentAdviceList> DocumentAdviceLists { get; set; } = null!;
        public virtual DbSet<DocumentTypeList> DocumentTypeLists { get; set; } = null!;
        public virtual DbSet<ExchangeRateList> ExchangeRateLists { get; set; } = null!;
        public virtual DbSet<IgnoredExceptionList> IgnoredExceptionLists { get; set; } = null!;
        public virtual DbSet<ImageGalleryList> ImageGalleryLists { get; set; } = null!;
        public virtual DbSet<IncomingInvoiceItemList> IncomingInvoiceItemLists { get; set; } = null!;
        public virtual DbSet<IncomingInvoiceList> IncomingInvoiceLists { get; set; } = null!;
        public virtual DbSet<IncomingOrderItemList> IncomingOrderItemLists { get; set; } = null!;
        public virtual DbSet<IncomingOrderList> IncomingOrderLists { get; set; } = null!;
        public virtual DbSet<ItemList> ItemLists { get; set; } = null!;
        public virtual DbSet<LanguageList> LanguageLists { get; set; } = null!;
        public virtual DbSet<LicenseActivationFailList> LicenseActivationFailLists { get; set; } = null!;
        public virtual DbSet<LicenseAlgorithmList> LicenseAlgorithmLists { get; set; } = null!;
        public virtual DbSet<LoginHistoryList> LoginHistoryLists { get; set; } = null!;
        public virtual DbSet<MaturityList> MaturityLists { get; set; } = null!;
        public virtual DbSet<MottoList> MottoLists { get; set; } = null!;
        public virtual DbSet<NotesList> NotesLists { get; set; } = null!;
        public virtual DbSet<OfferItemList> OfferItemLists { get; set; } = null!;
        public virtual DbSet<OfferList> OfferLists { get; set; } = null!;
        public virtual DbSet<OutgoingInvoiceItemList> OutgoingInvoiceItemLists { get; set; } = null!;
        public virtual DbSet<OutgoingInvoiceList> OutgoingInvoiceLists { get; set; } = null!;
        public virtual DbSet<OutgoingOrderItemList> OutgoingOrderItemLists { get; set; } = null!;
        public virtual DbSet<OutgoingOrderList> OutgoingOrderLists { get; set; } = null!;
        public virtual DbSet<ParameterList> ParameterLists { get; set; } = null!;
        public virtual DbSet<PaymentMethodList> PaymentMethodLists { get; set; } = null!;
        public virtual DbSet<PaymentStatusList> PaymentStatusLists { get; set; } = null!;
        public virtual DbSet<ProdGuidGroupList> ProdGuidGroupLists { get; set; } = null!;
        public virtual DbSet<ProdGuidOperationList> ProdGuidOperationLists { get; set; } = null!;
        public virtual DbSet<ProdGuidPartList> ProdGuidPartLists { get; set; } = null!;
        public virtual DbSet<ProdGuidPersonList> ProdGuidPersonLists { get; set; } = null!;
        public virtual DbSet<ProdGuidWorkList> ProdGuidWorkLists { get; set; } = null!;
        public virtual DbSet<ReceiptItemList> ReceiptItemLists { get; set; } = null!;
        public virtual DbSet<ReceiptList> ReceiptLists { get; set; } = null!;
        public virtual DbSet<ReportList> ReportLists { get; set; } = null!;
        public virtual DbSet<ReportQueueList> ReportQueueLists { get; set; } = null!;
        public virtual DbSet<ServerSetting> ServerSettings { get; set; } = null!;
        public virtual DbSet<SystemFailList> SystemFailLists { get; set; } = null!;
        public virtual DbSet<TemplateList> TemplateLists { get; set; } = null!;
        public virtual DbSet<UnitList> UnitLists { get; set; } = null!;
        public virtual DbSet<UsedLicenseList> UsedLicenseLists { get; set; } = null!;
        public virtual DbSet<UserList> UserLists { get; set; } = null!;
        public virtual DbSet<UserRoleList> UserRoleLists { get; set; } = null!;
        public virtual DbSet<VatList> VatLists { get; set; } = null!;
        public virtual DbSet<ViewAttachmentList> ViewAttachmentLists { get; set; } = null!;
        public virtual DbSet<WarehouseList> WarehouseLists { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AccessRoleList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.AccessRoleLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AccessRuleList_UserList");
            });

            modelBuilder.Entity<AddressList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.AddressLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AddressList_UserList");
            });

            modelBuilder.Entity<AttachmentList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.AttachmentLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AttachmentList_UserList");
            });

            modelBuilder.Entity<BranchList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.BranchLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BranchList_UserList");
            });

            modelBuilder.Entity<Calendar>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.Date });

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Calendars)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Calendar_UserList");
            });

            modelBuilder.Entity<CreditNoteItemList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.CreditNoteItemLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_CreditNoteItemList_CreditNoteList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.CreditNoteItemLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CreditNoteItemList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CreditNoteItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CreditNoteItemList_UserList");
            });

            modelBuilder.Entity<CreditNoteList>(entity =>
            {
                entity.HasOne(d => d.InvoiceNumberNavigation)
                    .WithMany(p => p.CreditNoteLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.InvoiceNumber)
                    .HasConstraintName("FK_CreditNoteList_OutgoingInvoiceList");

                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.CreditNoteLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CreditNoteList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CreditNoteLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CreditNoteList_UserList");
            });

            modelBuilder.Entity<CurrencyList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.CurrencyLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CurrencyList_UserList");
            });

            modelBuilder.Entity<DocumentAdviceList>(entity =>
            {
                entity.HasOne(d => d.Branch)
                    .WithMany(p => p.DocumentAdviceLists)
                    .HasForeignKey(d => d.BranchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DocumentAdviceList_BranchList");

                entity.HasOne(d => d.DocumentTypeNavigation)
                    .WithMany(p => p.DocumentAdviceLists)
                    .HasPrincipalKey(p => p.SystemName)
                    .HasForeignKey(d => d.DocumentType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DocumentAdviceList_DocumentTypeList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.DocumentAdviceLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DocumentAdvice_UserList");
            });

            modelBuilder.Entity<DocumentTypeList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.DocumentTypeLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DocumentTypeList_UserList");
            });

            modelBuilder.Entity<ExchangeRateList>(entity =>
            {
                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.ExchangeRateLists)
                    .HasForeignKey(d => d.CurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ExchangeRateList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ExchangeRateLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CourseList_UserList");
            });

            modelBuilder.Entity<IgnoredExceptionList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.IgnoredExceptionLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IgnoredExceptionList_UserList");
            });

            modelBuilder.Entity<ImageGalleryList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ImageGalleryLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ImageGalleryList_UserList");
            });

            modelBuilder.Entity<IncomingInvoiceItemList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.IncomingInvoiceItemLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_IncomingInvoiceItemList_IncomingInvoiceList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.IncomingInvoiceItemLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceItemList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IncomingInvoiceItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceItemList_UserList");
            });

            modelBuilder.Entity<IncomingInvoiceList>(entity =>
            {
                entity.HasOne(d => d.Maturity)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.MaturityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_MaturityList");

                entity.HasOne(d => d.PaymentMethod)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.PaymentMethodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_PaymentMethodList");

                entity.HasOne(d => d.PaymentStatus)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.PaymentStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_PaymentStatusList");

                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_UserList");
            });

            modelBuilder.Entity<IncomingOrderItemList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.IncomingOrderItemLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_IncomingOrderItemList_IncomingOrderList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.IncomingOrderItemLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingOrderItemList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IncomingOrderItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingOrderItemList_UserList");
            });

            modelBuilder.Entity<IncomingOrderList>(entity =>
            {
                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.IncomingOrderLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingOrderList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IncomingOrderLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingOrderList_UserList");
            });

            modelBuilder.Entity<ItemList>(entity =>
            {
                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.ItemLists)
                    .HasForeignKey(d => d.CurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ItemList_CurrencyList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.ItemLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ItemList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ItemList_UserList");

                entity.HasOne(d => d.Vat)
                    .WithMany(p => p.ItemLists)
                    .HasForeignKey(d => d.VatId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ItemList_VatList");
            });

            modelBuilder.Entity<LanguageList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.LanguageLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_LanguageList_UserList");
            });

            modelBuilder.Entity<LicenseAlgorithmList>(entity =>
            {
                entity.HasOne(d => d.Address)
                    .WithMany(p => p.LicenseAlgorithmLists)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LicenseAlgorithmList_AddressList");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.LicenseAlgorithmLists)
                    .HasForeignKey(d => d.ItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LicenseAlgorithmList_ItemList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.LicenseAlgorithmLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LicenseAlgorithmList_UserList");
            });

            modelBuilder.Entity<MaturityList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.MaturityLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MaturityList_UserList");
            });

            modelBuilder.Entity<MottoList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.MottoLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MottoList_UserList");
            });

            modelBuilder.Entity<NotesList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.NotesLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_NotesList_UserList");
            });

            modelBuilder.Entity<OfferItemList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.OfferItemLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_OfferItemList_OfferList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OfferItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OfferItemList_UserList");
            });

            modelBuilder.Entity<OfferList>(entity =>
            {
                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.OfferLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OfferList_CurrencyList1");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OfferLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OfferList_UserList");
            });

            modelBuilder.Entity<OutgoingInvoiceItemList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.OutgoingInvoiceItemLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_OutgoingInvoiceItemList_OutgoingInvoiceList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.OutgoingInvoiceItemLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceItemList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OutgoingInvoiceItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceItemList_UserList");
            });

            modelBuilder.Entity<OutgoingInvoiceList>(entity =>
            {
                entity.HasOne(d => d.CreditNote)
                    .WithMany(p => p.OutgoingInvoiceLists)
                    .HasForeignKey(d => d.CreditNoteId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_OutgoingInvoiceList_CreditNoteList");

                entity.HasOne(d => d.Maturity)
                    .WithMany(p => p.OutgoingInvoiceLists)
                    .HasForeignKey(d => d.MaturityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceList_MaturityList");

                entity.HasOne(d => d.PaymentMethod)
                    .WithMany(p => p.OutgoingInvoiceLists)
                    .HasForeignKey(d => d.PaymentMethodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceList_PaymentMethodList");

                entity.HasOne(d => d.PaymentStatus)
                    .WithMany(p => p.OutgoingInvoiceLists)
                    .HasForeignKey(d => d.PaymentStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceList_PaymentStatusList");

                entity.HasOne(d => d.Receipt)
                    .WithMany(p => p.OutgoingInvoiceLists)
                    .HasForeignKey(d => d.ReceiptId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_OutgoingInvoiceList_ReceiptList");

                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.OutgoingInvoiceLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OutgoingInvoiceLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceList_UserList");
            });

            modelBuilder.Entity<OutgoingOrderItemList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.OutgoingOrderItemLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_OutgoingOrderItemList_OutgoingOrderList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.OutgoingOrderItemLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingOrderItemList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OutgoingOrderItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingOrderItemList_UserList");
            });

            modelBuilder.Entity<OutgoingOrderList>(entity =>
            {
                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.OutgoingOrderLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingOrderList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OutgoingOrderLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingOrderList_UserList");
            });

            modelBuilder.Entity<ParameterList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ParameterLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_ParameterList_UserList");
            });

            modelBuilder.Entity<PaymentMethodList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.PaymentMethodLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PaymentMethodList_UserList");
            });

            modelBuilder.Entity<PaymentStatusList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.PaymentStatusLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PaymentStatusList_UserList");
            });

            modelBuilder.Entity<ProdGuidGroupList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ProdGuidGroupLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_ProdGuidGroupList_UserList");
            });

            modelBuilder.Entity<ProdGuidOperationList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ProdGuidOperationLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_ProdGuidOperationList_UserList");
            });

            modelBuilder.Entity<ProdGuidPartList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ProdGuidPartLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_ProdGuidPartList_UserList");
            });

            modelBuilder.Entity<ProdGuidPersonList>(entity =>
            {
                entity.HasOne(d => d.Group)
                    .WithMany(p => p.ProdGuidPersonLists)
                    .HasForeignKey(d => d.GroupId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProdGuidPersonList_ProdGuidGroupList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ProdGuidPersonLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_ProdGuidPersonList_UserList");
            });

            modelBuilder.Entity<ProdGuidWorkList>(entity =>
            {
                entity.HasOne(d => d.PersonalNumberNavigation)
                    .WithMany(p => p.ProdGuidWorkLists)
                    .HasPrincipalKey(p => p.PersonalNumber)
                    .HasForeignKey(d => d.PersonalNumber)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProdGuidWorkList_ProdGuidPersonList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ProdGuidWorkLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_ProdGuidWorkList_UserList");
            });

            modelBuilder.Entity<ReceiptItemList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.ReceiptItemLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_ReceiptItemList_ReceiptList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.ReceiptItemLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReceiptItemList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ReceiptItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReceiptItemList_UserList");
            });

            modelBuilder.Entity<ReceiptList>(entity =>
            {
                entity.HasOne(d => d.InvoiceNumberNavigation)
                    .WithMany(p => p.ReceiptLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.InvoiceNumber)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_ReceiptList_OutgoingInvoiceList");

                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.ReceiptLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReceiptList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ReceiptLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReceiptList_UserList");
            });

            modelBuilder.Entity<ReportList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ReportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReportList_UserList");
            });

            modelBuilder.Entity<SystemFailList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.SystemFailLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_SystemFailList_UserList");
            });

            modelBuilder.Entity<TemplateList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.TemplateLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TemplateList_UserList");
            });

            modelBuilder.Entity<UnitList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.UnitLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UnitList_UserList");
            });

            modelBuilder.Entity<UsedLicenseList>(entity =>
            {
                entity.HasOne(d => d.Address)
                    .WithMany(p => p.UsedLicenseLists)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UsedLicenseList_AddressList");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.UsedLicenseLists)
                    .HasForeignKey(d => d.ItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UsedLicenseList_ItemList");
            });

            modelBuilder.Entity<UserList>(entity =>
            {
                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserLists)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_UserList_UserRoleList");
            });

            modelBuilder.Entity<VatList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.VatLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_VatList_UserList");
            });

            modelBuilder.Entity<ViewAttachmentList>(entity =>
            {
                entity.ToView("View_AttachmentList");
            });

            modelBuilder.Entity<WarehouseList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.WarehouseLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WarehouseList_UserList");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
