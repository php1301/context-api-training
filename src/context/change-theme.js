import React, {createContext, useReducer} from 'react'

// Step 1 tạo kho chứa
export const ThemeContext = createContext()

// Step 2 - optional
// Phương thức của kho chứa


const INITIAL_VALUE= {
    color: 'red'
}
const reducer = (state, action) =>{
    switch(action.type) {
        case 'CHANGE':
            return {...state, color: action.payload.color}
        default: 
        return state
    }
}

// Step 3
// Provider
// const {
//     a: a
// }
// // tuong duong 
// const {
//     a
// }
const ThemeProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_VALUE)
    return(
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider