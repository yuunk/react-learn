import React from 'react';

const headerContext = React.createContext({
    type: '',
    update: () => {}
});

export default headerContext