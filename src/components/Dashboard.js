import React, { useState } from 'react';

const Dashboard = ({ onUpdate }) => {
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [timer, setTimer] = useState(30);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({ description, link, timer });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div>
                <label>Description:</label>
                <input 
                    type="text" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>
            <div>
                <label>Link:</label>
                <input 
                    type="url" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)} 
                />
            </div>
            <div>
                <label>Timer (seconds):</label>
                <input 
                    type="number" 
                    value={timer} 
                    onChange={(e) => setTimer(e.target.value)} 
                />
            </div>
            <button type="submit">Update Banner</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
    },
};

export default Dashboard;
