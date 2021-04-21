const roundCounter = [
    {
        "turn": 0,
        "poison": 0
    }
];

const attack = [
    {
        "p1attack":0,
        "p2attack":0,
        "p3attack":0,
    }
];

const classes = 
    {
    
        "hero": [
            {
                "class": "warrior",   
                "health": 20,
                "maxHealth":20,
                "aggro": 0,
                "image":"/resources/images/warrior.png",
                "status": "ready",
                "target":"",
                "poison":0,
                "shield":0,
                "burn":0,
                "heal":0,
                "freeze":0,
                "bleed":0,
                "damage":0,
                "card": [
                    {
                        "name": "Rest",
                        "type": "none",
                        "cost": 0,
                        "effect": 0,
                        "image": "/resources/images/palm.png"
                    },
                    {
                        "name": "strike",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":2,
                        "direct":true,
                        "dot":0,
                        "aggro":2,
                        "image": "/resources/images/gladius.png",
                        "do":() => {}
                    },
                    {
                        "name": "poke",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":1,
                        "direct":true,
                        "dot":0,
                        "aggro":1,
                        "image": "/resources/images/katana.png"
                    },
                    {
                        "name": "fatal blow",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":3,
                        "direct":true,
                        "dot":0,
                        "aggro":3,
                        "image": "/resources/images/reaper-scythe.png"
                    },
                    {
                        "name": "demolish",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":4,
                        "direct":true,
                        "dot":0,
                        "aggro":4,
                        "image": "/resources/images/blade-fall.png"
                    },
                    {
                        "name": "Super Ultra Smash!",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":5,
                        "direct":true,
                        "dot":0,
                        "aggro":5,
                        "image": "/resources/images/lightning-saber.png"
                    },
                    {
                        "name": "Taunt",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":2,
                        "direct":true,
                        "dot":0,
                        "aggro":10,
                        "image": "/resources/images/palm.png"
                    },
                    {
                        "name": "Shield Block",
                        "poison":0,
                        "shield":4,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":2,
                        "direct":true,
                        "dot":0,
                        "aggro":2,
                        "image": "/resources/images/shield.png"
                    }
                ]
            },
            {    
                "class":"priest", 
                "health": 20,
                "maxHealth":20,
                "aggro": 0,
                "image":"/resources/images/priest.png",
                "status": "ready",
                "target":"",
                "poison":0,
                "shield":0,
                "burn":0,
                "healing":0,
                "damage":0,
                "card": [
                    {
                        "name": "Rest",
                        "type": "none",
                        "cost": 0,
                        "effect": 0,
                        "image": "/resources/images/palm.png"
                    },
                    {
                        "name": "heal",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":4,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":true,
                        "dot":0,
                        "aggro":2,
                        "image": "/resources/images/hand-bandage.png"
                    },
                    {
                        "name": "minor heal",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":2,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":true,
                        "dot":0,
                        "aggro":1,
                        "image": "/resources/images/medicine-pills.png"
                    },
                    {   
                        "name": "major heal",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":6,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":true,
                        "dot":0,
                        "aggro":3,
                        "image": "/resources/images/healing.png"
                    },
                    {   
                        "name": "heal 'splosion",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":8,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":true,
                        "dot":0,
                        "aggro":4,
                        "image": "/resources/images/health-increase.png"
                    },
                    {   
                        "name": "Omega Heal",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":10,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":true,
                        "dot":0,
                        "aggro":5,
                        "image": "/resources/images/defibrilate.png"
                    },
                    {   
                        "name": "Fade",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":true,
                        "dot":0,
                        "aggro": "",
                        "image": "/resources/images/invisible-face.png"
                    },
                    {
                        "name": "Protective Barrier",
                        "poison":0,
                        "shield":2,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":true,
                        "dot":0,
                        "aggro": 1,
                        "image": "/resources/images/barrier.png"
                    },
                    
                ]
            },
            {    
                "class":"rogue", 
                "health": 20,
                "maxHealth":20,
                "aggro": 0,
                "image":"/resources/images/rogue.png",
                "status": "ready",
                "target":"",
                "poison":0,
                "shield":0,
                "burn":0,
                "healing":0,
                "damage":0,
                "card": [
                    {
                        "name": "Rest",
                        "type": "none",
                        "cost": 0,
                        "effect": 0,
                        "image": "/resources/images/palm.png"
                    },
                    {
                        "name": "slice",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":4,
                        "direct":true,
                        "dot":0,
                        "aggro": 2,
                        "image": "/resources/images/bowie-knife.png"
                    },
                    {
                        "name": "cut",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":2,
                        "direct":true,
                        "dot":0,
                        "aggro": 1,
                        "image": "/resources/images/butterfly-knife.png"
                    },
                    {   
                        "name": "flay",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":6,
                        "direct":true,
                        "dot":0,
                        "aggro": 3,
                        "image": "/resources/images/bone-knife.png"
                    },
                    {   
                        "name": "garrotte",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":1,
                        "damage":6,
                        "direct":true,
                        "dot":2,
                        "aggro": 4,
                        "image": "/resources/images/sword-spin.png"
                    },
                    {   
                        "name": "Mega Slice'N'Dice",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":1,
                        "damage":8,
                        "direct":true,
                        "dot":2,
                        "aggro": 5,
                        "image": "/resources/images/spinning-blades.png"
                    },
                    {   
                        "name": "poison",
                        "poison":2,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":false,
                        "dot":2,
                        "aggro": 4,
                        "image": "/resources/images/poison-bottle.png"
                    },
                    {   
                        "name": "Stealth",
                        "poison":2,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":false,
                        "dot":0,
                        "aggro": "",
                        "image": "/resources/images/spy.png"
                    },
                    {
                        "name": "deflect",
                        "poison":0,
                        "shield":"",//.75 incoming damage
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":"",//.25 incoming damage
                        "direct":false,
                        "dot":2,
                        "aggro": 3,
                        "image": "/resources/images/deflect.png"
                    }
                    
                ]
            },
            {    
                "class":"mage", 
                "health": 20,
                "maxHealth":20,
                "aggro": 0,
                "image":"/resources/images/rogue.png",
                "status": "ready",
                "target":"",
                "poison":0,
                "shield":0,
                "burn":0,
                "healing":0,
                "damage":0,
                "card": [
                    {
                        "name": "Rest",
                        "type": "none",
                        "cost": 0,
                        "effect": 0,
                        "image": "/resources/images/palm.png"
                    },
                    {
                        "name": "arcane bolt",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":4,
                        "direct":true,
                        "dot":0,
                        "aggro": 2,
                        "image": "/resources/images/bowie-knife.png"
                    },
                    {
                        name: "zap",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":2,
                        "direct":true,
                        "dot":0,
                        "aggro": 1,
                        "image": "/resources/images/butterfly-knife.png"
                    },
                    {   
                        name: "firebolt",
                        "poison":0,
                        "shield":0,
                        "burn":1,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":3,
                        "direct":true,
                        "dot":2,
                        "aggro": 3,
                        "image": "/resources/images/bone-knife.png"
                    },
                    {   
                        name: "fireball",
                        "poison":0,
                        "shield":0,
                        "burn":1,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":5,
                        "direct":true,
                        "dot":3,
                        "aggro": 4,
                        "image": "/resources/images/sword-spin.png"
                    },
                    {   
                        name: "flame blast",
                        "poison":0,
                        "shield":0,
                        "burn":1,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":8,
                        "direct":true,
                        "dot":3,
                        "aggro": 5,
                        "image": "/resources/images/spinning-blades.png"
                    },
                    {   
                        name: "conflagrate",
                        "poison":0,
                        "shield":0,
                        "burn":2,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":false,
                        "dot":2,
                        "aggro": 4,
                        "image": "/resources/images/poison-bottle.png"
                    },
                    {   
                        name: "invisibility",
                        "poison":2,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":false,
                        "dot":0,
                        "aggro": "",
                        "image": "/resources/images/spy.png"
                    },
                    {
                        "name": "frost bolt",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":3,
                        "bleed":0,
                        "damage":1,
                        "direct":true,
                        "dot":2,
                        "aggro": 3,
                        "image": "/resources/images/deflect.png"
                    }
                    
                ]
            },
            {    
                "class":"paladin", 
                "health": 20,
                "maxHealth":20,
                "aggro": 0,
                "image":"/resources/images/rogue.png",
                "status": "ready",
                "target":"",
                "poison":0,
                "shield":0,
                "burn":0,
                "healing":0,
                "damage":0,
                "card": [
                    {
                        "name": "Rest",
                        "type": "none",
                        "cost": 0,
                        "effect": 0,
                        "image": "/resources/images/palm.png"
                    },
                    {
                        "name": "smite",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":4,
                        "direct":true,
                        "dot":0,
                        "aggro": 2,
                        "image": "/resources/images/bowie-knife.png"
                    },
                    {
                        "name": "rebuke",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":2,
                        "direct":true,
                        "dot":0,
                        "aggro": 1,
                        "image": "/resources/images/butterfly-knife.png"
                    },
                    {   
                        "name": "judgement",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":6,
                        "direct":true,
                        "dot":0,
                        "aggro": 3,
                        "image": "/resources/images/bone-knife.png"
                    },
                    {   
                        "name": "intercede",
                        "poison":0,
                        "shield":"",//.75 incoming damage
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":"",//.25 incoming damage
                        "direct":false,
                        "dot":2,
                        "aggro": 3,
                        "image": "/resources/images/sword-spin.png"
                    },
                    {   
                        "name": "purify",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":true,
                        "dot":0,
                        "aggro": 3,
                        "image": "/resources/images/spinning-blades.png"
                    },
                    {   
                        "name": "prayer of healing",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":2,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":false,
                        "dot":3,
                        "aggro": 3,
                        "image": "/resources/images/poison-bottle.png"
                    },
                    {   
                        "name": "divine shield",
                        "poison":0,
                        "shield":3,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":0,
                        "direct":false,
                        "dot":3,
                        "aggro": 3,
                        "image": "/resources/images/spy.png"
                    },
                    {
                        "name": "Taunt",
                        "poison":0,
                        "shield":0,
                        "burn":0,
                        "heal":0,
                        "freeze":0,
                        "bleed":0,
                        "damage":2,
                        "direct":true,
                        "dot":0,
                        "aggro":10,
                        "image": "/resources/images/palm.png"
                    }
                    
                ]
            }],
        "villian": [{
            "class": "goblin",
            "health": 20,
            "image":"/resources/images/goblin.png",
            "status": "ready",
            "poison":0,
            "shield":0,
            "burn":0,
            "healing":0,
            "damage":0,
            "card": [
                {
                    "name": "Rest",
                    "type": "none",
                    "cost": 0,
                    "effect": 0,
                    "image": "/resources/images/palm.png"
                },
                {
                    name: "bonk",
                    type: "damage",
                    effect: 3
                },
                {
                    name: "big bonk",
                    type: "damage",
                    effect: 6
                }
            ]
        },
        {
            "class": "ogre",
            "health": 50,
            "image":"/resources/images/ogre.png",
            "status": "ready",
            "poison":0,
            "shield":0,
            "burn":0,
            "healing":0,
            "damage":0,
            "card": [
                {
                    "name": "Rest",
                    "type": "none",
                    "cost": 0,
                    "effect": 0,
                    "image": "/resources/images/palm.png"
                },
                {
                    name: "clobber",
                    type: "damage",
                    effect: 4
                },
                {
                    name: "demolish",
                    type: "damage",
                    effect: 8
                }
            ] 
        },
        {
            "class": "dragon",
            "health": 50,
            "image":"/resources/images/dragon.png",
            "status": "ready",
            "poison":0,
            "shield":0,
            "burn":0,
            "healing":0,
            "damage":0,
            "card": [
                {
                    "name": "Rest",
                    "type": "none",
                    "cost": 0,
                    "effect": 0,
                    "image": "/resources/images/palm.png"
                },
                {
                    name: "claws",
                    type: "damage",
                    effect: 5
                },
                {
                    name: "jaws",
                    type: "damage",
                    effect: 10
                }
            ] 
        }
    ]
    
}



