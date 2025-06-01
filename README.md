## 📦 Установка и инициализация проекта

```bash
# 1. Инициализировать проект
npm init -y

# 2. Установить зависимости
npm install typescript ts-node-dev dotenv

# 3. Установить dev-зависимости
npm install --save-dev @types/node

# 4. Инициализировать TypeScript
npx tsc --init

# 5. Установка nodemon (dev режим)
npm install -D nodemon

# 6. Запуск проекта
npm run dev
```

---

## ⚙️ Настройка `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "types": ["node"]
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 🧨 Настройка `nodemon`

```json
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["dist"],
  "exec": "ts-node-dev ./src/index.ts"
}
```

---

## 📁 Структура проекта

```
app/
├── src/
│   └── index.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── nodemon.json
```

---

## 💻 Скрипты в package.json

```
"scripts": {
  "dev": "nodemon"
}
```

---

## 🧼 .gitignore

```
node_modules/
dist/
.env
```