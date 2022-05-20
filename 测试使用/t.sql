CREATE TABLE subject
(
    subjectName VARCHAR(20),
    subjectId VARCHAR(10) PRIMARY KEY,
    subjectStart timestamp,
    subjectEnd timestamp NULL
);

CREATE TABLE firstSubject 
(
    firstSubjectName VARCHAR(30),
    subjectId VARCHAR(10) REFERENCES subject(subjectId),
    firstSubjectId VARCHAR(20) PRIMARY KEY,
    firstSubjectStart timestamp,
    firstSubjectEnd timestamp NULL
);

CREATE TABLE secondSubject 
(
    secondSubjectName VARCHAR(30),
    firstSubjectId VARCHAR(20) REFERENCES firstSubject(firstSubjectId),
    secondSubjectId VARCHAR(30) PRIMARY KEY,
    secondSubjectStart timestamp,
    secondSubjectEnd timestamp NULL
);

CREATE TABLE thirdSubject 
(
    thirdSubjectName VARCHAR(30),
    secondSubjectId VARCHAR(30) REFERENCES secondSubject(secondSubjectId),
    thirdSubjectId VARCHAR(40) PRIMARY KEY,
    thirdSubjectStart timestamp,
    thirdSubjectEnd timestamp NULL
);


INSERT INTO subject (
    subjectName,
    subjectId,
    subjectStart
)
VALUES (
    '理学',
    '07',
    '2000-03-06 00:00:00'
),
(
    '工学',
    '08',
    '2000-03-06 00:00:00'
),
(
    '农学',
    '09',
    '2000-03-06 00:00:00'
);


INSERT INTO firstSubject (
    firstSubjectName,
    subjectId,
    firstSubjectId,
    firstSubjectStart
)
VALUES (
    '控制科学与工程',
    '08',
    '0811',
    '2000-03-06 00:00:00'
), (
    '计算机科学与技术',
    '08',
    '0812',
    '2000-03-06 00:00:00'
), (
    '建筑学',
    '08',
    '0813',
    '2000-03-06 00:00:00'
);


INSERT INTO secondSubject (
    secondSubjectName,
    firstSubjectId,
    secondSubjectId,
    secondSubjectStart,
    secondSubjectEnd
) 
VALUES (
    '计算机系统结构',
    '0812',
    '081201',
    '2000-03-06 00:00:00',
    '2099-06-06 00:00:00'
),
(
    '计算机系统结构',
    '0812',
    '081202',
    '2000-03-06 00:00:00',
    '2099-06-06 00:00:00'
),
(
    '计算机应用技术',
    '0812',
    '081203',
    '2000-03-06 00:00:00',
    '2010-10-01 00:00:00'
);

INSERT INTO thirdSubject (
    thirdSubjectName,
    secondSubjectId,
    thirdSubjectId,
    thirdSubjectStart,
    thirdSubjectEnd
) 
VALUES (
    '嵌入式软件',
    '081202',
    '08120201',
    '2000-03-06 00:00:00',
    '2010-10-01 00:00:00'
);

DELETE FROM thirdSubject
WHERE thirdSubjectEnd <= now();

DELETE FROM secondSubject
WHERE secondSubjectEnd <= now();

DELETE FROM firstSubject
WHERE firstSubjectEnd <= now();

DELETE FROM subject
WHERE subjectEnd <= now();


CREATE TABLE fourthSubject 
(
    fourthSubjectName VARCHAR(30),
    thirdSubjectId VARCHAR(40) REFERENCES thirdSubject(thirdSubjectId),
    fourthSubjectId VARCHAR(50) PRIMARY KEY,
    fourthSubjectStart timestamp,
    fourthSubjectEnd timestamp NULL
);

INSERT INTO firstSubject (
    firstSubjectName,
    subjectId,
    firstSubjectId,
    firstSubjectStart,
    firstSubjectEnd
)
SELECT subjectName,
    '08',
    '0814',
    subjectStart,
    subjectEnd
FROM subject
WHERE subjectId = '09';

DELETE FROM subject
WHERE subjectId = '09';



INSERT INTO secondSubject (
    secondSubjectName,
    firstSubjectId,
    secondSubjectId,
    secondSubjectStart,
    secondSubjectEnd
) 
VALUES (
    '计算机软件与理论',
    '0812',
    '081204',
    '2000-03-06 00:00:00',
    '2099-06-06 00:00:00'
);


INSERT INTO thirdSubject (
    thirdSubjectName,
    secondSubjectId,
    thirdSubjectId,
    thirdSubjectStart,
    thirdSubjectEnd
) 
VALUES (
    '嵌入式软件',
    '081202',
    '08120201',
    '2000-03-06 00:00:00',
    '2099-10-01 00:00:00'
);

UPDATE thirdSubject
SET thirdSubjectId = '08120401'
WHERE secondSubjectId = '081202';

UPDATE secondSubject
SET secondSubjectName = '软件工程'
WHERE secondSubjectId = '081202';


INSERT INTO secondSubject (
    secondSubjectName,
    firstSubjectId,
    secondSubjectId,
    secondSubjectStart,
    secondSubjectEnd
) 
VALUES (
    '计算机英语',
    '0812',
    '081205',
    '2000-03-06 00:00:00',
    '2009-06-06 00:00:00'
);

SELECT secondSubjectName
FROm secondSubject
WHERE secondSubjectEnd <= '2010-11-02 00:00:00';

UPDATE secondSubject
SET secondSubjectId= '081206'
WHERE secondSubjectId = '081205';