import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Nav from '../components/Nav/Nav';

storiesOf("Nav", module)
  .add("default", () => (
    <Nav/>
  ))