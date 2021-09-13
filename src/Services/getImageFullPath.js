const BASE_URL = 'https://image.tmdb.org/t/p/';

function getImageFullPath(userUrl, size = '300') {
  return `${BASE_URL}w${size}${userUrl}`;
}

export { getImageFullPath };
