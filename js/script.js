// ============================ CLOCK ====================================

// let hours = document.querySelector('.hours')
// let minutes = document.querySelector('.minutes')

// let h = document.querySelector('.h')
// let m = document.querySelector('.m')
// let s = document.querySelector('.s')

// // console.log(new Date().getHours()) // Kompni Vaqtini ob beradi

// let stop;
// let x = 1
// function rec() {
//     console.log(x);

//    // if(x < 10) {
//    //     x++
//    //     rec()
//   // }

//    stop =  setTimeout(() => {
//         x++
//         rec()
//         if(x == 5 ) {
//             clearInterval(stop)
//         }
//     }, 1000);
// }
// rec()
// =======================================================================

// function clock() {

// let time = new Date();
// let hour = new Date().getHours();
// let minut = new Date().getMinutes();
// let sec = new Date().getSeconds();

// hours.innerText = hour
// minutes.innerText = minut

// if(minut < 10) {
//     minutes.innerText = "0" + minut
// } else {
//     minutes.innerText = minut
// }
// if(hour < 10) {
//     hours.innerText = "0" + hour
// } else {
//     hours.innerText = hour
// }

// s.style.transform = `rotate(${sec * 6}deg)`
// m.style.transform = `rotate(${minut * 6}deg)`
// h.style.transform = `rotate(${hour * 8}deg)`


//  setTimeout(() => {
//     clock()
//  }, 1000);


// }
// clock()
// ========================================================================

// let tabsItemActive = document.querySelector('.tabsItem.active')

// console.log(tabsItemActive);

// tabsItemActive.addEventListener('click',function() {
//     if(this.classList.contains('active')) {    // classList.contains() tekshiradi bor yoqligini
//         console.log('bor');

//         // this.classList.add('aaa')
//         // this.classList.remove('active')
//         // this.classList.toggle('adasd')
//     } else {
//         console.log('yoq')
//     }
// })
// ======================================Home Work=======================================

let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')


for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')
        }

        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}
// ========================================================================================

// =================================== Home Work Sekundomer ===============================
let btn = document.querySelector('.stopwatch__btn')

let hoursMetr = document.querySelector('.stopwatch__hours')
let minutsMetr = document.querySelector('.stopwatch__minutes')
let secundsMetr = document.querySelector('.stopwatch__seconds')

let span = document.querySelector('.tabsLink__span')
let stop;

btn.addEventListener('click', function() {

    if(this.innerHTML === 'start') {
        this.innerHTML = 'stop'
        span.classList.add('active')
        startTimer()
    } else if(this.innerHTML === 'stop') {
        this.innerHTML = 'Clear'
        span.classList.remove('active')
        clearTimeout(stop)
        span.classList.add('active_clear')
    } else if(this.innerHTML === 'Clear') {
        this.innerHTML = 'start'
        span.classList.remove('active_clear')
        hoursMetr.innerHTML = 0
        minutsMetr.innerHTML = 0
        secundsMetr.innerHTML = 0
        
    }
})


function startTimer() {
    // startTimer()

    stop = setTimeout(() => {
        startTimer()
        secundsMetr.innerHTML++ 
        if(secundsMetr.innerHTML > 59) {
            secundsMetr.innerHTML = 0
            minutsMetr.innerHTML++
            if(minutsMetr.innerHTML > 59) {
                minutsMetr.innerHTML = 0
                hoursMetr.innerHTML++
            }
        }
    }, 1);

}

// =================================== Home Work Sekundomer  END===============================


// ============================ CLOCK ============================
