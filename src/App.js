import React from 'react';
import './App.css';
import Footer from './features/components/Footer';
import Head from './features/components/Head';
import List from './features/components/List';

function App() {
  return (
    <>  
      <section className='card'>
          <Head></Head>
          <List></List>
          <Footer></Footer>
      </section>
    </>
  );
}

export default App;
