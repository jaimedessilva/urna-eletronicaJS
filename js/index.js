let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');
let result = document.querySelector('.resultado');


let etapaAtual = 0;
let numero = '';
let candidatoVoto = '';
let votos = [];
let votoNulo = {}
let votoBranco = false;

const comecarEtapa = () => {

    numero = ''
    let etapa = etapas[etapaAtual]
    let numeroHTML = ''

    for (let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHTML += `<div class="numero pisca"></div>`
        } else
            numeroHTML += `<div class="numero"></div>`
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHTML

}

const clicou = (n) => {

    let elNumero = document.querySelector('.numero.pisca');
    if (numero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca')

        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            if (numero.length === etapas[etapaAtual].numeros) {
                atualizaInterface()
            }
        }
    }
}

const atualizaInterface = () => {

    let etapa = etapas[etapaAtual];
    let candidato = '';
    let fotoHTML = '';

    candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) return true;
        else return false;
    });
    if (candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>
                               Partido ${candidato.partido}`;
        aviso.style.display = 'block';
        //Fotos
        for (let f of candidato.fotos) {
            fotoHTML += `<div class="d-1-image"><img src="img/${f.url}">${f.legenda}</div>`;
        }
        lateral.innerHTML = fotoHTML;
        candidatoVoto = candidato;
    } else {
        candidato = undefined
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
}
const votar = (candidato) => {
    if (candidato.nome != undefined) {
        votos.push(candidato);
    } else if (candidato.voto === 'Branco') {
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'Voto Branco'
        })
    } else {
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'Voto Nulo'
        })
    }
}

const branco = () => {
    numero = '';
    votoBranco = true;
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '';
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    lateral.innerHTML = '';
}
const corrige = () => {
    comecarEtapa();
}

const confirma = () => {
    let votoConfirmado = false;

    if (votoBranco) {
        votoConfirmado = true;
        votar({
            etapa: etapas[etapaAtual].titulo,
            voto: 'Branco'
        })
    } else if (numero.length === etapas[etapaAtual].numeros) {
        votoConfirmado = true;
        if (candidatoVoto.numero === '99'){
            votar({
                etapa: etapas[etapaAtual].titulo,
                nome: candidatoVoto.nome,
                numero: candidatoVoto.numero,
                voto: 0 + 2
            })
        }else {
        votar({
            etapa: etapas[etapaAtual].titulo,
            nome: candidatoVoto.nome,
            numero: candidatoVoto.numero,
            voto: 0 + 1
        })
        }
    }

    if (votoConfirmado) {
        etapaAtual++;
        if (etapas[etapaAtual] !== undefined) {
            comecarEtapa()
        } else {
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';
            votos.forEach(value => {
                if (value.nome === undefined) {
                    result.innerHTML += `<ul>
                                        <h3>Voto: ${value.etapa}</h3>
                                        <li>Voto: ${value.voto}</li>
                                        <br/>
                                    </ul><br/>`;

                } else {
                    result.innerHTML += `<ul>
                                        <h3>Voto: ${value.etapa}</h3>
                                        <li>Candidato:${value.nome}</li>
                                        <li>Numero: ${value.numero}</li>
                                        <li>Voto: ${value.voto}</li>
                                        <br/>
                                    </ul><br/>`;

                }

            })
        }

    }
}
comecarEtapa();