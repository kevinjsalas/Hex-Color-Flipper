const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const hexColor = document.querySelector(".hexColor");
const hexCode = document.querySelector(".hexCode");


//
const hexArr = ["A", "B", "C", "D", "E", "F", "0", "1",
                "2", "3", "4", "5", "6", "7", "8", "9"];



btn2.addEventListener('click', resetHex);

function resetHex() {
    hexColor.style.backgroundColor = "initial";
    hexCode.textContent = "";
}

btn.addEventListener('click', function(){
    const rand = getHex();
    hexColor.style.backgroundColor = rand;
    hexCode.textContent = rand;
});

// document.addEventListener('mousemove', function(){
//     const rand = getHex();
//     hexColor.style.backgroundColor = rand;
//     hexCode.textContent = rand;
// });

function getRandNum(max){
    return Math.floor(Math.random() * max);
}

function getHex() {
    let hex = "#";
    for (let i = 0; i < 6; i++){
        hex += hexArr[getRandNum(hexArr.length)];
    }
    console.log(hex);
    return hex;
}

