# SQL Database Testing Portfolio - Militaria.pl Case Study

## 📌 Project Overview
This document presents a set of SQL queries designed to demonstrate how backend data integrity could be verified for an e-commerce platform like Militaria.pl. Since direct database access is restricted, these scenarios serve as a **technical simulation** of the queries a QA Engineer would execute to ensure that UI actions (like registration or profile updates) are correctly reflected in the database.

## 🛠️ Technical Context
* **Database Type:** Relational (MySQL)
* **Objective:** Verification of the User Account Lifecycle and GDPR compliance.
* **Scope:** Simulation based on a dedicated test account: `militaria@test.pl`.

---

## 🔍 Test Scenarios & Queries

### 1. Full Profile Retrieval
**Goal:** Verify if all user data fields are correctly populated after registration.
```sql
SELECT * FROM users
WHERE email = 'militaria@test.pl';
```

### 2. Account Status & Metadata Audit
**Goal:** Specific check of the account's activation status and timestamp to ensure the user is 'active' immediately after verification
```sql
SELECT email, is_active, created_at
FROM users
WHERE email = 'militaria@test.pl';
```

### 3. Record Uniqueness Validation
**Goal:** Use the COUNT function to ensure that no duplicate accounts exist for the same email address.
```sql
SELECT COUNT(*)
FROM users
WHERE email = 'militaria@test.pl';
```

### 4. Marketing Consent Verification
**Goal:** Validate if the 'newsletter_consent' flag in the database correctly reflects the user's choice in the UI.
```sql
SELECT email, newsletter_consent 
FROM users 
WHERE email = 'militaria@test.pl';
```

### 5. Data Cleanup (Post-Testing)
**Goal:** Verify the ability to remove a test user from the system to maintain database hygiene.
```sql
DELETE FROM users 
WHERE email = 'militaria@test.pl';
```

### 6. Inventory & Availability Validation
**Goal:** Verify if the system correctly filters products that are currently in stock within a specific category.
* **UI Action:** User filters for "Airsoft" category and "In Stock" products.
* **SQL Verification:**

```sql
SELECT product_name, category, stock_quantity 
FROM products 
WHERE category = 'AirSoft Gun' 
AND stock_quantity > 0;
```

### 7. Price Filter Accuracy (Range Testing)
**Goal:** Ensure the price range filter displays the correct products according to the database.
* **UI Action:** User sets a price filter between 200 PLN and 500 PLN.
* **SQL Verification:**
  
```sql
SELECT product_id, product_name, price 
FROM products 
WHERE price BETWEEN 200 AND 500 
ORDER BY price ASC;
```

### 8. User Registration Integrity
**Goal:** Verify that new user data is correctly stored in the database after a successful sign-up.
* **UI Action:** User completes the registration form
* **SQL Verification:**
  
```sql
SELECT user_id, email, registration_date 
FROM users 
WHERE email = 'militaria@test.pl';
```

### 9. Order Management System (OMS) Verification
**Goal:** Check the status of new orders to ensure they are correctly queued for processing.
* **UI Action:** User places an order.
* **SQL Verification:**
  
```sql
SELECT order_id, customer_id, status, total_amount 
FROM orders 
WHERE status = 'Pending' 
ORDER BY order_date DESC;
```

### 10. Relational Data Verification (Advanced Join)
**Goal:** Validate that orders are correctly linked to specific customers. This ensures relational integrity between tables.
* **SQL Verification:**
  
```sql
SELECT users.email, orders.order_id, orders.total_amount 
FROM users 
JOIN orders ON users.user_id = orders.customer_id 
WHERE users.email = 'militaria@test.pl';
```

