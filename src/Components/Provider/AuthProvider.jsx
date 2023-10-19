import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null);
    const[loading,setLoading] =useState(true);
    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);
    const createUser =(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password);
    }
    const signinUser =(email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)

    }
    const logout =()=>{
        setLoading(true)
      return  signOut(auth)

    }
    //google login
    const googleLogin=()=>{
      setLoading(true)
        return signInWithPopup(auth,provider);
    }

    //observer auth state changed
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('current value of the current user',currentUser)
            setLoading(false) 
            setuser(currentUser)

        })
      return () =>{
        unsubscribe();
      } 
    },[])
   const userinfo={
    user,
    createUser,
    signinUser,
    logout,
    loading,
    googleLogin
    }
    return (
       <AuthContext.Provider value={userinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;