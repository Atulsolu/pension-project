using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace PensionManagement1.Models
{
    public class Admin
    {
       
        [Key]
        public int AdminId { get; set; }

        [DisplayName("Admin Email")]
        [Required(ErrorMessage = "Please Provide Valid Email Id")]
        [EmailAddress]
        public string Admin_Email { get; set; }

        [DisplayName("Admin Password")]
        [MaxLength(16), MinLength(5)]
        [Required(ErrorMessage = "Password can`t be blank")]
        [PasswordPropertyText]
        public string Admin_Password { get; set; } 
        public ICollection<Pensioner> Pensioners { get; set; }
       
    }
}
