import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const API_KEY = '0e7d5946d1c1c5543b9417dc16ada4a2';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTdkNTk0NmQxYzFjNTU0M2I5NDE3ZGMxNmFkYTRhMiIsIm5iZiI6MTcyNzQ0NDIzMy4wLCJzdWIiOiI2NmY2YjUwODdiMzA3MjY4OGQ5NjgxNTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.31dydz47p0aZX74W5GlwteY6rPz8UBinG2GcBrJ5LSg';

const sections = [
  {id: 1, title: 'Top Rated'},
  {id: 2, title: 'Popular'},
  {id: 3, title: 'Upcoming'},
  {id: 4, title: 'Selected for You Today'},
  {id: 5, title: 'My List'},
  {id: 6, title: 'New Releases'},
];

export {width, height, API_KEY, TOKEN, sections};
