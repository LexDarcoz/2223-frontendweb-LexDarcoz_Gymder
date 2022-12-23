# Examenopdracht Front-end Web Development

- Student: Alexander Schatteman
- Studentennummer: 202182201
- E-mailadres: Alexander.Schatteman@student.hogent.be

## Vereisten

Ik verwacht dat volgende software reeds geïnstalleerd is:

- [NodeJS](https://nodejs.org)
- [NPM](https://www.npmjs.com/package/npm)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- ...

## Opstarten

Om alle dependencies te installeren run je eerst npm install, hierna kan je npm start uitvoeren om de development environment op te starten.
ENV file moet volgende informatie bevatten:

```bash
REACT_APP_AUTH0_DOMAIN ="domain"
REACT_APP_AUTH0_CLIENT_ID="client id"
REACT_APP_AUTH0_API_AUDIENCE= "audience"

REACT_APP_API_URL="http://localhost:9000/api/"
REACT_APP_BASE_URL="http://localhost:9000"
```

## Testen

> Schrijf hier hoe we de testen uitvoeren (.env bestanden aanmaken, commando's om uit te voeren...)

##### cypress openen:

npx cypress open

##### env file

```bash
"auth_audience": "Audience",
"auth_url": "https://domain/oauth/token",
"auth_client_id": "ClientId",
"auth_client_secret": "Client-Secret",
"auth_username": "AuthTestUser username",
"auth_password": "AuthTestUser pw"
```

##### 3 testen

##### LoginTest

Logintest gaat na of user ingelogd is nadat ze de website inladen en bepaalde knoppen indrukken.

##### MakeGymTest

MakeGymtest kijkt of het lukt om een gym succesfully toe te voegen.

##### TranslationTest

Translationtest kijkt of de pagina daadwerkelijk vertaald wordt nadat er op een andere taal geklikt wordt.
