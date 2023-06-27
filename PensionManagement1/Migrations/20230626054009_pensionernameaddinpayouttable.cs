using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PensionManagement1.Migrations
{
    /// <inheritdoc />
    public partial class pensionernameaddinpayouttable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PensionerName",
                table: "PensionPayouts",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PensionerName",
                table: "PensionPayouts");
        }
    }
}
