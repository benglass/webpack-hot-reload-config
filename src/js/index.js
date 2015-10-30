import React from 'react';
import App from 'App';

if (__DEV__) {
    require('style.scss');
}

React.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}
