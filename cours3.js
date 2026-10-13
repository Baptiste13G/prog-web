//TD2

var tab = [1, 2,3];
for(var i=0; i<tab.length;i++){
    console.log(tab[i]);
}

function somme(tab){
    var somme=0;
    for(var i=0; i<tab.length;i++){
        somme=somme+tab[i];
    }
    console.log(somme);
}

function max(tab){
    var max=0;
    for(var i=0; i<tab.length;i++){
        if(tab[i]>max){
            max=tab[i];
        }
    }
    console.log(max);
}

function myPush(tab,a){ //Enlève le dernier elt du tab
    tab[tab.length]=a;
    return tab.length;
}

function myShift(tab){ //Enlève le premier elt du tab
    var elt=tab[0];
    for(vari=0;i<tab.length-1;i++){
        tab[i]=tab[i+1];
    }
    tab.length--;
    return elt;
}

//TD3
//tab_trou=[1,,3,,5];

function tab_sans_trou(tab){
    var new_tab=[];
    for(var i =0; i<tab.length;i++){
        if(tab[i]!==undefined){
            new_tab.push(tab[i]);
        }
    }
    return new_tab;
}

function ordre_inverse1(tab){ //Avec shift et unshift
    var new_tab=[];
    for(var i=0;i<tab.length;i++){
        new_tab.unshift(tab[i]);
    }
    return new_tab;
}

function ordre_inverse2(tab){ //Avec pop et push 
    var new_tab=[];
    for(var i=tab.length-1;i>=0;i--){
        new_tab.push(tab[i]);
    }
    return new_tab;
}

function mypop1(tab){ //Avec slice et  ensuite avec splice pop supprime un elt du tab et renvoie l'elt supr
                     // Le tab est donc modifie et contient n-1 val
    return tab.splice(tab.length-1);
}

function mypop2(tab){
    var res = tab.slice(-1);
    tab.length--
    return res[0];
}

function myshiftslice(tab){
    var elt= tab.slice(0,1);
}


//Question 6 :
//1. 111 car .slice(1) enlève le premier elt, .splice(2,4,6) supprime les elt de l'indice 2 à 4 et insère un 6 à la place, reverse inverse ce qui reste dans le tab, .shift enlève et renvoie le premier elt donc 111, il reste donc dans le tab [6, 12, 9]
//var tab=[9,12,77,31,14,54,111]
// slice(1) = 9 mais dans tab [12,77,31,14,54,111]
// splice(2,4,6) = [77,31,14] mais dans tab [12,6,54,111]
// reverse() = [111,54,6,12]
// shift = 111 tab [54,6,12]

//2. [77,31,14,54,111,12] car splice(-5) supprime les elt à partir du -5eme et les renvoient, .concat sert à concatener des tab, tab.slice(1,4) extrait à partir d'un tab les elt d'indice 1 à 4, donc on concatène ça avec le reste de notre tab et ça donne le resultat
//var tab=[9,12,77,31,14,54,111]
//.splice(-5) =[77,31,14,54,111] mais dans tab il ne reste que [9,12]
//tab.slice(1,4) = [12] car i=on ne prend que du elt indice 1 à elt indice 4 or il n'y a que indice 1
//=concat des deux = [77,31,14,54,111,12]

//Question 7 : upprimer les doublons d'un tab avec splice

function mon_doublon(tab){
    nouv_tab=[];
    for(var i=0;i<tab.length;i++){
        if(nouv_tab.includes(tab[i])){
            tab.splice(i,i);
        }
        else{
            nouv_tab[nouv_tab.length]=tab[i];
        }
    }
}
var tab=[2,2,5,4,9,5,4,2];

function doublon(tab){ //Corretction
    for(var i=0;i<tab.length;i++){
        for(var j=i+1;j<tab.length;j++){
            if(tab[i]===tab[j])
                    tab.spliec(j--,1);
        }
    }
    return tab;
}