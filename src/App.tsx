import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function AppLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;