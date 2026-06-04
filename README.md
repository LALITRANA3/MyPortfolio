# 🚀 Lalit Rana — Portfolio

A clean, modular, dark-themed developer portfolio.

---

## 📁 Folder Structure

```
MyPortfolio/
│
├── index.html          # Main portfolio page
├── css/
│   └── style.css       # Styling and theme customization
├── js/
│   ├── data.js         # Portfolio content (projects, skills, etc.)
│   └── main.js         # Dynamic rendering logic
└── README.md
```

---

## ✏️ How to Update Content

**All content lives in `js/data.js`.**
Open it, find the section you want, add your item, save & refresh. Done.

---

### ➕ Add a New Project

Open `js/data.js` → find `const PROJECTS = [` → add a new block at the end (before the `]`):

```js
{
  title:     "My New Project",
  desc:      "Short description of what the project does.",
  tags:      ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourusername/your-repo",
},
```

---

### ➕ Add a New Skill Category

Open `js/data.js` → find `const SKILLS = [` → add a block:

```js
{
  category: "DevOps",
  tags: ["Docker", "GitHub Actions", "Linux"],
},
```

---

### ➕ Add a New Certification

Open `js/data.js` → find `const CERTIFICATIONS = [` → add a block:

```js
{
  icon:   "🧠",
  name:   "AWS Cloud Practitioner",
  issuer: "Amazon Web Services",
  year:   "2026",
},
```

---

### ➕ Add a New Experience Entry

Open `js/data.js` → find `const EXPERIENCE = [` → add a block:

```js
{
  period:  "Jan 2027 – Mar 2027",
  role:    "Backend Developer Intern",
  company: "Some Company",
  points:  [
    "Built REST APIs using Node.js and Express.",
    "Integrated third-party payment gateway.",
  ],
},
```

---

### ➕ Add an Achievement

```js
{ icon: "🏅", text: "Top 10 in college hackathon 2026" },
```

---

## 🎨 Customize Colors

Open `css/style.css` → edit the `:root` block at the top:

```css
:root {
  --accent:  #00d4ff;   /* Main cyan color */
  --accent2: #00ff9d;   /* Green highlights */
  --bg:      #050a0e;   /* Page background */
}
```

---

## 🌐 How to Run

Just open `index.html` in any browser — no build tools, no npm, no server needed.
