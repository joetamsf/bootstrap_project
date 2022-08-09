const beginnerorigmsg = "Click below icons to know about basic items for cats!";
const p_beginnermsg = document.getElementById('p_beginnermsg');
const catlittercol = document.getElementById('catlittercol');
const catfoodcol = document.getElementById('catfoodcol');
const cattoycol = document.getElementById('cattoycol');
const beginnermsg = document.getElementById('beginnermsg');
const firstcollapse = document.getElementById('firstcollapse');
const yourlove = document.getElementById('yourlove');

//Without using accordion, the collapse will be kept showing until 
//visitor manually click the button to hide it,
//so code here is to hide it automatically.
catlittercol.addEventListener('click', (event) => {
    $('#catfood').collapse('hide');
    $('#cattoys').collapse('hide');
});

catlittercol.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Cat litter and Deodorizer";
});

catlittercol.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

catfoodcol.addEventListener('click', (event) => {
    $('#cattoys').collapse('hide');
    $('#catlitter').collapse('hide');
});

catfoodcol.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Cat food";
});

catfoodcol.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

cattoycol.addEventListener('click', (event) => {
    $('#catlitter').collapse('hide');
    $('#catfood').collapse('hide');
});

cattoycol.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Cat toys";
});

cattoycol.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

yourlove.addEventListener('mouseover', (event) => {
    p_beginnermsg.textContent = "Your Love";
});

yourlove.addEventListener('mouseleave', (event) => {
    p_beginnermsg.textContent = beginnerorigmsg;
});

firstcollapse.addEventListener('click', (event) => {
    $('#catlitter').collapse('hide');
    $('#catfood').collapse('hide');
    $('#cattoys').collapse('hide');
});
