# Boilerplate - React Auth JWT

Vous êtes un développeur qui souhaite gagner du temps et éviter la répétition ennuyeuse de la mise en place d'un système d'authentification sécurisé pour chaque nouveau projet ? Nous avons une solution pour vous !

Notre boilerplate d'authentification JWT est une application pré-construite qui implémente déjà la sécurité de l'authentification basée sur JSON Web Tokens. Les développeurs peuvent télécharger et utiliser cette application comme point de départ pour leur propre projet, sans avoir à se soucier de la mise en place de l'authentification de base.

## Dependences pour le front

- axios : 1.3.2
- bootstrap : 5.2.3
- react : 18.2.0
- react-bootstrap : 2.7.0
- react-dom : 18.2.0
- react-hook-form : 7.43.1
- react-router-dom : 6.8.1

## Developpement de dependences pour le backend
>
> L'application utilise `json-server` et `json-server-auth`, qui sont des MockAPIs, afin de créer un flux d'authentification et d'autorisation pour aider à la création rapide d'un prototype d'application.

- json-server : 0.17.2
- json-server-auth : 2.1.0

## Cas d'usage

### Installation

````
 git clone https://github.com/ffolituu/boilerplate-react-auth-jwt.git 

 cd boilerplate-react-auth-jwt

 yarn istall
 ````

### Lancer le front-end

````
yarn dev
````

### Lancer le back-end

````
 yarn backend 
````

> N'hésitez pas à contribuer au projet si cela vous intéresse

## Todo

- [ ] RefreshToken
- [ ] Remplacer la fonction native `localStorage` par les fonctions du package `zustand`
- [ ] Etablir des middlewares frontaux par rôles utilisateurs
