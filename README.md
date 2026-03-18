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

## 🧪 Test Coverage

| Test Suite | Tests | Description |
|------------|-------|-------------|
| Authentication & User Management | 3 | Login (valid/invalid credentials), duplicate email registration |
| Contact Form & Static Content | 2 | Contact form submission, Test Cases page visibility |
| Products Catalog & Filtering | 5 | Product search, category/subcategory navigation, brand filtering, footer subscription |
| Shopping Cart | 2 | Add multiple products, remove product, cart state verification |
| **Total** | **12** | **Full E2E coverage across core user journeys** |

---

## 🛡️ Security & CI/CD Implementation
* **Security**: Sensitive data (login credentials) are managed via Environment Variables (`.env`).
* **CI/CD**: GitHub Secrets are used to securely inject credentials into the pipeline for cloud execution.
* **Reporting**: Test reports are automatically generated and uploaded as GitHub Artifacts after each run.

---
*Developed by Bartłomiej Jabłonowski*
