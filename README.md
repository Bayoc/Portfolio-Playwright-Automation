# PORTFOLIO
Hey, I am Bartłomiej Jabłonowski and this is my journey.

# ABOUT ME
I am an aspiring Manual QA Tester with a strong focus on ensuring software quality and a great user experience. My journey into testing stems from a natural curiosity about how things work and a keen eye for detail. I am passionate about finding bugs, documenting them clearly, and collaborating with developers to deliver polished products. Currently, I am expanding my skills in test case design, bug reporting and a little bit of automation 🤖. 

## 🛠️ Skills & Tools

### **Software Testing**
* **Manual Testing:** Functional, Regression, Smoke, and Exploratory Testing.
* **Test Management:** Jira, xRay, Confluence, Trello.
* **API Testing:** Postman.
* **Web Tools:** Chrome DevTools, HTML5, CSS3.

### **Technical & Automation**
* **Databases:** SQL (Basic queries, data verification).
* **Version Control:** Git, GitHub.
* **Test Automation:** Playwright, Java (Core).

---

## 🚀 Projects
### 🛒 E-commerce Manual Testing Project: Militaria.pl
A comprehensive manual testing project focused on functional and usability aspects of a major Polish e-commerce platform.

* **Objective:** To ensure a seamless user journey from product discovery to the final checkout process.
* **Scope:** Functional testing, UI/UX analysis, Cross-browser testing, and Mobile responsiveness.
* **Tools:** Jira (Bug Reporting), Chrome DevTools, Lighthouse (Performance).

#### 📁 Full Project Documentation
Everything related to this project is organized in the following documents:
* 📄 **[Google Sheets: Live Test Suite](https://docs.google.com/spreadsheets/d/1_gszuUNTEtNfG3AQptmJbks0TZzhoaXkgLZSZ03MdS8/edit?gid=0#gid=0)** – The "master" file with interactive Test Cases and execution status.
* 📋 **[Test Plan (Markdown Version)](./MILITARIA_PROJECT/TESTS/TEST_PLAN_MILITARIA.md)** – Detailed strategy, scope, and environment details.
* 📊 **[Test Summary Report](./MILITARIA_PROJECT/TESTS/MILIATARIA_TESTS_SUMMARY.md)** – High-level execution results and quality assessment.
* 🐞 **[Bug Reports Portfolio](./MILITARIA_PROJECT/TESTS/BUGS)** – (Optional: if you have a separate file for JIRA screenshots).

**Key Activities:**
* Designed **5 Test Scenarios** and **30+ Test Cases** covering Happy Paths, Edge Cases, and Social Logins.
* Performed **Exploratory Testing** on the search engine and filtering system.
* Verified **Responsive Design** on mobile viewports using Chrome DevTools.
* Documented defects with clear reproduction steps and severity levels in **Jira**.

---
---

### 🧪 API Testing Project: Restful-Booker Collection
A specialized API testing suite designed to verify CRUD (Create, Read, Update, Delete) operations within a reservation system.

* **Objective:** To validate backend logic, data integrity, and authentication flows using automated scripts.
* **Environment:** [Restful-Booker API](https://restful-booker.herokuapp.com/)
* **Tools:** Postman, JavaScript (Postman Sandbox), JSON.

#### 📁 API Documentation & Resources
* 📁 **[Postman Collection (JSON Export)](./API/Restful_Booker_Collection.json)** – Import this into Postman to see the full test suite.
* 📋 **[API Test Plan](./API/API_TEST_PLAN.md)** – Documentation of endpoints, test data, and expected status codes.

#### ⚙️ Technical Highlights
* **Dynamic Request Chaining:** Implemented an automated flow where the `bookingid` is extracted from a `POST` response and passed as a variable `{{bookingid}}` to subsequent `GET`, `PUT`, and `DELETE` requests.
* **Automated Assertions:** Developed JavaScript scripts to verify:
    * **Response Integrity:** Checking if data types (e.g., numbers vs strings) match the documentation.
    * **Status Code Validation:** Ensuring 200 OK for success and 401/403 for unauthorized access attempts.
    * **Schema Verification:** Validating the structure of JSON objects.
* **Authentication Flow:** Implemented automated token generation (`/auth`) to allow secure updates and deletions.
* 
### 🛠️ How to run the API tests:
1.  **Import:** In Postman, click "Import" and select both `.json` files (Collection and Environment).
2.  **Environment:** Select the `Restful-Booker-Env` from the environment dropdown in the top-right corner.
3.  **Run:** Open the **Collection Runner**, select the collection, and click "Run Restful-Booker". 
4.  **Note:** The suite is fully automated – it generates its own Auth Token and passes the `bookingid` between requests.

---
