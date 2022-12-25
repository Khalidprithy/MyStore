import React from 'react';
import PasswordGenerator from './PasswordGenerator';
import QuestionsAccordion from './QuestionsAccordion';

const HomePage = () => {
    return (
        <div >
            <PasswordGenerator />
            <QuestionsAccordion />
        </div>
    );
};

export default HomePage;