USE SaymeDB 
GO
CREATE TABLE dbo.SearchPost 
   (id_tag bigint PRIMARY KEY NOT NULL,  
    counter bigint NOT NULL)
GO
ALTER TABLE dbo.SearchTag  WITH CHECK ADD  CONSTRAINT FK_SearchTag_Tag FOREIGN KEY(id_tag)
REFERENCES dbo.Tag (id)
GO
ALTER TABLE dbo.SearchTag CHECK CONSTRAINT FK_SearchTag_Tag
GO  
