import 'jsdom-global/register';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../src/ReduxStore/store';
import App from '../src/App';

test('renders learn react link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const linkElement = getByText(<App />);
    expect(linkElement).toBeInTheDocument();
});
