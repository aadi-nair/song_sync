# Song Sync Backend

## Tech Stack

- **Runtime**: Node.js 
- **Language**: TypeScript 
- **Framework**: Express
- **Linting**: ESLint + Prettier

## Project Structure

```

 ┣ 📂 src
   ┣ 📂 controllers   # Route handlers
   ┣ 📂 routes        # API routes
   ┣ 📂 db            # functions to operate on db
   ┣ 📜 index.ts      # Express app initialization
 ┣ 📜 .dockerignore   # Files to ignore for docker build
 ┣ 📜 .env            # Environment variables
 ┣ 📜 .gitignore      # Files to ignore for git
 ┣ 📜 docker-compose.yml
 ┣ 📜 Dockerfile      # Commands to assemble image
 ┣ 📜 package.json    # Dependencies and scripts
 ┣ 📜 README.md       # Project documentation
 ┗ 📜 tsconfig.json   # TypeScript configuration

```

## Instructions to run locally

Navigate to `song_sync_backend` and run

```
    npm install
    npm run dev
```
