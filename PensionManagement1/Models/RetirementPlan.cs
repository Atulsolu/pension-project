using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PensionManagement1.Models
{
    public class RetirementPlan
    {
        [Key]
        public int PlanId { get; set; }
        [Required]
        public string PlanName { get; set; }
        [Required]
        public int PlanType { get; set; }

        [ForeignKey("Pensioner")]
        public int PensionerId { get; set; }
        public Pensioner Pensioner { get; set; }
    }
}
