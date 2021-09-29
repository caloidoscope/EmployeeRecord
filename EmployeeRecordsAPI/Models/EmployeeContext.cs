using System.Data.Entity;

namespace EmployeeRecordsAPI.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext()
            : base("name=EmployeeRecords")
        {
        }

        public virtual DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .Property(e => e.FirstName)
                .IsUnicode(false);

            modelBuilder.Entity<Employee>()
                .Property(e => e.MiddleName)
                .IsUnicode(false);

            modelBuilder.Entity<Employee>()
                .Property(e => e.LastName)
                .IsUnicode(false);
        }
    }
}
