const shopBtn = document.querySelector('.appear');
const slideBox = document.querySelector('.top_slideBox');

shopBtn.addEventListener('click', () => {

    if(window.innerWidth <= 768){
        slideBox.classList.toggle('active');
    }

});

const TrendingList = document.querySelector('#BrdList');
const listHeight = 71;
let listOverroll = false;

setInterval(()=>{
    if (listOverroll) return;
    listOverroll = true;
    
    TrendingList.style.transition = 'transform 1s ease'
    TrendingList.style.transform = 'translateY(-${listHeight}px)';

    setTimeout(()=>{
        TrendingList.appendChild(TrendingList.firstElementChild);
        TrendingList.style.transition = 'none';
        TrendingList.style.transform = 'translateY(0)';
        listOverroll = false;  
    }, 1000);

}, 3500)

// document.addEventListener('DOMContentLoaded', () => {

//     let mdPickSwiper = null;

//     const mdPickSwiperEl = document.querySelector('.mdPick_swiper');
//     const mdPickPagination = document.querySelector('.mdPick_swiper .swiper-pagination');

//     // Swiper 초기화
//     if (mdPickSwiperEl) {
//         mdPickSwiper = new Swiper('.mdPick_swiper', {
//             loop: true,
//             pagination: {
//                 el: '.mdPick_swiper .swiper-pagination',
//             },
//         });
//     }

//     // pagination show/hide 함수
//     function showPagination() {
//         if (window.innerWidth <= 768) {
//             if (mdPickPagination) mdPickPagination.style.display = 'block';
//         } else {
//             if (mdPickPagination) mdPickPagination.style.display = 'none';
//         }
//     }

//     // 처음 실행
//     showPagination();

//     // 창 크기 변경 시 적용
//     window.addEventListener('resize', showPagination);

// });

 




// //head_left
// let shows = document.querySelector("#head_list");
// console.log(shows);
// let lists = shows.children;
// console.log(lists);
// let appears = Array.from(lists)
// console.log(appears)
// let app = document.querySelector(".appear");

// app.addEventListener('click',function(){    
//     appears.forEach((ap)=>{
//         let cont = ap.classList.contains('contain');
//         if(!cont){
//             ap.classList.toggle('none')
//             app.classList.remove('none')
//         }
//     })
// })

// //head_right
// let looks = document.querySelector("#right_list");
// console.log(looks);
// let list = looks.children;
// console.log(list);
// let appear = Array.from(list);
// console.log(appear);
// let btn = document.querySelector("#click");
// console.log(btn);
// btn.addEventListener('click',function(){
//     console.log(30)
//     appear.forEach((bt)=>{
//         let num = bt.classList.contains('contain');
//         console.log(num);
//         if(!num){
//             bt.classList.toggle('none');
//             btn.classList.remove('none');
//         }
//     })
// })
// let search = document.querySelector(".search");
// console.log(search);
// let search_box = document.querySelector(".search_box");
// console.log(search_box);
// search.addEventListener('click',function(){
//   search_box.classList.toggle('block')      
//     });




// // lists.forEach((ap)=>{
// //     ap.addEventListener("mouseenter",function(){
// //         appears.classList.add('appear')
// //     })
// // })
// // appears.addEventListener('mouseleave',function(){
// //     appears.classList.remove('appear')
// // })

// // let app = document.querySelector(".appear");
// // appears.forEach((ap)=>{
// // app.addEventListener('click',function(){
// //     if(ap.classList.('none')){
// //         ap.

// //     }else{

// //     }
    
// //         console.log(ap)
// //     ap.classList.toggle('none')
       
// // })
// //  })



// //     for(show of shows){
// //         let cont = show.classList.contains('none')
// //         console.log(cont)
// //         if(cont){
// //             show.classList.remove('none')
// //         }
// //     }
// //  })