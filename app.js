const express = require('express');
const { DateTime } = require('luxon'); // Use the luxon library to handle time zones

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  // Get the current time in the Nigerian time zone (UTC+1)
  const nigerianTime = DateTime.now().setZone('Africa/Lagos');

  // The current UTC time
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const currentTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  // Prepare the response
  const response = {
    slack_name: slack_name,
    current_day: nigerianTime.toFormat('cccc'),
    utc_time: currentTime,
    track: track,
    github_file_url: 'https://github.com/Mathew-Pio/HNG-PRJECT1/blob/main/app.js',
    github_repo_url: 'https://github.com/Mathew-Pio/HNG-PRJECT1',
    status_code: 200
  };

  // Send the JSON response
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
