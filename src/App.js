import React from "react";
import { Header } from "./header.jsx";
import { Card } from "./card.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Card
        nombre="Shawn Wang in Singapore"
        cargo="Software Engineer at Amazon"
        experiencia="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />
      <Card
        nombre="Sarah Chima in Nigeria"
        cargo="Software Engineer at ChatDesk"
        experiencia="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />ƒ
      <Card
        nombre="Emma Bostian in Sweden"
        cargo="Software Engineer at Spotify"
        experiencia="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
      />
    </div>
  );
};

export default App;
