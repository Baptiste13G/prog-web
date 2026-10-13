//Exercice 1
//1.1 Google Chrome or Chromium version 154
//1.2 Windows
//1.3 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36
//1.4 
<script>
    function infoPopUp() {
        const browserName = getBrowserName(navigator.userAgent);
        return `You are using: ${browserName}\n` +
               `Platform: ${navigator.userAgentData.platform}\n` +
               `Brands: ${navigator.userAgentData.brands.map(b => b.brand).join(", ")}\n` +
               `User agent: ${navigator.userAgent}`;
    }

    window.alert(infoPopUp());
</script>

//Exercice 2

/*Dans un script inséré dans le corps d'une nouvelle page html, tester les instructions document.write et document.writeln en affichant au minimum un nombre, une
phrase, le contenu d'une variable, la valeur de pi, et un entier choisi aléatoirement entre 0 et 100.
Moduler l'affichage en fonction d'un test. Par exemple, demander à l'utilisateur de saisir une température (prompt), puis comparer cette variable à une valeur seuil et afficher deux messages différents en fonction du test.

ajouter dans la page les principales caractéristiques de votre écran*/

//Question 4 : window.document.body affiche le noeud body du document courant 

//Question 5:

<script>
    for (const enfant of document.body.children) {
        console.log(enfant.tagName);
    }
</script>

//Question 6:

<script>
    function parcourir(element, niveau = 0) {
      for (const enfant of element.children) {
        console.log('  '.repeat(niveau) + enfant.tagName);
        parcourir(enfant, niveau + 1);
      }
    }
    parcourir(document.body);

</script>
