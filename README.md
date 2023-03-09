# Boilerplate - React Auth JWT

L'application fournit une base solide pour l'authentification dans le développement de vos projets, ce qui vous permet d'économiser du temps et d'éviter de réinventer la roue.

Cette application intègre un système d'authentification qui permet à l'utilisateur de se connecter et d'accéder au tableau de bord une fois authentifié.
L'application utilise `JSON Web Token` pour mettre en place un système de middleware frontal qui sépare les routes pour les utilisateurs authentifiés et non authentifiés.

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

## Installation

```` git clone https://github.com/ffolituu/react-auth-jwt.git ````

```` cd react-auth-jwt ````

```` yarn install ````

Lancer le front-end :
```` yarn dev ````

Lancer le back-end :
```` yarn backend ````

## Todo

- [ ] RefreshToken
- [ ] Remplacer la fonction native `localStorage` par les fonctions du pcakage `zustand`
- [ ] Etablir des middlewares frontaux par rôles
