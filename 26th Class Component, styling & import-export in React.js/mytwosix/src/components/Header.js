// ye ap ny nh bhol na jab ap component bana ny ja rahy ho new component apko sab se pehly react ko import karwana ha 
import React, { Component } from "react";


class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2>Header</h2>
            </div>
        )
    }
}
export default Header;



// // export default is tarha bhi kar sakty ha
// export default class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 <h2>Header</h2>
//             </div>
//         )
//     }
// }