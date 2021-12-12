export function generate(canvas, config) {
    var output = document.getElementById(canvas);
    var ctx = output.getContext('2d');

    output.height = output.width;

    var cfg = {
        iterations: 9999,
        height: 800,
        width: 800,
        forms: [
            {
                type: 'rect',
                minHeight: 5,
                minWidth: 5,
                maxHeight: 50,
                maxWidth: 50,
                colors: [
                    'red',
                    'blue',
                    'green',
                    'yellow'
                ]
            },
            {
                type: 'circle',
                minHeight: 5,
                minWidth: 5,
                maxHeight: 50,
                maxWidth: 50,
                colors: [
                    'red',
                    'blue'
                ]
            }
        ]
    };

    cfg = config;

    for (var i = 0; i < cfg.iterations; i++) {
        var form = cfg.forms[random(0, cfg.forms.length)];
        if (form.type == 'rect') {
            drawRandomRect(ctx, cfg.height, cfg.width, form);
        } else if (form.type == 'circle') {
            drawRandomCircle(ctx, cfg.height, cfg.width, form);
        } else {
            console.error('Invalid form');
        }
    }
}

export function clear(canvas) {
    var output = document.getElementById(canvas);
    var ctx = output.getContext('2d');

    ctx.clearRect(0, 0, output.width, output.height);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawRandomRect(canvas, height, width, cfg) {
    var rectWidth = random(cfg.minWidth, cfg.maxWidth);
    var rectHeight = random(cfg.minHeight, cfg.maxHeight);
    var x = random(0, width - rectWidth);
    var y = random(0, height - rectHeight);
    var color = 'black';
    if (cfg.colors) color = cfg.colors[random(0, cfg.colors.length)];
    else color = 'rgba(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ',255)';

    //Draw
    canvas.fillStyle = color;
    canvas.fillRect(x, y, rectWidth, rectHeight);

    if (cfg.borders) {
        canvas.strokeStyle = 'black';
        canvas.strokeRect(x, y, rectWidth, rectHeight);
    }
}

function drawRandomCircle(canvas, height, width, cfg) {
    var radius = random(cfg.minWidth / 2, cfg.maxWidth / 2);
    var x = random(radius, width - radius);
    var y = random(radius, height - radius);
    var color = 'black';
    if (cfg.colors) color = cfg.colors[random(0, cfg.colors.length)];
    else color = 'rgba(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ',255)';

    canvas.beginPath();
    canvas.arc(x, y, radius, 0, 2 * Math.PI, false);
    canvas.fillStyle = color;
    canvas.fill();
    if (cfg.borders) {
        canvas.strokeStyle = 'black';
        canvas.stroke();
    }
}