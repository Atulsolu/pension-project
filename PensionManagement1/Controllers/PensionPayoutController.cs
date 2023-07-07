using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PensionManagement1.Context;
using PensionManagement1.Models;
using PensionManagement1.Models.DbsetModel;
using PensionManagement1.Models.ViewModel;
using System.Linq;

namespace PensionManagement1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PensionPayoutController : ControllerBase
    {
        PensionContext _dbContext=new PensionContext();

        //Adding Pensioner Payment
        [Authorize(Roles = "Admin")]
        [HttpPost("PaymentByPensionerId")]
        public IActionResult AddingPensionerPayment([FromBody]PensionPayoutdetail Payout)
        {
            Pensioner w = _dbContext.Pensioners.Find(Payout.PensionerId);
            var p = _dbContext.RetirementPlans.Find(w.PlanId);
            if (w == null)
            {
                return StatusCode(404,"Pensioner Not Found");
            }
            Pensioner pensioner = _dbContext.Pensioners.FirstOrDefault(p => p.PensionerId == Payout.PensionerId);
            RetirementPlan RP = _dbContext.RetirementPlans.FirstOrDefault(r => r.PlanId == w.PlanId);
            var payment = new PensionPayout();
            payment.PensionerId = Payout.PensionerId;
            if (RP.PlanId == 1004)
            {
                payment.PayoutAmount = (int)(pensioner.Salary * int.Parse(p.PlanDescription) /100);
            }
            else if(RP.PlanId == 1005)
            {
                payment.PayoutAmount = (int)(pensioner.Salary * int.Parse(p.PlanDescription)/100);
            }
            payment.PayoutDate = Payout.PayoutDate;
            payment.PensionerName = Payout.PensionerName;
            _dbContext.PensionPayouts.Add(payment);
            _dbContext.SaveChanges();
            return Ok("Payment Added Successfully");
        }

        [HttpGet("(PensionerPayment)/{id}")]
        public IActionResult GetPaymentDetails(int id)
        {
            var Pensioner = _dbContext.Pensioners.Find(id);
            if (Pensioner == null)
            {
                return NotFound("Pensioner Not Found");
            }
          
            var payment = _dbContext.PensionPayouts.Where(b => b.PensionerId == id)
                .Select(b => new PensionPayoutdetail
                {
                    PayoutId = b.PayoutId,
                    PensionerId = b.PensionerId,
                    PensionerName= b.PensionerName,
                    PayoutAmount = b.PayoutAmount,
                    PayoutDate = b.PayoutDate,
                   
                }).OrderByDescending(x => x.PayoutId).ToList();
            if (payment.Count == 0)
            {
                return StatusCode(404,"No Payment Found");
            }
            return Ok(payment);

        }


    }
}
