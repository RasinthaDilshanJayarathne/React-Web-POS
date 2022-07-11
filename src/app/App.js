import React from "react";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Customer from "../pages/Customer";

function App() {
  return (
      <div className={App}>
          <Home/>
         {/* <Item/>*/}
         {/* <Customer/>*/}
      </div>
      /*<Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>*/
  );
}

export default App;
