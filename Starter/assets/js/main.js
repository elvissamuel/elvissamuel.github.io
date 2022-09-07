// Grab elements
function selectElement(selector){
    const element = document.querySelector(selector);
    if(element) return element; 
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
}

const menu_icon = selectElement(".ri-menu-3-line");
const menuList = selectElement('.menu-list');
const close_icon = selectElement('.ri-close-line');
const toggleIcon = selectElement('.toggle_btn');

toggleIcon.addEventListener('click', function(e){
    this.classList.toggle('activated');
    menuList.classList.toggle('show');
})


const search = selectElement('.icons .ri-search-line');
const searchPage = selectElement('.search_page');
search.addEventListener('click', function(e){
    searchPage.classList.add('show');
})
const edit = selectElement('.icons .ri-edit-box-line');
const editPage = selectElement('.edit_page');
edit.addEventListener('click', function(e){
    editPage.classList.add('show');
})

const closed = selectElement('.container .close');
const closed2 = selectElement('.edit_page .close');

closed.addEventListener('click', function(e){
    searchPage.classList.remove('show');
})
closed2.addEventListener('click', function(e){
    editPage.classList.remove('show')
})

const edit_icon = selectElement(".ri-edit-box-line");


var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView:2
        },
        1200: {
            slidesPerView:3
        }
    }
   

});

const featuredInput = selectElement('input[name=featured]');
const featuredTitle = selectElement('.article-title h2');
const btn = selectElement('.add-btn');

btn.addEventListener('click', function(){
    if(featuredInput.value !== ''){
        featuredTitle.innerHTML = featuredInput.value;
    }
});


var btt = document.getElementById('btt'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight
    isfirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

 docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
 if(docHeight != 'undefined') {
    offset = docHeight/4;
 }   

 window.addEventListener('scroll', function(event){
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = (scrollPos > offset) ? 'visible' : '';
 })

 btt.addEventListener('click', function(e){
    console.log(e);
        body.scrollTop = 0;
 })
 





//Nav styles on scroll

// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper