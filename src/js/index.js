import React from 'react';
import App from './App';

React.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
