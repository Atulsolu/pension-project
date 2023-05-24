using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using PensionManagement1.Context;
using PensionManagement1.Models;
using PensionManagement1.Controllers.emptyclass;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;
using System.Reflection;

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
        public IActionResult PensionerRegister([FromBody] Pensioner pensioner)
        {
            var PensionerExist=_dbContext.Pensioners.FirstOrDefault(p=>p.Pensioner_Email==pensioner.Pensioner_Email);
            if (PensionerExist!=null)
            {
                return BadRequest("Pensioner Alraedy Exist");
            }
            var Admin = _dbContext.Admins.Find(1);
            pensioner.Admin= Admin;
            _dbContext.Pensioners.Add(pensioner);
            _dbContext.SaveChanges();
            return Ok("Pensioner Successfully Registered");
        }
        //PensionerLogin
        [HttpPost("[action]")]
        public ActionResult PensionerLogin([FromBody]PensionerLogin pensioner) 
        {
            var Currentpensioner = _dbContext.Pensioners.FirstOrDefault(p => p.Pensioner_Email == pensioner.email && p.Pensioner_Password == pensioner.password);
                
                   if(Currentpensioner==null)
                   {
                    return NotFound("Pensioner Not Exist");
                   }
                   if(Currentpensioner.Pensioner_Password != pensioner.password)
                   {
                    return NotFound("Incorrect Password");
                   }

                   var SecurityKey=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWT:KEY"]));
                   var Credentials=new SigningCredentials(SecurityKey,SecurityAlgorithms.HmacSha256);
                   var Claims=new[]
                   {
                       new Claim(ClaimTypes.Email,pensioner.email)
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
        [HttpGet("PensionerList")]
        public IActionResult PensionerList()
        {
            var pensionerlist= _dbContext.Pensioners.ToList();
            return Ok(pensionerlist);
        }
        //Getting Pensioner By Id
        [HttpGet("{GettingPensionerByid}")]
        public IActionResult PensionerListById(int id)
        {
           
            var pensionerdetails = _dbContext.Pensioners.Where(p => p.PensionerId == id).Select(p => new PensionerDetails
            {
                First_name = p.First_name,
                Last_name = p.Last_name,
                Gender = p.Gender,
                Pensioner_Email = p.Pensioner_Email,
                DOB = p.DOB,
                DOJ = p.DOJ,
                Retirement_date = p.Retirement_date,
                Salary = p.Salary,
            }).ToList();
            if (pensionerdetails.Count == 0)
            {
                return NotFound("No Pensioner Found");
            }
           
            return Ok(pensionerdetails);
        }
        [HttpPut("UpdatePensioner")]
        public IActionResult PensionerUpdate(int id,[FromBody]Pensioner pensioner)
        {
            var CurrentPensioner=_dbContext.Pensioners.Find(id);
            pensioner.First_name = pensioner.First_name;
            pensioner.Last_name=pensioner.Last_name;
            pensioner.Gender = pensioner.Gender;
            pensioner.Pensioner_Email = pensioner.Pensioner_Email;
            pensioner.DOB = pensioner.DOB;
            pensioner.DOJ = pensioner.DOJ;
            pensioner.Retirement_date = pensioner.Retirement_date;
            pensioner.Salary = pensioner.Salary;
            _dbContext.SaveChanges();
            return Ok("Pensioner Updated Successfully");


        }
        [HttpDelete("DeletePensioner")]
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


    }
    
}