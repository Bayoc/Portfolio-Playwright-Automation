# Portfolio: Functional Search Suggestions/Dropdown Verification - Militaria.pl

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
1. **SC1-01:** Search by exact product name
2. **SC1-02:** Search by partial product name
3. **SC1-03:** Search with typo/misspelling
4. **SC1-04:** Search for non-existent product
5. **SC1-05:** Search queries containing special characters (e.g., #, @).
6. **SC1-06:** Search with empty input
7. **SC1-07:** Search by category name
8. **SC1-08:** Case sensitivity check

## 🐛 Defect Management (Jira)
A significant bug was identified regarding the handling of special characters in product names.
* **Bug ID:** [TA-16] Dropdown fails to trigger for product names containing symbols.
* **Severity:** Low (System remains stable).
* **Priority:** High (Significant business impact on product discoverability).

A minor bug was identified regarding the handling of typos in product names.
* **Bug ID:** [TA-15] Search suggestions fail to display for "Bennon" brand when typos are present
* **Severity:** Low (System remains stable).
* **Priority:** Medium (Search engine should initiate suggestion after the first 3 letters).

> *Detailed bug reports and Jira screenshots are available in the `/artifacts` folder.*

## 📊 Test Summary Report (TSR)
**Execution Date:** February 16, 2026  
**Overall Result:** 🔴 FAILED (1 High-Priority and 1 Medium-Priority defects remains open)

* **Total Executed:** 8
* **Pass:** 6
* **Fail:** 2

**Conclusion:** While the system handles standard queries effectively, the suggestion algorithm requires refinement in symbol processing to prevent potential conversion losses.
