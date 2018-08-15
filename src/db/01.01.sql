ALTER TABLE post ADD post_date DATETIME;
UPDATE post SET post_date = NOW();