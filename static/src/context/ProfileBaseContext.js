import React from 'react';

const profileBaseContext = React.createContext({
    record: {
        data: {
            userPosts: 0,
            follow: 0,
            follower: 0
        },
        update: () => {}
    },
    update: () => {},
});

export default profileBaseContext;