# Test Plan: E-commerce Platform (Militaria.pl) 📑

## 1. Introduction
The purpose of this document is to outline the strategy and scope for manual testing of the Militaria.pl online store. The goal is to verify the core functionalities and ensure a bug-free user experience.

## 2. Test Scope 🔍
### In Scope:
* **User Authentication:** Registration, Login, and Password Recovery.
* **Product Search:** Keywords, categories, and filtering system.
* **Shopping Cart:** Adding/removing items, quantity updates.
* **Checkout Process:** Delivery methods, payment selection (up to the payment gateway).
* **Responsive Design:** Mobile and desktop views.

### Out of Scope:
* Backend database performance testing.
* Actual financial transactions (real payments).
* External API integrations (e.g., courier tracking systems).

## 3. Test Strategy 🛠️
* **Types of testing:** Functional, Usability, Regression, and Smoke Testing.
* **Approaches:**
    * **Black Box Testing:** Testing without looking at the internal code.
    * **Exploratory Testing:** Unstructured testing to find edge cases.
* **Environment:**
    * Browsers: Chrome, Firefox.
    * Devices: Desktop (Windows 11), Mobile (Android/iOS via DevTools).

## 4. Entry & Exit Criteria ✅
* **Entry:** The website is stable and accessible in the staging/production environment.
* **Exit:** All planned test cases are executed. All "Critical" and "Major" bugs are documented and reported.

## 5. Tools ⚙️
* **Management:** Jira / Trello.
* **Documentation:**  Google Sheets.
* **Debugging:** Chrome DevTools.
* **API:** Postman.

## 6. Deliverables 📦
* Test Plan (this document).
* Test Case Specification (spreadsheet).
* Bug Reports (Jira dashboard screenshots).
* Final Test Summary Report.

## 7. Risk Assessment ⚠️
* **Risk:** Frequent changes in the live production environment.
* **Mitigation:** Focus on core "Happy Path" scenarios first.
