import Nodegeocoder from 'node-geocoder';

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: 'h51tO6eyCy7Wqq7GSKhUFpkuoU6tIAk1',
  formatter: null,
};

const geocoder = Nodegeocoder(options);

export { geocoder };
