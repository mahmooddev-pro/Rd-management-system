# 🏦 RD Banking Management System

A full-stack Recurring Deposit (RD) Banking Management System built using React, Vite, Spring Boot, and PostgreSQL.

The system helps manage RD customers, monthly installments, passbook records, payment tracking, fines, account closure, and loan eligibility.

## 🚀 Features

- 🔐 Professional Login Interface
- 👤 RD Customer Management
- ➕ Add RD Customer
- ✏️ Edit Customer Details
- 🔍 Search Customers
- 📄 RD Passbook Management
- 💰 Monthly Installment Tracking
- 📅 Payment Date Tracking
- ⚠️ Late Payment & Fine Calculation
- 📊 RD Account Summary
- 🔒 RD Account Closure
- 💳 Loan Eligibility Check
- 📑 Passbook Records
- 📄 Pagination for Records
- 🎨 Responsive Banking UI

## 🛠️ Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- Bootstrap
- React Icons
- Axios
- SweetAlert2

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- Hibernate

### Database
- PostgreSQL

## 📁 Project Structure

```text
Rd-management-system/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   └── test/
│   ├── build.gradle
│   └── settings.gradle
│
└── README.md

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/mahmooddev-pro/Rd-management-system.git
cd Rd-management-system
```

### 2. Run the Backend

Open the `backend` folder in Eclipse or any Java IDE.

Make sure PostgreSQL is installed and running.

Configure the database connection in:

```text
backend/src/main/resources/application.properties
```

Then run the Spring Boot application.

Backend:

```text
http://localhost:8080
```

### 3. Run the Frontend

Open a terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

The React application will run on:

```text
http://localhost:5173
```

## 🗄️ Database Configuration

This project uses PostgreSQL for storing RD customer and passbook information.

Update the following configuration according to your local PostgreSQL setup:

```text
backend/src/main/resources/application.properties
```

Make sure the PostgreSQL database is running before starting the Spring Boot backend.

## 🔄 Application Architecture

```text
┌─────────────────────────┐
│      React + Vite       │
│       Frontend          │
└────────────┬────────────┘
             │
             │ Axios / REST API
             ↓
┌─────────────────────────┐
│      Spring Boot        │
│        Backend          │
└────────────┬────────────┘
             │
             │ Spring Data JPA
             ↓
┌─────────────────────────┐
│       PostgreSQL        │
│        Database         │
└─────────────────────────┘
```

## 💡 Key Functionalities

### RD Customer Management

The system allows users to add, edit, search, and manage RD customer records.

### Passbook Management

Passbook records can be maintained for individual RD customers, including installment amounts, payment dates, late days, and applicable fines.

### Fine Calculation

The application calculates applicable fines based on delayed RD payments according to the defined business rules.

### RD Account Closure

Users can close an RD account and calculate the applicable closure amount based on the account's payment history.

### Loan Eligibility

The system provides a loan eligibility check based on the customer's RD installment/payment status.

## 🎯 Project Objective

The main objective of this project is to build a practical full-stack banking application that demonstrates:

* REST API development
* Frontend and backend integration
* Database connectivity
* CRUD operations
* Business logic implementation
* Payment and installment tracking
* Search and pagination
* Full-stack application architecture

## 👨‍💻 Author

**Mahmood Shaikh**

Java Full Stack Developer

### Technologies

`Java` `Spring Boot` `React.js` `Vite` `PostgreSQL` `Hibernate` `REST API` `JavaScript`

## 📌 Future Enhancements

* 🔐 Role-based authentication and authorization
* 📊 Advanced banking reports
* 📧 Email notifications
* 📱 Mobile-responsive improvements
* ☁️ Cloud deployment
* 📈 Advanced analytics dashboard



