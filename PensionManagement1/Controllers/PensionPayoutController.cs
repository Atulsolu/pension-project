using Microsoft.AspNetCore.Mvc;
using PensionManagement1.Context;
using PensionManagement1.Models;
using PensionManagement1.Models.ViewModel;

namespace PensionManagement1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PensionPayoutController : ControllerBase
    {
        PensionContext _dbContext=new PensionContext();
        private IConfiguration _config;
        public  PensionPayoutController( IConfiguration config)
        {
            
            _config=config;
        }
        //Adding Pensioner Payment
        [HttpPost("[action]")]
        public IActionResult AddingPensionerPayment(int Pensionerid, PensionPayoutdetail Payout)
        {
            var Pensionee = _dbContext.Pensioners.Find(Pensionerid);
            if(Pensionee == null) 
            {
                return NotFound("Pensioner Not Found");
            }
            var payment = new PensionPayout();
            payment.PensionerId = Payout.PensionerId;
            payment.PayoutAmount = Payout.PayoutAmount;
            payment.PayoutDate = Payout.PayoutDate;
            payment.TotalAmount = Payout.TotalAmount;
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
                    TotalAmount = b.TotalAmount
                }).ToList();
            if (payment.Count == 0)
            {
                return NotFound("No Payment Found");
            }
            return Ok(payment);

        }


    }
}
