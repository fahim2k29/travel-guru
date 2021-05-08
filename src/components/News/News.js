import React from 'react';
import logo from '../../images/Logo.png';
import Header from '../Header/Header';
import { useContext } from 'react';
import { UserContext } from '../../App';
const News = () => {
    const [place] = useContext(UserContext);
    return (
        <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url(${place.img})`,
                height:"100vh",
                backgroundSize:"cover",
                backgroundPosition:"center",
                width:"100vw"
        }}>

            <Header img={logo} color="white"></Header>
            <h2>its News page</h2>
        </div>
    );
};

export default News;