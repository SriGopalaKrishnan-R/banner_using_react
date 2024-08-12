import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';

function App() {
    const [bannerData, setBannerData] = useState({
        description: 'Welcome to Our Website!',
        link: '',
        timer: 30,
    });
    const [isBannerVisible, setBannerVisible] = useState(true);

    const handleBannerUpdate = (data) => {
        setBannerData(data);
        setBannerVisible(true);
    };

    const handleBannerEnd = () => {
        setBannerVisible(false);
    };

    return (
        <div className="App">
            {isBannerVisible && (
                <Banner 
                    description={bannerData.description}
                    link={bannerData.link}
                    timer={bannerData.timer}
                    onBannerEnd={handleBannerEnd}
                />
            )}
            <Dashboard onUpdate={handleBannerUpdate} />
        </div>
    );
}

export default App;
