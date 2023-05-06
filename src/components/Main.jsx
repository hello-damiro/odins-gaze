import React from 'react';

import Header from './Header';
import ObjectList from './ObjectList';
import Footer from './Footer';
import GetName from './GetName';
import StoryLine from './StoryLine';
import TopScoreList from './TopScoreList';

function Main() {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Header />
                    {/* <ObjectList /> */}
                    {/* <StoryLine /> */}
                    {/* <GetName /> */}
                    <Footer />
                </div>
            </div>
            <TopScoreList />
        </>
    );
}

export default Main;
