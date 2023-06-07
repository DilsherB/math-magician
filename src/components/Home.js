import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Hi there!</h1>
      <p className="w-50" style={{ margin: "0 auto" }}>
        Welcome to math Magicians website.
        <br />
        This web app is build by me(Dilsher Balouch).
        <ul>
          <li>
            Here you can do some basic calculations by going to Calculator tab.
          </li>
          <li>You can also read some beatiful quotes by going to Quote tab.</li>
        </ul>
        <br /> I used following techs here:
        <ol>
          <li>React</li>
          <li>React Router</li>
          <li>React Hooks</li>
          <li>React Bootstrap</li>
          <li>ESLint</li>
          <li>Netlify</li>
        </ol>
      </p>
    </div>
  );
};

export default Home;
