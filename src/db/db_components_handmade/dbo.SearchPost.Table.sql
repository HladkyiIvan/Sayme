USE SaymeDB 
GO
CREATE TABLE dbo.SearchPost 
   (id_post bigint PRIMARY KEY NOT NULL,  
    likes int NOT NULL)  
GO
ALTER TABLE dbo.SearchPost  WITH CHECK ADD  CONSTRAINT FK_SearchPost_Post FOREIGN KEY(id_post)
REFERENCES dbo.Post (id)
GO
ALTER TABLE dbo.SearchPost CHECK CONSTRAINT FK_SearchPost_Post
GO   