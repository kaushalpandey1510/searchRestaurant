import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer -WAo5TB9f0F0gCdJVsopXXPjpukA8Be8pctjQH4CsPh6dP1W8_jzIE2EJsFmRXok367gVSHRVl9l6vK8zAIjeXEF3wTyG-yUAQQpCipu9WaOD3NbfdDa1KWaI6FiY3Yx',
  },
});
