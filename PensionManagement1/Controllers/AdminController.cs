using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using PensionManagement1.Context;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PensionManagement1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        //Making Object Of DBContext class
        PensionContext _dbContext=new PensionContext();

        //Eject IConfiguration for accessing details from  Appsetting.Json

        private IConfiguration _config;
        public AdminController(IConfiguration config)
        { 
            _config=config;
        }
        [HttpPost("[action]")]
       
        public IActionResult AdminLogin(string Email,string Password)
        {
            var CurrentAdmin=_dbContext.Admins.FirstOrDefault(a=>a.Admin_Email==Email);
            if(CurrentAdmin.Admin_Email != Email)
            {
                return NotFound("Admin Not Found");
            }
            if(CurrentAdmin.Admin_Password != Password)
            {
                return NotFound("Incorrect Password");
            }
            var SecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWT:Key"]));
            var Credntials = new SigningCredentials(SecurityKey, SecurityAlgorithms.HmacSha256);
            var Claims = new[]
            {
                new Claim(ClaimTypes.Email,Email),
            };
            var Token = new JwtSecurityToken(
                issuer: _config["JWT:Issuer"],
                audience: _config["JWT:Audience"],
                claims: Claims,
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: Credntials);
            var Jwt = new JwtSecurityTokenHandler().WriteToken(Token);
            return Ok(new { Token = Jwt, Message = "Admin Login Successfully" });

        }

    }
}
