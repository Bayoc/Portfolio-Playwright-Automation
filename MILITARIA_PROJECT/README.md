# Portfolio: Search Suggestions Functional Testing - Militaria.pl

## 📌 Project Overview
This project involves comprehensive manual functional testing of the search suggestion mechanism (dropdown) on the Militaria.pl e-commerce platform. The primary objective was to verify the search engine's stability regarding typos, special characters, and case sensitivity.

## 🛠 Tech Stack & Tools
* **Google Sheets:** Test Case Documentation and Execution.
* **Jira:** Defect Management and Bug Reporting.
* **GitHub:** Portfolio Hosting and Test Summary Reporting.

## 📋 Test Documentation
The complete set of Test Cases, including execution steps and status, can be found here:
👉 [Link to Google Sheets (Test Case Suite)](YOUR_LINK_HERE)

### Tested Scenarios:
1. **SC1-03:** Handling of typos and common misspellings.
2. **SC1-05:** Search queries containing special characters (e.g., #, @).
3. **SC1-06:** Behavior with empty search input.
4. **SC1-07:** Real-time suggestions based on category names.
5. **SC1-08:** Case sensitivity and mixed-case query resilience.

## 🐛 Defect Management (Jira)
A significant bug was identified regarding the handling of special characters in product names.
* **Bug ID:** [SC1-05] Dropdown fails to trigger for product names containing symbols.
* **Severity:** Low (System remains stable).
* **Priority:** High (Significant business impact on product discoverability).

> *Detailed bug reports and Jira screenshots are available in the `/artifacts` folder.*

## 📊 Test Summary Report (TSR)
**Execution Date:** February 16, 2026  
**Final Status:** 🔴 **NOT READY** (Release postponed due to a High-priority defect).

* **Total Executed:** 5
* **Pass:** 4
* **Fail:** 1

**Conclusion:** While the system handles standard queries effectively, the suggestion algorithm requires refinement in symbol processing to prevent potential conversion losses.
