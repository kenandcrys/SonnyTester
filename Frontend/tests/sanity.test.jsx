// sanity.test.js
import { render } from '@testing-library/react';
import LandingPage from '../src/pages/LandingPage';

test('renders LandingPage without crashing', () => {
  render(<LandingPage />);
  // If the component renders without throwing an error, the test passes
});


// Add more tests as needed
