import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactList from './Components/Home';

describe('ContactList', () => {
  const contacts = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      address: '123 Main St',
      city: 'City',
      state: 'State',
      country: 'Country',
      postalCode: '12345',
    },
    // Add more sample contacts as needed
  ];

  test('renders ContactList component', () => {
    render(<ContactList contacts={contacts} />);
    
    // Assert that the ContactList component renders correctly
    expect(screen.getByText('Contact List')).toBeInTheDocument();
    expect(screen.getByText('Add Contact')).toBeInTheDocument();
    expect(screen.getByText('First name')).toBeInTheDocument();
    expect(screen.getByText('Last name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone number')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('PostalCode')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
