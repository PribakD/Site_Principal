function test_age(){
    let age = prompt("quel est votre age ? ");
    if (age<18)
    {
        document.write(" Attention accès refusé, vous êtes mineur");
        document.body.style.backgroundColor = "red";
    }
    else
    {
        document.write(" OK, vous êtes Majeur");
        document.body.style.backgroundColor = "green";  
    }
}

function affichage(){
    let prenom = prompt('saisir votre prénom');
    let nom = prompt("saisir votre nom");
    document.write("<div style='border:5px solid blue; width:400px; height:300px; margin:auto;font-size:2em;'>");
    document.write("Bonjour "+ prenom+ " "+nom);
    document.write("</div>");

}

function moyenne(){
    var note1 = Number(prompt('saisir la premiere note'));
    var note2 = Number(prompt('saisir la deuxieme note'));
    var note3 = Number(prompt('saisir la troisieme note'));
    var sum = note1 + note2 + note3;
    var moy = parseInt(sum/3) ;
    document.write('Note totale : '+sum+ "<br>");
    document.write('la moyenne est : '+moy+"<br>");
    if (moy<10)
    {
        document.write("vous n'etes pas admis");
    }
    else if(moy<14)
    {
        document.write("vous etes admis passable")
    }
    else{
        document.write("vous etes admis bien")
    }

    
}

function change_couleur(){
    let couleur = prompt("donner une couleur")
    if (couleur =="rouge"){
        document.body.style.backgroundColor = "red"
    }
    else if (couleur=="bleu"){
        document.body.style.backgroundColor = "blue"
    }
    else if (couleur=="vert"){
        document.body.style.backgroundColor = "green"
    }
    else{
        document.write("Couleur non comprise")
    }
}