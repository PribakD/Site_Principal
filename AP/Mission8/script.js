function addition(){ /* fonction qui demande à l'utilisateur de saisir 2 nombre a et b et qui les additionnent */
    var a = Number(prompt("entrez un premier nombre"));
    var b = Number(prompt("entrez un deuxième nombre"));
    alert(a+b)
}

function multi(){ /* fonction qui demande à l'utilisateur de saisir 2 nombre a et b et qui les multiplie*/
    var a = Number(prompt("entrez un premier nombre"));
    var b = Number(prompt("entrez un deuxième nombre"));
    alert(a*b)
}

function soustraction(){ /* fonction qui demande à l'utilisateur de saisir 2 nombre a et b et qui soustrait a par b */
    var a = Number(prompt("entrez un premier nombre"));
    var b = Number(prompt("entrez un deuxième nombre"));
    alert(a-b)
}

function divise(){ /* fonction qui demande à l'utilisateur de saisir 2 nombres a et b et qui divise a par b */
    var a = Number(prompt("entrez un premier nombre"));
    var b = Number(prompt("entrez un deuxième nombre"));
    alert(a/b)
}

function facto(){/*Fonction qui demande à l'utilisateur d'entrer un nombre et renvoie la factorielle de ce nombre */
    var a = Number(prompt("entrez un nombre")); /*on demande à l'utilisateur d'entrer une valeur*/
    while(a<=0){/* tant que la valeur entrée précédemment n'est pas positif l'utilisateur doit entrez à nouveau une nouvelle valeur*/
        var a = Number(prompt("entrez un nombre positif"));
    }
    let n = a; /* on définit n qui nous servira de compteur pour la boucle while avec comme valeur de depart a */
    let x =a /* x sera la variable qui nous permettra de faire le calcul  */
    while(n!=1){/*boucle while qui décrémente n jusqu'à que sa valeur soit égale à 1*/
        n--;
        x*=n /* à chaque tour de boucle on multiplie la valeur de x avec celle de n */ 
    }
    alert(x)
}

function liste(){
    let lst = [];
    let a = Number(prompt("Combien d'éléments dans la liste ?"));
    while(lst.length !=a ){
        let x = prompt("entrez un nouvel élément");
        lst.push(x)
    }
    alert(lst)
}