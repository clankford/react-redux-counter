import React from 'react';
// Components
import ThreadDisplay from './ThreadDisplay';
import ThreadTabs from './ThreadTabs';

const App = () => (
    <div className='ui segment'>
        <ThreadTabs />
        <ThreadDisplay />
    </div>
);

export default App;
