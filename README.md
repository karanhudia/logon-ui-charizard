
# Logon UI Screen

A logon screen with login and register options, made using SCSS for easy theme changing and managing various different properties of CSS including font-size, font-family, box sizes, etc.

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisities

What things you need to install the software and how to install them


-Node.js

Follow the instructions in the link to install Node.js
```
https://nodejs.org/en/download/
```

### Installing

A step by step guide to get your development environment up and running

```
Open command prompt
```


Install all the packages

```
npm install
```

Run the local development server

```
npm start
```

Open browser and open the following link

```
http://localhost:8080/
```

##Using different theme or colors

Open './libs/stylesheets/scss/utilities/_variables.scss'

```
Change the value of color variable color-primary and color-primary-accent for changing primary color
```

To change the value of secondary color

```
Change color-secondary and color-secondary-accent
```
Save the scss file



Open another window of command prompt

``` 
npm run build-css
```

Reload the page
