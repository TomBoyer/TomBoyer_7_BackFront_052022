# TomBoyer_7_2-05052022

Si serveurs Mysql pb : https://www.youtube.com/watch?v=UQK6Df2GMoc&ab_channel=AmbarHasbiyatmoko


//1. Back End : 
depuis la racine dans un terminal: 
- cd back
- npm install

npm run db:init : 
    - npx sequelize db:drop : remove une bdd du meme nom si elle existe
    - npx sequelize db:create : créer la bdd
    - npx sequelize db:migrate : migrer les infos/tables de bdd
    - npx sequelize db:seed:all : envoyer les seeds d'exp dans la bdd

ce qui revient à :

(créer bdd : 
sequelize db:create
sequelize db:migrate

ajouter les seeders test pré établis 
sequelize db:seed:all)

lancer le server relié à la bdd : 
nodemon server

//2. Front End : 
depuis la racine dans un autre terminal : 
- cd front
- npm i
- npm start