import React from "react";
import './Baner.css'

function Baner() {
    return (
        <div className="baner">
            <div className="content">
                <h1 className="title">movie name</h1>
                <div className="baner_buttons">
                    <button className="button">play</button>
                    <button className="button">my list</button>
                </div>
                <h1 className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae fugit porro ea exercitationem distinctio corrupti doloribus veritatis magnam vitae molestias sint aliquam aut nisi neque, qui a perspiciatis commodi!
                </h1>
            </div>
            <div className="fade">
                
            </div>
        </div>
    );
}

export default Baner;
