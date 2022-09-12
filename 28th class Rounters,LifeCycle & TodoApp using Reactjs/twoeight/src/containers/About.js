import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class About extends Component{
//     render(){
//         return(
//             <div>
//             <h1>About Pages</h1>
//             <Link to="/">Go to Home</Link>
//             </div>
//         )
//     }
// }
// export default About




// javascript link 


class About extends Component {
    gotohome = () => {
        this.props.history.goBack('/')
    }
    render() {
        return (
            <div>
                <h1>About Pages</h1>
                <button onClick={this.gotohome}>Go to Home</button>
            </div>
        )
    }
}
export default About



// class About extends Component{
//     gotohome =() => {
//         console.log(this.props)
//         // window.location = "/"
//     }
//     render(){
//         return(
//             <div>
//             <h1>About Pages</h1>
//             <button onClick={this.gotohome}>Go to Home</button>
//             </div>
//         )
//     }
// }
// export default About