import React from 'react';
import PropTypes from 'prop-types';

class JogadorCard extends React.Component {
  render() {
    const { img, number, currentTeam, position } = this.props;

    return (
      <div className="br-player">
        <h4>{number}</h4>
        <img src={ img } alt="jogador" />
        <h3>{currentTeam}</h3>
        <p>{position}</p>
      </div>
    );
  }
}

JogadorCard.propTypes = {
  img: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  currentTeam: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default JogadorCard;
