import React, { Component } from 'react';
import '../assets/css/style.css';
import { useHistory } from "react-router-dom";


class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            starred_icon: "ri-star-line",
            starred_icon_bgColor: "text-secondary",
        };

    }

    CreateNewPost() {
        window.location.href = "/new";
    }

    AddToStared = () => {
        var icon = this.state.starred_icon
        var color = this.state.starred_icon_bgColor

        if (icon == "ri-star-fill") {
            icon = "ri-star-line"
            color = "text-secondary"
        }
        else {
            icon = "ri-star-fill"
            color = "text-warning"
        }

        this.setState({ starred_icon: icon, starred_icon_bgColor: color })
    }


    render() {


        return (
            <React.Fragment>
                <section id="contact" className="contact section-show">
                    <div className="about-me container">

                        <div className="section-title">
                            <h2>Posts</h2>
                        </div>

                        <div className="row my-2">
                            <div className="col-md-12 d-flex align-items-stretch">
                                <div className="info-box">
                                    <input onClick={this.CreateNewPost} style={{ backgroundColor: '#444444', borderColor: '#444444', cursor: 'pointer' }} type="text" className="form-control form-control-md" placeholder="Create a new post"></input>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 d-flex align-items-stretch">
                                <div className="info-box" style={{ borderRadius: '10px' }}>
                                    <div className="row">
                                        <div className="col-11">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png" width="2%" className="bx" />
                                            <span style={{ fontColor: '#5a5a5a', marginLeft: '39px', fontSize: '15px' }}>Posted by <a href="" style={{ color: '#5a5a5a !important' }}>Vivek</a> on 02-03-2021 10:10AM</span>
                                        </div>
                                        <div className="col-1" align="right">
                                            <a onClick={this.AddToStared} className={this.state.starred_icon_bgColor}><i className={this.state.starred_icon} style={{ fontSize: '23px' }}></i></a>
                                        </div>

                                    </div>
                                    <h3>Riddle of Django - Save local file path to model in view function</h3>
                                    <p>So guys i have fair understanding of coding now at beginner level and now i want to build something useful (which will also be my college project). So what I want to do is whenever a professor uploads a assignment or task i wants its notification send to whatsapp as no one checks the college website regularly. If anyone can provide me ROADMAP of what things should i learn for this kind of project I will be Grateful 🙏🙏(as i was overwhelmed by googling this stuff)</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Posts;