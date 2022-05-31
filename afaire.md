<!-- - Stocker le token en local storage : méthode utilisée ici fonctionne normalement -->
<!-- - useContext : islogged pas opérationnel -> fait par authStorage.js -->
<!-- - temps de chargement login trop long: -->
<!-- - ajouter un spin pour symboliser le chargement -> ok -->
		- msg erreur si mauvais mdp - a verifier

/!\ autoprefixer all css

- page login/signup : 
	- ajouter picture profile (choix par def OU choix d'une photo)
	- empecher les espaces avant/apres le pseudo (trim() fonctionne ?) modifier regex pour exclure espace (noSpace)

- page home : 
	<!-- - btn retour top
	- cacher btn "créer un post" si user pas loggé	-> ok -->
	- autorefresh du feed d'actu si nouveau post/comment
	- date : moment : comment/post "depuis quand"
	- Card : créer component pour le feed de la page home
		- ajouter picture profile
		- ajouter delete post -> demander à tuteur
		- ajouter delete comment -> demander à tuteur

	<!-- - responsiv : 
		- feed margin -->

- page profil : 
	- autocomplete du username : si le user change son pseudo le username autocomplete ne change pas sans avoir logout -> login car le username est stocké au login dans le back
	- ajouter affichage de picture profile
	- gestion update picture profile (back pas opérationnel dans abandon pour le moment)

- compte Admin avec tous les droits : abandon pour le moment car pas implanté dans le back

<!-- - navBar : 
	-responsiv menu déroulant -->




<!-- front : 
LOGIN : 
-> axios : stocker le token en localstorage (look tuto)
-> configurer axios pour récuperer le token barearer 
-> useContext : isLogged ?

hide btn hom create post
securiser pages home / create post = > si pas log go page login

temps de login long ?

style home ? le feed d'actu => auto refresh ? -->

<!-- Navbar : changer les btn si user is logged -->
<!-- Home : recupérer tous les posts : refresh provider ? -->
<!-- Posts : creer un post -->
 <!-- comments : creer un comment -->
 <!-- get one post ?   -->
 <!-- injecter le post dans l'entete comment
 delete post -> logo delete
 delete comment -> logo delete

slice date et heure pour affichage dans le feed

img post ? img user ?  
update post -->

<!-- profile : edit profile update = username + password -->

<!-- logout : permettre la deco du user -->

<!-- style : home + post + comments

back : 
valider token dans le creat post -->