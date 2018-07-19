USE SaymeDB 
GO
CREATE TABLE dbo.User
   (id bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,  
    login nvarchar(16) NOT NULL,
    password nvarchar(16) NOT NULL,
    bio nvarchar(256) NOT NULL,
    mail nvarchar(40) NOT NULL,
    active bit NOT NULL,
    avatar image NOT NULL)  
GO