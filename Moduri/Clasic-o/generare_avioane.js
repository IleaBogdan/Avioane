function genereaza_aviane(H) {
    var NR_AVIOANE = 3;
    var numar_avioana_generate;
    numar_avioana_generate = 0;
    var incercari_pozitionare = M * N * M * N;

    while (NR_AVIOANE > numar_avioana_generate) {
        var x = Math.floor(Math.random() * M);;
        var y = Math.floor(Math.random() * N);;
        var z = Math.floor(Math.random() * 4);;
        var directie = 0;
        if (z == 0) directie = 'N';
        if (z == 1) directie = 'S';
        if (z == 2) directie = 'V';
        if (z == 3) directie = 'E';

        if (pozitioneaza_avion(x, y, directie, H) == 0)
            numar_avioana_generate++;
        incercari_pozitionare--;
        if (incercari_pozitionare == 0)
            break;

    }

}
function pozitioneaza_avion(x, y, Directie, H)
{
    /*if (Directie == 'V' || Directie == 'E') {
        var xx = 1;
        if (Directie == 'V')
            xx = 1;
        else xx = -1;
        if (y < 2 || y > N - 3 || (xx == 1 && x > M - 4) || (xx == -1 && x < 3)) {
            return 1;
        }
        if (H[x][y] != '.' || H[x + 1 * xx][y] != '.' || H[x + 1 * xx][y + 1] != '.' || H[x + 1 * xx][y - 1] != '.'
            || H[x + 1 * xx][y + 2] != '.' || H[x + 1 * xx][y - 2] != '.' || H[x + 2 * xx][y] != '.' || H[x + 3 * xx][y] != '.' ||
            H[x + 3 * xx][y + 1] != '.' || H[x + 3 * xx][y - 1] != '.') {
            return 2;
        }
        H[x][y] = 'x';
        H[x + 1 * xx][y] = '0';
        H[x + 1 * xx][y + 1] = 'o';
        H[x + 1 * xx][y - 1] = 'o';
        H[x + 1 * xx][y + 2] = 'o';
        H[x + 1 * xx][y - 2] = 'o';
        H[x + 2 * xx][y] = '0';
        H[x + 3 * xx][y] = '0';
        H[x + 3 * xx][y + 1] = 'o';
        H[x + 3 * xx][y - 1] = 'o';


    }
    else {
        var yy = 1;
        if (Directie == 'N')
            yy = 1;
        else yy = -1;
        if (x < 2 || x > M - 3 || (yy == 1 && y > N - 4) || (yy == -1 && y < 3)) {
            return 1;
        }
        if (H[x][y] != '.' || H[x][y + 1 * yy] != '.' || H[x - 1][y + 1 * yy] != '.' || H[x + 2][y + 1 * yy] != '.'
            || H[x - 2][y + 1 * yy] != '.' || H[x][y + 2 * yy] != '.' || H[x][y + 3 * yy] != '.' ||
            H[x + 1][y + 3 * yy] != '.' || H[x - 1][y + 3 * yy] != '.') {
            return 2;
        }
        H[x][y] = 'x';
        H[x][y + 1 * yy] = '0';
        H[x + 1][y + 1 * yy] = 'o';
        H[x - 1][y + 1 * yy] = 'o';
        H[x + 2][y + 1 * yy] = 'o';
        H[x - 2][y + 1 * yy] = 'o';
        H[x][y + 2 * yy] = '0';
        H[x][y + 3 * yy] = '0';
        H[x + 1][y + 3 * yy] = 'o';
        H[x - 1][y + 3 * yy] = 'o';


    }


    return 0;*/

    var index = 0;
    if (Directie == 'V') {
        index = 0;
        y -= 2;
    }
    else
        if (Directie == 'N') {
            index = 1;
            x -= 2;
    }
    else
        if (Directie == 'E') {
            index = 2;
            y -= 1;
    }
    else {
            index = 3;
            y -= 1;
            x -= 2;
            }


    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (i + x < 0) return 1;
            if (j + y < 0) return 1;
            if (i + x >= M) return 1;
            if (j + y >= N) return 1;
            if (SA[index][i][j] != ' ') {
                if (H[i + x][j + y] != '.')
                    return 1;
            }
        }
    }

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (SA[index][i][j] != ' ') {
                H[i+x][j+y] = SA[index][i][j];
            }
        }
    }
    return 0;
}
function initializare_SA()
{
    var SA = new Array(4);
    for (var i = 0; i < 4; i++) {
        SA[i] = new Array(5);
        for (var j = 0; j < 5; j++) {
            SA[i][j] = new Array(5);
        }
    }
    for (var i = 0; i < 5; i++)
    for (var j = 0; j < 5; j++) {
        SA[0][i][j] = ' ';
        SA[1][i][j] = ' ';
        SA[2][i][j] = ' ';
        SA[3][i][j] = ' ';
    }
    SA[0][2][0] = 'V';
    SA[0][2][1] = '0';
    SA[0][2][2] = '0';
    SA[0][2][3] = '0';
    SA[0][0][1] = 'o';
    SA[0][1][1] = 'o';
    SA[0][3][1] = 'o';
    SA[0][4][1] = 'o';
    SA[0][1][3] = 'o';
    SA[0][3][3] = 'o';

    SA[1][0][2] = 'N';
    SA[1][1][2] = '0';
    SA[1][2][2] = '0';
    SA[1][3][2] = '0';
    SA[1][1][1] = 'o';
    SA[1][1][0] = 'o';
    SA[1][1][3] = 'o';
    SA[1][1][4] = 'o';
    SA[1][3][1] = 'o';
    SA[1][3][3] = 'o';

    SA[2][2][3] = 'E';
    SA[2][2][2] = '0';
    SA[2][2][1] = '0';
    SA[2][2][0] = '0';
    SA[2][1][2] = 'o';
    SA[2][0][2] = 'o';
    SA[2][3][2] = 'o';
    SA[2][4][2] = 'o';
    SA[2][1][0] = 'o';
    SA[2][3][0] = 'o';

    SA[3][3][2] = 'S';
    SA[3][2][2] = '0';
    SA[3][1][2] = '0';
    SA[3][0][2] = '0';
    SA[3][2][1] = 'o';
    SA[3][2][0] = 'o';
    SA[3][2][3] = 'o';
    SA[3][2][4] = 'o';
    SA[3][0][1] = 'o';
    SA[3][0][3] = 'o';

    /*for (var k = 1; k < 4; k++) {
        for (var i = 0; i < 5; i++)
        for (var j = 0; j < 5; j++) {
            SA[k][j][5 - i - 1] = SA[k - 1][i][j];
        }
    }
    for (int k = 0; k < 4; k++) {
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                cout << SA[k][i][j] << "  ";
            }
            cout << endl;
        }
        cout << endl;
    }*/
    return SA;

}