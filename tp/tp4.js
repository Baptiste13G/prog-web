function randomInt1(max){
    return Math.floor(Math.random() * max-1);
}

function randomInt2(min, max){
    return Math.floor(Math.random() * (max-1 - min + 1)) + min;
}

function randomIntArrray(min,max,n){
    var tab=[];
    for(var i=0;i<n;i++){
        tab[tab.length]=Math.floor(Math.random() * (max-1 - min + 1)) + min;
    }
    return tab;
    console.log(tab);
}

function moyenne(tab){ //Ca tend vers 50.5, c'est la moyenne des deux bornes + le tableau est grand plus la moyenne de ses éléments se rapproche de la moyenne entre les deux bornes.
    var moy=0;
    var somme=0;
    var long=tab.length;
    for(var i =0; i<tab.length;i++){
        somme=somme+tab[i];
    }
    moy=somme/tab.length;
    console.log(moy);
}

/*tab1=randomIntArrray(1,101,10000);
moyenne(tab1);
tab2=randomIntArrray(1,101,10000);
moyenne(tab2);
tab3=randomIntArrray(1,101,10000);
moyenne(tab3);
tab4=randomIntArrray(1,101,10000);
moyenne(tab4);
tab5=randomIntArrray(1,101,10000);
moyenne(tab5);*/

function occurence(tab,min,max){ //On remarque que toutes les valeurs sont présentes et en moyenne 100 fois, la fréquence des éléments est de min/max ça se voit de + en + 
                                 //lorsque le tableau grandit
    var compteur={};
    for(var valeur of tab){
        if(valeur<=max && valeur>=min){
            if(valeur in compteur){
                compteur[valeur]+=1;
            }
            else{
                compteur[valeur]=1;
            }
        }
    }
    console.log(compteur);
    return compteur;
}
/*
tab1=randomIntArrray(1,102,10000);
tab2=randomIntArrray(1,102,10000);
tab3=randomIntArrray(1,102,10000);
tab4=randomIntArrray(1,102,10000);
occurence(tab1,1,102);
occurence(tab2,1,102);
occurence(tab3,1,102);
occurence(tab4,1,102);*/

function stats(tab,min,max){ //Chaque valeur de l'intervalle apparaît avec une proportion proche de 1/(max-min), 
    var dic={};
    for (var v = min; v < max; v++) { //initialisation des valeurs à 0
        dic[v] = 0;
    }
    for(var valeur of tab){
        if(valeur<=max && valeur>=min){
            if(valeur in dic){
                dic[valeur]+=1;
            }
        }
    }
    for(var cle in dic){
        dic[cle]=dic[cle]/tab.length
    }
    console.log(dic);
    return dic;
}
/*
tab1=randomIntArrray(1,102,10000);
tab2=randomIntArrray(1,102,10000);
tab3=randomIntArrray(1,102,10000);
tab4=randomIntArrray(1,102,10000);
stats(tab1,1,102);
stats(tab2,1,102);
stats(tab3,1,102);
stats(tab4,1,102);*/

//Exercice 2:

function excusotron(tab){
    var texte="";
    for(var i=0; i<tab.length;i++){
        var mot=randomInt2(0,tab[i].length);
        texte=texte+tab[i][mot];
        texte=texte+" ";
    }
    console.log(texte);
    return texte;
}

