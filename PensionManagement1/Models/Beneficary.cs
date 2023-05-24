using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PensionManagement1.Models
{
    public class Beneficary
    {
        
        [Key]
        public int BeneficaryId { get; set; }

        [DisplayName("First Name")]
        [Required(ErrorMessage = "First Name Can't be Blank")]
        [RegularExpression(@"^[A-Z][a-zA-Z]*$", ErrorMessage = "First letter should be Uppercase and no space between letters")]
        [MaxLength(15), MinLength(3)]
        public string BeneficaryFirstName { get; set; }

        [DisplayName("Last Name")]
        [Required(ErrorMessage = "Last Name Can't be Blank")]
        [RegularExpression(@"^[A-Z][a-zA-Z]*$", ErrorMessage = "First letter should be Uppercase and no space between letters")]
        [MaxLength(15), MinLength(3)]
        public string BeneficaryLastName { get; set; }

        [DisplayName("Relationship With Pensioner")]
        [Required(ErrorMessage = "Relation Can't be Blank")]
        public string Relation { get; set; }

        [ForeignKey("Pensioner")]
        public int PensionerId { get; set; }
        public Pensioner Pensioner { get; set; } 
    }
}
