function addition(){ /* fonction qui demande à l'utilisateur de saisir 2 nombre a et b et qui les additionnent */
    var a = Number(prompt("entrez un premier nombre"));
    var b = Number(prompt("entrez un deuxième nombre"));
    alert(a+b)
}
function af_ad(){
    const code = `function addition(){ <br>
    var a = Number(prompt("entrez un premier nombre"));<br>
    var b = Number(prompt("entrez un deuxième nombre"));<br>
    return a+b<br>
    }<br>
    <a href='interface.html>Retour à la banque</a>'`
    document.write(code)
}
function multi(){ /* fonction qui demande à l'utilisateur de saisir 2 nombre a et b et qui les multiplie*/
    var a = Number(prompt("entrez un premier nombre"));
    var b = Number(prompt("entrez un deuxième nombre"));
    alert(a*b)
}
function af_mul(){
    const code = `function multi(){ /* fonction qui demande à l'utilisateur de saisir 2 nombre a et b et qui les multiplie*/<br>
    var a = Number(prompt("entrez un premier nombre"));<br>
    var b = Number(prompt("entrez un deuxième nombre"));<br>
    alert(a*b)<br>
}`
    document.write(code)
}
function soustraction(){ /* fonction qui demande à l'utilisateur de saisir 2 nombre a et b et qui soustrait a par b */
    var a = Number(prompt("entrez un premier nombre"));
    var b = Number(prompt("entrez un deuxième nombre"));
    alert(a-b)
}
function af_sou(){
    const code = `function soustraction(){ /* fonction qui demande à l'utilisateur de saisir 2 nombre a et b et qui soustrait a par b */<br>
    var a = Number(prompt("entrez un premier nombre"));<br>
    var b = Number(prompt("entrez un deuxième nombre"));<br>
    alert(a-b)<br>
}`
    document.write(code)
}
function divise(){ /* fonction qui demande à l'utilisateur de saisir 2 nombres a et b et qui divise a par b */
    var a = Number(prompt("entrez un premier nombre"));
    var b = Number(prompt("entrez un deuxième nombre"));
    alert(a/b)
}
function af_di(){
    const code = `function divise(){ /* fonction qui demande à l'utilisateur de saisir 2 nombres a et b et qui divise a par b */<br>
    var a = Number(prompt("entrez un premier nombre"));<br>
    var b = Number(prompt("entrez un deuxième nombre")); <br>
    alert(a/b)<br>
}`
    document.write(code)
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
function af_fac(){
    const code = `function facto(){/*Fonction qui demande à l'utilisateur d'entrer un nombre et renvoie la factorielle de ce nombre */<br>
    var a = Number(prompt("entrez un nombre")); /*on demande à l'utilisateur d'entrer une valeur*/<br>
    while(a<=0){/* tant que la valeur entrée précédemment n'est pas positif l'utilisateur doit entrez à nouveau une nouvelle valeur*/<br>
        var a = Number(prompt("entrez un nombre positif"));<br>
    }<br>
    let n = a; /* on définit n qui nous servira de compteur pour la boucle while avec comme valeur de depart a */<br>
    let x =a /* x sera la variable qui nous permettra de faire le calcul  */<br>
    while(n!=1){/*boucle while qui décrémente n jusqu'à que sa valeur soit égale à 1*/<br>
        n--;<br>
        x*=n /* à chaque tour de boucle on multiplie la valeur de x avec celle de n */ <br>
    }<br>
    alert(x)
}`
    document.write(code)
}
function liste(){ /* Fonction qui demande à l'utilisateur d'entrer plusieurs élément puis les ajoute à un tableau (Array) et l'affiche */
    let lst = []; /* on déclare le tableau dans une variable */
    let a = Number(prompt("Combien d'éléments dans la liste ?")); /* on demande à l'utilisateur d'entrez un nombre qui servira de compteur pour la boucle while*/
    while(lst.length !=a ){ /* boucle while qui s'arrete lorsque la taille du tableau lst est égale à la variable a */
        let x = prompt("entrez un nouvel élément"); /* on demande à l'utilisateur d'entrer un élément à chaque tour de boucle */
        lst.push(x)/* l'élément entré dans x est ajouté à la fin du tableau lst */
    }
    alert(lst)
}
function af_lst(){
    const code = `function liste(){ /* Fonction qui demande à l'utilisateur d'entrer plusieurs élément puis les ajoute à un tableau (Array) et l'affiche */ <br>
    let lst = []; /* on déclare le tableau dans une variable */ <br>
    let a = Number(prompt("Combien d'éléments dans la liste ?")); /* on demande à l'utilisateur d'entrez un nombre qui servira de compteur pour la boucle while*/ <br>
    while(lst.length !=a ){ /* boucle while qui s'arrete lorsque la taille du tableau lst est égale à la variable a */<br>
        let x = prompt("entrez un nouvel élément"); /* on demande à l'utilisateur d'entrer un élément à chaque tour de boucle */<br>
        lst.push(x)/* l'élément entré dans x est ajouté à la fin du tableau lst */<br>
    }<br>
    alert(lst)<br>}`
    document.write(code)
}

function divisible(){
    let a = Number(prompt("entrez un nombre ?"));
    let b = Number(prompt("entrez un nombre ?"));
    if(a%b == 0){
        alert(toString(a)+' est divisible par '+toString(b))
        return true
    }
    alert(a," pas divisible par ",b)
}

function af_divi(){
    const code = `function divisible(){ <br>
    let a = Number(prompt("entrez un nombre ?"));<br>
    let b = Number(prompt("entrez un nombre ?"));<br>
    if(a%b == 0){<br>
        alert(a,' est divisible par ',b)<br>
    }<br>
    alert(a," pas divisible par ",b)<br>
}`
    document.write(code)
}

function maximum(){
    let a = Number(prompt("entrez un nombre ?"));
    let b = Number(prompt("entrez un nombre ?"));
    alert(Math.max(a,b))
}

function af_max(){
    const code = `function maximum(){ <br>
    let a = Number(prompt("entrez un nombre ?")); <br>
    let b = Number(prompt("entrez un nombre ?")); <br>
    alert(Math.max(a,b))<br>
}`
    document.write(code)
}

function minimum(){
    let a = Number(prompt("entrez un nombre ?"));
    let b = Number(prompt("entrez un nombre ?"));
    alert(Math.min(a,b))
}

function af_min(){
    const code = `function minimum(){ <br>
    let a = Number(prompt("entrez un nombre ?")); <br>
    let b = Number(prompt("entrez un nombre ?")); <br>
    alert(Math.min(a,b))<br>
}`
    document.write(code)
}

function milieu(){
    let a = Number(prompt("entrez un nombre ?"));
    let b = Number(prompt("entrez un nombre ?"));
    alert((a+b)/2)
}

function af_mil(){
    const code = `function milieu(){ <br>
    let a = Number(prompt("entrez un nombre ?")); <br>
    let b = Number(prompt("entrez un nombre ?")); <br>
    alert((a+b)/2)<br>
}`
    document.write(code)
}

function moitie(){
    let a = Number(prompt("entrez un nombre ?"));
    alert(a/2)
}

function af_moit(){
    const code = `function moitie(){ <br>
    let a = Number(prompt("entrez un nombre ?"));<br>
    alert(a/2)<br>
}`
    document.write(code)
}

function carre(){
    let a = Number(prompt("entrez un nombre ?"));
    alert(a*a)
}

function af_car(){
    const code = `function carre(){<br>
    let a = Number(prompt("entrez un nombre ?"));<br>
    alert(a*a)<br>
}`
    document.write(code)
}

function racine(){
    let a = Number(prompt("entrez un nombre ?"));
    alert(Math.sqrt(a))
}

function af_ra(){
    const code = `function racine(){ <br>
    let a = Number(prompt("entrez un nombre ?"));<br>
    alert(Math.sqrt(a))<br>
}`
    document.write(code)
}

function pair(){
    let a = Number(prompt("entrez un nombre ?"));
    if(a%2==0){
        alert(a+' est pair')
    }
    
}