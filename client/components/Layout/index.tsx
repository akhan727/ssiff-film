import React from 'react'
import Navigation from '../Navigation'
import Head from 'next/head'

export interface LayoutProps extends CurrentUserResponse {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ currentUser, children, title = 'Home' }) => {
  return (
    <>
      <Head><title>{title} | Super Secret International Film Festival</title></Head>
      <Navigation currentUser={currentUser} />
      <div className='main-container'>{children}</div>
    </>
  );
}

export default Layout