# 🐞 Bug Report: [Search results fail to display products containing matching strings when searching for "Buty be" or "Buty ben".]

| Jira ID | Priority | Status | Environment |
| :--- | :--- | :--- | :--- |
| **TA-17** | 🔴 Medium | Open | Chrome / Windows 11 |

---

## 📝 Description
The search engine fails to return relevant footwear products when a multi-word query is entered (e.g., "Buty be", "Buty ben"). Even though the products contain these character strings in their names, they do not appear in the search results or the suggestion drop-down.

## 👣 Steps to Reproduce
1. Navigate to https://militaria.pl/.
2. In the search bar, type the phrase: "Buty be" and press enter.
3. Observe the list of results.
4. In the search bar, type the phrase: "Buty ben" and press enter.
5. Observe the list of results.

**Expected Result** - The search engine should return a list of relevant footwear products that contain the entered strings (e.g., "be", "ben") in their names, regardless of whether a single word or a multi-word query (e.g., "Buty be", "Buty ben") is used. The suggestions drop-down and the search results page should be populated with matching items.

**Actual Result** - The search results page and the suggestion drop-down fail to display any products containing the letters "be" or "ben" when searching for multi-word phrases like "Buty be" and "Buty ben". The system treats these queries as having no matches, even though products with these names exist in the database.

---

## 🖼️ Evidence

### Jira bug details
<details>
  <summary>Show screenshot 1</summary>
  <img width="1255" height="778" alt="image" src="https://github.com/user-attachments/assets/1edff1a6-c6ee-4280-9f1b-0694de13b9a3" />
  </details>

### Search result for "Buty be"
<details>
  <summary>Show screenshot 2</summary>
  <img width="1586" height="930" alt="image" src="https://github.com/user-attachments/assets/4fd38d0c-69c1-4086-95e9-1ca120bc44e6" />
</details>

### Search result for "Buty ben"
<details>
  <summary>Show screenshot 3</summary>
  <img width="1730" height="972" alt="image" src="https://github.com/user-attachments/assets/3e56d241-407f-4e2c-aee4-8cb27f6e698f" />
</details>

---
