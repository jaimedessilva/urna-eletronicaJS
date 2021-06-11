const atualizaInterface1 = () => {
    //For Etapas
    etapas.forEach(etapa => {
        etapa.candidatos.forEach((item) => {
            if (item.numero === n)
                candidato = item
        })
    })
    if (candidato === '') {
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
        candidatoVoto = { nome: 'Nulo', numero: numero }
            //console.log(candidatoVoto)
    } else {
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido ${candidato.partido}`;
        aviso.style.display = 'block';
        //For Fotos
        candidato.fotos.forEach((photo) => {
            foto = photo
        });
        fotoHTML += `<div class="d-1-image"><img src="img/${foto.url}" alt="">${foto.legenda}</div>`
        lateral.innerHTML = fotoHTML;
        candidatoVoto = candidato;
        //console.log(candidatoVoto)
    }
    //else if (numero.length === etapas[atual].numeros) {

}