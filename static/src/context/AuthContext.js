import React from 'react';

const authContext = React.createContext({
    isLogin: false,
    login: () => {},
    logout: () => {}
});

export default authContext;