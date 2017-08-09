Highcharts.theme = {
    //UÅ¼ywane kolory wykresÃ³w
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
        '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: {
            linearGradient: {x1: 0, y1: 0, x2: 1, y2: 1},
            stops: [
                [0, '#232323']
            ]
        },
        style: {
            fontFamily: "-apple-system, 'Unica One', sans-serif"
        },
        plotBorderColor: 'yellow'
    },
    title: {
        style: {
            color: '#525252',
            textTransform: 'uppercase',
            fontSize: '11px'
        }
    },
    subtitle: {
        style: {
            color: '#404040',
            textTransform: 'none'
        }
    },
    xAxis: {
        gridLineColor: '#2F2F2F',
        labels: {
            style: {
                color: 'white'
            }
        },
        lineColor: '#404040',
        minorGridLineColor: 'pink',
        tickColor: '#303030',
        title: {
            style: {
                color: '#484848'

            }
        }
    },
    yAxis: {
        gridLineColor: '#565656',
        labels: {
            style: {
                color: 'white'
            }
        },
        lineColor: 'blue',
        minorGridLineColor: 'yellow',
        tickColor: '#303030',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        style: {
            color: '#F0F0F0'
        }
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
                backgroundColor: {
                    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }, {
                backgroundColor: '#232323',
                borderWidth: 0,
                outerRadius: '103%',
                innerRadius: '0%'
            }]
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            },
            states: {
                hover: {
                    lineWidth: 3
                }
            },
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        },
        pie: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y}'
            }
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            symbolStroke: '#DDDDDD',
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#2D2D2D',
            stroke: 'pink',
            style: {
                color: '#5C5C5C'
            },
            states: {
                hover: {
                    fill: '#444444',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#2D2D2D',
        inputStyle: {
            backgroundColor: '#333',
            color: '#5C5C5C'
        },
        labelStyle: {
            color: 'white'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#262626',
            borderColor: '#5C5C5C'
        },
        outlineColor: '#383838',
        maskFill: 'rgba(255,255,255,0.1)',
        series:
                {
                    color: 'white',
                    lineColor: 'white'
                },
        xAxis: {
            gridLineColor: '#565656'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: 'blue',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);

