// Exercise03.js
import React, {useState} from "react";

const ScoreBtn = ({teamName, updateScore}) => {

    return (
        <>
            <button onClick={updateScore}>Atualizar Placar {teamName}</button>
        </>
    );
};

export default ScoreBtn;
