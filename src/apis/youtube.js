import axios from 'axios';



export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: process.env.YOUTUBE_API_KEY
  }
});
