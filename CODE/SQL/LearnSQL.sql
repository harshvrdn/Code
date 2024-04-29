CREATE TABLE EmployeeDetails(
    EmpCode INT,
    First_Name VARCHAR(50),
    Last_Name VARCHAR(50),
    Age INT,
    Gender VARCHAR(50),
    Designation VARCHAR(50),
    Emp_Location VARCHAR(50)
);

INSERT INTO EmployeeDetails
VALUES(001, 'Harsh', 'Vardhan',24, 'Male', 'Analyst', 'Gurugram'),
(002, 'Nandini', 'Singh', 24, 'Female', 'Analyst', 'Gurugram'),
(003, 'Shrishti', 'Verma', 25, 'Female', 'Finance', 'Mumbai'),
(004, 'Radhika', 'Dev', 30, 'Female', 'Finance Lead', 'Hyderabad'),
(005, 'Diskha', 'Pradhan', 26, 'Female', 'Content Designer', 'Bangalore'),
(006, 'Hari', 'Rathore', 24, 'Male', 'Analyst', 'Chennai'),
(007, 'Mrinal', 'Pathak', 27, 'Female', 'Business Manager', 'Gurugram'),
(008, 'Raju', 'Rastogi', 24, 'Male', 'Engineer', 'Hyderabad'),
(009, 'Jaya', 'Gonda', 31, 'Female', 'Team Lead', 'Bangalore'),
(010, 'Aakriti', 'Singh', 25, 'Female', 'Data Engineer', 'Chennai');

CREATE TABLE EmployeeSalary(
    EmpCode INT,
    First_Name VARCHAR(50),
    Designation VARCHAR(50),
    Salary INT
);


INSERT INTO EmployeeSalary
VALUES(001, 'Harsh', 'Analyst', 600000),
(002, 'Nandini', 'Analyst', 600000),
(003, 'Shrishti', 'Finance', 650000),
(004, 'Radhika', 'Finance Lead', 1300000),
(005, 'Diskha', 'Content Designer', 500000),
(006, 'Hari', 'Analyst', 600000),
(007, 'Mrinal', 'Business Manager', 800000),
(008, 'Raju', 'Engineer', 700000),
(011, 'Indu', 'Team Lead', 1400000),
(012, 'Ayush', 'Data Engineer', 800000);


SELECT EmpCode, First_Name, Designation
FROM EmployeeDetails
UNION
SELECT EmpCode, First_Name, Designation
FROM EmployeeSalary; 

UPDATE EmployeeDetails
SET First_Name = 'Diksha'
Where Designation = 'Content Designer';


UPDATE EmployeeSalary
SET First_Name = 'Diksha'
Where Designation = 'Content Designer';

CREATE TABLE GroundStaff(
    EmpCode INT,
    First_Name VARCHAR(50),
    Last_Name VARCHAR(50),
    Gender VARCHAR(50),
    Age INT,
    Designation VARCHAR(50),
    Work_Location VARCHAR(50)
);

INSERT INTO GroundStaff
Values(011, 'Ravi', 'Shankar', 'Male', 54, 'Director', 'Gurugram'),
(012, 'Shanti', 'Priya', 'Female', 44, 'Regional Head', 'Gurugram'),
(013, 'Shruthi', 'Sahiti', 'Female', 38, 'Finance Head', 'Mumbai'),
(014, 'Rashik', 'Deva', 'Male', 30, 'Finance Lead', 'Hyderabad'),
(015, 'Diksha', 'Pant', 'Female', 46, 'Director', 'Bangalore');

SELECT *
FROM GroundStaff;
UNION
SELECT
FROM EmployeeDetails;

SELECT DISTINCT(Designation)
FROM EmployeeDetails
Where Gender = 'Male';

SELECT First_Name, Age, Gender, Designation, EmpCode
FROM EmployeeDetails
WHERE First_Name like 'ar%';


CREATE procedure Bigg_Salary()
SELECT *
FROM EmployeeSalary
Where Salary > '800000';


Call Bigg_Salary();


CREATE procedure Bigg_Salary2()
Begin 
    SELECT *
    FROM EmployeeSalary
    Where Salary > 800000;
    SELECT *
    FROM EmployeeSalary
    WHERE Salary > 600000;
End;

Call Bigg_Salary2();

CREATE procedure Bigg_Salary3()
Begin 
    SELECT *
    FROM EmployeeSalary
    Where Salary > 800000;
    SELECT *
    FROM EmployeeDetails
    WHERE Age > 29;
End;

Call Bigg_Salary3();

CREATE procedure Bigg_Salary4(empId INT)
Begin
    SELECT First_Name,Designation, Salary
    FROM EmployeeSalary
    Where EmpCode = empId;
End

Call Bigg_Salary4(2);

CREATE procedure Bigg_Salary5(empId INT)
Begin
    SELECT First_Name,Designation, Salary
    FROM EmployeeSalary
    Where EmpCode = empId;
End


Call Bigg_Salary5(3);


CREATE TRIGGER EmpUpdate
    AFTER INSERT ON EmployeeSalary
    FOR EACH ROW
BEGIN
    INSERT INTO EmployeeDetails (EmpCode, First_Name, Designation)
    VALUES(new.EmpCode, new.First_Name, new.Designation);
END 


INSERT INTO EmployeeSalary
VALUES(015, 'Rajendra', 'President', 10000000),
(016, 'Mahendra', 'Director', 20000000),
(017, 'Raghuveer', 'Senior Consultant', 15000000);


SELECT *
FROM EmployeeSalary;

SELECT *
FROM EmployeeDetails;

CREATE EVENT EMPDELETION
ON SCHEDULE EVERY 30 SECOND
DO 
BEGIN
    DELETE
    FROM EmployeeDetails
    WHERE Age > 30;
END

CREATE EVENT OLD_EMP_DELETION
ON SCHEDULE EVERY 30 SECOND
DO 
BEGIN
    DELETE
    FROM EmployeeDetails
    WHERE Age > 30;
END


SHOW VARIABLES LIKE 'event%';