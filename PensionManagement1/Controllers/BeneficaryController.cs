using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PensionManagement1.Context;
using PensionManagement1.Models;
using PensionManagement1.Controllers.emptyclass;

namespace PensionManagement1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeneficaryController : ControllerBase
    {
        PensionContext _dbContext = new PensionContext();

        private IConfiguration _config;
        public BeneficaryController(IConfiguration config)
        {
            _config = config;
        }
        //Adding Beneficary By Pensioner Id
        [HttpPost("AddingBeneficiary")]
        public IActionResult AddBeneficiary(Beneficary beneficary)
        {
            var Pensioner = _dbContext.Pensioners.Find(beneficary.PensionerId);
            if (Pensioner == null) 
            {
                return NotFound("Pensioner Not Exist");
            }
            _dbContext.Beneficaries.Add(beneficary);
            _dbContext.SaveChanges();
            return Ok("Beneficary Added Successfully");
        }
        //Getting Beneficary By Pensioner Id
        [HttpGet("[action]")]
        public IActionResult GetBeneficary(int PensionerId)
        {
            var Pensioner = _dbContext.Pensioners.Find(PensionerId);
            if(Pensioner == null)
            {
                return NotFound("Pensioner Not Found");              
            }
            //Creating a BeneficaryDetail class and pass all beneficary value in that class for exact ans otherwise beneficary with pension detail both comes
            var beneficary = _dbContext.Beneficaries.Where(b => b.PensionerId == PensionerId)
                .Select(b => new BeneficaryDetail
                {
                    BeneficiaryId = b.PensionerId,
                    BeneficiaryFirstName = b.BeneficaryFirstName,
                    BeneficiaryLastName = b.BeneficaryLastName,
                    BeneficiaryRelation = b.Relation
                }).ToList();
            if(beneficary.Count==0)
            {
                return NotFound("No Beneficary Found");
            }
            return Ok(beneficary);

        }
        //Deleting Beneficary By Pensioner Id
        [HttpDelete]
        public IActionResult DeleteBeneficary(int PensionerId,int Benificaryid) 
        {
            var CurrentPensioner = _dbContext.Pensioners.Find(PensionerId);
            if(CurrentPensioner == null) 
            {
                return NotFound("Pensioner Not Exist");
            }
            var beneficary = _dbContext.Beneficaries.FirstOrDefault(b => b.PensionerId == PensionerId && b.BeneficaryId == Benificaryid);
            if (beneficary == null)
            {
                return NotFound("No Beneficary Found");
            }
            _dbContext.Beneficaries.Remove(beneficary);
            _dbContext.SaveChanges();
            return Ok("Beneficary Deleted Successfully");
            
        }

    }
}
