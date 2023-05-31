using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace PensionManagement1.Models.DbsetModel
{
    public class Pensioner
    {


        [Key]
        public int PensionerId { get; set; }

        [DisplayName("Email")]
        [Required(ErrorMessage = "Please Provide Valid Email Id")]
        [EmailAddress]
        public string Pensioner_Email { get; set; }

        [DisplayName("Password")]
        [MaxLength(16), MinLength(5)]
        [Required(ErrorMessage = "Password can`t be blank")]
        [PasswordPropertyText]
        public string Pensioner_Password { get; set; }

        [DisplayName("First Name")]
        [Required(ErrorMessage = "First Name Can't be Blank")]
        [RegularExpression(@"^[A-Z][a-zA-Z]*$", ErrorMessage = "First letter should be Uppercase and no space between letters")]
        [MaxLength(15), MinLength(3)]
        public string First_name { get; set; }

        [DisplayName("Last Name")]
        [Required(ErrorMessage = "Last Name Can't be Blank")]
        [RegularExpression(@"^[A-Z][a-zA-Z]*$", ErrorMessage = "First letter should be Uppercase and no space between letters")]
        [MaxLength(15), MinLength(3)]
        public string Last_name { get; set; }

        [Required(ErrorMessage = "Please Provide Valid Date")]
        [DisplayName("Date Of Birth")]
        public DateTime DOB { get; set; }

        [DisplayName("Gender")]
        [Required(ErrorMessage = "Gender Can't be Blank")]
        public string Gender { get; set; }

        [Required(ErrorMessage = "Please Provide Valid Date")]
        [DisplayName("Date Of Joining")]
        public DateTime DOJ { get; set; }

        [Required(ErrorMessage = "Please Provide Valid Date")]
        [DisplayName("Date Of Retirement")]

        public DateTime Retirement_date { get; set; }

        [DisplayName("Salary Earned")]
        [Required(ErrorMessage = "Salary Earned can`t be blank")]
        public int Salary { get; set; }

        public ICollection<Beneficary> Beneficaries { get; set; }
        public ICollection<PensionPayout> PensionPayouts { get; set; }

        [ForeignKey("RetirementPlan")]
        public int PlanId { get; set; }
        public RetirementPlan RetirementPlan { get; set;}

        [ForeignKey("Admin")]
        public int AdminId { get; set; }
        public Admin Admin { get; set; }

    }
}
