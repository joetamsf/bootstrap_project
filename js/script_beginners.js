const beginnerorigmsg = "Click below icons to know about basic items for cats!";
const p_beginnermsg = document.getElementById('p_beginnermsg');
const catlittercol = document.getElementById('catlittercol');
const catfoodcol = document.getElementById('catfoodcol');
const cattoycol = document.getElementById('cattoycol');
const beginnermsg = document.getElementById('beginnermsg');
const firstcollapse = document.getElementById('firstcollapse');
const yourlove = document.getElementById('yourlove');
const spayyourcat = document.getElementById('spayyourcat');
const catbrush =  document.getElementById('catbrush');

function hideall() {
    $('#catfood').collapse('hide');
    $('#cattoys').collapse('hide');
    $('#love').collapse('hide');
    $('#catlitter').collapse('hide'); 
    $('#spay').collapse('hide');
}

//Without using accordion, the collapse will be kept showing until 
//visitor manually click the button to hide it,
//so code here is to hide it automatically.
catlittercol.addEventListener('click', hideall);

catlittercol.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Cat litter and Deodorizer";
});

catlittercol.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

catfoodcol.addEventListener('click', hideall);

catfoodcol.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Cat food";
});

catfoodcol.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

cattoycol.addEventListener('click', hideall);

cattoycol.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Cat toys";
});

cattoycol.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

yourlove.addEventListener('click', hideall);

yourlove.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Your Love";
});

yourlove.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

spayyourcat.addEventListener('click', hideall);

spayyourcat.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Spay / Neuter your cat";
});

spayyourcat.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

catbrush.addEventListener('click', hideall);

catbrush.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Brush for cat";
});

catbrush.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

firstcollapse.addEventListener('click', hideall);
