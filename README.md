# Automation Exercises - Playwright E2E Testing Portfolio

This repository contains automated end-to-end (E2E) tests for the **Automation Exercise** platform. The project demonstrates modern QA automation practices using **Playwright** and **TypeScript**.

---

## 🚀 Key Technologies
* **Playwright** – Core automation framework.
* **TypeScript** – For type-safe and scalable test code.
* **Page Object Model (POM)** – Design pattern for better maintainability.
* **GitHub Actions** – CI/CD pipeline for automated test runs on every push.
* **Dotenv** – Secure management of environment variables.

---

## 🏗️ Project Structure
The project follows a clean, modular architecture:
* `/pages` – **Page Object Models**: Contains selectors and methods for specific page interactions.
* `/tests` – **Test Suites**: Scenario-based test files (e.g., authentication, product search).
* `.github/workflows` – **CI/CD Config**: Playwright workflow to run tests in the cloud.

---

## 🛡️ Security & CI/CD Implementation
* **Security**: Sensitive data (login credentials) are managed via Environment Variables (`.env`).
* **CI/CD**: GitHub Secrets are used to securely inject credentials into the pipeline for cloud execution.
* **Reporting**: Test reports are automatically generated and uploaded as GitHub Artifacts after each run.

---

## 🛠️ How to run it locally

1. **Clone the repository:**
   git clone https://github.com/Bayoc/Playwright-Automation.git

2. **Install dependencies:**
   npm install

3. **Configure Environment Variables:**
   Create a .env file in the root directory:
   
   TEST_USER_EMAIL="your_email@example.com"
   TEST_USER_PASSWORD="your_password"

5. **Run tests:**
   * Run all tests in headless mode
   npx playwright test

   * Run tests with a visible browser (headed)
   npx playwright test --headed

   * Open the HTML report after execution
   npx playwright show-report

---
*Developed by Bartłomiej Jabłonowski*
