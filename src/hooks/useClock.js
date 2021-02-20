import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

useClock.propTypes = {

};

function formatDate(now) {
    if (!now) return "";

    const hour = `0${now.getHours()}`.slice(-2);
    const minutes = `0${now.getMinutes()}`.slice(-2);
    const seconds = `0${now.getSeconds()}`.slice(-2);

    return `${hour} : ${minutes} : ${seconds}`;
}
// Custom hook
function useClock() {
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        }
    }, []);

    return { timeString };
}

export default useClock;