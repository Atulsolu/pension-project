using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PensionManagement1.Context;
using PensionManagement1.Models.DbsetModel;
using PensionManagement1.Models.ViewModel;

namespace PensionManagement1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RetirementPlanController : ControllerBase
    {
        public PensionContext _dbContext=new PensionContext();

        //Getting Plans
        [HttpGet("[action]")]
        public IActionResult GettingPlan() 
        {
            var Plan1=_dbContext.RetirementPlans.Select(p => new RetirementPlandetails 
            {
                PlanId = p.PlanId,
                PlanName = p.PlanName,
                PlanDescription = p.PlanDescription,
              

            }).OrderByDescending(x => x.PlanId).ToList();
            return Ok(Plan1);
        }
        //Adding Plans
        [Authorize(Roles = "Admin")]
        [HttpPost("[action]")]
        public IActionResult AddingPlan(RetirementPlandetails retirementPlan)
        {
            var plan=new RetirementPlan();
            plan.PlanName=retirementPlan.PlanName;
            plan.PlanDescription = retirementPlan.PlanDescription;
           
            _dbContext.RetirementPlans.Add(plan);
            _dbContext.SaveChanges();
            return Ok("Plan Added Successfully");
        }
        //Updating Plans
        [Authorize(Roles = "Admin")]
        [HttpPut("[action]")]
        public IActionResult UpdatingPlan( int Planid,RetirementPlandetails retirementPlan)
        {
            var plan = _dbContext.RetirementPlans.Find(Planid);
            if(plan == null) 
            {
                return NotFound("Plan Not Found");
            }
            var plan1 = _dbContext.RetirementPlans.Find(Planid);
            plan1.PlanName=retirementPlan.PlanName;
            plan1.PlanDescription = retirementPlan.PlanDescription;
          
            _dbContext.SaveChanges();
            return Ok("Plan Updated Successfully");
        }
        [Authorize(Roles = "Admin")]
        [HttpDelete("DeletePlan/{Planid}")]
        public IActionResult DeletePlan(int Planid) 
        {
            var plan = _dbContext.RetirementPlans.Find(Planid);
            if(plan == null)
            {
                return NotFound("Plan Not Found");
            }
            _dbContext.RetirementPlans.Remove(plan);
            _dbContext.SaveChanges();
            return Ok("Plan Deleted Successfully");
        }

    }
}