var pipoText1 = [["Ce matin,", "Tantôt,"], ["j'ai eu une panne"], ["de réveil.", "d'oreiller."]];
//excusotron(pipoText1);
var pipoText2 = [ [ "Tôt dans la matinée,", "Vers 4h du matin,", "Hier soir,", "Tard dans la nuit,", "En pleine nuit," ], [ "alors que", "pendant que", "au moment où", "tandis que", "comme", "cependant que" ], [ "je dormais après avoir relu pour la 3ème fois la Comédie humaine de Balzac,", "je sommeillais en attendant de me lever pour mon footing quotidien de 5h du matin,", "je somnollais après avoir passé en revue une étude du Figaro Economique,", "je m'étais assoupi sur une des oeuvres passionnantes de Friedrich Wilheim Nietzsche,", "je me reposais après avoir pratiqué 2h intenses de Squash,", "je m'étais endormis sur un article fort intéressant du Herald Tribune,", "je faisais un somme après avoir fini de traduire Guerre & Paix en Mandarin,", "je m'étais assoupi sur la brillante émission 'Chasse et Pêche'," ], [ "mon chat", "mon chien", "ma vieille grand-mère", "mon perroquet", "mon sanglier domestique", "ma belle-mère", "mon iguane asthmatique" ], [ "a joué avec le fil électrique de", "s'est pris les pates dans le fil électrique de", "a appuyé par mégarde sur le bouton OFF de", "a effleuré par inadvertance le Snooze de", "a renversé du Coca sur", "a fait tomber dans la baignoire", "a rebooté" ], [ "mon radio-réveil qui n'a donc pas sonné, et ce n'est" ], [ "que lorsque les pompiers sont entrés en hurlant 'AU FEU!'", "qu'au moment où les huissiers (venus pour le voisin) ont enfoncé la porte", "qu'avec l'arrivée du SAMU, venu chercher ma grand-mère", "qu'après l'entrée fracassante de la SPA", "qu'au moment où les pompes-funèbres (venues chercher ma belle-mère) ont sonné à la porte", "que quand le plombier est venu réparer l'inondation", "qu'avec la visite d'un représentant du Téléthon venu me remercier pour mon généreux don de la veille" ], [ "que je me suis réveillé, trop en retard pour être à l'heure à la fac.", "que j'ai repris connaissance et me suis précipité tardivement à la fac.", "que j'ai réalisé qu'il était trop tard pour venir à la fac ce matin.", "que j'ai bondi hors de mon lit pour me ruer à la fac." ] ];
//excusotron(pipoText2);

//Exercice 3: 

function choixAleatoire(tab){
    return tab[randomInt2(0, tab.length)];
}

function generateur1(texte){
    var modele = {};
    modele["debut"] = [texte[0]];
    for(var i = 0; i < texte.length - 1; i++){
        if(!(texte[i] in modele)){
            modele[texte[i]] = [];
        }
        modele[texte[i]].push(texte[i+1]);
    }
    var resultat = choixAleatoire(modele["debut"]);
    var courant = resultat;
    var c = 0;
    while(courant in modele && modele[courant].length > 0 && c < 200){
        courant = choixAleatoire(modele[courant]);
        resultat = resultat + courant;
        c = c + 1;
    }
    console.log(resultat);
    return resultat;
}

function generateur2(texte, n){
    var modele = {};
    modele["debut"] = [texte.substring(0, n)];
    for(var i = 0; i < texte.length - n; i++){
        var cle = texte.substring(i, i + n);
        if(!(cle in modele)){
            modele[cle] = [];
        }
        modele[cle].push(texte[i + n]);
    }
    var resultat = choixAleatoire(modele["debut"]);
    var c = 0;
    while(c < 200){
        var cle = resultat.substring(resultat.length - n);
        if(!(cle in modele) || modele[cle].length == 0){
            break;
        }
        resultat = resultat + choixAleatoire(modele[cle]);
        c = c + 1;
    }
    console.log(resultat);
    return resultat;
}

var texteRef = "Va, cours, vole et nous venge.";
generateur1(texteRef);
generateur2(texteRef, 2);
var texteLong = "Ne réplique point, je connais ton amour, Mais qui peut vivre infâme est indigne du jour ; Plus l'offenseur est cher, et plus grande est l'offense. Enfin tu sais l'affront, et tu tiens la vengeance : Je ne te dis plus rien. Venge-moi, venge-toi ; Montre-toi digne fils d'un père tel que moi. Accablé des malheurs où le destin me range, Je vais les déplorer. Va, cours, vole, et nous venge.";
generateur1(texteLong);
generateur2(texteLong, 3);
