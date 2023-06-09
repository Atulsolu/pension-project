﻿namespace PensionManagement1.Models.CrudModel
{
    public class PensionerDetails
    {
        public int PensionerId { get; set; }
        public string First_name { get; set; }
        public string Last_name { get; set; }
        public string Pensioner_Email { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; }
        public DateTime DOJ { get; set; }
        public DateTime Retirement_date { get; set; }
        public int Salary { get; set; }
        public int PlanId { get; set; }

        public string PlanName { get; set; }
        public string PlanDescription { get; set; }

    }
}
