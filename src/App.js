import React, {Component} from 'react';
import './App.css';
import WebApi from "./WebUtils/WebApi";
import Home from "./Container/home";
import AllVenues from "./Container/AllVenues";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    handleSearch = (value) => {
        if (value === "") {
            alert("Cannot be empty")
        }
        else {
            WebApi.getVenueByGeoCode(value).then(response => {
                this.setState({data: response.data.response.groups[0].items});
            }).catch(error=> {
                alert("Invalid")
                console.log(error)
            });
        }


    };

    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Lunch Place</h1>
                </header>
                <Home onSearch={this.handleSearch}/>
                {this.state.data.length && <AllVenues venues={this.state.data}/>}
            </div>
        );
    }
}

export default App;
