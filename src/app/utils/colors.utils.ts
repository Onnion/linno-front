import { Color } from 'ng2-charts';

const  hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result && `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
};

export const generateColor = function(color): Color {
    return {
        backgroundColor: `rgba(${hexToRgb(color)}, .2)`,
        borderColor: `rgba(${hexToRgb(color)}, 1)`,
        pointBackgroundColor: `rgba(${hexToRgb(color)}, 1)`,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: `rgba(${hexToRgb(color)}, 1)`,
        pointHoverBorderColor: `rgba(${hexToRgb(color)}, .8)`,
    };
};
