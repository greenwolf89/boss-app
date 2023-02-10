import React from "react";
import { Button } from "react-bootstrap";

const Banner: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40vh',
            width: '100%',
            textAlign: 'center',
            background: 'linear-gradient(90deg, rgba(209,228,238,1) 15%, rgba(245,245,245,1) 35%, rgba(245,245,245,1) 65%, rgba(209,228,238,1) 85%)'
          }}>
            <div style={{
                width: '45%',
                textAlign: 'left',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1 className="banner-title">Budget Often</h1>
                <h1 className="banner-title">Save Smarter</h1>
                <Button variant="success" size="lg">Sign up for free</Button>{' '}
            </div>
        </div>
    );
}

export default Banner;
