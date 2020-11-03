import React from 'react';

const authContext = React.createContext({
    isLogin: false,
    login: () => {},
    logout: () => { },
    mounted: false
});

export default authContext;