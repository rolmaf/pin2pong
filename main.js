let width = 400;
let height = 600;
let go = true;
let r = 10;
let x = 150;
let y = 590;
let cx = 100;
let cy = 200;
let cystep = 5;
let cxstep = 5;
let heightuser = 10;
let schet = 0;
let widthuser = 100;
// let plus = 4;

let stage = new Konva.Stage({
    container: "game",
    width: width,
    height: height
})

let layer = new Konva.Layer();

let ball = new Konva.Circle({
    x: cx,
    y: cy,
    radius: r,
    fill: "black",
    stroke: "black"

})

layer.add(ball);

let user = new Konva.Rect({
    x: x,
    y: y,
    width: widthuser,
    height: heightuser,
    fill: "hotpink",
    stroke: "hotpink"
})

layer.add(user);

let score = new Konva.Text({
    x: 50,
    y: 50,
    text: "0",
    fontSize: 50
})

layer.add(score);

stage.on("mousemove", function () {
    if (go == true) {
        pointerPos = stage.getPointerPosition();
        if (pointerPos.x < width - widthuser && pointerPos.x > 0) {
            x = pointerPos.x;
            user.x(x);
            // console.log(x);
        }
    }
    // layer.draw();
})

stage.add(layer);

let anim = new Konva.Animation(function (frame) {
    // if (cy + r > height) {
    //     go = false;
    // }
    if (go == true) {
        cx = cx + cxstep;
        cy = cy + cystep;
        // console.log(cx);
        if (cx <= 0) { //левая стенка
            console.log("Левая стенка")
            cxstep = -cxstep;
        }

        if (cy - r <= 0) {
            console.log("Верхняя граница");
            cystep = -cystep;
        }

        if (cx + r >= width) {
            console.log("Правая стенка")
            cxstep = -cxstep;
        }

        if (cy + r >= height && cx + r >= x && cx + r <= x + widthuser) {
            schet = schet + 1;
            if (schet == 5) {
                cxstep = cxstep + 2;
                cystep = cystep + 2;
                ball.fill("green");
            }
            if (schet == 7) {
                cxstep = cxstep + 4;
                cystep = cystep + 4;
                ball.fill("blue")
            }
            if(schet == 10) {
                cxstep = cxstep + 6;
                cystep = cystep + 6;
                ball.fill("red");
            }
            if (schet == 15) {
                cxstep = cxstep + 8;
                cystep = cystep + 8;
                ball.fill("chocolate");
            }
            console.log("collision user");
            cystep = -cystep;
        } else if (cy + r >= height) {
            console.log("Нижняя граница");
            // console.log("cx = " + cx);
            // console.log("cy = " + cy)
            // console.log("r = " + r);
            // console.log("x = " + x);
            // console.log("y = " + y);
            // console.log("widthuser = " + widthuser);
            go = false;
        }


        ball.x(cx);
        ball.y(cy);
        score.text(schet);
    }
}, layer)

anim.start()

newgame.onclick = function() {
    width = 400;
    height = 600;
    go = true;
    r = 10;
    x = 150;
    y = 590;
    cx = 100;
    cy = 200;
    cystep = 5;
    cxstep = 5;
    heightuser = 10;
    schet = 0;
    widthuser = 100;
    i = 1;

    user.y(y);
    user.x(x);
    ball.x(cx)
    ball.y(cy);
    score.text("0");
    ball.fill("black"); 


    go = true;


};