@echo off
sqlcmd -i %cd%\init.sql
sqlcmd -i %cd%\dbo.Users.Table.sql
sqlcmd -i %cd%\dbo.Post.Table.sql 
sqlcmd -i %cd%\dbo.Tag.Table.sql
sqlcmd -i %cd%\dbo.Comment.Table.sql 
sqlcmd -i %cd%\dbo.TagPost.Table.sql     
sqlcmd -i %cd%\dbo.SearchTag.Table.sql
sqlcmd -i %cd%\dbo.SearchPost.Table.sql
sqlcmd -i %cd%\dbo.SearchComment.Table.sql
sqlcmd -i %cd%\dbo.LikeComment.Table.sql
sqlcmd -i %cd%\dbo.LikePost.Table.sql
sqlcmd -i %cd%\dbo.Following.Table.sql 
pause            