namespace EASYDATACenter.DBModel {

    /// <summary>
    /// Template System Class, This Class has all DBLogic auto Fields and user join for simple
    /// creating system Only Rename for your new table
    /// </summary>
    [Table("TemplateList")]
    [Index("Name", Name = "IX_TemplateList", IsUnique = true)]
    public partial class TemplateList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Default { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("TemplateLists")]
        public virtual UserList User { get; set; } = null!;
    }
}