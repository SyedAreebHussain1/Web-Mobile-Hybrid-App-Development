import React, { Component } from "react";
import { Link } from "react-router-dom";


// class Home extends Component {
//     render() {
//         return (
//             <div>
//             <h1>Home Pages</h1>
//             <Link to="/about">Go to About</Link>
//             </div>
//         )
//     }
// }
// export default Home



// javascript link

class Home extends Component {
    render() {
        return (
            <div>
            <h1>Home Pages</h1>
            <Link to="/about">Go to About</Link>
            </div>
        )
    }
}
export default Home




// class Home extends Component {
//     gotoabout= () => {
//         console.log(this.props)
//         window.location = '/about'
//     }
//     render() {
//         return (
//             <div>
//             <h1>Home Pages</h1>
//             <button onClick={this.gotoabout}>Go to About</button>
//             </div>
//         )
//     }
// }
// export default Home