const boxes = document.querySelectorAll('.box');
const bcgColor = document.getElementById('bcgRange');
const fntColor = document.getElementById('fntRange');
const fntSelect = document.getElementById('fntSelect');
const preSelects = document.querySelectorAll('.fntPreselect');
const bcgHexInfo = document.querySelectorAll('.bcgHexInfo');
const colorChanger = (e) => {
    let color = e.target.value;
    if (color.length === 3) {
        color = "#" + color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    color = color.replace("#", "")
    let red = parseInt(color.slice(0, 2), 16);
    let green = parseInt(color.slice(2, 4), 16);
    let blue = parseInt(color.slice(4, 6), 16);

    const fontHexInfo = document.querySelectorAll('.fontHexInfo');
    const fullHex = (r, g, b, i, target) => {


        r > 255 ? r = 255 : null;
        g > 255 ? g = 255 : null;
        b > 255 ? b = 255 : null
        r < 0 ? r = 0 : null;
        g < 0 ? g = 0 : null
        b < 0 ? b = 0 : null

        let red = Number(r).toString(16);
        let green = Number(g).toString(16);
        let blue = Number(b).toString(16);
        if (red.length < 2) {
            red = "0" + red;
        }
        if (green.length < 2) {
            green = "0" + green;
        }
        if (blue.length < 2) {
            blue = "0" + blue;
        }

        if (target === "box") {
            bcgHexInfo[i].textContent = "The box HEX: #" + red + green + blue
        }
        if (target === "font") {
            fontHexInfo[i].textContent = "The font HEX: #" + red + green + blue
        }

    }
    const rgbMaxBlock = (r, g, b) => {
        r <= 255 ? red += 10 : null;
        g <= 255 ? green += 10 : null
        b <= 255 ? blue += 10 : null



    }
    const rgbMinBlock = (r, g, b) => {
        r >= 0 ? red -= 10 : null;
        g >= 0 ? green -= 10 : null
        b >= 0 ? blue -= 10 : null

    }
    const bcgChanger = () => {
        document.querySelector('.bcgHex').textContent = `First box color: rgb(${red},${green},${blue})`
        for (let i = 0; i < 10; i++) {
            let colorRgb = `rgb(${red},${green},${blue})`;
            boxes[i].style.backgroundColor = colorRgb;
            fullHex(red, green, blue, i, "box")
            rgbMaxBlock(red, green, blue)

        }
    }
    const fntChanger = () => {
        document.querySelector('.fntHex').textContent = `First font color: rgb(${red},${green},${blue})`
        for (let i = 0; i < 10; i++) {
            let colorRgb = `rgb(${red}, ${green}, ${blue})`;
            boxes[i].style.color = colorRgb;
            fullHex(red, green, blue, i, "font")
            rgbMinBlock(red, green, blue)
        };
    }

    if (e.target === bcgColor) {
        bcgChanger()
    }
    if (e.target === fntColor) {
        fntChanger()
    }
}
const fontChanger = (e) => {
    const fontText = document.querySelectorAll('.fontExample');

    if (e.target.value !== "null") {
        fontText.forEach(font => font.style.display = `none`)
        boxes.forEach(box => box.style.fontFamily = e.target.value)
        fontText.forEach(font => font.textContent = `This is the ${e.target.value} font.`)

        setTimeout(() => {
            fontText.forEach(font => font.style.display = `block`)
            fontText.forEach(font => font.style.animation = `blend 0.3s linear forwards`)
        }, 100);

    }
}
bcgColor.addEventListener('change', colorChanger)
fntColor.addEventListener('change', colorChanger)
fntSelect.addEventListener('change', fontChanger)


