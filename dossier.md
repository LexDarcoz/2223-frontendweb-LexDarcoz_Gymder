# Alexander Schatteman (202182201)

- [x] Front-end Web Development
  - [GitHub repository](https://github.com/Web-IV/2223-frontendweb-LexDarcoz)
  - [Online versie](https://gymder.onrender.com)
- [x] Web Services: GITHUB URL
  - [GitHub repository](https://github.com/Web-IV/2223-webservices-LexDarcoz)
  - [Online versie](https://gymderbackend.onrender.com)

**Logingegevens**

- Gebruikersnaam/e-mailadres:e2e-testing@gymderapp.be
- Wachtwoord:TestingUser123456

> U kunt ook inloggen met Facebook, discord & google -> developer keys zijn allemaal in orde

## Projectbeschrijving

Het idee bij het project was een applicatie waar mensen die veel fitnessen gyms op kunnen toevoegen. Deze mensen zouden ook uiteindelijk de optie hebben om een gym toe te treden. Je zou ook gemakkelijk andere mensen kunnen vinden die een account hebben gemaakt op de site en deze dus vinden. Hieronder vindt u een EERD van het project.

![EERD](https://i.gyazo.com/2855788c0a026da6b6136af1c67041f7.png "EERD")

## Screenshots

How we can change languages:
![Change Languages](https://i.gyazo.com/3125373641e5af3beae18b857ad6664e.gif "Change Languages")

How we can edit a user profile:
![Checking users & details through carousel](https://i.gyazo.com/b454aa05ba87269463d954f1581706cc.gif "Check users through carousel")

Dark mode / userProfile:
![Change Languages](https://i.gyazo.com/c2ea1ff223a1e836a844b19fee976186.gif "Change Languages")

How we can remove a gym and add one from a user's profile (with snackbars):
![Checking users & details through carousel](https://i.gyazo.com/feab2841684e895d1d3816282fd72ab1.gif "Check users through carousel")

How we can add a gym with images to website:
![Adding a gym](https://i.gyazo.com/10dcf3addded47695e64db0335c2d65d.gif "Adding gym")

Add the created gym to user:
![Add the created gym to user](https://i.gyazo.com/05cb8fd63b59b78cb39b16d49738d96a.gif "Add the created gym to user")

How we can check users and details of a user:
![How we can check users and details of a user](https://i.gyazo.com/754dc751ec501228bdc07f54575d87d3.gif "How we can check users and details of a user")

How we can check the gym details:
![How we can check the gym details](https://i.gyazo.com/17f8c6f71a2427f3639162b1cbd1c2df.gif "How we can check the gym details")

Login & is not authenticated warning
![Not authenticated warning](https://i.gyazo.com/703c39041236e333f4af39a7d15b9e76.gif "Not authenticated warning")
![Login, no error](https://i.gyazo.com/6583937fc96921f320cca113c7fb6bbd.gif "Login, no error")

## Behaalde minimumvereisten

### Front-end Web Development

- **componenten**

  - [x] heeft meerdere componenten - dom & slim (naast login/register)
  - [x] definieert constanten (variabelen, functies en componenten) buiten de component
  - [x] minstens één form met validatie (naast login/register)
  - [x] login systeem (eigen of extern zoals bv. Auth0)
        <br />

- **routing**

  - [x] heeft minstens 2 pagina's (naast login/register)
  - [x] routes worden afgeschermd met authenticatie en autorisatie
        <br />

- **state-management**

  - [x] meerdere API calls (naast login/register)
  - [x] degelijke foutmeldingen indien API call faalt
  - [x] gebruikt useState enkel voor lokale state
  - [x] gebruikt Context, useReducer, Redux… voor globale state
        <br />

- **hooks**

  - [x] kent het verschil tussen de hooks (useCallback, useEffect…)
  - [x] gebruikt de hooks op de juiste manier
        <br />

- **varia**
  - [ ] een aantal niet-triviale testen (unit en/of e2e en/of ui)
  - [x] minstens één extra technologie
  - [x] duidelijke en volledige README.md
  - [x] volledig en tijdig ingediend dossier

### Web Services

- **datalaag**

  - [x] voldoende complex (meer dan één tabel)
  - [x] één module beheert de connectie + connectie wordt gesloten bij sluiten server
  - [x] heeft migraties
  - [x] heeft seeds
        <br />

- **repositorylaag**

  - [x] definieert één repository per entiteit (niet voor tussentabellen) - indien van toepassing
  - [x] mapt OO-rijke data naar relationele tabellen en vice versa
        <br />

- **servicelaag met een zekere complexiteit**

  - [x] bevat alle domeinlogica
  - [x] bevat geen SQL-queries of databank-gerelateerde code
        <br />

- **REST-laag**

  - [x] meerdere routes met invoervalidatie
  - [x] degelijke foutboodschappen
  - [x] volgt de conventies van een RESTful API
  - [x] bevat geen domeinlogica
  - [x] degelijke authorisatie/authenticatie op alle routes
        <br />

- **varia**
  - [ ] een aantal niet-triviale testen (min. 1 controller >=80% coverage)
  - [x] minstens één extra technologie
  - [x] duidelijke en volledige `README.md`
  - [x] maakt gebruik van de laatste ES6-features (object destructuring, spread operator...)
  - [x] volledig en tijdig ingediend dossier

## Projectstructuur

### Front-end Web Development

Ik heb een hoofdmap "src" waarin ik verschillende mappen heb georganiseerd voor verschillende doeleinden. Zo heb ik bijvoorbeeld "components" map waarbinnen ik visuele componenten bewaar zoals forms, cards, knoppen... Ik heb ook een pages folder waarbinnen ik de logische componenten van mijn applicatie bewaar, zoals de componenten die de state beheren en de componenten die de gegevens ophalen van de externe API.

Voor het ontwerp van mijn componenten heb ik gebruik gemaakt van het "presentational and container components" patroon, wat betekent dat ik visuele componenten heb die alleen verantwoordelijk zijn voor het renderen van de interface en logische componenten die verantwoordelijk zijn voor het beheren van de state en het ophalen van gegevens. Dit helpt om de complexiteit van mijn applicatie te verminderen en de componenten beter te laten samenwerken.

### Web Services

In de src map vindt u /core, /data, /repository, /rest & /service. De core bevat hulpbestanden die errors loggen zoals logging. De data map is verantwoordelijk voor de connectie met de database & voor het doorvoeren van seeds en aanmaken van tables. Repository zorgt voor de communicatie tussen backend en database. Rest is de communicatie met front-end en vangt requests op en stuurt gevraagde data indien nodig door adhv posts/gets. Service bevat de domeinLogica

## Extra technologie

### Front-end Web Development

Ik heb als extra technologiëen [i18n](https://www.npmjs.com/package/i18n) & [MUI](https://mui.com/material-ui/getting-started/installation/) gebruikt om mijn website te translaten en beter te stylen. Ik heb een multi-language site gecreëerd met talen zoals Frans, Engels en Nederlands. Met MUI heb ik een aantal coole features kunnen toevoegen zoals snackbars, dropdown menus etc.

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

### Web Services

Ik heb [MULTER](https://www.npmjs.com/package/multer) gebruikt als extra technologie zodat users een logo zouden kunnen toevoegen bij een gym dat ze toevoegen. 

> Wat is de extra technologie? Hoe werkt het? Voeg een link naar het npm package toe!

## Testresultaten

### Front-end Web Development

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen

### Web Services

> Schrijf hier een korte oplijsting en beschrijving van de geschreven testen + voeg een screenshot van de coverage en uitvoering toe

## Gekende bugs

### Front-end Web Development

> Zijn er gekende bugs?

### Web Services

> Zijn er gekende bugs?

### Front-end Web Development

- Dit en dat

### Web Services

- Oh en dit ook
