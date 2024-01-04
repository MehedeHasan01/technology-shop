import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../Configs/firebase.config';


export const AuthContext = createContext(null)



const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)



    const createUser = (email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }
    const login =(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin =()=>{
        setLoader(true)
       return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin =()=>{
        setLoader(true)
       return signInWithPopup(auth, githubProvider)
    }




    useEffect(()=>{

        const unSubcribe = onAuthStateChanged(auth, currentUser=>{
            setLoader(false)
            setUser(currentUser)
        })
        return ()=>{
            unSubcribe()
        }
    },[])


    const userInfo ={
        user,
        loader,
        googleLogin,
        login,
        gitHubLogin,
        createUser,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;