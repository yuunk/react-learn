import React from 'react';

const modalContext = React.createContext({
    show: false,
    text: '',
    open: () => { },
    ok: () => {},
    cancel: () => {}
});

export default modalContext;