import React, { useState } from "react";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <br />
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const LambdaDescription = () => {
    return (
      <div>
          <ReadMore>
            LambdaVibe is a web based music player with customizable sounds. A user has the option of picking an instrument as well
            as a visualizer to go with the instrument. Users are able to click the instrument itself to create the notes which are based off Tone.js
            package. A small database of songs are also included, along with a search function to find a song by name or artist. 
          </ReadMore>
      </div>
    );
  };

  const TankDescription = () => {
    return (
      <div>
          <ReadMore>
          TankGame is a Java program built using the pillars of object oriented programming. In this program, two players can interact with each other using the keyboard. The game utilizes the model view controller design archetype. A rudimentary model is used to keep track of location data. The view is the user interface that the players see and interact with. The controller handles all of the logic in the game, including communication between the model and the view
          </ReadMore>
      </div>
    );
  };

  const GatorMartDescription = () => {
    return (
      <div>
          <ReadMore>
            GatorMart Something GatorMart Something GatorMart Something 
            GatorMart Something 
            GatorMart Something GatorMart Something 
            GatorMart Something GatorMart Something GatorMart Something GatorMart Something 
            GatorMart Something GatorMart Something GatorMart Something GatorMart Something GatorMart Something 
            GatorMart Something GatorMart Something 
          </ReadMore>
      </div>
    );
  };


  const DiscordDescription = () => {
    return (
      <div>
          <ReadMore>
            Discord something Discord something Discord something Discord something Discord something Discord something 
            Discord something Discord something Discord something Discord something Discord something Discord something 
            Discord something Discord something Discord something Discord something Discord something Discord something 
            Discord something Discord something Discord something Discord something Discord something Discord something 
            Discord something Discord something Discord something Discord something Discord something Discord something 
            Discord something Discord something Discord something Discord something Discord something Discord something 
          </ReadMore>
      </div>
    );
  };

  const ItineraryDescription = () => {
    return (
      <div>
          <ReadMore>
            iOS app something something iOS app something something iOS app something something iOS app something something iOS app something something 
            iOS app something something iOS app something something iOS app something something iOS app something something iOS app something something 
            iOS app something something iOS app something something iOS app something something iOS app something something iOS app something something 
            iOS app something something iOS app something something iOS app something something iOS app something something 
            iOS app something something iOS app something something iOS app something something iOS app something something 
          </ReadMore>
      </div>
    );
  };


  export {TankDescription, LambdaDescription, ItineraryDescription, GatorMartDescription, DiscordDescription}
