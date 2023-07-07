import React from 'react';

const GameHeader = ({ homeTeam, awayTeam }) => {
  const homeTeamLogo = require(`../assets/${homeTeam}-120.png`);
  const awayTeamLogo = require(`../assets/${awayTeam}-120.png`);

  return (
    <div className="Game-header">
      <img src={homeTeamLogo} alt=""/>
      <img src={awayTeamLogo} alt=""/>
    </div>
  );
};

export default GameHeader;