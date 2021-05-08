import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Place from '../Place/Place';
import Header from './../Header/Header';

const Home = () => {
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

        <Header color="white"></Header>
        <Place></Place>

           
        </div>
    );
};

export default Home;