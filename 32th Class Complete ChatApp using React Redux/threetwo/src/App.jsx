import "./App.css";
import React from "react";
// import Home from "./containers/Home";


// class App extends React.Component {
//   render() {
//       return (
//           <div>
//         <h1>
//           <Home />
//         </h1>
//       </div>
//     );
//   }
// }
// export default App;




import AppRouter from "./config/routers";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <AppRouter />
        </h1>
      </div>
    );
  }
}
export default App;