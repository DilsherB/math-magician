import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <p className="text-start d-flex justify-content-center w-50 flex-column">
        Welcome to math Magicians website.
        <br />
        Here you can do some basic calculations by going to Calculator tab.
        <br />
        You can also read some beatiful quotes by going to Quote tab.
        <br />
        This web app is build by me(Dilsher Balouch). I used following techs
        here:
        <br />
        <ol>
          <li>React</li>
          <li>React Router</li>
          <li>React Hooks</li>
          <li>React Bootstrap</li>
          <li>ESLint</li>
          <li>Netlify</li>
        </ol>{" "}
      </p>
    </div>
  );
};

export default Home;
