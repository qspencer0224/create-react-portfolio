import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    //all global context goes here (uesState, useEffect, etc.)
    return(
        <AppContext.Provider value={{
            
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider