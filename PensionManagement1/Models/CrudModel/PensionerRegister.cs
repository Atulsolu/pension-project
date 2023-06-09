﻿using System.Text.Json.Serialization;

namespace PensionManagement1.Models.ViewModel
{
    public class PensionerRegister
    {
        public int PensionerId { get; set; }
        public string First_name { get; set; }
        public string Last_name { get; set; }
        public string Pensioner_Email { get; set; }
        public string Pensioner_Password { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; }
        public DateTime DOJ { get; set; }
        public DateTime Retirement_date { get; set; }
        public int Salary { get; set; }

        public int AdminId { get; set; } = 1;
        [JsonIgnore]
        public int PlanId { get; set; }


    }
}
