import React from 'react';

import Header from './Header';
import ObjectList from './ObjectList';
// import StoryLine from './StoryLine';
// import GetName from './GetName';
import Footer from './Footer';
// import TopScoreList from './TopScoreList';
import Cursor from './Cursor';

function Main() {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Cursor />
                    <Header />
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
