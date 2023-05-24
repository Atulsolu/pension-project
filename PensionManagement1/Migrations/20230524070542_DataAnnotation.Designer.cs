﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PensionManagement1.Context;

#nullable disable

namespace PensionManagement1.Migrations
{
    [DbContext(typeof(PensionContext))]
    [Migration("20230524070542_DataAnnotation")]
    partial class DataAnnotation
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("PensionManagement1.Models.Admin", b =>
                {
                    b.Property<int>("AdminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AdminId"));

                    b.Property<string>("Admin_Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Admin_Password")
                        .IsRequired()
                        .HasMaxLength(16)
                        .HasColumnType("nvarchar(16)");

                    b.HasKey("AdminId");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("PensionManagement1.Models.Beneficary", b =>
                {
                    b.Property<int>("BeneficaryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BeneficaryId"));

                    b.Property<string>("BeneficaryFirstName")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("BeneficaryLastName")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<int>("PensionerId")
                        .HasColumnType("int");

                    b.Property<string>("Relation")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BeneficaryId");

                    b.HasIndex("PensionerId");

                    b.ToTable("Beneficaries");
                });

            modelBuilder.Entity("PensionManagement1.Models.PensionPayout", b =>
                {
                    b.Property<int>("PayoutId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PayoutId"));

                    b.Property<int>("PayoutAmount")
                        .HasColumnType("int");

                    b.Property<DateTime>("PayoutDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("PensionerId")
                        .HasColumnType("int");

                    b.HasKey("PayoutId");

                    b.HasIndex("PensionerId");

                    b.ToTable("PensionPayouts");
                });

            modelBuilder.Entity("PensionManagement1.Models.Pensioner", b =>
                {
                    b.Property<int>("PensionerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PensionerId"));

                    b.Property<int>("AdminId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DOB")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DOJ")
                        .HasColumnType("datetime2");

                    b.Property<string>("First_name")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Last_name")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("Pensioner_Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pensioner_Password")
                        .IsRequired()
                        .HasMaxLength(16)
                        .HasColumnType("nvarchar(16)");

                    b.Property<DateTime>("Retirement_date")
                        .HasColumnType("datetime2");

                    b.Property<int>("Salary")
                        .HasColumnType("int");

                    b.HasKey("PensionerId");

                    b.HasIndex("AdminId");

                    b.ToTable("Pensioners");
                });

            modelBuilder.Entity("PensionManagement1.Models.RetirementPlan", b =>
                {
                    b.Property<int>("PlanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PlanId"));

                    b.Property<int>("PensionerId")
                        .HasColumnType("int");

                    b.Property<string>("PlanName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PlanType")
                        .HasColumnType("int");

                    b.HasKey("PlanId");

                    b.HasIndex("PensionerId");

                    b.ToTable("RetirementPlans");
                });

            modelBuilder.Entity("PensionManagement1.Models.Beneficary", b =>
                {
                    b.HasOne("PensionManagement1.Models.Pensioner", "Pensioner")
                        .WithMany("Beneficaries")
                        .HasForeignKey("PensionerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pensioner");
                });

            modelBuilder.Entity("PensionManagement1.Models.PensionPayout", b =>
                {
                    b.HasOne("PensionManagement1.Models.Pensioner", "Pensioner")
                        .WithMany("PensionPayouts")
                        .HasForeignKey("PensionerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pensioner");
                });

            modelBuilder.Entity("PensionManagement1.Models.Pensioner", b =>
                {
                    b.HasOne("PensionManagement1.Models.Admin", "Admin")
                        .WithMany("Pensioners")
                        .HasForeignKey("AdminId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Admin");
                });

            modelBuilder.Entity("PensionManagement1.Models.RetirementPlan", b =>
                {
                    b.HasOne("PensionManagement1.Models.Pensioner", "Pensioner")
                        .WithMany("RetirementPlans")
                        .HasForeignKey("PensionerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pensioner");
                });

            modelBuilder.Entity("PensionManagement1.Models.Admin", b =>
                {
                    b.Navigation("Pensioners");
                });

            modelBuilder.Entity("PensionManagement1.Models.Pensioner", b =>
                {
                    b.Navigation("Beneficaries");

                    b.Navigation("PensionPayouts");

                    b.Navigation("RetirementPlans");
                });
#pragma warning restore 612, 618
        }
    }
}
