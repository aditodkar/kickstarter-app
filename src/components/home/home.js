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
      projects: Projects,

      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
    }
  }

  sortBy = (key) => {
    this.setState({ projects: [...Projects].sort((a, b) => a[key] - b[key]) });
  }

  searchTermChanged = (event) => {

    const { suggestions } = this.props;
    const search = event.target.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      search: event.target.value,
      projects: Projects.filter(val => val.title.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 ) 
    })
  }

  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      search: e.target.innerText
    });
  };

  render() {

    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        search
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && search) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <div>
          <Navbar/>
          <div className="header">
            <div className="md-form mt-0 customsearch">
                <input className="form-control" type="text" placeholder="Search projects" aria-label="Search"
                value={this.state.search}
                onChange={this.searchTermChanged} 
                />
                {suggestionsListComponent}
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