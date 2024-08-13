import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

describe('App Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<App />);
    root.unmount();
  });

  //Fail test
  it('fails intentionally', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<App />);
    
    // This is an intentional failure to demonstrate a test that fails.
    expect(div.textContent).toBe('This will fail');
    
    root.unmount();
  });


})
