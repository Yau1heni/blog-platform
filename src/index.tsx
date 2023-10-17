import { render } from 'react-dom';
import { App } from 'app/app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/theme-provider';
import './shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/store-provider';
import ErrorBoundary from './app/providers/error-boundary/ui/error-boundary';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
