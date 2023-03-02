import { Component } from "react";

class SearchBox extends Component {
    render() {
        console.log('render from search-box.Js')
        return (
            <input
                className={this.props.className}
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox