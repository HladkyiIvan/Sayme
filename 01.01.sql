ALTER TABLE Post ADD post_date DATETIME;
UPDATE Post SET post_date = NOW();