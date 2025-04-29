import { createContext, useState } from "react";

type ProblemContextType={
    problemNo:number,
    setProblem:React.Dispatch<React.SetStateAction<number>>
}

type ProblemContextProviderProps={
    children:React.ReactNode;
}

export const ProblemContext = createContext<ProblemContextType | null>(null);

export const ProblemContextProvider=({children}:ProblemContextProviderProps)=>{
    const [problemNo,setProblem]=useState<number>(0)

    return(
        <ProblemContext.Provider value={{problemNo, setProblem}}>
            {children}
        </ProblemContext.Provider>
    )

}
