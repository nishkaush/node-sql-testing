-- CREATE TABLE users(
--   email VARCHAR(255) PRIMARY KEY,
--   created_at TIMESTAMP DEFAULT NOW()
-- );

-- INSERT INTO users(email) VALUES('sana@sana.com'),("saba@saba.com");

-- CHALLENGE 1:
-- SELECT created_at AS earliest_date FROM users ORDER BY created_at DESC LIMIT 1;


-- CHALLENGE 2:
-- SELECT email,created_at FROM users ORDER BY created_at LIMIT 1;

-- CHALLENGE 3:
-- SELECT MONTHNAME(created_at) AS month,COUNT(*) FROM users 
-- GROUP BY month ORDER BY COUNT(*) DESC;

-- CHALLENGE 4:
-- SELECT COUNT(*) FROM users 
-- WHERE email NOT LIKE "%@yahoo.com%"&&"%@gmail.com%"&&"%@hotmail.com%";

-- CHALLENGE 5:
-- SELECT (CASE WHEN email LIKE '%@yahoo.com%' THEN 'yahoo'
--              WHEN email LIKE '%@gmail.com%' THEN 'gmail'
--              WHEN email LIKE '%hotmail.com%' THEN 'hotmail'
--              ELSE "Other"
--         END) as provider , COUNT(*)
-- FROM users
-- GROUP BY provider;

-- =================================================

