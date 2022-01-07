import React, { Component, Fragment } from 'react';
import TopMenu from './topMenu';
import BottomMenu from './bottomMenu';

export default function about() {
    return (
        <div>
            <TopMenu />
            <div className="row container-fluid teal-background">
                <div className='col-md-6 text-align-center'>
                    <h1 className="blue-fonts">ABOUT ME.</h1>
                </div>
            </div>

            <div className="row container">
                <div className='col-md-6 pl-5'>
                    <p className="blue-fonts">Versatile Front-end Developer with 3+ years of experience 
                    designing, developing, and managing complex e-commerce 
                    sites and internal frameworks. Specializes in AngularJS 
                    and responsive design. </p>
                    <h2 className="blue-fonts">Education</h2>
                    <ul className="blue-fonts remove-indent">
                        <li>2014</li>
                        DIPLOMA <br />
                        Computer Engineering - University of Chicago
    
                        <li>2018</li>
                        BACHELOR DEGREE <br />
                        BS Computer Engineering - University of Chicago
                    </ul>
                </div>
                <div className="col-md-6 text-align-center">
                    <div className="bg-about">
                        <img src="img-dot.png" alt="" className="bg-about__2"/>
                    </div>             
                </div>
            </div>

            <div className="col-md-6 pt-5 pl-5 pr-3">
                <h3 className="blue-fonts">Here's few technologies I've been working with recently: </h3>
            </div>

            <div className="col-md-6 blue-fonts pl-5 pb-3">
                <table className="border single-border">
                    <tr>
                        <td className="border">HTML & CSS</td>
                        <td className="border">Serverless</td>
                        <td className="border">Scrum</td>
                    </tr>
                    <tr>
                        <td className="border">Programming</td>
                        <td className="border">Restful API</td>
                        <td className="border">Test-Driven Dev</td>
                    </tr>            
                    <tr>
                        <td className="border">Database</td>
                        <td className="border">javascript</td>
                        <td className="border">Software Testing</td>
                    </tr>
                    <tr>
                        <td className="border">Git & Github</td>
                        <td className="border">Sigle Page App</td>
                        <td className="border">UX/UI Designer</td>
                    </tr>
                </table>
            </div>
            <BottomMenu />
        </div>
    )
}