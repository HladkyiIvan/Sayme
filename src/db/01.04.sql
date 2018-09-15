create table blacklist(
id_who BIGINT(20) NOT NULL,
id_whom BIGINT(20) NOT NULL,
PRIMARY KEY(id_who,id_whom)
)