import React from "react";
import Home from "../pages/Home";
import Item from "../pages/Item";

function App() {
  return (
      <div className={App}>
          {/*<Home/>*/}
          <Item/>
      </div>
      /*<Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>*/
  );
}

export default App;
