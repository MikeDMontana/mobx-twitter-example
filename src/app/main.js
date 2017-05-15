import React from 'react';

import {observer} from 'mobx-react';

const Main = observer(({twitterStore}) => {
  return (
   <div>Hello and: {twitterStore.getTweet.text}</div>
  )
});

export default Main;
