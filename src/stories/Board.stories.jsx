import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Board from '../components/Board/Board';

storiesOf("Game Board", module)
  .add("Default", () => (
    <Board/>
  ))