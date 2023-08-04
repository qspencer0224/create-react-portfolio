import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    //all global context goes here (uesState, useEffect, etc.)
    
    const getData = async () =>{
        const response = await axios.get('https://github.com/qspencer0224?tab=repositories')
        const info = response.data
        console.log(info)
    }
    
    useEffect(() =>{
        getData();
    }, [])

    return(
        <AppContext.Provider value={{

        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider