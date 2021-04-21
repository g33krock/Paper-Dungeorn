function p1Target() {
    if (classes.hero[0].status== 'active') {
        classes.hero[0].target = "warrior"
    } else if (classes.hero[1].status== 'active') {
        classes.hero[1].target = "warrior"
    } else if (classes.hero[2].status== 'active') {
        classes.hero[2].target = "warrior"
    }
};

function p2Target() {
    if (classes.hero[0].status== 'active') {
        classes.hero[0].target = "priest"
    } else if (classes.hero[1].status== 'active') {
        classes.hero[1].target = "priest"
    } else if (classes.hero[2].status== 'active') {
        classes.hero[2].target = "priest"
    }
};

function p3Target() {
    if (classes.hero[0].status== 'active') {
        classes.hero[0].target = "rogue"
    } else if (classes.hero[1].status== 'active') {
        classes.hero[1].target = "rogue"
    } else if (classes.hero[2].status== 'active') {
        classes.hero[2].target = "rogue"
    }
};

function mTarget() {
    if (classes.hero[0].status== 'active') {
        classes.hero[0].target = "monster"
    } else if (classes.hero[1].status== 'active') {
        classes.hero[1].target = "monster"
    } else if (classes.hero[2].status== 'active') {
        classes.hero[2].target = "monster"
    }
};