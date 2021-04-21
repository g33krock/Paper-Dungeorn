var p1MonsterShield = 0;
    var p1MonsterHit = 0;
    var p1MonsterHeal = 0;
    var p2MonsterShield = 0;
    var p2MonsterHit = 0;
    var p2MonsterHeal = 0;
    var p3MonsterShield = 0;
    var p3MonsterHit = 0;
    var p3MonsterHeal = 0;
    var p1ShieldP1 = 0;
    var p1ShieldP2 = 0;
    var p1ShieldP3 = 0;
    var p2ShieldP1 = 0;
    var p2ShieldP2 = 0;
    var p2ShieldP3 = 0;
    var p3ShieldP1 = 0;
    var p3ShieldP2 = 0;
    var p3ShieldP3 = 0;
    var p1HitP1 = 0;
    var p1HitP2 = 0;
    var p1HitP3 = 0;
    var p2HitP1 = 0;
    var p2HitP2 = 0;
    var p2HitP3 = 0;
    var p3HitP1 = 0;
    var p3HitP2 = 0;
    var p3HitP3 = 0;
    var p1HealP1 = 0;
    var p1HealP2 = 0;
    var p1HealP3 = 0;
    var p2HealP1 = 0;
    var p2HealP2 = 0;
    var p2HealP3 = 0;
    var p3HealP1 = 0;
    var p3HealP2 = 0;
    var p3HealP3 = 0;
    var mHitP1 = 0;
    var mHitP2 = 0;
    var mHitP3 = 0;
    var mHealP1 = 0;
    var mHealP2 = 0;
    var mHealP3 = 0;
    var mShieldP1 = 0;
    var mShieldP2 = 0;
    var mShieldP3 = 0;

