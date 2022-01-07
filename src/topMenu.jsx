import React, { Component, Fragment } from 'react';

export default function topMenu() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-3 justify-content-center">
                    <img src="logo-ALTA.png" width="100px" height="50px" alt="logoAlterra" />
                </div>
                <div class="col-md-2"></div>
                <div class="col-sm-12 col-md-6 justify-content-center text-align-center">
                    <a href="home.html" class="blue-fonts">Home</a> &nbsp;&nbsp;&nbsp;
                    <a href="about.html" class="blue-fonts">About</a> &nbsp;&nbsp;&nbsp;
                    <a href="experience.html" class="blue-fonts">Experience</a> &nbsp;&nbsp;&nbsp;
                    <a href="contact.html" class="blue-fonts">Contact</a>
                </div>
            </div>
        </div>
    )
}