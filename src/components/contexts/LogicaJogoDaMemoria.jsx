const { createContext } = require("react");

const LogicaJogoDaMemoriaContext = createContext

export const LogicaJogoDaMemoriaProvider = ({children}) => {

    const valor = {
        
    }

    return (
        <LogicaJogoDaMemoriaContext.Provider value={valor}>
            {children}
        </LogicaJogoDaMemoriaContext.Provider>
    )
}