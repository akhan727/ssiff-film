import React from 'react'
import Navigation from '../Navigation'
import Head from 'next/head'

export interface LayoutProps extends CurrentUserResponse {
  title: string;
}

// A child component that accepts props from parent component (the pages)
// Each page will have to place its html content inside of <Layout> tags
export const Layout: React.FC<LayoutProps> = ({ currentUser, children, title = 'Home' }) => {
  if (!currentUser) {
    console.log('%%%%%LAYOUT%%%%% !currentUser');
  } else {
    console.log('%%%%%LAYOUT%%%%% currentUser');
  }
  console.log('@@@@@ CHILDREN @@@@@', children)

  return (
    <>
      <Head><title>{title} | Super Secret International Film Festival</title></Head>
      <Navigation currentUser={currentUser} />
      <div className='main-container'>{children}</div>
    </>
  );
}

export default Layout