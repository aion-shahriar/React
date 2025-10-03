import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Root.css';

const Root = () => {


    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Sidebar></Sidebar>
                {isNavigating && <h3 style={{ color: 'red' }}>Loading...</h3>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;