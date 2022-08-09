const extorigmsg = "Hover over below icons to get information";
const extwebmsg = document.getElementById('extwebmsg');
const javadriveimg = document.getElementById('javadriveimg');
const ebscpaimg = document.getElementById('ebscpaimg');
const nuimg = document.getElementById('nuimg');
const nuimg2 = document.getElementById('nuimg2');
const javadriveimg2 = document.getElementById('javadriveimg2');

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



