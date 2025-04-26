import { Component } from "react";

class Main extends Component{
    constructor(){
        super()
        this.state = {
            title : 'Menu Makanan',
        }
        this.rubahData = this.rubahData.bind(this)
    }
    rubahData(){
        this.setState((state,props)=>{
            return {title: "pilih Makanan"}
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={ this.rubahData }>ubah Makanan</button>
            </div>
        )
    }
}
export default Main