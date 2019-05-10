import React, { Component } from 'react'
import '../css/header.css'
import project from '../img/project.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="brand-header">
                    <img src={project} alt="project-log" className="img-responsive" />
                    <p className="brand">PROJECT LOG</p>
                </div>
            </div>
        )
    }
}
