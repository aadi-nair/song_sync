# Song Sync Backend

## Tech Stack

- **Runtime**: Node.js 
- **Language**: TypeScript 
- **Framework**: Express
- **Linting**: ESLint + Prettier

## Project Structure

```
 ┣ 📂 database
    ┣ 📂 migrarions   # initialize schema & parse data     ┣ 📂 seeders      # contains playlist.json
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

## Endpoints

```http
GET /api/songs/?title=<song_title>
```

**Description:**
Fetches a song by its title. If title isn't provided, title is assumed as empty string `""`. 
Performs a `LIKE %<title>%` to search for song



```http
GET /api/seed/
```

**Description:**
Parses `database/playlist.json` and bulk inserts it into `songs` table



## Instructions to run locally

Navigate to `song_sync_backend` and run

```
    npm install
    npm run dev
```
