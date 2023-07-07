import './App.css';
import { playersByTeam, recaps } from './games';
import GameHeader from './components/GameHeader';

function App() {
  // const gameId = 12771;
  const awayTeamId = recaps?.gameRecap?.awayTeamId;
  const homeTeamId = recaps?.gameRecap?.homeTeamId;

  return (
    <div className="App">
      <GameHeader homeTeam={homeTeamId} awayTeam={awayTeamId} />
    </div>
  );
}

export default App;
