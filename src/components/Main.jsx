import React from 'react';

import Header from './Header';
import ObjectList from './ObjectList';
// import StoryLine from './StoryLine';
// import GetName from './GetName';
import Footer from './Footer';
// import TopScoreList from './TopScoreList';
import Cursor from './Cursor';
import Tooltip from './Tooltip';

function Main() {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Header />
                    <Cursor />
                    <Tooltip />
                    <ObjectList />
                    {/* <StoryLine /> */}
                    {/* <GetName /> */}
                    <Footer />
                </div>
            </div>
            {/* <TopScoreList /> */}
        </>
    );
}

export default Main;
