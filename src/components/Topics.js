import React from "react";
import { Link, Route } from "react-router-dom";

// stop time: 1:08:58
function Topic(props) {
  return <div>Topic</div>;
}

export default function Topics(props) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="/topics/rendering">Rendering with React</Link>
        </li>
        <li>
          <Link to="/topics/components">Components</Link>
        </li>
        <li>
          <Link to="/topics/props-v-state">Props vs. State</Link>
        </li>
      </ul>

      <hr />
      <Route path="/topics/rendering" component={Topic} />
    </div>
  );
}
