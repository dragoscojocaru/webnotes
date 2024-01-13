# webnotes

Proiectul de backend este in ./server
Proiectul de frontend este in ./client

DOCKER

docker compose up --build -d (porneste containerele)

docker exec -it webnotes-node sh (conectare in containerul de node care contine si be si fe)

BACKEND http://localhost:3000/

start server:
cd /var/www/app/server && npm start (din container)

FRONTEND http://localhost:3001/
cd /var/www/app/client && npm start (din container)

------------------------- CSS --------------------------------------
Paleta de culori: NEUTRAL de pe https://tailwindcss.com/docs/customizing-colors
--
background-color: #e5e5e5;
font-family: "Lato", sans-serif;
font-weight: 400;
