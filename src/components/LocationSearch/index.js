/*global google*/
import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import './style.scss'
export default class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "", latLng: {} };
  }

  handleChange = address => {
    console.log(address);
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ address, latLng }))
      .catch(error => console.error("Error", error));
  };
  
    searchOptions = {
    location: new google.maps.LatLng(10.82302, 106.62965),
    radius: 2000,
    types: ["address"],
    debounce: "300"
  };
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={this.searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='user-location'>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input form-control"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active user-location-suggest"
                  : "suggestion-item user-location-suggest";
                const style = suggestion.active
                  ? {cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span className='user-location-suggest-text'>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
