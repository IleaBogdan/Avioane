var tip_joc;
var HH; ///harta om pt om
var HC; ///harta om pt computer
var CH; ///harta computer pt om
var CC; ///harta computer pt computer
var M = 10; ///marime harta
var N = 10; ///marime harta
var SA; ///Matricea cu avioane
var joc_terminat = false;
var orientari = ['V', 'N', 'E', 'S'];
var rotiri = ['rotate270', 'rotate000', 'rotate090', 'rotate180'];

function index_orientare(orientare) {
    for (var i = 0; i < 4; i++) {
        if (orientare === orientari[i]) return i;
    }
    console.log('asa nu ar trebui sa se intample');
    return -1;
}