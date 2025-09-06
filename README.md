# Do you feel lucky?
<img width="1109" height="530" alt="Screenshot from 2025-09-06 06-54-49" src="https://github.com/user-attachments/assets/2e357415-19e3-4926-b4d5-135c112ebcf6" />
## Project Overview

This is a simple Node.js/Express web application that generates random numbers. It serves as a random number generator with a web interface where users can request a random number between 1 and a specified maximum value.

## Architecture

- **Backend**: Express.js server (`p3044_random.js`) running on port 3044
- **Template Engine**: EJS for server-side rendering 
- **Views**: Located in `views/` directory
  - `number.ejs`: Displays the generated random number
  - `invalid.ejs`: Error page for invalid input
- **Static Assets**: Served from `public/` directory
  - CSS styles in `public/css/`
  - Images in `public/img/`
- **Route Pattern**: `/:number` - accepts a positive integer parameter

## Key Application Logic

The core functionality is in the `generateRandomNumber(n)` function in `p3044_random.js:9-12`, which generates a random integer between 1 and n (inclusive). The application validates that the URL parameter is a positive integer before generating the random number.

## Testing

No test framework is currently configured. The package.json test script returns an error message.
