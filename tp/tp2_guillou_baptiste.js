//Exercice 1

function estPalindrome(mot){
     var long=mot.length;
     var response = true;
     if(long%2===0){
          for(var i=0, j=1;i<long;i++, j++){
               //console.log(mot[i], mot[long-j]);
               if(mot[i]!==mot[long-j]){
                    response=false;
               }
          }
     }  
     console.log(response);
}

// estPalindrome('toto');  // false
// estPalindrome('radar'); // true
// estPalindrome('abba');  // true
// estPalindrome('SOS');   // true  

function estPalindrome2(phrase){
     var n_phrase=phrase.toLowerCase();
     var long = phrase.length;
     var t='';
     var response = true;
     for(var i = 0; i<long;i++){
          if(n_phrase.charCodeAt(i)<=122 && n_phrase.charCodeAt(i)>=97){
               t=t+n_phrase[i];
          }
     }
     var n_long=t.length;
     if(n_long%2===0){
          for(var x=0, y=1;x<n_long;x++, y++){
               if(t[x]!==t[n_long-y]){
                    response=false;
               }
          }
     }
     //console.log(t);
     console.log(response);
}

// estPalindrome2('esope reste elu par cette crapule et se repose'); // true
// estPalindrome2('Eh ca va la vache ?'); // true
// estPalindrome2('test en carton'); // false

//Exercice 2 

function compteMots(s){
     var tab=s.split(' ');
     //console.log(tab);
     console.log(tab.length);
}

// compteMots('la maman de Colette et de Daniel'); // 7

function compteMots2(s){
     while(s.includes('  ')){
          s = s.replace('  ', ' '); // remplace UNE occurrence de double espace par un seul
     }
     s = s.trim(); // enlève espace en tout début/fin de chaîne
     var tab = s.split(' ');
     return tab.length;
}


//compteMots2('test   allo  1');
//compteMots2(' la maman    de Colette et de   Daniel  '); // 7

function compteMots3(s, sep){
     var nou_phrase='';
     var co_sep= sep.split('');
     for(var i=0;i<s.length;i++){
          if(co_sep.includes(s.charAt(i))){
               nou_phrase=nou_phrase+' ';
          }
          else{
               nou_phrase=nou_phrase+s[i];
          }
     }
     return compteMots2(nou_phrase);
}

// console.log(compteMots3('Ceci, mais oui, est une phrase !', ' !,')); // 6
//Exercice 3

function supprime(chaine, pattern){
     var n_chaine = '';
     var i = 0;
     while(i < chaine.length){
          if(chaine.substring(i, i+pattern.length) === pattern && pattern.length > 0){
               i = i + pattern.length; // on saute le pattern, on ne l'ajoute pas
          }
          else{
               n_chaine = n_chaine + chaine[i];
               i = i + 1;
          }
     }
     return n_chaine;
}

//console.log(supprime('tata mangeee du pain', 'ee'));

function remplace(chaine, pattern1, pattern2){
     var nv_chaine = '';
     var i = 0;
     while(i < chaine.length){
          if(chaine.substring(i, i+pattern1.length) === pattern1 && pattern1.length > 0){
               nv_chaine = nv_chaine + pattern2; // on ajoute pattern2 à la place
               i = i + pattern1.length;
          }
          else{
               nv_chaine = nv_chaine + chaine[i];
               i = i + 1;
          }
     }
     return nv_chaine;
}

console.log(remplace('tata mange du pain', 'mange', 'achète'));

