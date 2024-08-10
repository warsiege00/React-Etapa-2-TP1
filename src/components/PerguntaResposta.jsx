import React, { useState } from 'react';

const PerguntaResposta = ({ pergunta, resposta }) => {
    const [mostrarResposta, setMostrarResposta] = useState(false);

    const toggleResposta = () => {
        setMostrarResposta(!mostrarResposta);
    };

    return (
        <div style={styles.container}>
            <div style={styles.pergunta}>{pergunta}</div>
            <button onClick={toggleResposta} style={styles.botao}>
                {mostrarResposta ? 'Esconder Resposta' : 'Mostrar Resposta'}
            </button>
            {mostrarResposta && <div style={styles.resposta}>{resposta}</div>}
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        margin: '10px auto',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9',
    },
    pergunta: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#333',
    },
    botao: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    botaoHover: {
        backgroundColor: '#0056b3',
    },
    resposta: {
        marginTop: '10px',
        fontSize: '16px',
        color: '#555',
    },
};

export default PerguntaResposta;
