import React from 'react';
import PropTypes from 'prop-types';
import star from '../data/star.png';

class TimeCard extends React.Component {
  render() {
    const { short, img, country, group, wins } = this.props;

    return (
      <section
        className={ short === 'BRA' && 'brasil' }
      >
        <img src={ img } alt={ country } />
        <h3>{country}</h3>
        <h4>{short}</h4>
        <h4>{group}</h4>
        <div>
          {
            wins.map((year) => (
              <img className="star" alt="star" src={ star } key={ year } />
            ))
          }
        </div>
      </section>
    );
  }
}

TimeCard.propTypes = {
  short: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  wins: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TimeCard;
