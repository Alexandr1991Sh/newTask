//Task 1
document.querySelector('.b1').onclick = () => {
    let input = document.querySelector('.i1').value;
    let out = document.querySelector('.out1');
    if (input == 4) {
        out.textContent = true;
    }
    else {
        out.textContent = false;
    }
}

//Task 2
let a21 = 451;
let a22 = 90;
document.querySelector('.b2').onclick = f2;
function f2() {
    if (a21 < a22) {
        document.querySelector('.out2').textContent = a22;
    }
    else {
        document.querySelector('.out2').textContent = a21;
    }
}

//Task 3
document.querySelector('.b3').onclick = f3;
let i31 = document.querySelector('.i31');
let i32 = document.querySelector('.i32');
function f3() {
    let a = i31.value;
    let b = i32.value;
    if (a < b) {
        document.querySelector('.out3').textContent = b;
    }
    else {
        document.querySelector('.out3').textContent = a;
    }
}

//Task 4
document.querySelector('.b4').onclick = f4;
let i4 = document.querySelector('.i4');
function f4() {
    let a = i4.value;
    if (a >= 18) {
        document.querySelector('.out4').textContent = 1;
    }
    else {
        document.querySelector('.out4').textContent = 0;
    }
}

//Task 5 
document.querySelector('.b5').onclick = f5;
let i5 = document.querySelector('.i5');
function f5() {
    let a = i5.value;
    if (a < 0) {
        document.querySelector('.out5').textContent = 'm';
    }
    else {
        document.querySelector('.out5').textContent = 0;
    }
}

//Task 6
document.querySelector('.b6').onclick = f6;
let i6 = document.querySelector('.i6');
function f6() {
    let a = i6.value;
    if (a % 2) {
        document.querySelector('.out6').textContent = 'even';
    }
    else {
        document.querySelector('.out6').textContent = 'odd';
    }
}

//Task 7
document.querySelector('.b7').onclick = f7;
let i71 = document.querySelector('.i71');
let i72 = document.querySelector('.i72');
function f7() {
    let a = i71.value;
    let b = i72.value;
    document.querySelector('.out7').textContent = Math.pow(a, b);
}

//Task 9
document.querySelector('.b9').onclick = f9;
let i9 = document.querySelector('.i9');
let out9 = document.querySelector('.out9');
function f9() {
    let a = i9.value;
    if (a >= 1 && a <= 32) {
        out9.textContent = 1;
    }
    else if (a >= 33 && a <= 43) {
        out9.textContent = 2;
    }
    else if (a >= 44 && a <= 64) {
        out9.textContent = 3;
    }
    else {
        out9.textContent = 0;
    }
}

//Task 10

let out10 = document.querySelector('.out10');
let select = document.querySelector('.select');
document.querySelector('.b10').onclick = () => out10.textContent = select.value;


//Task 11