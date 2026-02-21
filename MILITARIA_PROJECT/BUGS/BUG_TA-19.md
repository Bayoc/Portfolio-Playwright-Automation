# 🐞 Bug Report: [Incorrect fallback logic for out-of-scope search queries.]

| Jira ID | Priority | Status | Environment |
| :--- | :--- | :--- | :--- |
| **TA-19** | 🔴 Low | Open | Chrome / Windows 11 |

---

## 📝 Description
Search engine displays unrelated promotional campaign products instead of a "No results found" message for queries with zero matches (e.g., "cegła").

## 👣 Steps to Reproduce
1. Navigate to https://militaria.pl/.
2. In the search bar, type a phrase completely unrelated to the store's offer, such as "cegła" and press “Enter”.
3. Observe the results page and the network response in DevTools.

**Expected Result** - The system should inform the user that no products were found for the query "cegła".
If a recommendation engine is used, it should be clearly labeled (e.g., "We found no results for 'cegła', but you might like these bestsellers").

**Actual Result** - The system displays a list of 261 unrelated products (e.g., hand warmers, holsters) without any notification that the original search failed. The results are forced by a marketing campaign fallback.

**Technical Notes (Internal Research)** -
* **API Provider:** Prefixbox (api.prefixbox.com)
* **Root Cause:** The network response shows that when `resultStatus` is triggered, the system activates a campaign rule: `{ ruleId: 5970, campaignName: "ziz_search" }`.
* **Issue:** The `resultCount: 261` refers to the campaign items, not the actual search query matches. This creates a "false positive" search result that confuses the customer.

---

## 🖼️ Evidence

### Jira bug details.
<details>
  <summary>Show screenshot</summary>
  <img width="1254" height="778" alt="image" src="https://github.com/user-attachments/assets/fbcd5c68-b053-4fef-b4f6-2a4d5d0a6e75" />
  </details>

### Search results for "Cegła" displaying "Zimowa wyprzedaż" campaign products.
<details>
  <summary>Show screenshot</summary>
  <img width="1576" height="976" alt="image" src="https://github.com/user-attachments/assets/50c91770-9cee-481e-bd98-02bc0dd47e85" />
</details>

### DevTools showing that a campaign is triggered within the search results.
<details>
  <summary>Show screenshot</summary>
  <img width="1903" height="878" alt="image" src="https://github.com/user-attachments/assets/5483d220-5879-49b0-98cf-52532da852e3" />
</details>

---
