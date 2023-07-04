using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using PensionManagement1.Context;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using PensionManagement1.Models.ViewModel;
using PensionManagement1.Models.DbsetModel;
using Microsoft.AspNetCore.Authorization;
using PensionManagement1.Models.CrudModel;

namespace PensionManagement1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PensionerController : ControllerBase
    {
        PensionContext _dbContext = new PensionContext();
        private IConfiguration _config;
        public PensionerController(IConfiguration config)
        {
            _config = config;
        }
        //Pensioner Registration
        [HttpPost("[action]")]
        public IActionResult PensionerRegister(PensionerRegister pensioner)
        {
            var PensionerExist=_dbContext.Pensioners.FirstOrDefault(p=>p.Pensioner_Email==pensioner.Pensioner_Email);
            if (PensionerExist!=null)
            {
                return StatusCode(409, "Pensioner Already Registered");
            }
            // var Admin = _dbContext.Admins.Find(1);
            // pensioner.Admin= Admin;
            var Newpensioner = new Pensioner();
            Newpensioner.Pensioner_Email=pensioner.Pensioner_Email;
            Newpensioner.Pensioner_Password = pensioner.Pensioner_Password;
            Newpensioner.First_name=pensioner.First_name;
            Newpensioner.Last_name=pensioner.Last_name;
            Newpensioner.Gender=pensioner.Gender;
            Newpensioner.DOB=pensioner.DOB;
            Newpensioner.DOJ=pensioner.DOJ;
            Newpensioner.Retirement_date=pensioner.Retirement_date;
            Newpensioner.Salary=pensioner.Salary;
            Newpensioner.AdminId=pensioner.AdminId;
            TimeSpan ts = pensioner.Retirement_date - pensioner.DOJ;
            if (ts.TotalDays / 365 > 20)
            {
                Newpensioner.PlanId = 1004;
            }
            else
            {
                Newpensioner.PlanId = 1005;
            }
           
           
            _dbContext.Pensioners.Add(Newpensioner);
            _dbContext.SaveChanges();
            return Ok("Pensioner Successfully Registered");
            
            
        }
        //PensionerLogin
        [HttpPost("[action]")]
        public IActionResult PensionerLogin(PensionerLogin pen) 
        {
            var Currentpensioner = _dbContext.Pensioners.FirstOrDefault(p => p.Pensioner_Email == pen.Email);
                
                   if(Currentpensioner==null)
                   {
                    return NotFound("Pensioner Not Found");
                   }
                   if(Currentpensioner.Pensioner_Password != pen.Password)
                   {
                    return NotFound("Incorrect Password");
                   }

                   var SecurityKey=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWT:KEY"]));
                   var Credentials=new SigningCredentials(SecurityKey,SecurityAlgorithms.HmacSha256);
            var Claims = new[]
            {
                       new Claim(ClaimTypes.Role,"Pensioner"),
                       new Claim(ClaimTypes.Email,pen.Email),
                       new Claim("PensionerId",(Currentpensioner.PensionerId).ToString()),
                   };
                   var token = new JwtSecurityToken(
                   issuer: _config["JWT:Issuer"],
                   audience: _config["JWT:Audience"],
                   claims: Claims,
                   expires: DateTime.Now.AddMinutes(60),
                   signingCredentials: Credentials);
                   var jwt = new JwtSecurityTokenHandler().WriteToken(token);
                   return Ok(new { Token = jwt, Message = "Pensioner Login Successfully" });      
        }
        //Getting Pensioner List
        //[Authorize(Roles = "Admin")]
        [HttpGet("PensionerList")]
        public IActionResult PensionerList()
        {
            var pensionerdetails = _dbContext.Pensioners.Select(p => new PensionerRegister
            {
                PensionerId=p.PensionerId,
                First_name = p.First_name,
                Last_name = p.Last_name,
                Gender = p.Gender,
                Pensioner_Email = p.Pensioner_Email,
                DOB = p.DOB,
                DOJ = p.DOJ,
                Retirement_date = p.Retirement_date,
                Salary = p.Salary,
                PlanId = p.PlanId,
            }).ToList();
            if (pensionerdetails.Count == 0)
            {
                return NotFound("No Pensioner Found");
            }

            return Ok(pensionerdetails);
        }
        //Getting Pensioner By Id
        [HttpGet("GettingPensionerByid")]
        public IActionResult PensionerListById(int Pensionerid)
        {
            Pensioner w = _dbContext.Pensioners.Find(Pensionerid);
            if(w == null)
            {
                return NotFound("Pensioner Not Found");
            }

            RetirementPlan RP = _dbContext.RetirementPlans.FirstOrDefault(r => r.PlanId == w.PlanId);
            if(RP == null)
            {
                return NotFound("Plan Not Found");
            }
           
            var pensionerdetails = _dbContext.Pensioners.Where(p => p.PensionerId == Pensionerid).Select(p => new PensionerDetails
            {   PensionerId=p.PensionerId,
                First_name = p.First_name,
                Last_name = p.Last_name,
                Gender = p.Gender,
                Pensioner_Email = p.Pensioner_Email,
                DOB = p.DOB,
                DOJ = p.DOJ,
                Retirement_date = p.Retirement_date,
                Salary = p.Salary,
                PlanId = p.PlanId,
                PlanName= RP.PlanName,
                PlanDescription= RP.PlanDescription,

            }).ToList();
            if (pensionerdetails.Count == 0)
            {
                return NotFound("No Pensioner Found");
            }
           
            return Ok(pensionerdetails);
        }
        //Update Pensioner Details
        [HttpPut("UpdatePensioner")]
        public IActionResult PensionerUpdate( PensionerRegister cp)
        {

            var CurrentPensioner = _dbContext.Pensioners.Find(cp.PensionerId);
            if (CurrentPensioner != null)
            {
                CurrentPensioner.PensionerId = cp.PensionerId;
                CurrentPensioner.First_name = cp.First_name;
                CurrentPensioner.Last_name = cp.Last_name;
                CurrentPensioner.Gender = cp.Gender;
                CurrentPensioner.Pensioner_Password = cp.Pensioner_Password;
                CurrentPensioner.DOB = cp.DOB;
                CurrentPensioner.DOJ = cp.DOJ;
                CurrentPensioner.Retirement_date = cp.Retirement_date;
                CurrentPensioner.Salary = cp.Salary;
                CurrentPensioner.AdminId = cp.AdminId;
                    _dbContext.SaveChanges();
                return Ok("Pensioner Updated Successfully");
            }
                return NotFound("Pensioner Not Found");

            
        }

        //Delete Pensioner 
        [Authorize(Roles ="Admin")]
        [HttpDelete("DeletePensioner/{id}")]
        public IActionResult PensionDelete(int id)
        {
            var pensionerlistbyid = _dbContext.Pensioners.Find(id);
            if(pensionerlistbyid == null)
            {
                return NotFound("Pensioner Not Found");
            }
            _dbContext.Pensioners.Remove(pensionerlistbyid);
            _dbContext.SaveChanges();
            return Ok("Pensioner Deleted Successfully");

        }
        [HttpGet("CheckingPlan")]
        public IActionResult CheckPlan(int PensionerId)
        {
            Pensioner w = _dbContext.Pensioners.Find(PensionerId);
            if (w == null)
            {
                return NotFound("Pensioner Not Found");
            }

            RetirementPlan RP = _dbContext.RetirementPlans.FirstOrDefault(r => r.PlanId == w.PlanId);
            if (RP == null)
            {
                return NotFound("Plan Not Found");
            }
            var plan= _dbContext.Pensioners.Where(p => p.PensionerId == PensionerId).Select(p => new RetirementPlandetails
            {
                PlanId = p.PlanId,
                PlanName = RP.PlanName,
                PlanDescription = RP.PlanDescription,
            }).ToList();
            if (plan.Count == 0)
            {
                return NotFound("No Plan Found");
            }

            return Ok(plan);


        } 





    }
    
}