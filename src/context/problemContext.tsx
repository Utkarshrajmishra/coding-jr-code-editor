import { createContext, useState } from "react";

type ProblemContextType={
    problem:number,
    setProblem:React.Dispatch<React.SetStateAction<number>>
}

type ProblemContextProviderProps={
    children:React.ReactNode;
}

export const ProblemContext = createContext<ProblemContextType | null>(null);

export const ProblemContextProvider=({children}:ProblemContextProviderProps)=>{
    const [problem,setProblem]=useState<number>(0)

    return(
        <ProblemContext.Provider value={{problem, setProblem}}>
            {children}
        </ProblemContext.Provider>
    )

}
