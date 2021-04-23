import React from 'react';
import Navigation from '../Navigation';

export interface LayoutProps extends CurrentUserResponse {}

export const Layout: React.FC<LayoutProps> = ({ currentUser, children }) => {
  return (
    <>
      <Navigation currentUser={currentUser} />
      <div className='container'>{children}</div>
    </>
  );
};

export default Layout;