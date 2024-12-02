let plat1 = " Salade(s) de vers frits" ;
let plat2 = " Poulpe(s) au jus de boue" ;
let plat3 = " Soupe(s) de vers à bois" ;
let plat4 = " Tête(s) de veau rôtie" ;

var nbPlat1 = 0 ;
var nbPlat2 = 0 ;
var nbPlat3 = 0 ;
var nbPlat4 = 0 ;

let total = "Total"

let nbTotal = nbPlat1 + nbPlat2 + nbPlat3 + nbPlat4 ;

let prixPlat = "h de maux d'estomac. " ;
let prixPlat1 = 5 ;
let prixPlat2 = 8 ;
let prixPlat3 = 7 ;
let prixPlat4 = 6 ;

var TPlats = [plat1, plat2, plat3, plat4];
var TPrix = [5, 8, 7, 6];
console.log(TPlats);
console.log(TPrix);

let tableau = [ {Nom: plat1, Prix: prixPlat1+prixPlat, Commandes: nbPlat1},
                {Nom: plat2, Prix: prixPlat2+prixPlat, Commandes: nbPlat2},
                {Nom: plat3, Prix: prixPlat3+prixPlat, Commandes: nbPlat3},
                {Nom: plat4, Prix: prixPlat4+prixPlat, Commandes: nbPlat4}];

let cacheNbPlat1 = nbPlat1 ;
let cacheNbPlat2 = nbPlat2 ;
let cacheNbPlat3 = nbPlat3 ;
let cacheNbPlat4 = nbPlat4 ;

function panier(){

let prixTotal = prixPlat1*nbPlat1 + prixPlat2*nbPlat2 + prixPlat3*nbPlat3 + prixPlat4*nbPlat4 + prixPlat ;
console.log("Le coût total de la commande est de "+prixTotal)
document.getElementById("panierPtotal").innerHTML=prixTotal+" ";
    if(cacheNbPlat1!==nbPlat1){
        document.getElementById("panierPlat1").innerHTML=nbPlat1+" Salade(s) de vers frits, pour : "+nbPlat1*prixPlat1+prixPlat
        cacheNbPlat1=nbPlat1;
        if (cacheNbPlat1===0) {
            document.getElementById("panierPlat1").innerHTML=plat1;
            if (cacheNbPlat1+cacheNbPlat2+cacheNbPlat3+cacheNbPlat4===0) {
                document.getElementById("panierPtotal").innerHTML=" "    
            }
            
        }
    }
    if(cacheNbPlat2!==nbPlat2){
        document.getElementById("panierPlat2").innerHTML=nbPlat2+" Poulpe(s) au jus de boue, pour : "+nbPlat2*prixPlat2+prixPlat
        cacheNbPlat2=nbPlat2;
        if (cacheNbPlat2===0) {
            document.getElementById("panierPlat2").innerHTML=plat2;
            document.getElementById("panierPtotal").innerHTML=" "
            
        }
    }
    if(cacheNbPlat3!==nbPlat3){
        document.getElementById("panierPlat3").innerHTML=nbPlat3+" Soupe(s) de vers à bois, pour : "+nbPlat3*prixPlat3+prixPlat
        cacheNbPlat3=nbPlat3;
        if (cacheNbPlat3===0) {
            document.getElementById("panierPlat3").innerHTML=plat3;
            document.getElementById("panierPtotal").innerHTML=" "
        }
    }
    if(cacheNbPlat4!==nbPlat4){
        document.getElementById("panierPlat4").innerHTML=nbPlat4+" Tête de veau rôtie, pour : "+nbPlat4*prixPlat4+prixPlat
        cacheNbPlat4=nbPlat4;
        if (cacheNbPlat4===0) {
            document.getElementById("panierPlat4").innerHTML=plat4;
            document.getElementById("panierPtotal").innerHTML=" "
            
        }
    }
    console.log(tableau);
}

function commande(){
    nbTotal = nbPlat1 + nbPlat2 + nbPlat3 + nbPlat4;
    if (nbTotal===0){
    alert(" Vous n'avez rien commandé."+"\n \n Votre estomac vous remercie <(^_^)>") 
    } 
    else {
    let messageAlerte = "Vous avez commandé :"
    if (nbPlat1!==0){messageAlerte=messageAlerte+"\n- "+nbPlat1+" "+plat1}
    if (nbPlat2!==0){messageAlerte=messageAlerte+"\n- "+nbPlat2+" "+plat2}
    if (nbPlat3!==0){messageAlerte=messageAlerte+"\n- "+nbPlat3+" "+plat3}
    if (nbPlat4!==0){messageAlerte=messageAlerte+"\n- "+nbPlat4+" "+plat4}
    prixTotal = prixPlat1*nbPlat1 + prixPlat2*nbPlat2 + prixPlat3*nbPlat3 + prixPlat4*nbPlat4 + prixPlat
    messageAlerte=messageAlerte+"\n"+"Le coût de votre commande revient à "+prixTotal
    alert(messageAlerte);
    alert("Vous avez commandé :"+"\n- "+nbPlat1+plat1+"\n- "+nbPlat2+plat2+"\n- "+nbPlat3+plat3+"\n- "+nbPlat4+plat4+"\n \n Soit un total de "+nbTotal+" plats. \n \n Il vous en coûtera "+prixTotal)

    alert(" Votre commande a bien été prise en compte. \n \n Malheureusement, elle aura probablement un peu de retard en préparation, car notre cuisinier souffre actuellement d'un panaris purulent qu'il soigne en le gardant bien au chaud dans les plats."+"\n \n Si toutefois vous n'étiez jamais livré, vous pourrez toujours manger de la colle à bois. Cela fait le même effet que tous nos plats <(^_^)>")
    }
}

