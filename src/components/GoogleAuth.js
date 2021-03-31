import React, { Component } from "react";

class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };

  componentDidMount() {
    // Get a hold of gapi client auth
    window.gapi.load("client:auth2", () => {
      // initialize gapi client with the client ID
      window.gapi.client
        .init({
          clientId:
            "55424661086-ciauadv7euuggqsmkircmkohrrse2vk5.apps.googleusercontent.com",
          scope: "email",
        })
        // This is an async call, so we need to chain .then to this promise
        .then(() => {
          // Once we have initialize the client auth, we can access the the auth instance
          this.auth = window.gapi.auth2.getAuthInstance();

          // Update state on the basis of auth status
          this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });

          // Listen to any changes in the authentication status
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onClickSignIn = () => {
    this.auth.signIn();
  };

  onClickSignOut = () => {
    this.auth.signOut();
  };

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
    });
  };

  renderAuthButton() {
    switch (this.state.isSignedIn) {
      case false:
        // If the user is NOT signed in, give the option to sign In
        return (
          <button
            onClick={this.onClickSignIn}
            className={"ui button red google"}
          >
            <i className={"icon google"} /> Sign in with Google
          </button>
        );
      case true:
        // If the user is already signed in, give the option to sign out
        return (
          <button
            onClick={this.onClickSignOut}
            className={"ui button red google"}
          >
            <i className={"icon google"} /> Sign Out
          </button>
        );
      case null:
      default:
        return null; //<div>I dont know</div>;
    }
  }

  render() {
    return <div className={"item"}>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
