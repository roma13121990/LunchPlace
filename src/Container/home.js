import React, {Component} from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    handleChange() {
        this.props.onSearch(this.input.value);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" className="value" placeholder="10999 Berlin" ref={ref => this.input = ref}/>
                    <button className="search" onClick={e => this.handleChange(e)}>Search</button>
                </div>

            </div>)
    }
}