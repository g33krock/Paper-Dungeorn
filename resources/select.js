function player1Attack1() {
    if (classes.hero[0].status == "active") 
    {
        player1Attack = p1CardSelect1;
        document.getElementById("p1NO1z").classList.add('p1selected');
        document.getElementById("p1NO2z").classList.remove('p1selected');
        return player1Attack;
    } else {
        alert("your player is not active");
    }
};
function player1Attack2() {
    if (classes.hero[0].status == "active") 
    {
        player1Attack = p1CardSelect2;
        document.getElementById("p1NO2z").classList.add('p1selected');
        document.getElementById("p1NO1z").classList.remove('p1selected');
        return player1Attack;
    } else {
        alert("your player is not active");
    }
};
function player2Attack1() {
    if (classes.hero[1].status == "active") 
    {
        player2Attack = p2CardSelect1;
        document.getElementById("p2NO1z").classList.add('p2selected');
        document.getElementById("p2NO2z").classList.remove('p2selected');
        return player2Attack;
    } else {
        alert("your player is not active");
    }
};
function player2Attack2() {
    if (classes.hero[1].status == "active")
    {
        player2Attack = p2CardSelect2;
        document.getElementById("p2NO2z").classList.add('p2selected');
        document.getElementById("p2NO1z").classList.remove('p2selected');
        return player2Attack;
    } else {
        alert("your player is not active");
    }
};
function player3Attack1() {
    if (classes.hero[2].status == "active")
    {
        player3Attack = p3CardSelect1;
        document.getElementById("p3NO1z").classList.add('p3selected');
        document.getElementById("p3NO2z").classList.remove('p3selected');
        return player3Attack;
    } else {
        alert("your player is not active");
    }
};
function player3Attack2() {
    if (classes.hero[2].status == "active")
    {
        player3Attack = p3CardSelect2;
        document.getElementById("p3NO2z").classList.add('p3selected');
        document.getElementById("p3NO1z").classList.remove('p3selected');
        return player3Attack;
    } else {
        alert("your player is not active");
    }
};