//Static Hero Classes
var p1class = 0;
var p2class = 1;
var p3class = 2;
//Random Monster Type

var mclass = Math.floor(Math.random() * classes.villian.length);
var p1img = document.createElement('img'); 
var p2img = document.createElement('img'); 
var p3img = document.createElement('img');
var mimg = document.createElement('img');
var card1 = document.createElement('img');
var card2 = document.createElement('img');
var card3 = document.createElement('img');
var p1NO1img = document.createElement('img');
var p1NO2img = document.createElement('img');
var p2NO1img = document.createElement('img');
var p2NO2img = document.createElement('img'); 
var p3NO1img = document.createElement('img');
var p3NO2img = document.createElement('img');   

var player1Attack = 0;
var player2Attack = 0;
var player3Attack = 0;
var mattack = 0;

var p1CardSelect1 = 0;
var p1CardSelect2 = 0;
var p2CardSelect1 = 0;
var p2CardSelect2 = 0;
var p3CardSelect1 = 0;
var p3CardSelect2 = 0;

var p1MonsterHit = 0;
var p2MonsterHit = 0;
var p3MonsterHit = 0;

var poison = 0;

function initCards() {
    p1CardSelect1 = Math.floor(Math.random() * classes.hero[0].card.length);
    p1CardSelect2 = Math.floor(Math.random() * classes.hero[0].card.length);
    p2CardSelect1 = Math.floor(Math.random() * classes.hero[1].card.length);
    p2CardSelect2 = Math.floor(Math.random() * classes.hero[1].card.length);
    p3CardSelect1 = Math.floor(Math.random() * classes.hero[2].card.length);
    p3CardSelect2 = Math.floor(Math.random() * classes.hero[2].card.length);
};