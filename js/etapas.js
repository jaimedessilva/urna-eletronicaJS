let etapas = [{
            titulo: 'VEREADOR',
            numeros: 5,
            candidatos: [{
                    numero: '88991',
                    nome: 'John Logan',
                    partido: 'XMAN',
                    fotos: [
                        { url: '889911.jpg', legenda: 'Vereador', small: false }
                    ],
                    votos: 0
                },
                {
                    numero: '99881',
                    nome: 'K Lobo',
                    partido: 'DC Mercenarios',
                    fotos: [
                        { url: '998811.jpg', legenda: 'Vereador', small: false }
                    ],
                    votos: 0
                },
            ]
        },
        {
            titulo: 'PREFEITO',
            numeros: 2,
            candidatos: [{
                    numero: '99',
                    nome: 'Kal El',
                    partido: 'LJA',
                    vice: 'Bat',
                    fotos: [
                        { url: '99.jpeg', legenda: 'Prefeito' },
                        { url: '99_1.png', legenda: 'Vice-Prefeito' }
                    ]
                },
                {
                    numero: '88',
                    nome: 'Home Lander',
                    partido: 'SEVEN',
                    vice: 'Black',
                    fotos: [
                        { url: '88.jpg', legenda: 'Prefeito' },
                        { url: '88_1.jpg', legenda: 'Vice-Prefeito' }
                    ]
                },
            ]

        }
    ] //End Array

let n = '99'
let candidato = ''
let atual = 0

etapas.forEach(etapa => {
        etapa.candidatos.forEach((item) => {
            if (item.numero === n)
                return candidato = item
        })
    })
    //console.log(candidato)
    //console.log(etapas[atual].numeros)
    /* 
    etapas[atual].candidatos.filter(item => {
        //console.log(item)
    }) */

/* etapas.forEach((etapa) => {
    console.log(etapa.titulo)
    etapa.candidatos.forEach(cand => console.log(cand.nome, cand.numero))
}) */