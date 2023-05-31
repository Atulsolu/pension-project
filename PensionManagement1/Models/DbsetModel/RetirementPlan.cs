using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PensionManagement1.Models.DbsetModel
{
    public class RetirementPlan
    {
        [Key]
        public int PlanId { get; set; }
        [Required]
        public string PlanName { get; set; }
     






    }
}
