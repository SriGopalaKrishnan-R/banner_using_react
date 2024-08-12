import React, { useState, useEffect } from 'react';

const Banner = ({ description, link, timer, onBannerEnd }) => {
    const [countdown, setCountdown] = useState(timer);

    useEffect(() => {
        if (countdown > 0) {
            const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timerId);
        } else {
            onBannerEnd();
        }
    }, [countdown]);

    if (countdown <= 0) return null;

    return (
        <div style={styles.banner}>
            <p>{description}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>}
            <p>Disappearing in: {countdown} seconds</p>
        </div>
    );
};

const styles = {
    banner: {
        backgroundColor: '#4CAF50',
        padding: '10px',
        color: 'white',
        textAlign: 'center',
    },
};

export default Banner;
