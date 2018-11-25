import React from "react";
import { Link, Route } from "react-router-dom";

// stop time:
function Topic({ match }) {
  return <div>{match.params.topicId}</div>;
}

export default function Topics(props) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          {/* to says where to link to when clicked */}
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
      <Route path="/topics/:topicId" component={Topic} />
    </div>
  );
}
