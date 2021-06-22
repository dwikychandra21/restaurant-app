import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_API_URL}/list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_API_URL}/detail/${id}`,
};

export default API_ENDPOINT;
