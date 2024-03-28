create database healthfund

use healthfund

create table members(memberid int identity primary key not null,
					id nvarchar not null,
					firstname nvarchar(50) not null,
					lastname nvarchar(50) not null,
					city nvarchar(50) null,
					street nvarchar(50) null,
					housenumber int null,
					birthdate date null,
					telephone nvarchar(20) null,
					cellphone nvarchar(20) null)

create table covid(id int identity primary key not null,
					memberid int foreign key references members(memberid) not null,
					dateofrecovery date null,
					dateofpositiveresult date null,
					dateofvaccination1 date null,
					typeofvaccination1 nvarchar(50) null,
					dateofvaccination2 date null,
					typeofvaccination2 nvarchar(50) null,
					dateofvaccination3 date null,
					typeofvaccination3 nvarchar(50) null,
					dateofvaccination4 date null,
					typeofvaccination4 nvarchar(50) null)