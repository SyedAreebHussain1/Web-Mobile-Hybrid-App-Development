import React,{Component} from "react";

// class Child extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.name}</h1>
//                <h3>Rs: {this.props.price}</h3>
//             </div>
//         )
//     }
// }
// export default Child




class Child extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
               <h3>Rs: {this.props.price}</h3>
               <button onClick={()=>this.props.get_data("Ghous Ahmed")}>Send data</button>
            </div>
        )
    }
}
export default Child
