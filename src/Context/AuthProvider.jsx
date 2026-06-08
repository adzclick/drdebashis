import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({children}) => {
const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
   const userlogout = async () => {

    return signOut(auth);
  };

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth,
      async (currentUser) => {

        setUser(currentUser);

        // if (currentUser?.email) {

        //   await axios.post(
        //     'https://lo/jwt',
        //     {
        //       email: currentUser.email
        //     },
        //     {
        //       withCredentials: true
        //     }
        //   );
        // }

        setLoading(false);
      }
    );

    return () => {
      unSubscribe();
    };

  }, []);
const userInfo={

    loading,
    user,
    userlogout,
    userLogin,

}

    return (
       <AuthContext value={userInfo}>
{children}
       </AuthContext>
    );
};

export default AuthProvider;