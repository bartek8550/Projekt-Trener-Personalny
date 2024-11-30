import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Musisz być zalogowany, aby uzyskać dostęp do tej strony.');
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
