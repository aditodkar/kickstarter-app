import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../navbar/navbar';
import Card from '../common/card';
import './home.css';
import { searchTermChanged } from '../../store/actions/searchAction';

class Home extends Component {

  render() {
    
    const { searchTermChanged } = this.props;

    return (
      <div>
          <Navbar/>
          <div className="header">
            <div className="md-form mt-0 customsearch">
                <input className="form-control" type="text" placeholder="Search projects" aria-label="Search" 
                  value={this.props.search}
                  onChange={e => searchTermChanged(e.target.value)}
                />
            </div>
            <div className="buttonContainer">
              <div>
                  <button className="btn btn-primary mycustom dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Sort by </button>

                  <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">End time</a>
                      <a className="dropdown-item" href="#">Percentage fund</a>
                      <a className="dropdown-item" href="#">Number of backers</a>
                  </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              {this.props.projects.map( (val,index) => (
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

const mapStateToProps = state => ({
  search: state.search.searchTerm,
  projects: state.search.projects
})

export default connect (mapStateToProps, dispatch => ({ searchTermChanged: searchTerm => dispatch(searchTermChanged(searchTerm)) }))(Home);