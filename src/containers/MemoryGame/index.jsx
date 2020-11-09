import React from 'react';
import MemoryGameComponent from '../../components/memorygame/MemoryGame';
import Navbar from '../../components/Navbar';
import './index.css';

const MemoryGame = () => {
    return (
        <div className='memoryGameContainer'>
            <Navbar />
            <MemoryGameComponent />
        </div>
    );
};

export default MemoryGame;
