/*
    パラメーターのプロフィールidを使うためだけにつかう
*/

import React from 'react';

const profileContext = React.createContext({
    profileId: null,
});

export default profileContext;