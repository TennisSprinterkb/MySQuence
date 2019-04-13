DROP DATABASE IF EXISTS MySQuence;

CREATE DATABASE MySQuence;

USE MySQuence;

CREATE TABLE userObject (
    id INT AUTO_INCREMENT NOT NULL,	
    userName VARCHAR(30) NOT NULL,
    emailAddress VARCHAR(60) NOT NULL,
    passwordHash VARCHAR(60) NOT NULL,
    isTeacher BOOLEAN NOT NULL DEFAULT 0,
    certificationNumber VARCHAR(60) NULL,   
 PRIMARY KEY (id)
);

CREATE TABLE userSequence(
    id  INT  AUTO_INCREMENT NOT NULL PRIMARY KEY,
    userId INT NOT NULL,
    poseIds INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES userObject(id)
   );

CREATE TABLE poses(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY
    sanskrit_name VARCHAR(100) NOT NULL,
    english_name  VARCHAR(100) NOT NULL,
    translation   VARCHAR(100) NOT NULL,
    category      VARCHAR(60) NOT NULL,
    targetArea    VARCHAR(60) NOT NULL,
    cues          VARCHAR(255),
    blockId       INT(4),
    img_url       VARCHAR(68) NOT NULL,
);

CREATE TABLE poseBlocks(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    blockName VARCHAR(100) NOT NULL,
    poseIds INT NOT NULL,
    FOREIGN KEY (poseIds) REFERENCES poses(id)
   );
   



  


