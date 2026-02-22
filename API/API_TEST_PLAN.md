# API Test Plan: Restful-Booker System

## 1. Introduction
The purpose of this document is to define the strategy and scope for testing the **Restful-Booker API**. The focus is on verifying the core business logic of a reservation system, including booking creation, data retrieval, updates, and secure deletion.

## 2. Test Environment
* **API Base URL:** `https://restful-booker.herokuapp.com`
* **Tools:** Postman (Desktop Agent), JavaScript (Postman Sandbox).
* **Format:** JSON.

## 3. Test Scope
The test suite covers the full CRUD lifecycle and Authentication:

| Area | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/auth` | Generates a token for secure access to PUT/DELETE. |
| **Create** | `POST` | `/booking` | Creates a new booking and returns a unique `bookingid`. |
| **Read** | `GET` | `/booking/:id` | Retrieves detailed information for a specific booking. |
| **Update** | `PUT` | `/booking/:id` | Updates an existing booking (requires Auth token). |
| **Delete** | `DELETE` | `/booking/:id` | Removes a booking from the system (requires Auth token). |

## 4. Test Strategy
### 4.1. Request Chaining
To ensure an automated and seamless flow, the **Environment Variable** `{{bookingid}}` is used.
* The `bookingid` is captured from the `POST /booking` response using a post-response script.
* This variable is then automatically injected into the URL of subsequent `GET`, `PUT`, and `DELETE` requests.

### 4.2. Validation Criteria (Assertions)
Every request in the collection must pass the following checks:
* **Status Code:** Verify 200 OK for successful operations and 401/403 for unauthorized access.
* **Data Integrity:** Check if the returned JSON fields (e.g., `firstname`, `totalprice`) match the input data.
* **Schema Validation:** Ensure that fields like `bookingid` and `totalprice` are returned as **numbers**.

## 5. Test Scenarios
1. **Happy Path:** Create a booking -> Verify it exists -> Update its details -> Delete it.
2. **Security Check:** Attempt to update/delete a booking without a valid Auth token (Expect 403 Forbidden).
3. **Negative Path:** Request a non-existent booking ID (Expect 404 Not Found).

## 6. Execution & Reporting
Tests are executed using the **Postman Collection Runner**. Results are analyzed via the "Test Results" tab, where all assertions must return a "PASS" status.
