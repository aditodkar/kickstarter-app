import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Card from '../common/card';
import './home.css';
import Projects from '../../data/projects';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      projects: Projects
    }
  }

  sortBy = (key) => {
    this.setState({ projects: [...Projects].sort((a, b) => a[key] - b[key]) });
  }

  searchTermChanged = (event) => {
    this.setState({ 
      search: event.target.value,
      projects: Projects.filter(val => val.title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ) 
    })
  }

  render() {
    return (
      <div>
          <Navbar/>
          <div className="header">
            <div className="md-form mt-0 customsearch">
                <input className="form-control" type="text" placeholder="Search projects" aria-label="Search"
                value={this.state.search}
                onChange={this.searchTermChanged} 
                />
            </div>
            <div className="buttonContainer">
              <div>
                  <button className="btn btn-primary mycustom dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Sort by </button>

                  <div className="dropdown-menu">
                      <a className="dropdown-item" href="#" onClick={() => this.sortBy('funded')}>Percentage fund</a>
                      <a className="dropdown-item" href="#" onClick={() => this.sortBy('backers')}>Number of backers</a>
                  </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              {this.state.projects.map((val,index) => (
                <div class="col-3">
                  <Card title={val.title} by={val.by} blurb={val.blurb} 
                  url={val.url} funded={val.funded} backers={val.backers} imgurl={index}/>
                </div>
              ))}
            </div>
          </div>
      </div>
    )
  }
}
