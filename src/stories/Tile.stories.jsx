import React from 'react';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tile from "../components/Tile/Tile";

storiesOf("Tiles", module)
  .add("Default", () => (
    <Tile onClick={action("Tile Clicked")}/>
  ))
  .add("Clickable", () => (
    <Tile clicked={true}/>
  ))