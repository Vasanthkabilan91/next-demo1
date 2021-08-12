import css from 'styled-jsx/css'

export default css.global`
.c3-axis-y > .domain {
    display: none !important;
  }
  
  .tick > line {
    display: none;
  }
  
  .c3-legend-item-tile,
  .c3-xgrid-focus,
  .c3-ygrid,
  .c3-event-rect,
  .c3-bars path {
    shape-rendering: inherit;
  }
  
  .c3-xgrid,
  .c3-ygrid {
    stroke-dasharray: none;
  }
  
  .c3-xgrid-focus {
    stroke-dasharray: 3 3;
  }
  
  .c3-tooltip th {
    background-color: inherit;
  }
`;