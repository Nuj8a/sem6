// App.js

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import makeStore from "./redux/store";
// import LoadingBar from "react-top-loading-bar";
import PageUser from "./User/PageUser";
import PageDashboard from "./Dashboard/PageDashboard";

// const loadingBarColor = "#3b82f6";

function App() {
  // const [progress, setProgress] = useState(10);

  return (
    <React.Fragment>
      <Provider store={makeStore()}>
        <BrowserRouter>
          {/* <LoadingBar
            color={loadingBarColor}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          /> */}
          {/* <PageUser setProgress={setProgress} />
          <PageDashboard setProgress={setProgress} /> */}
          <PageUser />
          <PageDashboard />
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
