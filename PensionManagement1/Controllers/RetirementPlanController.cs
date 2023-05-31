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
        private IConfiguration _config;
        public RetirementPlanController(IConfiguration config)
        {
            _config=config;
        }
        //Getting Plans
        [HttpGet("[action]")]
        public IActionResult GettingPlan(int Planid) 
        {
            var plan=_dbContext.RetirementPlans.Find(Planid);
            if (plan == null)
            {
                return NotFound("Plan Not Found");
            }
            var Plan1=_dbContext.RetirementPlans.Where(p=>p.PlanId == Planid).Select(p => new RetirementPlandetails 
            {
                PlanId = p.PlanId,
                PlanName = p.PlanName,
              

            }).ToList();
            return Ok(Plan1);
        }
        //Adding Plans
        [HttpPost("[action]")]
        public IActionResult AddingPlan(RetirementPlandetails retirementPlan)
        {
            var plan=new RetirementPlan();
            plan.PlanName=retirementPlan.PlanName;
           
            _dbContext.RetirementPlans.Add(plan);
            _dbContext.SaveChanges();
            return Ok("Plan Added Successfully");
        }
        //Updating Plans
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
          
            _dbContext.SaveChanges();
            return Ok("Plan Updated Successfully");
        }

        [HttpDelete("[action]")]
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
