//Exercice 1: Refare avec mod 26 pcq ça marche pas avec des key négatifs.

function codeCesar(msg, key){
    var res="";
    for(var i =0;i<msg.length;i++){
        var asc=msg.charCodeAt(i);
        asc=asc+key;
        while(asc>90){ //Si ça dépasse le code ascii de Z (90), 
            asc=asc-26;
        }
        res=res+String.fromCharCode(asc);
    }
    console.log(res);
}

//codeCesar("ZORRO", 3);

function decodeCesar(msg, key){
    var res="";
    for(var i =0;i<msg.length;i++){
        var asc=msg.charCodeAt(i);
        asc=asc-key;
        while(asc<65){
            asc=asc+26;
        }
        res=res+String.fromCharCode(asc)
    }
    console.log(res);
}

//decodeCesar("CRUUR",3);

function codeCesar2(msg, key){
    var res="";
    for(var i =0;i<msg.length;i++){
        var asc=msg.charCodeAt(i);
        if(asc!==32){
            asc=asc+key;
            while(asc>90){ //Si ça dépasse le code ascii de Z (90), 
                asc=asc-26;
            }
            res=res+String.fromCharCode(asc);
        }
        else{
            res=res+String.fromCharCode(asc);
        }
    }
    console.log(res);
}

//codeCesar2('COUCOU TOUT LE MONDE', 3); // 'FRXFRX WRXW OH PRQGH'

function decodeCesar2(msg, key){
    var res="";
    for(var i =0;i<msg.length;i++){
        var asc=msg.charCodeAt(i);
        if(asc!==32){
            asc=asc-key;
            while(asc<65){
                asc=asc+26;
            }
            res=res+String.fromCharCode(asc);
        }
        else{
            res=res+String.fromCharCode(asc);
        }
    }
    console.log(res);
}

//decodeCesar2('CRUUR WRXW OH PRQGH', 3); // 'ZORRO'

function codeCesar3(msg, key, blanks){
    var tab=[];
    var res="";
    for(var i=0;i<blanks.length;i++){
        tab[tab.length]=blanks.charCodeAt(i);
    }
    console.log(tab);
    for(var i =0;i<msg.length;i++){
        var asc=msg.charCodeAt(i);
        if(asc==32 || tab.includes(asc)){
            res=res+String.fromCharCode(asc);
        }
        else{
            asc=asc+key;
            while(asc>90){ //Si ça dépasse le code ascii de Z (90), 
                asc=asc-26;
            } 
            res=res+String.fromCharCode(asc);
        }
    }
    console.log(res);
}

//codeCesar3('COUCOU, TOUT LE MONDE !', 3, ', !'); // 'FRXFRX, WRXW OH PRQGH !'

function decodeCesar3(msg, key, blanks){
    var tab=[];
    var res="";
    for(var i=0;i<blanks.length;i++){
        tab[tab.length]=blanks.charCodeAt(i);
    }
        for(var i =0;i<msg.length;i++){
        var asc=msg.charCodeAt(i);
        if(asc==32 || tab.includes(asc)){
            res=res+String.fromCharCode(asc);
        }
        else{
            asc=asc-key;
            while(asc<65){ //Si ça dépasse le code ascii de Z (90), 
                asc=asc+26;
            } 
            res=res+String.fromCharCode(asc);
        }
    }
    console.log(res);
}

//decodeCesar3('FRXFRX, WRXW OH PRQGH !', 3, ', !'); // COUCOU, TOUT LE MONDE !

//Exercice 2 :

function codeSubstitution(msg,key){
    var res="";
    var tab=[];
    for(var i=0; i<key.length;i++){ 
        tab[tab.length]=key.charCodeAt(i);
    }
    for(var i=0;i<msg.length;i++){
        //il faut que par exemple le charcode 65 devienne 0 pour aller 
        //chercher dans mon tableau l'index 0 et le transformer en caractère
        var asc=msg.charCodeAt(i);
        if(asc!==32){
            asc=asc-65;
            res=res+String.fromCharCode(tab[asc]);
        }
        else{
            res=res+String.fromCharCode(asc);
        }
    }
    console.log(res);
}

//codeSubstitution('CECI EST UN TEST', 'AZERTYUIOPQSDFGHJKLMWXCVBN'); // ETEO TLM WF MTLM

function decodeSubstitution(msg,key){
var res="";
    var tab=[];
    for(var i=0; i<key.length;i++){ 
        tab[tab.length]=key.charCodeAt(i);
    }
    for(var i=0;i<msg.length;i++){
        //il faut chercher l'index de asc dans le tab et rajouter 65
        var asc=msg.charCodeAt(i);
        if(asc!==32){
            var index=tab.indexOf(asc);
            res=res+String.fromCharCode(65+index);
        }
        else{
            res=res+String.fromCharCode(asc);
        }
    }
    console.log(res);
}

//decodeSubstitution('&"&! "¨ù `_ @`ù^" ù"¨ù', '@#&é"(§è!çà)-_$*€^¨ù`£=+:/') // 'CECI EST UN AUTRE TEST',

//Exercice 3:

function codeVigenere(msg, key){
    var res="";
    var j=0; // index dans la clé, avance seulement sur les lettres
    for(var i=0;i<msg.length;i++){
        var asc=msg.charCodeAt(i);
        if(asc==32){
            res=res+String.fromCharCode(asc);
        }
        else{
            var decalage=key.charCodeAt(j%key.length)-65; // A=0, B=1, ...
            asc=asc+decalage;
            while(asc>90){
                asc=asc-26;
            }
            res=res+String.fromCharCode(asc);
            j++;
        }
    }
    console.log(res);
}

//codeVigenere('BONJOUR', 'CLE'); // 'DZRLZSA'

function decodeVigenere(msg, key){
    var res="";
    var j=0;
    for(var i=0;i<msg.length;i++){
        var asc=msg.charCodeAt(i);
        if(asc==32){
            res=res+String.fromCharCode(asc);
        }
        else{
            var decalage=key.charCodeAt(j%key.length)-65;
            asc=asc-decalage;
            while(asc<65){
                asc=asc+26;
            }
            res=res+String.fromCharCode(asc);
            j++;
        }
    }
    console.log(res);
}

//decodeVigenere('DZRLZSA', 'CLE'); // 'BONJOUR'
