import React from "react"
import "./content.css"
import logo from '../../assets/logoNCC 1.png'
import html from '../../assets/html-icon 1.png'
import css from '../../assets/css-icon 1.png'
import url from '../../assets/url-icon 1.png'
const Content = () => {

    return (
        <div className="content">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="intro">
                <h2>
                Lorem ipsum dolor sit asmet?
                </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                </p>
            </div>
            <div className="main">
                <div className="card">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <div>
                        <p>
                        <img src={css} style= {{float:"left"}}></img>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <div>
                        <p>
                        <img src={html} style= {{float:"left"}}></img>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <div>
                        <p>
                        <img src={url} style= {{float:"left"}}></img>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content