import React, { Component, Fragment } from 'react';
import TopMenu from './topMenu';
import BottomMenu from './bottomMenu';

export default function contact() {
    return (
        <div>
            <TopMenu />
            <div className="container pt-2 pb-2">
            <div className="row">
                <div className="col-md-6">
                    <div id="bg">
                        <div id="secondlayer"></div>
                        <div>
                            <img id="thirdlayer" src="logo-ALTA-v2.png" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <form>
                        Contact Us <br />
                        <label>Full Name<span className="red">*</span></label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Winda Pramesti" />
                            <div className="input-group-append">
                            </div>
                        </div>

                        <label>Email Address<span className="red">*</span></label>                          
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="example@alterra.id" />
                            <div className="input-group-append">
                            </div>
                        </div>
                          
                        <label>Phone Number<span className="red">*</span></label>                          
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="085554447900" />
                            <div className="input-group-append">
                            </div>
                        </div>

                        <label>Nationality</label>                          
                        <div className="input-group mb-3">
                            <select className="form-control">
                                <option>Selected ...</option>
                            </select>
                        </div>
                        
                        <label>Message</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <textarea className="form-control"></textarea>
                        </div>
                    </form>
                    <br />
                    <button type="button" className='btn-primary white-fonts'>Submit</button>
                </div>
            </div>
            </div>
            <BottomMenu />
        </div>
    )
}


<a href="contact.html" className="btn-primary white-fonts">Contact</a>