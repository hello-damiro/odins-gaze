import React, { useState } from 'react';
import { useGame } from './hooks/GameProvider';

import Header from './Header';
import ObjectList from './ObjectList';
import StoryLine from './StoryLine';
import GetName from './GetName';
import Footer from './Footer';
import TopScoreList from './TopScoreList';

function Main() {
    const game = useGame();
    const { showScoreList, setShewScoreList } = useState(false);
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Header />
                    {game.on && <ObjectList />}
                    {!game.on && <StoryLine />}
                    {!game.on && <GetName />}
                    <Footer />
                </div>
            </div>
            {showScoreList && <TopScoreList />}
        </>
    );
}

export default Main;
