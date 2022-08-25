let mouseX = 0;
let mouseY = 0; 

function getMousePosition(e){
    let eObj = window.event? window.event : e;
    mouseX = eObj.clientX;
    mouseY = eObj.clientY + document.documentElement.scrollTop; 
}

function moveImg(){

    let m_x = parseInt(document.getElementById('cursor').style.left.replace('px', ''));
    let m_y = parseInt(document.getElementById('cursor').style.top.replace('px', ''));

    document.getElementById('cursor').style.left = Math.round(m_x + ((mouseX - m_x) / 5)) + 'px';
    document.getElementById('cursor').style.top = Math.round(m_y + ((mouseY - m_y) / 5)) + 'px';
}

document.onmousemove = getMousePosition;
setInterval("moveImg()", 50);