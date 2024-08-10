import React, {useState} from "react";
import ScoreBtn from "../components/ScoreBtn.jsx";

const Exercise04 = () => {
    const [scoreTeam1, setScoreTeam1] = useState(0);
    const [scoreTeam2, setScoreTeam2] = useState(0);

  return (
      <div>
          <h1>Exercise04</h1>
          <div>
              <p>Internacional {scoreTeam1}</p>
              <ScoreBtn
                  teamName={'Internacional'}
                  updateScore={() => setScoreTeam1(scoreTeam1 + 1)}/>

          </div>
          <div>
              <p>Grêmio {scoreTeam2}</p>
              <ScoreBtn
                  teamName={'Grêmio'}
                  updateScore={() => setScoreTeam2(scoreTeam2 + 1)}/>

          </div>
      </div>
  );
};

export default Exercise04;
