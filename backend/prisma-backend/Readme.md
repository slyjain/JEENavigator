# Steps performed here are:
1. npm init -y
2. npm i express bcryptjs validator jsonwebtoken cookieparser dotenv
3. dev dependencies such as - npm i -D nodemon prisma
4. npx prisma init
5. npm install @prisma/client
6. npx prisma generate// anytime you change schema.prisma run this command
7. touch prisma/index.js
8. changed the package.json scripts from test to dev : nodemon index.js