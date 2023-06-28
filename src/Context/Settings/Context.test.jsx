import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settings Context', () => {
  test('should provide the default state', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ sort }) => {
              return (
                <>
                <h3 data-testid="test-h3">test: {sort}</h3>
                </>
              )
            }
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
  });
});




