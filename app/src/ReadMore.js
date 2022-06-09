import React, { useState } from "react";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 70) : text}

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
            GatorMart is a mock marketplace for university students, faculty, and staff. For the project, I worked with
            6 other group members and participated in the entire software development lifecycle. My contributions for this project
            were mainly front end, but I worked closely with the backend team to during vertical programming phases. I created the 
            wireframes using Figma and collaborated with my team members. I also participated in weekly SCRUM meetings and became experienced
            on time and resource management. For the application, we used Express, Handlebars, and Bootstrap.
            We used Amazon Web Services to host our website and created the database for users and posted items on MySQL.
             I also wrote most of the documentation throughout
            the whole process, including usability, QA, and security assessments.
          </ReadMore>
      </div>
    );
  };


  const DiscordDescription = () => {
    return (
      <div>
          <ReadMore>
          Discord Bot is a an application written in Python and MySQL. The externally hosted MySQL database is handcrafted with over 30 entities. Python is used to connect the database and the Discord API. Users are able to interact with a Discord Bot that responds to user commands. The bot uses complex MySQL queries that have already changed the data into a format matching the command 
          </ReadMore>
      </div>
    );
  };

  const ItineraryDescription = () => {
    return (
      <div>
          <ReadMore>
          iTinerary is an application created in XCode using Swift, UI Kit, and SwiftUI. iTinerary allows users to take notes and plan out trips they want to take. The app incorporates multiple APIs, including ones created by Apple and Google. Users have access to maps, calendars, and notes. iTinerary was built in a team of four, and the group members coordinated to distribute the tasks evenly
          </ReadMore>
      </div>
    );
  };


  export {TankDescription, LambdaDescription, ItineraryDescription, GatorMartDescription, DiscordDescription}
