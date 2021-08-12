import React from "react";
import ReactDOM from "react-dom";
import C3Chart from "react-c3js";
import "c3/c3.css";
import globalStyles from './chart.styled.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        columns: [
          [
            "data1 sdasdas dasds dsasdasdasdasdd",
            30,
            200,
            100,
            400,
            150,
            250,
            67,
            97,
            58,
            30
          ],
          ["data2", 50, 20, 10, 40, 25, 60, 67, 73, 98, 90],
          ["data3", 20, 50, 30, 50, 40, 20, 67, 73, 98, 90],
          ["data4", 40, 60, 10, 60, 50, 23, 67, 74, 92, 91]
        ],
        type: "line"
      },
      grid: {
        y: { show: true }
      },
      point: {
        show: false
      },
      legend: {
        show: true,
        position: "inset",
        inset: {
          anchor: "top-left",
          x: 0,
          y: -40,
          step: 2
        }
      },
      padding: {
        top: 40
      },
      size: { height: 240, width: 540}
    };
  }

  render() {
    return (
      <div style={{backgroundColor : "inherit", opacity: "0.9"}}>
        <C3Chart
          data={this.state.chartData}
          grid={this.state.grid}
          point={this.state.point}
          legend={this.state.legend}
          padding={this.state.padding}
          size={this.state.size}
          tooltip={{
            contents: function (
              d,
              defaultTitleFormat,
              defaultValueFormat,
              color
            ) {
              var $$ = this,
                config = $$.config,
                titleFormat = config.tooltip_format_title || defaultTitleFormat,
                valueFormat = config.tooltip_format_value || defaultValueFormat,
                text,
                i,
                title,
                value,
                bgcolor;
              for (i = 0; i < d.length; i++) {
                if (!(d[i] && (d[i].value || d[i].value === 0))) {
                  continue;
                }

                if (!text) {
                  title = titleFormat ? titleFormat(d[i].x) : d[i].x;
                  text =
                    "<table class='" +
                    $$.CLASS.tooltip +
                    "'>" +
                    (title || title === 0
                      ? "<tr><th colspan='2'>" + title + "</th></tr>"
                      : "");
                }

                value = valueFormat(
                  d[i].value,
                  d[i].ratio,
                  d[i].id,
                  d[i].index
                );
                bgcolor = $$.levelColor
                  ? $$.levelColor(d[i].value)
                  : color(d[i].id);

                text +=
                  "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "'>";
                text +=
                  "<td class='name'><span style='background-color:" +
                  bgcolor +
                  "'></span></td>";
                text += "<td class='value'>" + value + "</td>";
                text += "</tr>";
              }
              return text + "</table>";
            }
          }}
        />
        <style jsx global>
          {globalStyles}
        </style>
      </div>
    );
  }
}

