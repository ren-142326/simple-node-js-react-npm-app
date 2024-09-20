import React, {StrictMode} from 'react';
import createRoot from 'react-dom/clinet';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
