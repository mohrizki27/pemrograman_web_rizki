import React, { Component }  from "react";

class Images extends Component {
    render() {
        return (
            <img src={this.props.srcGambar} 
            alt="food" width='200' height='100' />
        )
    }
}
export default Images