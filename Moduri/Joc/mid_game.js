function Computer_Move(HH, CH)
{
    var P = new Array(M);
    for (var i = 0; i < M; i++) {
        P[i] = new Array(N);
    }
    for (var i = 0; i < M; i++)
        for (var j = 0; j < N; j++)
            P[i][j] = 0;

    for (var k = 0; k < 4; k++) {
        k++;
        k--;
        for (var i = -5; i < M; i++) {
            for (var j = -5; j < N; j++) {
                var posibil = 1;
                for (var ii = 0; ii < 5; ii++) {
                    for (var jj = 0; jj < 5; jj++) {
                        if (SA[k].mask[ii][jj] == ' ') continue;
                        if ((i + ii >= M) || (i + ii < 0)) {
                            posibil = 0;
                            break;
                        }
                        if ((j + jj >= N) || (j + jj < 0)) {
                            posibil = 0;
                            break;
                        }
                        if (CH[i + ii][j + jj] != '.' && CH[i + ii][j + jj] != SA[k].mask[ii][jj]) {
                            posibil = 0;
                            break;
                        }
                        if (CH[i + ii][j + jj] == SA[k].mask[ii][jj]) {
                            posibil++;
                        }
                    }
                    if (posibil == 0) break;
                }
                if (posibil != 0) {
                    for (var ii = 0; ii < 5; ii++) {
                        for (var jj = 0; jj < 5; jj++) {
                            if (SA[k].mask[ii][jj] == ' ') continue;
                            if ((i + ii >= M) || (i + ii < 0)) break;
                            if ((j + jj >= N) || (j + jj < 0)) break;
                            if (CH[i + ii][j + jj] == '.')
                                P[i + ii][j + jj] = P[i + ii][j + jj] + posibil;
                        }
                    }
                }
            }
        }
    }
     /*for (int j = 0; j < N; j++) {
         for (int i = 0; i < M; i++) {
             cout << P[i][j] << " ";

         }
         cout << endl;
     }
     cout << endl;*/




    var x = 0, y = 0;
    //y = rand() % N;
    //x = rand() % M;
    var max = 0;
    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            if (max < P[i][j]) {
                max = P[i][j];
                x = i;
                y = j;
            }
        }
    }




    var hh = HH[x][y];
    if (hh == '.') {
        hh = '_';
    }
    CH[x][y] = hh;

    if (HH[x][y] != '.') {
        if (HH[x][y] == 'N') HH[x][y] = 'n'; 
        else if (HH[x][y] == 'S') HH[x][y] = 's'; 
        else if (HH[x][y] == 'V') HH[x][y] = 'v'; 
        else if (HH[x][y] == 'E') HH[x][y] = 'e'; 
        else HH[x][y] = '*';
    }
    else HH[x][y] = '_';
    console.log(x + ' ' + y)
    return 1;
}
function Human_Move(HC, CC, x, y)
{
    var cc = CC[x][y];
    if (cc == '.') {
        cc = '_';
    }
    HC[x][y] = cc;
}
function Calcul_Punctaj(H)
{
	var Punctaj = 0;
    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            if (H[i][j] != '.' && H[i][j] != '_') {
                Punctaj++;
            }
        }

    }
    return Punctaj;
}