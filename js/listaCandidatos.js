let lista = document.querySelector('.container--lista');

for (let cargo of etapas) {
    let n = 1
    cargo
    cargo.candidatos.forEach(candidato => {

        lista.innerHTML += `<table class=".tab">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                <th rowspan="2">${cargo.titulo} ${n}</th>
                                    <th> ${candidato.nome} | nº ${candidato.numero} </th>
                                </tr>
                        </tbody>
                        </table>
                        <br>`;
        n++;
    })
}