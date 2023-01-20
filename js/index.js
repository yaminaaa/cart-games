/* c'est dans ce fichier qu'il faudra écrire le code pour le challenge */
let quantityAbyss = 0;
let quantityKanagawa = 0;

// si on veut vérifier que nos variables sont bien créées
// console.log(quantityAbyss);
// console.log(quantityKanagawa);

function addProductAbyss() {
  // pour vérifier qu'on a écrit correctement la structure de la fonction
  // console.log("on est dans addProductAbyss");

  // ici on a accés aux variables définies en-dehors de la fonction :
  // quantityAbyss et quantityKanagawa
  //  mais si on définit une variable dans une fonction, cette variable n'est pas
  // disponible à l'extérieur de la fonction => il faut un return si on veut
  // s'en servir en-dehors

  // - récupérer l'emplacement de l'input dans le DOM
  const inputElement = document.querySelector('#product_1');
  
  // pour valider l'étape (bien penser à appeler la fonction)
  // console.log(inputElement);

  // - changer la valeur de l'input, qui se fera en deux étapes :
  //     - calculer la nouvelle valeur
  quantityAbyss = quantityAbyss + 1;
  //     - placer la nouvelle valeur dans l'input
  inputElement.value = quantityAbyss;

  // pas de console.log pour valider cette étape : le résultat est directement
  // visible sur la page
}

function addProductKanagawa() {
  // console.log("on est dans addProductKanagawa");

  // - récupérer l'emplacement de l'input dans le DOM
  const inputElementKanagawa = document.querySelector('#product_2');

  // - changer la valeur de l'input, qui se fera en deux étapes :
  //     - calculer la nouvelle valeur
  quantityKanagawa = quantityKanagawa + 1;
  //     - placer la nouvelle valeur dans l'input
  inputElementKanagawa.value = quantityKanagawa;
}

// pour appeler la fonction :
// addProductKanagawa();

/*
Mise en place d'une fonction :
- choisir un nom et mettre en place la structure
- vérifier la structure avec un console.log
   => il faut appeler la fonction pour voir ce texte dans la console, soit on
   l'appelle directement dans le fichier, soit on l'appelle dans la console
- écrire le plan d'action de la fonction (les étapes en français)
- écrire le code de chaque étape, en vérifiant avec des console.log ou sur la
page
*/
