import React from "react";
import "./App.css";
import routes from "./routes/routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <React.Suspense fallback={<span>...Loading</span>}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                render={(props) => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
                )}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
}

export default App;
