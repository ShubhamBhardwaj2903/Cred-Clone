import React from 'react'
import Button from '../common/Button';
import './heroSection.css'

const HeroSection = () => {
    return (
        <div className="hero-section-wrapper">
            <div className="flex absolute-center flex-col hero-section max-width">
                <div className="hero-heading">
                    rewards for paying credit card bills.
                </div>
                <div className="hero-subheading">
                    join 9M+ members who win rewards and cashbacks everyday
                </div>
                <Button buttonText='Download CRED'/>    
            </div>
        </div>
    );
};

export default HeroSection;