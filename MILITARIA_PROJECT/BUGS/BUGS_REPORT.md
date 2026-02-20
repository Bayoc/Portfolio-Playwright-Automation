# 🐞 Bug Report: [Search suggestions fail to display for "Bennon" brand when typos are present]

| Jira ID | Priority | Status | Environment |
| :--- | :--- | :--- | :--- |
| **TA-15** | 🔴 High | Open | Chrome / Windows 11 |

---

## 📝 Description
Search suggestions fail to display for "Bennon" brand when typos are present

## 👣 Steps to Reproduce
1. Navigate to https://militaria.pl/.
2. In the search bar, type the phrase: "Benmon".
3. Observe that no dropdown or results appear.
4. Clear the search bar and type the phrase: "Benon".
5. Observe that no dropdown or results appear.

**Expected Result** - The search dropdown field is displayed, and products from the Bennon brand are visible to the user (fuzzy search/prefix matching).   

**Actual Result** - The dropdown field is not displayed at all, and no products are visible for these specific variations.

**Additional Comments** - The application seems to ignore the "first 3 letters 'Ben'" rule when specific typos follow. It successfully handles "Bennmon" (Step 2) but fails on "Benmon" and "Benon", suggesting an inconsistency in the search algorithm.

---

## 🖼️ Dowody wizualne (Evidence)

### Widok błędu
<details>
  <summary>Click here to check out raports in Jira</summary>
  
  #### Screenshot 1: Podgląd błędu
  <img width="1227" height="761" alt="image" src="https://github.com/user-attachments/assets/709fa0fc-6d72-4104-86cc-15fc5f871ed6">
  <img width="331" height="169" alt="image" src="https://github.com/user-attachments/assets/4aaae0c6-a64c-4a20-855a-fa8359defff7" />
  </details>

<details>
  <summary>Full Size screenshot of bugs</summary>
  #### Screenshot 2: Pełny ekran
  <img width="1635" height="764" alt="image" src="https://github.com/user-attachments/assets/8eea3f1f-3acc-4d21-b43c-4192df35eb38" />
<img width="1584" height="724" alt="image" src="https://github.com/user-attachments/assets/0868bb6b-969d-48c9-9cd2-e0742bc3d106" />
</details>

---

