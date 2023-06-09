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
        [HttpPost("[action]")]
        public IActionResult AddingPensionerPayment(int Pensionerid, PensionPayoutdetail Payout)
        {
            Pensioner w = _dbContext.Pensioners.Find(Pensionerid);
            if (w == null)
            {
                return NotFound("Pensioner Not Found");
            }
            Pensioner pensioner = _dbContext.Pensioners.FirstOrDefault(p => p.PensionerId == Pensionerid);
            RetirementPlan RP = _dbContext.RetirementPlans.FirstOrDefault(r => r.PlanId == w.PlanId);
            var payment = new PensionPayout();
            payment.PensionerId = Payout.PensionerId;
            if (RP.PlanId == 1)
            {
                payment.PayoutAmount = (int)(pensioner.Salary * 0.4);
            }
            else if(RP.PlanId == 2)
            {
                payment.PayoutAmount = (int)(pensioner.Salary * 0.5);
            }
            payment.PayoutDate = Payout.PayoutDate;
            _dbContext.PensionPayouts.Add(payment);
            _dbContext.SaveChanges();
            return Ok("Payment Added Successfully");
        }

        [HttpGet("[action]")]
        public IActionResult GetPaymentDetails(int PensionerId)
        {
            var Pensioner = _dbContext.Pensioners.Find(PensionerId);
            if (Pensioner == null)
            {
                return NotFound("Pensioner Not Found");
            }
          
            var payment = _dbContext.PensionPayouts.Where(b => b.PensionerId == PensionerId)
                .Select(b => new PensionPayoutdetail
                {
                    PayoutId = b.PayoutId,
                    PensionerId = b.PensionerId,
                    PayoutAmount = b.PayoutAmount,
                    PayoutDate = b.PayoutDate,
                   
                }).ToList();
            if (payment.Count == 0)
            {
                return NotFound("No Payment Found");
            }
            return Ok(payment);

        }


    }
}
