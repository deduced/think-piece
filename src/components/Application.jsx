import React, { Component } from "react";
import Authentication from "../components/Authentication";
import Posts from "./Posts";
import PostPage from "./PostPage";
import UserProfile from "./UserProfile";

import { Switch, Route, Link } from "react-router-dom";

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <Link to="/">
          <h1>Think Piece</h1>
        </Link>
        <Authentication />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/posts/:id" component={PostPage} />
        </Switch>
      </main>
    );
  }
}

export default Application;
