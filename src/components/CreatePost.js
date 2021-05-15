import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreatePost extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="contact" className="contact section-show">
                    <div className="about-me container">
                        <div className="section-title">
                            <h2>New Post</h2>
                        </div>
                        <div className="info-box">
                            <div className="row my-2">
                                <div className="col-6">
                                    <label className="p-0 mb-1 text-secondary">title</label>
                                    <input style={{ backgroundColor: '#444444', borderColor: '#444444', color: '#6c757d' }} type="text" className="form-control form-control-sm" placeholder="title"></input>
                                </div>
                                <div className="col-6">
                                    <label className="p-0 mb-1 text-secondary">about</label>
                                    <select className="form-control form-control-sm" style={{ backgroundColor: '#444444', borderColor: '#444444', color: '#6c757d' }}>
                                        <option value="A" selected disabled>Choose..</option>
                                        <option value="B">Banana</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label className="p-0 mb-1 text-secondary">content</label>

                                    <textarea rows="8" style={{backgroundColor: '#444444', borderColor: '#444444', color: '#6c757d'}} className="richtext form-control" name="example"></textarea>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12" align="right"> 
                                    <button type="submit" className="btn btn-sm btn-success px-4">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        )
    }
}
export default CreatePost;