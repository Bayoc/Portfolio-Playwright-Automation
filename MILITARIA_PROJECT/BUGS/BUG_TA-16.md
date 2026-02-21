# 🐞 Bug Report: [Search suggestions fail to display the dropdown menu for the 'Bennon' brand when the product name contains special characters.]

| Jira ID | Priority | Status | Environment |
| :--- | :--- | :--- | :--- |
| **TA-16** | 🔴 High | Open | Chrome / Windows 11 |

---

## 📝 Description
The search engine fails to trigger the drop-down menu or display suggested 'Bennon' products when a user enters a search term containing special characters, 
even if the full name is entered correctly. According to the requirements, the application should initiate the search/suggestions after the first three letters, even more so when the full name is provided.

## 👣 Steps to Reproduce
1. Navigate to https://militaria.pl/.
2. In the search bar, type the phrase: "Bennon #1".
3. Observe that no dropdown or results appear.

**Expected Result** - The dropdown is displayed, and products from the Bennon brand are visible to the user. 

**Actual Result** - The dropdown field is not displayed at all, and no products are visible for these specific variations.

---

## 🖼️ Evidence

### Bug reported in Jira
<details>
  <summary>Click here to check out raports in Jira</summary>
  
  #### Screenshot 1: Jira bug details
  <img width="1249" height="785" alt="image" src="https://github.com/user-attachments/assets/1c6e9698-7e29-4549-bcb3-a8bd6863061f" />
  </details>

<details>
  <summary>Full Size screenshot of bug</summary>
  #### Screenshot 2: Full size screenshot
  <img width="1466" height="582" alt="image" src="https://github.com/user-attachments/assets/85bd7115-1b7e-4f7a-a99c-420839bc3a90" />
</details>

---