function fight() {
    var p1MonsterShield = 0;
    var p1MonsterHit = 0;
    var p1MonsterHeal = 0;
    var p2MonsterShield = 0;
    var p2MonsterHit = 0;
    var p2MonsterHeal = 0;
    var p3MonsterShield = 0;
    var p3MonsterHit = 0;
    var p3MonsterHeal = 0;
    var p1ShieldP1 = 0;
    var p1ShieldP2 = 0;
    var p1ShieldP3 = 0;
    var p2ShieldP1 = 0;
    var p2ShieldP2 = 0;
    var p2ShieldP3 = 0;
    var p3ShieldP1 = 0;
    var p3ShieldP2 = 0;
    var p3ShieldP3 = 0;
    var p1HitP1 = 0;
    var p1HitP2 = 0;
    var p1HitP3 = 0;
    var p2HitP1 = 0;
    var p2HitP2 = 0;
    var p2HitP3 = 0;
    var p3HitP1 = 0;
    var p3HitP2 = 0;
    var p3HitP3 = 0;
    var p1HealP1 = 0;
    var p1HealP2 = 0;
    var p1HealP3 = 0;
    var p2HealP1 = 0;
    var p2HealP2 = 0;
    var p2HealP3 = 0;
    var p3HealP1 = 0;
    var p3HealP2 = 0;
    var p3HealP3 = 0;
    var mHitP1 = 0;
    var mHitP2 = 0;
    var mHitP3 = 0;
    var mHealP1 = 0;
    var mHealP2 = 0;
    var mHealP3 = 0;
    var mShieldP1 = 0;
    var mShieldP2 = 0;
    var mShieldP3 = 0;

    classes.hero[0].status = "ready";
    classes.hero[1].status = "ready"
    classes.hero[2].status = "ready"
    document.getElementById("p1punch").classList.remove('done');
    document.getElementById("p1punch").classList.remove('active');
    document.getElementById("p1punch").classList.add('ready');
    document.getElementById("p2punch").classList.remove('done');
    document.getElementById("p2punch").classList.remove('active');
    document.getElementById("p2punch").classList.add('ready');
    document.getElementById("p3punch").classList.remove('done');
    document.getElementById("p3punch").classList.remove('active');
    document.getElementById("p3punch").classList.add('ready');

    
    var mattack = Math.floor(Math.random() * classes.villian[mclass].card.length);

    if (roundCounter[0] > 0) {

    //Random Hero Action  
        p1attack = Math.floor(Math.random() * classes.hero[p1class].card.length);
        p2attack = Math.floor(Math.random() * classes.hero[p2class].card.length);
        p3attack = Math.floor(Math.random() * classes.hero[p3class].card.length);
    } else {
        attack[0].p1attack = player1Attack;
        attack[0].p2attack = player2Attack;
        attack[0].p3attack = player3Attack;
     }
    
    //aggro cost
    var p1aggro = classes.hero[p1class].card[attack[0].p1attack].aggro;
    var p2aggro = classes.hero[p2class].card[attack[0].p2attack].aggro;
    var p3aggro = classes.hero[p3class].card[attack[0].p3attack].aggro;
    classes.hero[p1class].aggro = classes.hero[p1class].aggro + p1aggro;
    classes.hero[p2class].aggro = classes.hero[p2class].aggro + p2aggro;
    classes.hero[p3class].aggro = classes.hero[p3class].aggro + p3aggro;
    
    switch(classes.hero[p1class].card[attack[0].p1attack].type) {
        case "damage":
            switch(classes.hero[p1class].target) {
               case "monster": 
               p1MonsterHit = classes.hero[p1class].card[attack[0].p1attack].effect;break;
               case "warrior": 
               p1HitP1 = classes.hero[p1class].card[attack[0].p1attack].effect;break;
               case "priest": 
               p1HitP2 = classes.hero[p1class].card[attack[0].p1attack].effect;break;
               case "rogue": 
               p1HitP3 = classes.hero[p1class].card[attack[0].p1attack].effect;break;
              
            }
            break;
        case "healing":
            switch(classes[p1class].target) {
                case "monster": 
                p1MonsterHeal = classes.hero[p1class].card[attack[0].p1attack].effect;break;
                case "warrior": 
                p1HealP1 = classes.hero[p1class].card[attack[0].p1attack].effect;break;
                case "priest": 
                p1HealP2 = classes.hero[p1class].card[attack[0].p1attack].effect;break;
                case "rogue": 
                p1HealP3 = classes.hero[p1class].card[attack[0].p1attack].effect;break;
                break; 
             }
            break;
        case "poison":
            switch(classes.hero[p1class].target) {
                case "monster": 
                classes.villian[mclass].poison++;break;
                case "warrior": 
                classes.hero[p1class].poison++;break;
                case "priest": 
                classes.hero[p2class].poison++;break;
                case "rogue": 
                classes.hero[p3class].poison++;break;
                
             }
            break;
        case "taunt":
            
            break;
        case "deaggro":
            classes.hero[p1class].aggro = classes[p1class].aggro * classes[p1class].card[attack[0].p1attack].effect;
            break;
        case "shield":
            switch(classes[p1class].target) {
                case "monster": 
                p1MonsterShield = classes[p1class].card[attack[0].p1attack].effect;break;
                case "warrior": 
                p1ShieldP1 = classes[p1class].card[attack[0].p1attack].effect;break;
                case "priest": 
                p1ShieldP2 = classes[p1class].card[attack[0].p1attack].effect;break;
                case "rogue": 
                p1ShieldP3 = classes[p1class].card[attack[0].p1attack].effect;break; 
            }

    };
    switch(classes.hero[p2class].card[attack[0].p2attack].type) {
        case "damage":
            switch(classes[p2class].target) {
               case "monster": 
               p2MonsterHit = classes[p2class].card[attack[0].p2attack].effect;break;
               case "warrior": 
               p2HitP1 = classes[p2class].card[attack[0].p2attack].effect;break;
               case "priest": 
               p2HitP2 = classes[p2class].card[attack[0].p2attack].effect;break;
               case "rogue": 
               p2HitP3 = classes[p2class].card[attack[0].p2attack].effect;break; 
            }
            break;
        case "healing":
            switch(classes[p2class].target) {
                case "monster": 
                p2MonsterHeal = classes[p2class].card[attack[0].p2attack].effect;break;
                case "warrior": 
                p2HealP1 = classes[p2class].card[attack[0].p2attack].effect;break;
                case "priest": 
                p2HealP2 = classes[p2class].card[attack[0].p2attack].effect;break;
                case "rogue": 
                p2HealP3 = classes[p2class].card[attack[0].p2attack].effect;break;
                break; 
             }
            break;
        case "poison":
            switch(classes[p2class].target) {
                case "monster": 
                monsters[mclass].poison++;break;
                case "warrior": 
                classes[p1class].poison++;break;
                case "priest": 
                classes[p2class].poison++;break;
                case "rogue": 
                classes[p3class].poison++;
                break; 
             }
            break;
        case "taunt":
            
            break;
        case "deaggro":
            classes[p2class].aggro = classes[p2class].aggro * classes[p2class].card[attack[0].p2attack].effect;
            break;
        case "shield":
        switch(classes[p2class].target) {
            case "monster": 
            p2MonsterShield = classes[p2class].card[attack[0].p2attack].effect;break;
            case "warrior": 
            p2ShieldP1 = classes[p2class].card[attack[0].p2attack].effect;break;
            case "priest": 
            p2ShieldP2 = classes[p2class].card[attack[0].p2attack].effect;break;
            case "rogue": 
            p2ShieldP3 = classes[p2class].card[attack[0].p2attack].effect;break; 
        }
            

    };
    switch(classes.hero[p3class].card[attack[0].p3attack].type) {
        case "damage":
            switch(classes[p3class].target) {
               case "monster": 
               p3MonsterHit = classes[p3class].card[attack[0].p3attack].effect;break;
               case "warrior": 
               p3HitP1 = classes[p3class].card[attack[0].p3attack].effect;break;
               case "priest": 
               p3HitP2 = classes[p3class].card[attack[0].p3attack].effect;break;
               case "rogue": 
               p3HitP3 = classes[p3class].card[attack[0].p3attack].effect;break; 
            }
            break;
        case "healing":
            switch(classes[p3class].target) {
                case "monster": 
                p3MonsterHeal = classes[p3class].card[attack[0].p3attack].effect;break;
                case "warrior": 
                p3HealP1 = classes[p3class].card[attack[0].p3attack].effect;break;
                case "priest": 
                p3HealP2 = classes[p3class].card[attack[0].p3attack].effect;break;
                case "rogue": 
                p3HealP3 = classes[p3class].card[attack[0].p3attack].effect;break;
             }
            break;
        case "poison":
            switch(classes[p3class].target) {
                case "monster": 
                monsters[mclass].poison++;break;
                case "warrior": 
                classes[p1class].poison++;break;
                case "priest": 
                classes[p2class].poison++;break;
                case "rogue": 
                classes[p3class].poison++;
                break; 
             }
            break;
        case "taunt":
            p3MonsterHit = 0;
            break;
        case "deaggro":
            classes[p3class].aggro = classes[p3class].aggro * classes[p3class].card[attack[0].p3attack].effect;
            break;
        case "shield":
            switch(classes[p3class].target) {
                case "monster": 
                p3MonsterShield = classes[p3class].card[attack[0].p3attack].effect;break;
                case "warrior": 
                p3ShieldP1 = classes[p3class].card[attack[0].p3attack].effect;break;
                case "priest": 
                p3ShieldP2 = classes[p3class].card[attack[0].p3attack].effect;break;
                case "rogue": 
                p3ShieldP3 = classes[p3class].card[attack[0].p3attack].effect;break; 
            }

    };
    switch(classes.villian[mclass].card[mattack].type) {
        case "damage":
            switch(mTarget) {
               case "monster": 
               p3MonsterHit = classes[p3class].card[attack[0].p3attack].effect;break;
               case 0: 
               mHitP1 = monsters[mclass].card[mattack].effect;break;
               case 1: 
               mHitP2 = monsters[mclass].card[mattack].effect;break;
               case 2: 
               mHitP3 = monsters[mclass].card[mattack].effect;break; 
            }
            break;
        case "healing":
            switch(mTarget) {
                case "monster": 
                p3MonsterHit = classes[p3class].card[attack[0].p3attack].effect;break;
                case 0: 
                mHealP1 = monsters[mclass].card[mattack].effect;break;
                case 1: 
                mHealP2 = monsters[mclass].card[mattack].effect;break;
                case 2: 
                mHealP3 = monsters[mclass].card[mattack].effect;break; 
             }
             break;
        case "poison":
            switch(mTarget) {
                case "monster": 
                monsters[mclass].poison++;break;
                case 0: 
                classes[p1class].poison++;break;
                case 1: 
                classes[p2class].poison++;break;
                case 2: 
                classes[p3class].poison++;
                break; 
             }
            break;
        case "taunt":
            
            break;
        case "deaggro":
            
            break;
        case "shield":
            switch(mTarget) {
                case "monster": 
                p3MonsterHit = classes[p3class].card[attack[0].p3attack].effect;break;
                case 0: 
                mShieldP1 = monsters[mclass].card[mattack].effect;break;
                case 1: 
                mShieldP2 = monsters[mclass].card[mattack].effect;break;
                case 2: 
                mShieldP3 = monsters[mclass].card[mattack].effect;break; 
             }
             break;

    };

    classes.hero[p1class].paggro = classes.hero[p1class].paggro + classes.hero[p1class].card[player1Attack].aggro;
    classes.hero[p2class].aggro = classes.hero[p2class].aggro + classes.hero[p2class].card[player2Attack].aggro;
    classes.hero[p3class].aggro = classes.hero[p3class].aggro + classes.hero[p3class].card[player3Attack].aggro;
    

    //Calculating Monster Target Based on Player Aggro
    if (classes.hero[p1class].health > 0) {
        var p1taunt = classes.hero[p1class].aggro;
    } else {p1taunt = 0};
    if (classes.hero[p2class].health > 0) {
        var p2taunt = classes.hero[p2class].aggro;
    } else {p2taunt = 0};
    if (classes.hero[p3class].health > 0) {
        var p3taunt = classes.hero[p3class].aggro;
    } else {p3taunt = 0};

    let caggro = Math.max(p1taunt, p2taunt, p3taunt);
    if (caggro == classes.hero[p1class].aggro) {
       mtarget = 0;
    } else if (caggro == classes.hero[p2class].aggro) {
        mtarget =  1;
    } else if (caggro == classes.hero[p3class].aggro) {
        mtarget =  2;
   };
 

    classes.hero[0].health = classes.hero[0].health-classes.villian[mclass].card[mattack].effect;

    //Invalidate Hero Action if Hero is Dead
    if (classes.hero[p1class].health < 1) {
        classes.hero[p1class].health = 0
    };
    if (classes.hero[p2class].health < 1) {
        classes.hero[p2class].health = 0
    };
    if (classes.hero[p3class].health < 1) {
        classes.hero[p3class].health = 0
    };

    if ((p1MonsterHit + p2MonsterHit + p3MonsterHit)>(p1MonsterShield+p2MonsterShield+p3MonsterShield)) {
        monsters[mclass].health = monsters[mclass].health-((p1MonsterHit + p2MonsterHit + p3MonsterHit)-(p1MonsterShield+p2MonsterShield+p3MonsterShield) + monsters[mclass].poison)+(p1MonsterHeal+p2MonsterHeal+p3MonsterHeal);
    } else {
        classes.villian[mclass].health = classes.villian[mclass].health+(p1MonsterHeal+p2MonsterHeal+p3MonsterHeal)-classes.villian[mclass].poison;
    };
    if ((p1HitP1 + p2HitP1 + p3HitP1+mHitP1)>(p1ShieldP1+p2ShieldP1+p3ShieldP1+mShieldP1)) {
        classes.hero[p1class].health = classes.hero[p1class].health-((p1HitP1 + p2HitP1 + p3HitP1 + mHitP1)-(p1ShieldP1+p2ShieldP1+p3ShieldP1+mShieldP1))+(p1HealP1+p2HealP1+p3HealP1+mHealP1);
    } else {
        classes.hero[p1class].health = classes.hero[p1class].health+(p1HealP1+p2HealP1+p3HealP1+mHealP1);
    };
    if ((p1HitP2 + p2HitP2 + p3HitP2+mHitP2)>(p1ShieldP2+p2ShieldP2+p3ShieldP2+mShieldP2)) {
        classes.hero[p2class].health = classes.hero[p2class].health-((p1HitP2 + p2HitP2 + p3HitP2 + mHitP2)-(p1ShieldP2+p2ShieldP2+p3ShieldP2+mShieldP2))+(p1HealP2+p2HealP2+p3HealP2+mHealP2);
    } else {
        classes.hero[p2class].health = classes.hero[p2class].health+(p1HealP2+p2HealP2+p3HealP2+mHealP2);
    };
    if ((p1HitP3 + p2HitP3 + p3HitP3+mHitP3)>(p1ShieldP3+p2ShieldP3+p3ShieldP3+mShieldP3)) {
        classes.hero[p3class].health = classes.hero[p3class].health-((p1HitP3 + p2HitP3 + p3HitP3 + mHitP3)-(p1ShieldP3+p2ShieldP3+p3ShieldP3+mShieldP3))+(p1HealP3+p2HealP3+p3HealP3+mHealP3);
    } else {
        classes.hero[p3class].health = classes.hero[p3class].health+(p1HealP3+p2HealP3+p3HealP3+mHealP3);
    };
    

    if (classes.hero[p1class].health > 0) {
        document.getElementById("p1class").innerHTML =
        `Class: ${classes.hero[p1class].class}`;
        document.getElementById("p1action").innerHTML = `Action: ${classes.hero[p1class].card[attack[0].p1attack].name}`;
        document.getElementById("p1val").innerHTML =
        `Value: ${classes.hero[p1class].card[attack[0].p1attack].damage}`;
        document.getElementById("p1health").innerHTML = 
        `Health: ${classes.hero[p1class].health}`;
        document.getElementById("p1aggro").innerHTML =
        `Aggro: ${classes.hero[p1class].aggro}`;
        
            p1img.src =  classes.hero[0].image; 
            document.getElementById('p1punch').appendChild(p1img).height = "200";
    } else {document.getElementById("p1punch").innerHTML = "dead"};

    if (classes.hero[p2class].health > 0) {
        document.getElementById("p2class").innerHTML =
        `Class: ${classes.hero[p2class].class}`;
        document.getElementById("p2action").innerHTML = `Action: ${classes.hero[p2class].card[attack[0].p2attack].name}`;
        document.getElementById("p2val").innerHTML =
        `Value: ${classes.hero[p2class].card[attack[0].p2attack].effect}`;
        document.getElementById("p2health").innerHTML = 
        `Health: ${classes.hero[p2class].health}`;
        document.getElementById("p2aggro").innerHTML =
        `Aggro: ${classes.hero[p2class].aggro}`;
        
            p2img.src =  classes.hero[1].image; 
            document.getElementById('p2punch').appendChild(p2img).height = "200";
    } else {document.getElementById("p2punch").innerHTML = "dead"};

    if (classes.hero[p3class].health > 0) {
        document.getElementById("p3class").innerHTML =
        `Class: ${classes.hero[p3class].class}`;
        document.getElementById("p3action").innerHTML = `Action: ${classes.hero[p3class].card[attack[0].p3attack].name}`;
        document.getElementById("p3val").innerHTML =
        `Value: ${classes.hero[p3class].card[attack[0].p3attack].effect}`;
        document.getElementById("p3health").innerHTML = 
        `Health: ${classes.hero[p3class].health}`;
        document.getElementById("p3aggro").innerHTML =
        `Aggro: ${classes.hero[p3class].aggro}`;
         
            p3img.src =  classes.hero[2].image; 
            document.getElementById('p3punch').appendChild(p3img).height = "200";
    } else {document.getElementById("p3punch").innerHTML = "dead"};
    
    if (classes.villian[mclass].health > 0) {
    document.getElementById("mclass").innerHTML = `Class: ${classes.villian[mclass].class}`;
    document.getElementById("maction").innerHTML = `Action: ${classes.villian[mclass].card[mattack].name}`;
    document.getElementById("mtarget").innerHTML = `Target: ${classes.hero[0].class}`;
    document.getElementById("mdamage").innerHTML = `Value: ${classes.villian[mclass].card[mattack].effect} ${classes.villian[mclass].card[mattack].type}`; 
    document.getElementById("mhealth").innerHTML = `Health: ${classes.villian[mclass].health}`;
     
            mimg.src =  classes.villian[mclass].image; 
            document.getElementById('mpunch').appendChild(mimg).width = "200"; 
    } else {document.getElementById("mpunch").innerHTML = "dead"};

    p1CardSelect1 = Math.floor(Math.random() * classes.hero[0].card.length);
    document.getElementById("p1NO1").innerHTML = `${classes.hero[0].card[p1CardSelect1].name}`;
    p1NO1img.src = classes.hero[0].card[p1CardSelect1].image;
    document.getElementById("p1NO1z").appendChild(p1NO1img).width = "75";
    p1CardSelect2 = Math.floor(Math.random() * classes.hero[0].card.length);
    document.getElementById("p1NO2").innerHTML = `${classes.hero[0].card[p1CardSelect2].name}`;
    p1NO2img.src = classes.hero[0].card[p1CardSelect2].image;
    document.getElementById("p1NO2z").appendChild(p1NO2img).width = "75";
    p2CardSelect1 = Math.floor(Math.random() * classes.hero[1].card.length);
    document.getElementById("p2NO1").innerHTML = `${classes.hero[1].card[p2CardSelect1].name}`;
    p2NO1img.src = classes.hero[1].card[p2CardSelect1].image;
    document.getElementById("p2NO1z").appendChild(p2NO1img).width = "75";
    p2CardSelect2 = Math.floor(Math.random() * classes.hero[1].card.length);
    document.getElementById("p2NO2").innerHTML = `${classes.hero[1].card[p2CardSelect2].name}`;
    p2NO2img.src = classes.hero[1].card[p2CardSelect2].image;
    document.getElementById("p2NO2z").appendChild(p2NO2img).width = "75";
    p3CardSelect1 = Math.floor(Math.random() * classes.hero[2].card.length);
    document.getElementById("p3NO1").innerHTML = `${classes.hero[2].card[p3CardSelect1].name}`;
    p3NO1img.src = classes.hero[2].card[p3CardSelect1].image;
    document.getElementById("p3NO1z").appendChild(p3NO1img).width = "75";
    p3CardSelect2 = Math.floor(Math.random() * classes.hero[2].card.length);
    document.getElementById("p3NO2").innerHTML = `${classes.hero[2].card[p3CardSelect2].name}`;
    p3NO2img.src = classes.hero[2].card[p3CardSelect2].image;
    document.getElementById("p3NO2z").appendChild(p3NO2img).width = "75";
    document.getElementById("p1class").backgroundImage = 'url("/resources/images/palm.png")';

    document.getElementById("p1NO1z").classList.remove('p1selected');
    document.getElementById("p1NO2z").classList.remove('p1selected');
    document.getElementById("p2NO1z").classList.remove('p2selected');
    document.getElementById("p2NO2z").classList.remove('p2selected');
    document.getElementById("p3NO1z").classList.remove('p3selected');
    document.getElementById("p3NO2z").classList.remove('p3selected');
    
    roundCounter[0].turn++;
    document.getElementById("horse").innerHTML = `${roundCounter[0].turn}`;
};

