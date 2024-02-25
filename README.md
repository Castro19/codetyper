# WPM Typing Calculator

## Overview

This repository contains the foundational code for a web application that calculates the user's typing speed in Words Per Minute (WPM). This is currently setup to provide an interactive UI where users can type a given passage of text in a given amount of time. Once the time runs out, the application will calculate their typing speed.

![Project Showcase](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXYzcTl4bHM1NHF3aGZqdGN5YW44OWJycjUybWV5djk5dTc4MTUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/abhVZ1zQSexhGeWDDy/giphy.gif)

## Features
- **Typing Test**: Users are provided with a text snippet to type within a set time frame.
- **Real-time Feedback**: As users type, they receive immediate visual feedback indicating correct and incorrect input.
- **WPM Calculation**: Once the time runs out, the user's WPM is calculated and displayed.


## Installation & Setup

To get a local copy up and running, run the following commands.

1. Clone the repo
   ```sh
   git clone https://github.com/Castro19/codetyper.git
   ```
2.Go into the front-end directory:
  ```sh
    cd $'\025'codetyper-frontend
  ```
3. Install NPM packages:
   ```sh
   npm install
   ```
4. Run the Web Application on Local Server:
   ```sh
   npm run dev
   ```

## Future Features to Add for the FrontEnd
- **Correctness:** Take into account correctness into the WPM calculation.
- **Cursor Placement:** Add a cursor that is placed at the spot where the current character is at.
- **Main Menu:** Add a Main Menu to toggle different settings of modes, such as (time, difficulty, etc.)
