# TURBOFLIX

The main goal of this project is to provide information about movies through the OMDB API. 

## STRUCTURE

The project is divided in 5 different files:

***css:*** All the stylesheets are contained in this file(.css).<br>
***htmls:*** Here you will find the .html archives of the website(except for the index.html which is one level higher).<br>
***imgs:*** In this file are the images displayed in the project.<br>
***srcs:*** Last but not least, you can find here all the coding, which is dismmembered in: Controllers, Helpers, Models and Views.
***documentacao\ResiliaFlix2.0:*** This file contains diagrams of the website's functionalities<br><br>

PS: index.html is located at the main file to make its access easier, .gitignore holds the google API key.<br>

Subfiles(srcs):

***Helpers:*** Helpers are auxiliary codes. Usually, they're holding important variables or functions to the proper behavior of the system.<br>
***Models:*** As their name indicate, they're a model which is used to save the information obtained through the APIs.<br>
***Views:*** Views organize the information acquired from the APIS in a section.<br>
***Controllers:*** The controller file manipulates all data needed to make a request for the APIs and organizes the information avaiable in the screen to the user. It makes the model avaiable through the view.<br><br>

## CONTENT

### css:

All the files below contain the stylesheet related to its .html. The name indicates the correlation (ex: index.css is the stylesheet related to index.html)

***contatos.css***<br>
***filmes.css***<br>
***index.css*** <br>
***register.css***<br>
***reset.css*** <br>
***retrieving.css*** <br>
***search.css*** <br><br>

### htmls:

***index.html:*** The homepage of the website.<br>
***contatos.html:*** Here you will find information about us, the developers.<br>
***filmes.html:*** Page containing the search results of the field located at the navbar or one of the twelve movies in our homepage.<br>
***register.html:*** Sign up page.<br>
***search.html:*** In this page you can search for movies and it will bring you the information requested without updating the page.
There's a field to inform us films which aren't in our database, so we can improve our services for you.<br>
***retrieving.html:*** In case you've forgot your password, you can ask here for a reset password e-mail.<br><br>

### imgs:

***about-time-poster.jpg:***  One of the Movie posters(About Time) on the homepage. <br>
***annihilation-poster.jpg:***  One of the Movie posters(Annihilation) on the homepage. <br>
***Avatar-poster.jpg:***  One of the Movie posters(Avatar) on the homepage. <br>
***bohemian_rhapsody_poster.jpg:***  One of the Movie posters(Bohemian Rhapsody) on the homepage. <br>
***frozen-2-poster.jpg:***  One of the Movie posters(Frozen II) on the homepage. <br>
***grand_budapest_hotel_poster.jpg:***  One of the Movie posters(Grand Budapest Hotel) on the homepage. <br>
***her-poster.jpg:***  One of the Movie posters(Her) on the homepage.<br>
***inception-poster.jpg:***  One of the Movie posters(Inception) on the homepage.<br>
***Indiana_Jones_poster.jpg:***  One of the Movie posters(Indiana Jones) on the homepage.<br>
***jaws-poster.jpg:***  One of the Movie posters(Jaws) on the homepage.<br>
***joker-poster.jpg:***  One of the Movie posters(Joker) on the homepage.<br>
***midsommar_poster.jpg:***  One of the Movie posters(Midsommar) on the homepage.<br>
***us_poster.jpg:***  One of the Movie posters(Us) on the homepage.<br>
***Venom-poster.jpg:***  One of the Movie posters(Venom) on the homepage.<br>
***wonder_poster.jpg:***  One of the Movie posters(Wonder) on the homepage.<br>
***wonder_woman_poster.jpg:***  One of the Movie posters(Wonder Woman) on the homepage.<br>
***fordvferrari_poster.jpg:***  One of the Movie posters inside the carousel. <br>
***gabi.jpg:***  One of the developers(Gabi) of this website.<br>
***fabio.jpg:***  One of the developers(Fabio) of this website.<br>
***ivan.jpg:***  One of the developers(Ivan) of this website.<br>
***samantha.jpg:***  One of the developers(Samantha) of this website.<br>
***jessica.jpg:***  One of the developers(Jessica) of this website.<br>
***IMDb.png:***  IMDB's Icon.<br>
***logo.png:***  Our website's logo.<br>
***favicon.ico:***  The icon disposed in the title of the page.<br>
***Logo_tv_sem_ResiliaFlix.png:*** Website's logo.<br>
***star.png:*** Icon of a star used to display the IMDb's score.<br>
***the-greatest-poster.jpg:***  One of the Movie posters inside the carousel. <br><br>

### srcs:

#### Controllers:

***AdressController.js:*** Code responsible for getting the adress model from the API and sending it to the view. Completing the fields of the user Adress when signing up(after filling the zip code field).<br>
***MovieController.js:*** Code responsible for getting the movie model from the API and sending it to the view.<br>
***TrailerController.js:*** Code responsible for getting the trailer model from the API and sending it to the view.<br><br>

#### Helpers:

***filmesAuxiliar.js:*** This code obtains information about the movie requested via URL to search for its data. It also calls the controller functions and declares important variables. <br>
***helper.js:*** It is the validation code for our forms.<br>
***main.js:*** This code inserts events to buttons and to the covers displayed in the homepage.<br>
***retrievingEmail.js:*** Adds validation to the e-mail field located at retrieving.html.<br>
***searchNavBar.js:*** This code inserts events to buttons(navbar).<br>
***searchPageHelper.js:*** This code makes the request for the API and add events to buttons(avoiding id conflicts in the searchpage).<br><br>

#### Models:

***AdressModel.js:*** It contains the template created to store the zip code info requested from the API.<br>
***MovieModel.js:*** It contains the template created to store movie's information requested from the API.<br>
***TrailerModel.js:*** It contains the template created to store the URL of the requested movie trailer.<br><br>

#### Views:

***AdressView.js:*** Makes the adress completion avaiable for the user's view.<br>
***MovieView.js:*** Makes the movie's info avaiable for the user's view.<br>
***TrailerView.js:*** Makes the movie's trailer avaiable for the user's view.<br><br>

### documentacao\ResiliaFlix2.0

***Efetuar Login.png:*** Sign In page details via diagrams.<br>
***Exibir Informatções.png:*** How the system works behind the curtains to display information requested by the user.<br>
***Página de Cadastro de Usuário.png:*** How the validation and completion of the forms work.<br>
***Página de Contato.png:*** Contact page details via diagrams.<br>
***Página de Informações.png:*** How the search(navbar and searchpage) works.<br>
***Página de Recuperação de Senha.png:*** How the retrieving page works(sending reset password).<br>
***Página Inicial.png:*** Homepage details via diagrams.<br><br>

### Loose files in the main folder

***.gitignore:*** It was used to protect our google API key from other users. We decided to create one for the site tho.<br>
***index.html:*** The homepage of the project.<br>
***README.md:*** Documentation of the project.<br><br>








