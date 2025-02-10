# Song Sync

Consists of two services
 - `song_sync_frontend`: Fontend portion of application written in React
 - `song_sync_backend`: Backend portion of application written in Node.js (Express)


## Instructions to run

### 1.Download and docker setup
```sh
    git clone https://github.com/aadi-nair/song_sync.git
    cd song_sync
    docker compose up -d
```

Backend URL: http://localhost:5000 \
Frontend URL: http://localhost:3000



### 2. Seeding the database

Accessing `http://localhost:5000/api/seed` parses `playlist.json` and bulk inserts it into the `songs` table in the postgres database


## Features Implemented

- [x] API to access all normalized data (1.2.1)
- [x] Search using song title (1.2.2)


- [x] Displaying normalized data fetched from backend as table (1.3.1)
- [x] Search field to fecth song by title (1.3.6)







