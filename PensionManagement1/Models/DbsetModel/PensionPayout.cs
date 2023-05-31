using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PensionManagement1.Models.DbsetModel;

namespace PensionManagement1.Models
{
    public class PensionPayout
    {
       
        [Key]
        public int PayoutId { get; set; }
        public int PayoutAmount { get; set;} 
        public long TotalAmount { get; set; }
        public DateTime PayoutDate { get; set;}

        [ForeignKey("Pensioner")]
        public int PensionerId { get; set;}
        public Pensioner Pensioner { get; set; } 

    }
}
