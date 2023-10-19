import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null);
    const[loading,setLoading] =useState(null)
    const auth = getAuth(app);
    const createUser =(email,password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const signinUser =(email,password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser =()=>{
      return  signOut(auth)
    }
   const  userinfo={
    user,
    createUser,
    signinUser,
    logoutUser,
    loading
    }
    return (
       <AuthContext.Provider value={userinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;