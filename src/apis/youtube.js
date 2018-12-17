import axios from 'axios';

const KEY = 'AIzaSyCRHBFTEQCky32pcmPbviTum07OWAWRBMg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});
