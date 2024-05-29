function initializare() {
    InitGame();
    console.log('initializare');
    initializare_harta('HH');
    initializare_harta('HC');
    afisare_harta_om('HH', HH);
    afisare_harta_computer('HC', HC);
}
function initializare_harta(id) {
    var harta = document.getElementById(id);
    for (var i = 0; i < 10; i++) {
        var linie = document.createElement('div');
        linie.className = 'linie';
        harta.appendChild(linie);


        for (var j = 0; j < 10; j++) {

            var celula = document.createElement('div');
            celula.id = id + '_' + i + '_' + j;
            celula.setAttribute('data-cx', i);
            celula.setAttribute('data-cy', j);
            if (id==='HC') celula.onclick = OnCellClick;
            celula.className = 'celula';
            linie.appendChild(celula);
        }
    }
}
var joc_terminat = false;
function OnCellClick() {
    if (joc_terminat) return;
    var obj = event.target;
    if (obj.tagName == 'IMG')
        obj = obj.parentNode;

    var x = obj.getAttribute('data-cx');
    var y=obj.getAttribute('data-cy');
    Human_Move(HC, CC, x, y);
    Computer_Move(HH, CH);
    afisare_harta_om('HH', HH);
    afisare_harta_computer('HC', HC);
    var puncte_HC = Calcul_Punctaj(HC);
    var puncte_CH = Calcul_Punctaj(CH);
    

    var p1 = document.getElementById('Human_Scor');
    p1.value = puncte_HC;
    p1.title = puncte_HC + ' Puncte';
    var p2 = document.getElementById('Computer_Scor');
    p2.value = puncte_CH;
    p2.title = puncte_CH + ' Puncte';
    if (puncte_CH === 30 && puncte_HC === 30) {
        joc_terminat = true;
        alert('Egalitate!');
    }
    else if (puncte_CH === 30) {
        joc_terminat = true;
        alert('Ai Pierdut!');
    }
    else if (puncte_HC === 30) {
        joc_terminat = true;
        alert('Ai Castigat!');
    }
}
var SA;
function InitGame() {
    SA=initializare_SA();
    HH=initializare_harta_cu_punct();
    HC=initializare_harta_cu_punct();
    CC=initializare_harta_cu_punct();
    CH=initializare_harta_cu_punct();
    genereaza_aviane(HH);
    genereaza_aviane(CC);
}