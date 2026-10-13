var tab1=[1,2,3,4];
var tab2=[5,6,7,8];
//Programme qui renvoie un tableau de l'union de 2 tableaux, à l'aide d'un objet,
// on ne garde qu'un exemplaire de chaque valeur

var res=[]
for(i=0;i<tab1.length;i++){
    if(res.includes(tab1[i])==false){
        res[res.length]=tab1[i]
    }
}
for(i=0;i<tab2.length;i++){
    if(res.includes(tab1[i])==false){
        res[res.length]=tab2[i]
    }
}


//Correction

function useInsertionEffect(arra1,arra2){
    if(!Array.isArray(arra1)||!Array.isArray(arra2)){
        return;
    }
    var obj={}
    var res=[]
    for(var i=arra1.length-1;i>=0;--i){
        obj[arra1[i]]= arra1[i];
    }
    for(var i=arra2.length-1;i>=0;--i){
        obj[arra2[i]]= arra2[i];
    }
    console.log(obj);
    for(var n in obj){
        res.push(obj[n]);
    }
}

//Exercice 2:

    //obj sous forme obj1={x:1, y:2} obj1={x:2, y:3}
    //Calculer la distance euclidienne
var p1={
    x:1,
    y:2
}
var p2={
    x:2,
    y:3
}

function distEuclid(a,b){
    return Math.sqrt((a.x - b.x)**2 +(a.y-b.y)**2);
}