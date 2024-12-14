function testqcm(){
    var score = 0;
            const questions = document.querySelectorAll('fieldset');

            questions.forEach((question) => {
                const radio = question.querySelector('input[type="radio"]:checked');
                if (radio && radio.getAttribute('data-correct') === 'true') {
                    score++;
                }
            });
            document.getElementById('result').textContent = `Votre score est ${score}`;
}
function corrige(){
    window.open("corrige.html")
}
function reinitialise_quest(){
    document.getElementById("qcm").reset()
}
function fermer_page(){
    window.close()
}