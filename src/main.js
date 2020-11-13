'use strict';


//json 파일을 fetch을 이용하여 가져오기 
function loadItems(){
return fetch('data/data.json') //data.json경로설정
     .then(response => response.json()) //성공하면 json가져옴
     .then(json => json.items);  //json안에 담긴 items 리턴
    }

// json에 담긴 내용들 화면에 보여주도록하기
function displayitems(items) {
    const itemlist = document.querySelector('.items');
    itemlist.innerHTML = items.map(item => createHTMLString(item)).join("");
}
//html list 태그 생성 ,data에 담긴 내용을 가져온다.
function createHTMLString(item){
    return `
    <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item__desc">${item.size}, ${item.gender}</span>
    </li>
    `
    ;
}

//필터링함수
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if ( key == null || value == null) {
        return;
    }
    
    const filterd = items.filter(item => item[key] === value);
    displayitems(filterd);
}

function setEventListners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayitems(items));
    buttons.addEventListener('click', (event) => onButtonClick(event,items));
}

//json파일가져온거 view로 려주기 Promise then catch 이용
loadItems()
.then(items=> {
    setEventListners(items);
    displayitems(items); //화면에 보여주기 위한 함수
})
.catch(console.log('g'));