import React, { Component } from "react";

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "55424661086-ciauadv7euuggqsmkircmkohrrse2vk5.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div className={"item"}>GoogleAuth</div>;
  }

}

export default GoogleAuth;
