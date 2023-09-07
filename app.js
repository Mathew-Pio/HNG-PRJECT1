const express = require('express');
const { DateTime } = require('luxon'); // Use the luxon library to handle time zones

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const { name, track } = req.query;
  
  // Get the current time in the Nigerian time zone (UTC+1)
  const nigerianTime = DateTime.now().setZone('Africa/Lagos');
  
  // Prepare the response
  const response = {
    slackName: name,
    currentDay: nigerianTime.toFormat('cccc'),
    utc_Time: nigerianTime.toISO(),
    track: track,
    githubFileURL: 'https://github.com/Mathew-Pio/HNG-PRJECT1/blob/main/app.js',
    githubSourceCodeURL: 'https://github.com/Mathew-Pio/HNG-PRJECT1',
    statusCode:'200'
  };

  // Send the JSON response
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
