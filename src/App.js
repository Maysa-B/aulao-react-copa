import React from 'react';
import Brasil from './componentes/Brasil';
import Header from './componentes/Header';
import Times from './componentes/Times';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Times />
          <Brasil />
        </main>
      </>
    );
  }
}

export default App;
