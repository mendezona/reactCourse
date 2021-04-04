import axios from 'axios';

const KEY = 'AIzaSyC5Mw7ThZbaT2i63Xk6XmA-aydKSNgVD3U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});