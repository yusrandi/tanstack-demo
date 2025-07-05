# React + TypeScript + Vite

Siap! 🙌

Berikut **README.md final** (langsung siap copy-paste), sudah lengkap, jelas, dan clean.

---

## 📄 README.md

````markdown
# 🚀 React Clean Architecture with TanStack Query & JSON Server

This project demonstrates a **Clean Architecture** setup in React (TypeScript) using **TanStack Query (React Query)** and **JSON Server** as a mock backend.

---

## 🧰 Requirements

- Node.js ≥ 16
- npm ≥ 8

---

## ⚡ Quick Start

### 1️⃣ Clone this repository

```bash
git clone https://github.com/yusrandi/tanstack-demo.git
cd your-repo
```
````

---

### 2️⃣ Start JSON Server

Install JSON Server globally (if not installed yet):

```bash
npm install -g json-server
```

Start JSON Server:

```bash
json-server --watch db.json --port 3001
```

- JSON Server will run at **[http://localhost:3001](http://localhost:3001)**.
- Make sure `db.json` exists in the root directory.

---

### 3️⃣ Install project dependencies

```bash
npm install
```

---

### 4️⃣ Run the React app

```bash
npm run dev
```

Then open your browser at [http://localhost:5173](http://localhost:5173).

---

## 📄 Example `db.json`

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Hello World",
      "body": "This is the first post."
    },
    {
      "id": 2,
      "title": "Second Post",
      "body": "This is another post content."
    }
  ]
}
```

---

## 📂 Project structure

```
src/
├── api/          # API services
├── domain/       # Business logic (models & usecases)
├── hooks/        # Custom hooks using TanStack Query
├── components/   # Presentation components
├── App.tsx
├── main.tsx
db.json           # Mock database (JSON Server)
```

---

## 🛠️ Available scripts

| Command                                   | Description              |
| ----------------------------------------- | ------------------------ |
| `npm install`                             | Install all dependencies |
| `npm run dev`                             | Start React app (Vite)   |
| `json-server --watch db.json --port 3001` | Start mock API server    |

---

## 💬 Notes

- ✅ Always **start JSON Server first** before running the React app.
- You can edit `db.json` anytime; JSON Server supports hot-reload.
- Update the API base URL or endpoints as needed in your API files.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 🪪 License

This project is licensed under the MIT License.

---

## ⭐️ Support

If you like this project, please ⭐️ the repository. Thanks!

```

---

### ✅ Done!  🚀
```
