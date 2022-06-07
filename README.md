# TomBoyer_7_2-05052022

![Screenshot1](./screen1.jpeg)

//1. Back End : 
depuis la racine dans un terminal: 
- cd back
- npm install

créer un fichier .env à la racine du back et coller : 
SECRET_TOKEN = faeziuygvfuzayvfzuyifveukiyzvef
SECRET_SALT = "13"
USER_PASSWORD = "123Soleil"

npm run db-init : 
    - npx sequelize db:drop : remove une bdd du meme nom si elle existe
    - npx sequelize db:create : créer la bdd
    - npx sequelize db:migrate : migrer les infos/tables de bdd
    - npx sequelize db:seed:all : envoyer les seeds d'exp dans la bdd

ce qui revient à :

- créer bdd : 
    sequelize db:create
    sequelize db:migrate
- ajouter les seeders test pré établis 
    sequelize db:seed:all)
- lancer le server relié à la bdd : 
    nodemon server

si problème de création de base de données : 
dans package.json (back)
ajouter en dessous de ("host": "localhost",):


//2. Front End : 
depuis la racine dans un autre terminal : 
- cd front
- npm i
- npm start

si aucune page ne s'ouvre dans le navigateur vous pouvez rejoindre le projet ici : 
http://localhost:3000/

possibilités : 
- signup : créer un user dans la bdd
- login : se connecter avec un user déjà créer dans la bdd
- home : afficher page home avec tous les Posts + comments associés
- créer un post
- créer un commentaire sous un post
- supprimer un post si auteur/admin
<!-- - liker un post -->
- éditer un post si auteur/admin
- modifier profil : password/username/photo de profil
- refresh la page
- retourner en haut de page

compte admin : 
admin@groupomania.fr
123Soleil!