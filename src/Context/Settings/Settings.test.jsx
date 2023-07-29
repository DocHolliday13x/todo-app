import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settings Context Tests', () => {

  test('should provide the correct sort value', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ sort }) => {
              return (
                <h1 data-testid="test-h1">Test: {sort}</h1>
              )
            }
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    const h1 = screen.getByTestId('test-h1');
    expect(h1).toHaveTextContent('Test: difficulty');
  });

  test('should provide the correct pageItems value', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ pageItems }) => {
              return (
                <h1 data-testid="test-h1">Test: {pageItems}</h1>
              )
            }
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    const h1 = screen.getByTestId('test-h1');
    expect(h1).toHaveTextContent('Test: 3');
  });

  test('should provide the correct completed value', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ completed }) => {
              return (
                <h1 data-testid="test-h1">Test: {completed.toString()}</h1>
              )
            }
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    const h1 = screen.getByTestId('test-h1');
    expect(h1).toHaveTextContent('Test: true');
  });

  
});



