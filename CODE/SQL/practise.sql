CREATE TABLE WorldDemographics(
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    Gender VARCHAR(50),
    Place VARCHAR(50)
);

INSERT into WorldDemographics
VALUES('Harsh', 'Vardhan', 24, 'Male', 'New Delhi'),
('Pricita', 'Jain', 23, 'Female', 'Ranchi'),
('Dheeraj', 'Jadoun', 25, 'Male', 'Jaitpur'),
('Aditi', 'Srivastava', 27, 'Female', 'Lucknow'),
('Utkarsh', 'Mishra', 25, 'Male', 'Ranchi'),
('Diljit', 'Dosanjh', 30, 'Male', 'Amritsar'),
('Nandini', 'Vyas', 24, 'Female', 'New Delhi')


SELECT * FROM WorldDemographics;
