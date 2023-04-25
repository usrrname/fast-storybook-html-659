import { reactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

import { Button } from '../components/index.js';

const wrap = reactWrapper(React);

export const MyButton = wrap(Button);
