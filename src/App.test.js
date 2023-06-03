import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders Navbar component', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders ContactList component', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const contactListElement = screen.getByTestId('contact-list');
    expect(contactListElement).toBeInTheDocument();
  });

  test('renders addEditContact component', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const contactListElement = screen.getByTestId('add-edit-contact');
    expect(contactListElement).toBeInTheDocument();
  });

  test('renders mapView component', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const contactListElement = screen.getByTestId('map-view');
    expect(contactListElement).toBeInTheDocument();
  });

  // Add more tests for other components if necessary
});





// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
