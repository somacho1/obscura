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

document.querySelector(".like_btn").addEventListener("click", function(){
    this.classList.toggle("active");
});
