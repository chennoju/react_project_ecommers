import React ,{createContext,useState} from 'react'
import { useContext } from 'react'

export const LoginCheck=createContext()
export const Username=createContext()

// export const useLoginCheck=()=>{
//     return useContext(LoginCheck)
// }

// export const useUsername=()=>{
//     return useContext(Username)
// }
// export function LoginCheckContext({childern}){
//  const [username,setUsername]=useState("")
//  const [userid,setUserid]=useState("")
//     return (
//         <LoginCheck.Provider value={username,userid}>
//             <Username.Provider value={setUsername}>
//                 {childern}
//             </Username.Provider>

//         </LoginCheck.Provider>
//     )
// }