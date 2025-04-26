import React, {Component} from "react";
import Images from "./Images";
class List extends Component{
    render(){
        return(
            <div>
                
                <ol>
                    <li><Images srcGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" /></li>
                    <li><Images srcGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/></li>
                    <li><Images srcGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/></li>
                    <li><Images srcGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/></li>
                </ol>
            </div>
        )
    }
}
export default List