function criarPartida(seleção1, hora, seleção2){
    return ` 
    <li>
        <img src="icons-seleções/${seleção1}.ico" alt="Bandeira do(a) ${seleção1}" />
        <strong>${hora}</strong>
        <img src="icons-seleções/${seleção2}.ico" alt="Bandeira do(a) ${seleção2}" />
    </li>
`
}

let delay = -0.4;
function criarCatao(data, dia, partida){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${data} <span>${dia}</span></h2>
        <ul>
           ${partida}
        </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML =

    criarCatao('20/11', 'Domingo', 
        criarPartida('Qatar', '12:00', 'Equador')) +

    criarCatao('21/11', 'Segunda', 
        criarPartida('Inglaterra', '09:00', 'irã') + 
            criarPartida('Senegal', '12:00', 'Holanda') + 
                criarPartida('Estados Unidos', '15:00', 'Gales')) +

    criarCatao('22/11', 'Terça', 
        criarPartida('Argentina', '06:00', 'Arábia Saudita') + 
            criarPartida('Dinamarca', '09:00', 'Tunísia') + 
                criarPartida('Mexico', '12:00', 'Polônia') + 
                    criarPartida('França', '15:00', 'Austrália')) +

    criarCatao('23/11', 'Quarta', 
        criarPartida('Marrocos', '06:00', 'Croácia') + 
            criarPartida('Alemanha', '09:00', 'Japão') + 
                criarPartida('Espanha', '12:00', 'Costa Rica') + 
                    criarPartida('Bélgica', '15:00', 'Canadá'))     















