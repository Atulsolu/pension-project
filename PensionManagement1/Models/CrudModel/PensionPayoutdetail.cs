namespace PensionManagement1.Models.ViewModel
{
    public class PensionPayoutdetail
    {
        public int PayoutId { get; set; }
        public int PensionerId { get; set; }
        public int PayoutAmount { get; set; }
        public long TotalAmount { get; set; }
        public DateTime PayoutDate { get; set; }
    }
}
