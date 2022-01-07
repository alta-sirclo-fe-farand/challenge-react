import React, { Component, Fragment } from 'react';

export default function bottomMenu() {
    return (
        <div class="container-fluid white-fonts">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-3 justify-content-center">
                    <img src="logo-ALTA-v2@2x.png" width="100px" height="50px" alt="logoAlterra" />
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-3 justify-content-center">
                    Social Media <br />
                    <img src="ic_fb.png" width="15px" height="15px" alt="fb" /> &nbsp;
                    <img src="ic-twitter.png" width="15px" height="15px" alt="twitter" /> &nbsp;
                    <img src="ic-instagram.png" width="15px" height="15px" alt="ig" /> &nbsp;
                    <img src="ic-linkedin.png" width="15px" height="15px" alt="linkedin" />
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-3 justify-content-center">
                    Copyright © 2019 Alterra
                </div>
            </div>
        </div>
    )
}