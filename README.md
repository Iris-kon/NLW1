# About

A Study project made for traning the developement of a full stack application With ReactJs, React Native and Node/Express for help people to find residual collector.

The full stack app was build with:
<ul>
  <li>REST API with node/express</li>
  <li>mobile app with react native</li> 
  <li>web app with reactJs</li>
  <li>manage DB</li>
  <li>Maps</li>
</ul>

The project was developed in Next level week 1 from Rocketseat.

## Web Screens

<b>Home:</b>

![home](https://github.com/Iris-kon/NLW1/blob/master/web/src/assets/design/home.PNG)

<b>Register:</b>

![rgister](https://github.com/Iris-kon/NLW1/blob/master/web/src/assets/design/new-point.png)

## Mobile Screens
<b>Home:</b>

![home](https://github.com/Iris-kon/NLW1/blob/master/mobile/assets/design/Screenshot_20230519-235928_Expo%20Go.jpg)

<b>Find Points:</b>

![find_points](https://github.com/Iris-kon/NLW1/blob/master/mobile/assets/design/Screenshot_20230519-235915_Expo%20Go.jpg)

<b>Point Info:</b>

![point_info](https://github.com/Iris-kon/NLW1/blob/master/mobile/assets/design/Screenshot_20230519-235922_Expo%20Go.jpg)

## Used Technologies
The project utilises the following technologies:
<ul>
  <li>ReactJS</li>
  <li>React Native</li>
  <li>Expo</li>
  <li>NodeJs</li>
  <li>Express</li>
  <li>Leaflet</li>
  <li>React Native Maps</li>
  <li>CSS</li>
  <li>Prisma</li>
  <li>Postgres</li>
</ul>

## Run project
Copy the project to the desired folder with the following command:

### `git clone https://github.com/Iris-kon/NLW1`

Go to the server paste

Install dependences with:

### `yarn install` or `npm install`

Change the DATABASE_URL: to your connection string

Then run `npx prisma migrate dev` 

if the itens weren't seeded

run `npx prisma db seed`

Change the BASE_URL: to your ipv4

after, run the project on localhost:
```
# Iniciate backend with: 
$ yarn dev or npm run dev
```

Go to the web paste

Install dependences with:

### `yarn install` or `npm install`

after, run the project on localhost:

```
# Iniciate web App with:
$ yarn start or npm run start
```

Go to the mobile paste

Install dependences with:

### `yarn install` or `npm install`

Change in the api.ts the server URL to match your pc ipv4

after, run the project on localhost:
```
# Iniciate web App with:
$ npx expo start
```

