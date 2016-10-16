
# Logon UI Screen

A logon screen with login and register options, made using SCSS for easy theme changing and managing various different properties of CSS including font-size, font-family, box sizes, etc.

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisities

What things you need to install the software and how to install them


-Node.js


Follow the instructions in the link to install Node.js

[DownLoad Node.js](https://nodejs.org/en/download/)

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


[Open Localhost](http://localhost:8080/)


##Using different theme or colors

Open './libs/stylesheets/scss/utilities/_variables.scss'

To change the value of primary color
```
Change $color-primary and $color-primary-accent
```

To change the value of secondary color

```
Change $color-secondary and $color-secondary-accent
```

To change the value of font family

```
Change $font-primary
```

To change the background cover image

```
Change $image-cover
```


Save the scss file



Open another window of command prompt

``` 
npm run build-css
```

Reload the page
## Design Guidelines Followed


Material Design by Google


## Features implemented
1. Material like text field with floating label and animated bar.
 1. The color turns red on invalid input.
 2. The label floats up, when input is focused.
 3. An error message is shown on invalid input.
2. Material like button with ripple effect on clicking the button.
3. Square shaped tabs
 1. Color darkens on hovering.
 2. Primary color for active tab and secondary color for inactive tab.
4. Pattern recoginition in textfields with html5 pattern and regex support.
 1. Password limit for minimum 8 characters long.
 2. Username can be alphanumeric or contain _.
 3. Phone number should contain 10 digits.
 
 
## Examples
Make following changes


``` 
$color-primary: #00AEC5;
```
![alt tag](https://raw.githubusercontent.com/karanhudia/logon-ui-charizard/master/samples/ThemeBlue.png)

``` 
$color-primary: #00BFA5;
```
![alt tag](https://raw.githubusercontent.com/karanhudia/logon-ui-charizard/master/samples/ThemeGreen.png)

``` 
$color-primary: #C1D82E;
```

``` 
$image-cover: '../../../resources/images/open.jpg';
```
![alt tag](https://raw.githubusercontent.com/karanhudia/logon-ui-charizard/master/samples/ThemeLemon.png)

## Authors

* **Karan Hudia** - [Github](https://github.com/karanhudia)

## License

This project is licensed under the MIT License
