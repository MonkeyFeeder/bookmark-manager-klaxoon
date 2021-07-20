# Test Technique Klaxoon

Ce ReadMe indiquera comment installer et utiliser l'application, et expliquera certains choix, concernant le code ou les packages utilisés ( en plus des commentaires présents dans le code ).

## Comment installer l'application ? 

 1. Naviguez vers [ce lien](https://github.com/MonkeyFeeder/bookmark-manager-klaxoon)
 2. Ouvrez un terminal de commande ( iTerm, Terminal, Cmd... )
 3. Via ce terminal, déplacez vous dans le dossier dans lequel vous voulez installer l'application ( ex: "cd /Users/maell/Downloads" pour Mac, "cd username\programs\start menu" pour Windows )
 4. Une fois dans le bon dossier, tapez "git clone https://github.com/MonkeyFeeder/bookmark-manager-klaxoon.git"
 5. L'ordinateur va télécharger l'application. Une fois que c'est terminé, tapez "cd bookmark-manager-klaxoon"
 6. Vous êtes désormais dans le dossier de l'application. Maintenant, tapez "npm install" pour installer les packages pour pouvoir faire fonctionner l'application
 7. Enfin, tapez "npm start", le terminal devrait vous rediriger vers votre navigateur, et l'application devrait fonctionner.

## Comment utiliser l'application ?

[Toutes les images sont disponibles ici](https://imgur.com/a/qNdg7Ic)

Quand vous lancez l'application, vous arrivez sur la page d'accueil présente sur la première image.
Sur cette page, vous trouverez la liste des marques pages ( vide pour l'instant ), un champ de texte ainsi qu'un bouton pour ajouter un marque page.

Tapez ou copiez/collez un lien Flickr ou Vimeo dans le champ de texte (https://vimeo.com/48130434 ou [ce lien Flickr](https://www.flickr.com/photos/vandalehel/51305926457/in/photolist-2maJhsV-2m8i8eR-2m9MD8c-2m6D1vf-2mabwrk-2m8jLcM-2m755pw-2m8sUMx-2mbe6hu-2m6Dqqo-2ma2wXo-2mbMMgW-2maySxw-2m8XmJP-2mb6JyJ-2m95ToP-2m9QhjY-2mbynYG-2m8pYHX-2mbbXHn-2mbBMQz-2m6Z91r-2m7fbwj-2m7wCiR-2mbxGxM-2m85Eiu-2mbGXam-2ma5WNw-2ma1E5N-2m74zKv-2ma1E8D-2m6Nmaj-2m6Xnj4-2mbQKGA-2maGPGX-2m7pAxx-2m9rNc9-2m9VXBa-2m7tmbr-2m6hdP3-2m9uJZr-2m9DGNc-2maD4XD-2maMacc-2mbxhNC-2m88xUh-2m9AJa8-2m7Uhw9-2maXW4e-2maMZiK) pour essayer l'application, cf image 3), puis cliquez sur "Ajouter Média".

Vous allez obtenir un résultat similaire à l'image 4, les infos disponibles seront affichées dans un tableau. Chaque Média peut être supprimé avec le bouton "Supprimer", ou modifié, via le bouton "Modifier". 

Cliquez sur "Modifier" pour modifier les mots-clefs correspondant à un média. Vous arriverez sur la page représentée sur l'image 5. 

Si des mots-clefs sont déjà associés au Média, vous obtiendrez une page similaire à l'image 6, avec les mots-clefs listés plus bas.

Si non, tapez le mot-clef souhaité dans la zone de texte, puis cliquez sur "Ajouter un mot clef", le mot-clef apparaitra en bas de la liste.

Vous pouvez modifier un mot clef en modifiant directement la zone de texte correspondante, les changements seront automatiquement pris en compte.

Vous pouvez égaement supprimer un mot clef en cliquant sur le bouton "Supprimer".


## Code et Packages utilisés

**React Bootstrap -** pour l'UI, simple d'utilisation, assez similaire à la version vanilla sans React, et une grosse communauté d'utilisateurs.

Je n'ai pas utilisé de state management comme Redux ou Mobx ou même useContext car l'application est très petite et je n'en ressentais pas le besoin.


