import { createContext, useState } from "react"
import { paresDeCartas } from "../constants/cartas"
import { PONTOS, TEMPO_MS } from "../constants/configuracoes"

export const LogicaJogoDaMemoriaContext = createContext()

export const LogicaJogoDaMemoriaProvider = ({ children }) => {
    const [cartas, definirCartas] = useState([])
    const [idsDosParesEncontrados, definirIdsDosParesEncontrados] = useState([])
    const [idsDasCartasViradas, definirIdDasCartasViradas] = useState([])

    const [quantidadeDeCartasViradas, definirQuantidadeDeCartasViradas] = useState(0)
    const [quantidadeDePontos, definirQuantidadeDePontos] = useState(0)

    const incrementarQuantidadeDeCartasViradas = () => {
        definirQuantidadeDeCartasViradas((quantidade) => quantidade + 1)
    }

    const incrementarPontos = () => {
        definirQuantidadeDePontos(pontos => pontos + PONTOS.ENCONTRAR_CARTA)
    }

    const iniciarJogo = () => {
        definirCartas(paresDeCartas)
    }

    const reiniciarJogo = () => {
        definirIdsDosParesEncontrados([])
        definirIdDasCartasViradas([])
        definirCartas(paresDeCartas)
        definirQuantidadeDeCartasViradas(0)

    }

    const compararCartas = ([id1, id2]) => {
        const idPar1 = cartas.find(({ id }) => id === id1)?.idDoPar
        const idPar2 = cartas.find(({ id }) => id === id2)?.idDoPar
        return idPar1 === idPar2
    }

    const virarCarta = ({ id,idDoPar }) => {
        incrementarQuantidadeDeCartasViradas()

        const cartaJaVirada = idsDasCartasViradas.includes(id) || idsDosParesEncontrados.includes(idDoPar)
        if (cartaJaVirada) return

        if (idsDasCartasViradas.length >= 2) {
          return
        }
        if (idsDasCartasViradas.length == 0) {
          return definirIdDasCartasViradas([id])
        }

        const ids = [idsDasCartasViradas[0], id]
        definirIdDasCartasViradas(ids)

        const cartasIguais = compararCartas(ids)
        if (cartasIguais) {
            incrementarPontos()
            definirIdsDosParesEncontrados((ids) => [...ids, idDoPar])
        }
        
        const tempo = cartasIguais ? 0 : TEMPO_MS.VIRAR_CARTAS

        setTimeout(() => {
          definirIdDasCartasViradas([])
        }, tempo);
    }

    const valor = {
        cartas,
        quantidadeDeCartasViradas,
        quantidadeDePontos,

        iniciarJogo,
        reiniciarJogo,
        virarCarta,

        idsDasCartasViradas,
        idsDosParesEncontrados,
    }

    return (
        <LogicaJogoDaMemoriaContext.Provider value={valor}>
            {children}
        </LogicaJogoDaMemoriaContext.Provider>
    )
}