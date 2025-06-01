📦 Установка и инициализация проекта
# 1. Инициализировать проект
npm init -y

# 2. Установить зависимости
npm install typescript ts-node-dev dotenv

# 3. Установить dev-зависимости
npm install --save-dev @types/node

# 4. Инициализировать TypeScript
npx tsc --init


⚙️ Настройка tsconfig.json

{
     "compilerOptions": {
          "target": "ES2020", // Современный JS-вывод
          "module": "CommonJS", // Подходит для Node.js
          "outDir": "./dist", // Папка для скомпилированных файлов
          "rootDir": "./src", // Где лежат исходники
          "strict": true, // Включает строгую типизацию
          "esModuleInterop": true, // Позволяет использовать import default from '...'
          "forceConsistentCasingInFileNames": true, // Убедиться в одинаковом регистре путей
          "skipLibCheck": true, // Пропустить проверку d.ts файлов
          "resolveJsonModule": true, // Импортировать JSON-файлы
          "moduleResolution": "node", // Поиск модулей как в Node.js
          "types": [
               "node"
          ] // Включить типы для Node.js
     },
     "include": [
          "src"
     ],
     "exclude": [
          "node_modules",
          "dist"
     ]
}


🧨 Настройка nodemon
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["dist"],
  "exec": "ts-node-dev ./src/index.ts"
}


📁 Структура проекта
app/
├── src/
│   └── index.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── nodemon.json

🧼 .gitignore
node_modules/
dist/
.env
