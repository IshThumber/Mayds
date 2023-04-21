import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Home from '../../../Pages/Home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />
});
