import React from "react";
import { Link, Route } from "react-router-dom";

// stop time:
function Topic({ match }) {
  // match is a prop that react router will pass to any component it renders
  // we are getting the url parameter that we established with the route component
  return <div>{match.params.topicId}</div>;
}

export default function Topics({ match }) {
  // destructuring match from props
  // when you are building nested link components use match.url
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          {/* the 'to' keyword says where to link to when clicked */}
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props vs. State</Link>
        </li>
      </ul>
      <hr />
      {/* This is dynamic rendering. We are also using nested routes below. Routes are just components */}
      {/* when you are building nested route components use match.path - (difference between url, the path allows us to use dynamic routes)  */}
      <Route path={`${match.path}/:topicId`} component={Topic} />
      {/* this is how we pass a prop */}
      {/* <Route path={`${match.path}/:topicId`} component={() => {
          return <Topic name="tyler" />;
        }}
      /> */}
      {/* if we do not want to create an entire component, we can use an annomous func */}
      <Route
        exact
        path={match.url}
        render={() => {
          return <h3>Please select a topic</h3>;
        }}
      />
    </div>
  );
}
