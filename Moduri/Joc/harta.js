function initializare_harta_cu_punct()
{
    var H = new Array(M);
    for (var i = 0; i < M; i++) {
        H[i] = new Array(N);
        for (var j = 0; j < N; j++) {
            H[i][j] = '.';
        }
    }
    return H;
}
function afisare_harta_computer(id_harta, H)
{
    var celula;
    var id_celula;
    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            id_celula = id_harta + '_' + i + '_' + j;
            celula = document.getElementById(id_celula);
            while (celula.firstChild != null)
                celula.removeChild(celula.firstChild);
        }
    }

    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            id_celula = id_harta + '_' + i + '_' + j;
            celula = document.getElementById(id_celula);

            if (H[i][j] === '_') {
                var img = document.createElement('img');
                img.src = 'Poze/Empty.png';
                celula.appendChild(img);

            } else if (H[i][j] === '.') {
                var img = document.createElement('img');
                img.src = 'Poze/Cloud.png';
                celula.appendChild(img);

            } else if (H[i][j] === 'N' || H[i][j] === 'S' || H[i][j] === 'V' || H[i][j] === 'E') {
                var img = document.createElement('img');
                img.src = 'Poze/Exp_Varf.png';
                celula = document.getElementById(id_celula);
                celula.appendChild(img);
            } else {
                var img = document.createElement('img');
                img.src = 'Poze/Exp_Body.png';
                celula = document.getElementById(id_celula);
                celula.appendChild(img);
                //console.log('facut');
            }
            if (H[i][j] === 'N' || H[i][j] === 'S' || H[i][j] === 'V' || H[i][j] === 'E') {
                var sa_index;
                sa_index = index_orientare(H[i][j]);
                console.log(sa_index);
                var punct = 0;
                if (tip_joc === 'star-wars') {
                    var iii = i - 2;
                    var jjj = j - 2;

                    console.log(JSON.stringify(SA[sa_index]));

                    for (var ii = 0; ii < 5; ii++) {
                        for (var jj = 0; jj < 5; jj++) {
                            if (SA[sa_index].mask[ii][jj] != ' ' && iii + ii < N && jjj+jj<M && iii+ii>=0 && jjj+jj>=0) {
                                if (SA[sa_index].mask[ii][jj] === H[iii+ii][jjj+jj]) punct++;
                            }
                        }
                    }
                    if (punct === 10) {
                        if (sa_index === 0) {
                            var img = document.createElement('img');
                            img.className = 'plane rotate001';
                            img.src = 'Poze/X-Wing.png';

                            celula = document.getElementById(id_celula);
                            img.style.left = '-37px';
                            img.style.top = '-24px';
                            celula.appendChild(img);
                        }
                        else if (sa_index === 2) {
                            var img = document.createElement('img');
                            img.className = 'plane rotate181';
                            img.src = 'Poze/X-Wing.png';

                            celula = document.getElementById(id_celula);
                            img.style.left = '-50px';
                            img.style.top = '-95px';
                            celula.appendChild(img);
                        }
                        else if (sa_index === 1) {
                            var img = document.createElement('img');
                            img.className = 'plane rotate271';
                            img.src = 'Poze/X-Wing.png';

                            celula = document.getElementById(id_celula);
                            img.style.left = '-15px';
                            img.style.top = '-57px';
                            celula.appendChild(img);
                        }
                        else if (sa_index === 3) {
                            var img = document.createElement('img');
                            img.className = 'plane rotate091';
                            img.src = 'Poze/X-Wing.png';

                            celula = document.getElementById(id_celula);
                            img.style.left = '-86px';
                            img.style.top = '-61px';
                            celula.appendChild(img);
                        }
                    }
                }
                else {
                    if (H[i][j] === 'N') {
                        if (H[i + 1][j] === '0' && H[i + 2][j] === '0' && H[i + 3][j] === '0' && H[i + 1][j - 1] === 'o' && H[i + 1][j - 2] === 'o' && H[i + 1][j + 1] === 'o' && H[i + 1][j + 2] === 'o' && H[i + 3][j - 1] === 'o' && H[i + 3][j + 1] === 'o') {
                            var img = document.createElement('img');
                            img.className = 'plane rotate000';
                            img.src = 'Poze/Plane.png';

                            celula = document.getElementById(id_celula);
                            img.style.left = '-52px';
                            img.style.top = '-24px';
                            celula.appendChild(img);

                        }
                    } else if (H[i][j] === 'S') {
                        if (H[i - 1][j] === '0' && H[i - 2][j] === '0' && H[i - 3][j] === '0' && H[i - 1][j - 1] === 'o' && H[i - 1][j - 2] === 'o' && H[i - 1][j + 1] === 'o' && H[i - 1][j + 2] === 'o' && H[i - 3][j - 1] === 'o' && H[i - 3][j + 1] === 'o') {
                            var img = document.createElement('img');
                            img.className = 'plane rotate180';
                            img.src = 'Poze/Plane.png';

                            celula = document.getElementById(id_celula);
                            img.style.left = '-50px';
                            img.style.top = '-95px';
                            celula.appendChild(img);

                        }
                    } else if (H[i][j] === 'V') {
                        if (H[i][j + 1] === '0' && H[i][j + 2] === '0' && H[i][j + 3] === '0' && H[i - 1][j + 1] === 'o' && H[i - 2][j + 1] === 'o' && H[i + 1][j + 1] === 'o' && H[i + 2][j + 1] === 'o' && H[i - 1][j + 3] === 'o' && H[i + 1][j + 3] === 'o') {
                            var img = document.createElement('img');
                            img.className = 'plane rotate270';
                            img.src = 'Poze/Plane.png';

                            celula = document.getElementById(id_celula);
                            img.style.left = '-15px';
                            img.style.top = '-57px';
                            celula.appendChild(img);

                        }
                    } else if (H[i][j] === 'E') {
                        if (H[i][j - 1] === '0' && H[i][j - 2] === '0' && H[i][j - 3] === '0' && H[i - 1][j - 1] === 'o' && H[i - 2][j - 1] === 'o' && H[i + 1][j - 1] === 'o' && H[i + 2][j - 1] === 'o' && H[i - 1][j - 3] === 'o' && H[i + 1][j - 3] === 'o') {
                            var img = document.createElement('img');
                            img.className = 'plane rotate090';
                            img.src = 'Poze/Plane.png';

                            celula = document.getElementById(id_celula);
                            img.style.left = '-86px';
                            img.style.top = '-61px';
                            celula.appendChild(img);

                        }
                    }
                    for (var ii = 0; ii < 5; ii++) {
                        for (var jj = 0; jj < 5; jj++) {

                        }
                    }
                }
                
            }
            /*else {
                celula = document.getElementById(id_celula);
                celula.innerHTML = H[i][j];
            }*/
        }
    }
}
function afisare_harta_om(id_harta, H)
{
    var celula;
    var id_celula;
    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            id_celula = id_harta + '_' + i + '_' + j;
            celula = document.getElementById(id_celula);
            while (celula.firstChild != null)
                celula.removeChild(celula.firstChild);
        }
    }

    for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) {
            id_celula = id_harta + '_' + i + '_' + j;
            celula = document.getElementById(id_celula);

            if (H[i][j] === '_') {
                var img = document.createElement('img');
                img.src = 'Poze/Empty.png';
                celula.appendChild(img);

            } else if (H[i][j] === '.') {
                var img = document.createElement('img');
                img.src = 'Poze/Cloud.png';
                celula.appendChild(img);

            } else if (H[i][j] === 'N' || H[i][j] === 'n') {
                if (tip_joc === 'clasic') {
                    var img = document.createElement('img');
                    img.className = 'plane rotate000';
                    img.src = 'Poze/Plane.png';

                    celula = document.getElementById(id_celula);
                    img.style.left = '-53px';
                    img.style.top = '-4px';
                    celula.appendChild(img);
                    if (H[i][j] === 'n') {
                        var img1 = document.createElement('img');
                        img1.src = 'Poze/Exp_Varf.png';
                        celula = document.getElementById(id_celula);
                        img1.style.top = '-100px';
                        celula.appendChild(img1);
                    }
                }
                else if (tip_joc === 'star-wars') {
                    var img = document.createElement('img');
                    img.className = 'plane rotate001';
                    img.src = 'Poze/X-Wing.png';

                    celula = document.getElementById(id_celula);
                    img.style.left = '-44px';
                    img.style.top = '-30px';
                    celula.appendChild(img);
                    if (H[i][j] === 'n') {
                        var img1 = document.createElement('img');
                        img1.src = 'Poze/Exp_Varf.png';
                        celula = document.getElementById(id_celula);
                        img1.style.top = '-100px';
                        celula.appendChild(img1);
                    }
                }

            } else if (H[i][j] === 'S' || H[i][j] === 's') {
                var img = document.createElement('img');
                img.className = 'plane rotate180';
                img.src = 'Poze/Plane.png';

                celula = document.getElementById(id_celula);
                img.style.top = '-74px';
                img.style.left = '-49px'
                celula.appendChild(img);
                if (H[i][j] === 's') {
                    var img1 = document.createElement('img');
                    img1.src = 'Poze/Exp_Varf.png';
                    celula = document.getElementById(id_celula);
                    img1.style.top = '-100px';
                    celula.appendChild(img1);
                }

            } else if (H[i][j] === 'V' || H[i][j] === 'v') {
                var img = document.createElement('img');
                img.className = 'plane rotate270';
                img.src = 'Poze/Plane.png';

                celula = document.getElementById(id_celula);
                img.style.top = '-37px';
                img.style.left = '-16px';
                celula.appendChild(img);
                if (H[i][j] === 'v') {
                    img1 = document.createElement('img');
                    img1.src = 'Poze/Exp_Varf.png';
                    celula = document.getElementById(id_celula);
                    img1.style.top = '-100px';
                    celula.appendChild(img1);
                }

            } else if (H[i][j] === 'E' || H[i][j] === 'e') {
                var img = document.createElement('img');
                img.className = 'plane rotate090';
                img.src = 'Poze/Plane.png';

                celula = document.getElementById(id_celula);
                img.style.top = '-41px';
                img.style.left = '-86px';
                celula.appendChild(img);
                if (H[i][j] === 'e') {
                    img1 = document.createElement('img');
                    img1.src = 'Poze/Exp_Varf.png';
                    celula = document.getElementById(id_celula);
                    img1.style.top = '-100px';
                    celula.appendChild(img1);
                }
            } else if (H[i][j]==='*'){
                var img = document.createElement('img');
                img.src = 'Poze/Exp_Body.png';
                celula = document.getElementById(id_celula);
                celula.appendChild(img);
                //console.log('facut');
            }
            /*else {
                celula = document.getElementById(id_celula);
                celula.innerHTML = H[i][j];
            }*/
        }
    }
}
