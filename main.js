const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//render 50 mini-box
const wrap = $('.wrap')
const miniBoxString = '<div class="mini-box"></div>'
var miniBoxStringArray = miniBoxString

for ( var i = 0; i < 169; i++) {
    miniBoxStringArray += miniBoxString
}


wrap.innerHTML = `${miniBoxStringArray}`

const miniBoxArray = $$('.mini-box')
miniBoxArray.forEach(miniBox => {

    miniBox.addEventListener("mouseover", function changeColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    miniBox.style.transition = '0s';
    miniBox.style.backgroundColor = '#' + randomColor;
    miniBox.style.boxShadow = `#${randomColor} 0 0 10px, #${randomColor} 0 0 100px`;
    });
 
    miniBox.addEventListener("mouseout", function removeColor() {
        miniBox.style.transition = '1.5s';
        miniBox.style.backgroundColor = '#1D1D1D';
        miniBox.style.boxShadow = '';
    });
});

