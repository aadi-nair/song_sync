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




## Instructions to run locally
1. Navigate to `song_sync` and run the following docker command to get postgres running

    ```
    docker compose -f docker-compose-dev.yml up -d
    ```

2. Navigate to `song_sync_backend` and run the following command to run the backend locally

    ```
    npm install
    npm run dev
    ```

    `song_sync_backend` will now run on `localhost:5000` 

3. To seed the database from `playlist.json` make the following API call 

    ```
    GET http://localhost:5000/api/seed
    ```

4. Navigate to `song_sync_frontend` and run the following command to run the frontend locally

    ```
    npm install
    npm run dev
    ```

    `song_sync_frontend` will now run on `localhost:3000` 




