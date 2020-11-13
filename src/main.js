'use strict';


//json 파일을 fetch을 이용하여 가져오기 
function loadItems(){
return fetch('data/data.json') //data.json경로설정
     .then(response => response.json()) //성공하면 json가져옴
     .then(json => json.items);  //json안에 담긴 items 리턴
    }

function displayitems() {
    const itemlist = document.querySelector('.items');
    
    console.log(itemlist);
}

//li태그를 긁어와서 ul태그 밑으로 자동적으로 data가 추가되도록하는것

function createHTMLString(item){
    
    `<li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item__desc">${item.size}, ${item.gender}</span>
    </li>
    `;
}

//해당물품을 클릭했을때 해당물품에 대한 데이터들이 보여지도록 (필터링기능)

function setEventListners(item){
const logo = document.querySelector('.logo');
const buttons = document.querySelector('.buttons');
logo.addEventListener('click', () => { })
buttons.addEventListener('click' , (e) =>{} 

)
}

//json파일가져온거 view로 뿌려주기 Promise then catch 이용
loadItems()
.then(items=> {
    console.log(items);
    displayitems(); //화면에 보여주기 위한 함수
    
})
.catch(console.log('g'));