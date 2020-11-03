import React from 'react';

const profileBaseContext = React.createContext({
    userId: 0,
    record: {
        data: {
            userPosts: 0,
            follow: 0,
            follower: 0
        },
        update: () => {}
    },
    header: {
        active: false,
        type: '',
        update: () => {}
    },
    followPanel: {
        data: {
            followerUsers: {},
            followUsers: {}
        }
    },
    action: {
        updateFollow: false,
    }
});

export default profileBaseContext;