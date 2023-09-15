/*==============================Toggle icon Navbar==================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');

}
*/
var typed = new Typed (".multi",{
    strings: ["Frontend Developer" , "UI/UX Designer" , "Backend Developer " ,
     "Android Developer" ] ,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

}) 

let docTitle = document.title;
window.addEventListener("blur", () => {document.title = "Come BAck Later";});

window.addEventListener("focus", () => { document.title = docTitle; });



// scroll section logic

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll( 'header nav a');

window.onscroll = () => {
sections. forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

if(top >= offset && top < offset + height) {
navLinks.forEach(links => {
links.classList.remove('active');
document .querySelector( 'header nav a[href*=' + id + "]").classList.add( 'active');

});

};
});
/*==============================Toggle navbar when click link remove==================================*/

 menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active');


};

/*==============================Sticky Nav Bar==================================*/

let header = document.querySelector('header ');

header.classList.toggle('sticky' , window.scrollY > 100);



function SendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shubhanginiirajan@gmail.com",
        Password : "8F07C9CC078C308AFBB1E3892A5349771C19",
        To : 'anurag.console@gmail.com',
        From : "shubhanginiirajan@gmail.com",
        Subject : document.getElementById('subjectemail').value,
        Body : document.getElementById('body').value
    }).then(
      message => alert(message)
    );
}

window.alert('Sit in Under Development use pc for better viewability');