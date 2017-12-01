import React from 'react';
import { humanize, dateToString } from 'common/number';

const Emotion = ({ item }) => (
  <div>
    <style jsx>{`
      div {
        vertical-align: top;
        padding: 15px;
        display: inline-block;
        border-style: ridge;
      }
      .face {
        color: #82fa58;
        font: ${item.size}px menlo, monaco, monospace;
      }
      .date {
        color: black;
        font: 10px menlo, monaco, monospace;
      }
      .price {
        color: red;
        font: 12px menlo, monaco, monospace;
      }
    `}</style>

    <p className="face">{item.face}</p>
    <p className="date">{dateToString(item.date)}</p>
    <p className="price">${humanize(item.price, 2)}</p>
  </div>
);

export default Emotion;
