# 🔐 Secure Media Upload (MERN + Cloudinary)

This project securely uploads **images** and **videos** to **Cloudinary** using **signed API requests**. The frontend (React) handles file selection and preview, while the backend (Node.js/Express) signs each upload request and stores the Cloudinary URLs in MongoDB.

---

### 🚀 Tech Stack

- **MongoDB + Mongoose** 🟢 — Store uploaded file URLs  
- **Express.js + Node.js** ⚙️ — API & Signature generation  
- **React.js + Vite** ⚛️ — File input, UI  
- **Cloudinary** ☁️ — Media hosting  
- **Axios + FormData** 📤 — File uploads  
- **JWT-signed API calls** 🔐 — Secure uploads  

---

### 📸 Features

- Upload **images** and **videos**
- Secure **timestamp + signature** upload via Cloudinary
- Backend-managed secrets — no API keys in frontend!
- MongoDB stores uploaded file URLs
