import React from 'react';
import brazilPlayers from '../data/brazilPlayers';
import JogadorCard from './JogadorCard';

class Brasil extends React.Component {
  render() {
    return (
      <section className="br">
        <h2>Brasil</h2>
        <section>
          {
            brazilPlayers.map((jogador) => (
              <JogadorCard
                key={ jogador.name }
                img={ jogador.img }
                number={ jogador.number }
                currentTeam={ jogador.currentTeam }
                position={ jogador.position }
              />
            ))
          }
        </section>
      </section>
    );
  }
}

export default Brasil;
