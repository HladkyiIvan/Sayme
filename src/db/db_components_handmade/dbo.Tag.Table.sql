USE SaymeDB 
GO
CREATE TABLE dbo.Tag  
   (id bigint PRIMARY KEY NOT NULL IDENTITY(1, 1),  
    name nvarchar(40) NOT NULL)  
GO