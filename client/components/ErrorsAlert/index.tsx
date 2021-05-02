import React from 'react'

export const ErrorsAlert: React.FC = ({ children }) => {
  return (
    <div className="alert alert-danger">
      {children}
    </div>
  );
}

export default ErrorsAlert