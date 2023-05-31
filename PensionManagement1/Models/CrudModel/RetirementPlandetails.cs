using PensionManagement1.Models.DbsetModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PensionManagement1.Models.ViewModel
{
    public class RetirementPlandetails
    {
        public int PlanId { get; set; }
       
        public string PlanName { get; set; }
     
    }
}
