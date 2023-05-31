using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PensionManagement1.Context;
using PensionManagement1.Models.DbsetModel;
using PensionManagement1.Models.ViewModel;

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
        public IActionResult AddBeneficiary(int Pensionerid,BeneficaryDetail beneficary)
        {
            var Pensioner = _dbContext.Pensioners.Find(Pensionerid);
            if (Pensioner == null) 
            {
                return NotFound("Pensioner Not Exist");
            }
            var beneficary1 = new Beneficary();
            beneficary1.BeneficaryFirstName = beneficary.BeneficaryFirstName;
            beneficary1.BeneficaryLastName = beneficary.BeneficaryLastName;
            beneficary1.Relation = beneficary.BeneficaryRelation;
            beneficary1.PensionerId = beneficary.PensionerId;
            _dbContext.Beneficaries.Add(beneficary1);
            _dbContext.SaveChanges();
            return Ok("Beneficary Added Successfully");
        }
        //Getting Beneficary By Pensioner Id
        [Authorize]
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
                    BeneficaryId = b.BeneficaryId,
                    BeneficaryFirstName = b.BeneficaryFirstName,
                    BeneficaryLastName = b.BeneficaryLastName,
                    BeneficaryRelation = b.Relation
                }).ToList();
            if(beneficary.Count==0)
            {
                return NotFound("No Beneficary Found");
            }
            return Ok(beneficary);

        }
        //Update Beneficary
        [HttpPut("UpdateBeneficaryByPensionerId")]
        public IActionResult UpdatePensioner(int PensionerId,int BeneficaryId,BeneficaryDetail ben)
        {

            var CurrentBeneficary = _dbContext.Beneficaries.FirstOrDefault(b => b.PensionerId == PensionerId && b.BeneficaryId == BeneficaryId);
            if (CurrentBeneficary != null)
            {

                CurrentBeneficary.BeneficaryFirstName = ben.BeneficaryFirstName;
                CurrentBeneficary.BeneficaryLastName = ben.BeneficaryLastName;
                CurrentBeneficary.Relation = ben.BeneficaryRelation;
              
                _dbContext.SaveChanges();
                return Ok("Beneficary Updated Successfully");
            }
            return NotFound("Beneficary Not Found");


        }



        //Deleting Beneficary By Pensioner Id
        [Authorize]
        [HttpDelete("Delete BeneficaryByPensionerId")]
        public IActionResult DeleteBeneficary(int PensionerId,int Beneficaryid) 
        {
            var CurrentPensioner = _dbContext.Pensioners.Find(PensionerId);
            if(CurrentPensioner == null) 
            {
                return NotFound("Pensioner Not Exist");
            }
            var beneficary = _dbContext.Beneficaries.FirstOrDefault(b => b.PensionerId == PensionerId && b.BeneficaryId == Beneficaryid);
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
