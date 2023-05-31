using Microsoft.EntityFrameworkCore;
using PensionManagement1.Models;
using PensionManagement1.Models.DbsetModel;

namespace PensionManagement1.Context
{
    public class PensionContext : DbContext
    {
       
        public DbSet<Admin>Admins { get; set; }
        public DbSet<Beneficary> Beneficaries { get;set; }
        public DbSet<Pensioner> Pensioners { get; set; }
        public DbSet<PensionPayout> PensionPayouts { get; set;}
        public DbSet<RetirementPlan> RetirementPlans { get; set; }




        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=PensionManagementSystem;");
        }
       
    }
}
