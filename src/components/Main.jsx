import React, { useState } from 'react';
import { useObjects } from './hooks/ObjectsProvider';

import Header from './Header';
import ObjectList from './ObjectList';
import StoryLine from './StoryLine';
import GetName from './GetName';
import Footer from './Footer';
import TopScoreList from './TopScoreList';

function Main() {
    const game = useObjects();
    const { showScoreList, setShewScoreList } = useState(false);
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Header />
                    {game.init && <ObjectList />}
                    {!game.init && <StoryLine />}
                    {!game.init && <GetName />}
                    <Footer />
                </div>
            </div>
            {showScoreList && <TopScoreList />}
        </>
    );
}

export default Main;
