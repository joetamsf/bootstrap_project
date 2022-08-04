// const cbcarousel = document.getElementById('chibi-carousel-photo');
// const cbthumb1 = document.getElementById('cb_thumb1');
// const cbthumb2 = document.getElementById('cb_thumb2');

// cbthumb1.addEventListener('click', function() {
//     cbcarousel.src = "imgs/chibi_sample_resized2.jpeg";
// });

// cbthumb2.addEventListener('click', function() {
//     cbcarousel.src = "imgs/chibi_sample_v2.jpeg";
// });
// $(function() {
//     $("#cb_thumb2").click(function() {
//         $(".carousel").carousel(1);
//     });
// });

const extorigmsg = "Hover over below icons to get information";
const extwebmsg = document.getElementById('extwebmsg');
const javadriveimg = document.getElementById('javadriveimg');
const ebscpaimg = document.getElementById('ebscpaimg');
const nuimg = document.getElementById('nuimg');

javadriveimg.addEventListener('mouseover', (event) => {
    extwebmsg.textContent = "Javadrive: A Japanese programming tutorial website for beginners";
});

javadriveimg.addEventListener('mouseleave', (event) => {
    extwebmsg.textContent = extorigmsg;
});

ebscpaimg.addEventListener('mouseover', (event) => {
    extwebmsg.textContent = "East Bay SCPA: The East Bay's oldest animal welfare organization";
});

ebscpaimg.addEventListener('mouseleave', (event) => {
    extwebmsg.textContent = extorigmsg;
});

nuimg.addEventListener('mouseover', (event) => {
    extwebmsg.textContent = "NuCamp: Select your bootcamp courses";
});

nuimg.addEventListener('mouseleave', (event) => {
    extwebmsg.textContent = extorigmsg;
});