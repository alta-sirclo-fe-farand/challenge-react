import React, { Component, Fragment } from 'react';
import TopMenu from './topMenu';
import BottomMenu from './bottomMenu';

export default function home() {
    return (
        <div>
            <TopMenu />
            <div className='row full-width'>
                <div className='col-sm-6 text-align-center'>
                    <img src="matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" alt="" width="auto" height="50%" className='circular-photo pt-5 pb-5'/>
                </div>
                <div className='col-sm-5 justify-content-left p-3'>
                    <h5 className='blue-fonts'>Hi, My name is</h5>
                    <h1 className='blue-fonts'>Anne Sullivan</h1>
                    <h2 className='blue-fonts'>I build things for the web</h2>
                    <button type="button" className='btn-primary white-fonts'>Get In Touch</button>
                </div>
            </div>
            <BottomMenu />
        </div>
    )
}