import React from 'react';
import teams from '../data/teams';
import TimeCard from './TimeCard';

class Times extends React.Component {
  render() {
    return (
      <section id="teams">
        {
          teams.map((time) => (
            <TimeCard
              key={ time.short }
              short={ time.short }
              img={ time.img }
              country={ time.country }
              group={ time.group }
              wins={ time.wins }
            />
          ))
        }
      </section>
    );
  }
}

export default Times;
