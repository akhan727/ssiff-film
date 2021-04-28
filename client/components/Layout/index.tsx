import React from 'react';
import Navigation from '../Navigation';

export interface LayoutProps extends CurrentUserResponse {}

// A child component that accepts props from parent component (the pages)
// Each page will have to place its html content inside of <Layout> tags
export const Layout: React.FC<LayoutProps> = ({ currentUser, children }) => {
  if (!currentUser) {
    console.log('%%%%%LAYOUT%%%%% !currentUser');
  } else {
    console.log('%%%%%LAYOUT%%%%% currentUser');
  }
  return (
    <>
      <Navigation currentUser={currentUser} />
      <div className='main-container'>{children}</div>
    </>
  );
};

export default Layout;