import React from 'react';

const authContext = React.createContext({
    isLogin: false,
    login: () => {}
});

export default authContext;