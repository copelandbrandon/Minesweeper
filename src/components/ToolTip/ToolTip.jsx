import React from 'react';
import './ToolTip.css';

export default function ToolTip(props) {

  return (
    <div className="tool-tip">
      <header className="tip-title">Controls: </header>
      <span className="controls"> Click = Clear Tile</span>
      <span className="controls">Shift + Click = Flag Tile</span>
    </div>
  );
};