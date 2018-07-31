import React, {Component} from 'react'

export default class Home extends Component {
    state = {
        rows: [{}],
        counter: [{}],
        maxOccuring: ""
    };
    handleChange = (idx,checkboxvalue) => e => {
        let newValues = this.state.counter;
        if(checkboxvalue){
            Object.keys(newValues).forEach(() => { newValues[idx] = checkboxvalue });
            var frequency = {};  // array of frequency.
            var max = 0;  // holds the max frequency.
            var result;   // holds the max frequency element.
            for(var v in newValues) {
                frequency[newValues[v]]=(frequency[newValues[v]] || 0)+1; // increment frequency.
                if(frequency[newValues[v]] > max) { // is this frequency > max so far ?
                    max = frequency[newValues[v]];  // update max.
                    result = newValues[v];          // update result.
                }
            }
            this.setState({maxOccuring:result})

        }

        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });


    };


    handleAddRow = () => {
        const item = {
            participant: "",
            vote: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            {this.state.maxOccuring && <p className="vote">Vote goes to "{this.props.venues[this.state.maxOccuring-1].venue.name}"</p>}
                            <table
                                className="table table-bordered table-hover"
                                id="tab_logic"
                            >
                                <thead>
                                <tr>
                                    <th>Participants</th>
                                    {this.props.venues.slice(0, 3).map((venue,index) =>
                                        <th className="venue-names" id={index}>
                                            <a target="_blank" href={`https://foursquare.com/v/${venue.venue.name}/${venue.venue.id}`}>{venue.venue.name}</a>
                                            <p>{venue.venue.categories[0].name}</p>
                                        </th>
                                    )}
                                    <th>{}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.rows.map((item, idx) => (
                                    <tr id="addr0" key={idx}>
                                        <td><input
                                            type="text"
                                            name="name"
                                            value={this.state.rows[idx].participant}
                                            onChange={this.handleChange(idx)}
                                            className="form-control"
                                        /></td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={"vote_"+idx}
                                                value={this.state.rows[idx].vote}
                                                onChange={this.handleChange(idx,1)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={"vote_"+idx}
                                                value={this.state.rows[idx].vote}
                                                onChange={this.handleChange(idx,2)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="radio"
                                                name={"vote_"+idx}
                                                value={this.state.rows[idx].vote}
                                                onChange={this.handleChange(idx,3)}
                                                className="form-control"
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={this.handleRemoveSpecificRow(idx)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button onClick={this.handleAddRow} className="add-btn">
                                Add participants
                            </button>
                            <button
                                onClick={this.handleRemoveRow}
                                className="float-right"
                            >
                                Delete Last Row
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}