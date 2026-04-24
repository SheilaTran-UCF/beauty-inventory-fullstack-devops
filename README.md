# 💄 Beauty Inventory Full-Stack DevOps System

A full-stack Beauty Inventory Management System built using modern web technologies and DevOps practices. This project demonstrates frontend and backend integration, containerization, CI/CD automation, performance testing, and security analysis.

---

## 🚀 Features

- 📦 Product inventory management
- 🔄 Full-stack integration (Frontend + Backend)
- 🐳 Docker containerization
- ⚙️ Jenkins CI/CD pipeline automation
- 📊 Performance testing with Apache JMeter
- 🔐 Security testing with OWASP ZAP
- ☸️ Kubernetes setup for orchestration (basic)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Vite

### Backend
- Spring Boot (Java)
- REST API
- Maven

### Database
- MySQL (Docker container)

### DevOps & Tools
- Docker
- Jenkins
- Kubernetes (kubectl)
- Apache JMeter
- OWASP ZAP

---

## 📂 Project Structure


---

## ⚙️ Setup Instructions

###
1️⃣ Clone Repository
bash
git clone https://github.com/your-username/beauty-inventory-fullstack-devops.git
cd beauty-inventory-fullstack-devops


2️⃣ Start Database (Docker)
docker run -d \
  --name mysql-container \
  -e MYSQL_ROOT_PASSWORD=yourpassword \
  -e MYSQL_DATABASE=beauty_inventory \
  -p 3307:3306 mysql:8.4
  

3️⃣ Run Backend (Spring Boot)
cd backend
./mvnw spring-boot:run
👉 Runs at: http://localhost:8080


4️⃣ Run Frontend
cd frontend
npm install
npm run dev
👉 Runs at: http://localhost:5173


🔄 CI/CD Pipeline (Jenkins)
Jenkins is used to automate the build process
Pipeline pulls code from repository
Executes build using Maven
Provides real-time logs and build status


📊 Performance Testing (JMeter)
Simulated multiple user requests
Achieved 100% success rate after backend stabilization
Measured response time and throughput


🔐 Security Testing (OWASP ZAP)
Identified vulnerabilities:
Missing Content Security Policy (CSP)
Information disclosure
Input validation concerns
Demonstrates the importance of secure development practices


☸️ Kubernetes
Kubernetes enabled via Docker Desktop
Verified using kubectl version
Full cluster deployment limited by system resources


⚠️ Challenges
Backend dependency on Docker services
Initial JMeter failures due to server availability
High memory usage with ZAP and Kubernetes
CI/CD pipeline troubleshooting in Jenkins

---

🎯 Conclusion

This project demonstrates how DevOps tools and practices can be integrated into a full-stack application to improve automation, performance, and security. It highlights the importance of continuous integration, testing, and containerized environments in modern software development.

---

👤 Author

Minh Ngoc Tran
CEN 4802C – Software Integration, Configuration, and Testing

---

⭐ Acknowledgment

This project was developed as part of a course to practice real-world DevOps workflows and full-stack system integration.
