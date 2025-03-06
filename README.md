# TaskNext

TaskNext is a task management web application built with Next.js, designed to help users organize and track their tasks efficiently. It features user authentication, task prioritization, real-time analytics, and a visually appealing UI.
<!-- Server Details : Github, Vercel, Render -->
## 🚀 Features

- **User Authentication**: Register and login securely.
- **Task Management**:
  - Add new tasks with priority levels (Low, Medium, High).
  - Edit existing tasks.
  - Delete tasks.
  - Mark tasks as completed.
  - View completed tasks on a dedicated page.
  - View incomplete tasks separately.
  - View overdue task separate page.
- **Filtering & Sorting**:
  - Filter tasks based on priority levels.
- **Visual Indicators**:
  - Completed tasks are highlighted with a yellow star.
- **Sidebar Dashboard**:
  - Displays the username.
  - Total task count.
  - In-progress tasks count.
  - Completed tasks count.
  - Open tasks count.
  - Semi-Circle pie chart (Completed vs Pending tasks) using Recharts.

## 🛠️ Tech Stack

- **Frontend**:
  - Next.js (React Framework)
  - Tailwind CSS (Styling)
  - Framer Motion (Animations)
  - Axios (API calls)
  - Context API (State Management)
  - Moment.js (Date & Time Formatting)
  - Recharts (Graph Visualization)
  
- **Backend**:
  - MongoDB (Database)
  - Node.js & Express (Server & API)
  - bcrypt (Password Encryption)
  
## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/venkataranjit/TaskNext.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd TaskNext
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the application**:

   ```bash
   npm run dev
   ```

5. **Open the application**:
   Visit `http://localhost:3000` in your browser.

   ## 📊 Task Priority & Status
```markdown
- **Task Priorities**: Low, Medium, High (set during task creation).
- **Task Status**:
  - Completed tasks are moved to the **Completed** page.
  - Incomplete tasks remain in the **Incomplete Tasks** page.
```

## 📈 Dashboard Insights
```markdown
- **User Information** (username displayed in the right sidebar)
- **Task Statistics**:
  - Total task count
  - In-progress count
  - Completed count
  - Open tasks count
  - **Graphical Representation** (Half-circle graph for completed vs pending tasks)
```

## 🛡 Security
```markdown
- **Password encryption** using bcrypt.
- **JWT authentication** for secure user sessions.
```

## 📌 Future Enhancements
```markdown
- Drag-and-drop functionality for task reordering.
- Notifications for upcoming due dates.
- Dark mode support.
- Collaborative task sharing.
```

## 🤝 Contributing
```markdown
Contributions are welcome! Feel free to fork this repo and submit a PR.
```

## 📜 License
```markdown
MIT License.
```

---
### 💡 Stay Productive with TaskNext! 🎯
