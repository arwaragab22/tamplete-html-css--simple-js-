let stats = document.querySelector(".stats");
let statnum = document.querySelectorAll(".stats .number");
let statusfun = false;
let statusfull = false;

window.onscroll = function () {
    console.log("scroll")
    if (scrollY >= stats.offsetTop - 200) {
        if (!statusfun) {

            statnum.forEach(scoling);
        }
        statusfun = true;
    }
    if (window.scrollY >= ourskills.offsetTop) {
        skill.forEach(full);
    }


};
function scoling(ele, i, array) {
    let goal = +ele.dataset.value;
    let interval = setInterval(function () {
        ele.innerHTML++;

        if (+ele.innerHTML == +ele.dataset.value) {

            clearInterval(interval);
        }
    }, 1000 / goal);


}
let ourskills = document.querySelector(".our-skills");
let skill = document.querySelectorAll(".skill  div span");



function full(ele) {
    ele.style.width = ele.dataset.width;

}
let divdate = document.querySelector(".numbers");
let numdate = document.querySelector(".numbers .num h3");
let nextdate = new Date("decemper 30,2022 6:00:00").getTime();
let nowdate = new Date().getTime();
let datadiv = nextdate - nowdate;
let days = Math.floor((datadiv / (1000 * 60 * 60 * 24)));
let hours = Math.floor((datadiv % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minute = Math.floor((datadiv % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((datadiv % (1000 * 60)) / (1000));



let calcinterval = setInterval(function () {
    let nextdate = new Date("decemper 30,2022 6:00:00").getTime();
    let nowdate = new Date().getTime();
    let datadiv = nextdate - nowdate;
    let days = Math.floor((datadiv / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((datadiv % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((datadiv % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((datadiv % (1000 * 60)) / (1000));


    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minute;
    document.querySelector(".seconds").innerHTML = seconds;

}, 1000);


