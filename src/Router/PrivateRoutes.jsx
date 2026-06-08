import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
const PrivateRoutes = ({children}) => {
const { user, loading } = use(AuthContext);
    if(loading){
        return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
    }
      // NOT LOGGED IN
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  // LOGGED IN
  return children;
    
};

export default PrivateRoutes;