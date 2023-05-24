using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PensionManagement1.Migrations
{
    /// <inheritdoc />
    public partial class CreateDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    AdminId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Admin_Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Admin_Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.AdminId);
                });

            migrationBuilder.CreateTable(
                name: "Pensioners",
                columns: table => new
                {
                    PensionerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pensioner_Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pensioner_Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    First_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Last_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOJ = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Retirement_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Salary = table.Column<int>(type: "int", nullable: false),
                    AdminId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pensioners", x => x.PensionerId);
                    table.ForeignKey(
                        name: "FK_Pensioners_Admins_AdminId",
                        column: x => x.AdminId,
                        principalTable: "Admins",
                        principalColumn: "AdminId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Beneficaries",
                columns: table => new
                {
                    BeneficaryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BeneficaryFirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BeneficaryLastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Relation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PensionerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Beneficaries", x => x.BeneficaryId);
                    table.ForeignKey(
                        name: "FK_Beneficaries_Pensioners_PensionerId",
                        column: x => x.PensionerId,
                        principalTable: "Pensioners",
                        principalColumn: "PensionerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PensionPayouts",
                columns: table => new
                {
                    PayoutId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PayoutAmount = table.Column<int>(type: "int", nullable: false),
                    PayoutDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PensionerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PensionPayouts", x => x.PayoutId);
                    table.ForeignKey(
                        name: "FK_PensionPayouts_Pensioners_PensionerId",
                        column: x => x.PensionerId,
                        principalTable: "Pensioners",
                        principalColumn: "PensionerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RetirementPlans",
                columns: table => new
                {
                    PlanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlanName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PlanType = table.Column<int>(type: "int", nullable: false),
                    PensionerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RetirementPlans", x => x.PlanId);
                    table.ForeignKey(
                        name: "FK_RetirementPlans_Pensioners_PensionerId",
                        column: x => x.PensionerId,
                        principalTable: "Pensioners",
                        principalColumn: "PensionerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Beneficaries_PensionerId",
                table: "Beneficaries",
                column: "PensionerId");

            migrationBuilder.CreateIndex(
                name: "IX_Pensioners_AdminId",
                table: "Pensioners",
                column: "AdminId");

            migrationBuilder.CreateIndex(
                name: "IX_PensionPayouts_PensionerId",
                table: "PensionPayouts",
                column: "PensionerId");

            migrationBuilder.CreateIndex(
                name: "IX_RetirementPlans_PensionerId",
                table: "RetirementPlans",
                column: "PensionerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Beneficaries");

            migrationBuilder.DropTable(
                name: "PensionPayouts");

            migrationBuilder.DropTable(
                name: "RetirementPlans");

            migrationBuilder.DropTable(
                name: "Pensioners");

            migrationBuilder.DropTable(
                name: "Admins");
        }
    }
}
