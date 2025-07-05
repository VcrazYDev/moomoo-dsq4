// ==UserScript==
// @name         localserver.js
// @description  try to take over the world!
// @version      ALFA
// ==/UserScript==

const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ const socket = new WebSocket("wss://moomoo-dsq4.onrender.com")});

wss.on("connection", socket => {
  let player;
let server;

let gameObjects = [];
var projectiles = []

function findPlayerBySID(sid) {
    for (let i = 0; i < players.length; ++i) {
        if (players[i].sid === sid) {
            return players[i]
        }
    }
    return null
}
const mathSQRT = Math.sqrt;
const mathABS = Math.abs;
const mathATAN2 = Math.atan2;
const mathCOS = Math.cos;
const mathSIN = Math.sin;
const mathFloor = Math.floor;
const mathPI = Math.PI;
const mathPI2 = Math.PI * 2;
const mathPI3 = Math.PI * 3;
const mathPOW = Math.pow;

const config = {};
config.maxScreenWidth = 1920;
config.maxScreenHeight = 1080;

// SERVER:
config.serverUpdateRate = 9;
config.maxPlayers =  40;
config.maxPlayersHard =  config.maxPlayers + 10;
config.collisionDepth = 6;
config.minimapRate = 3000;

// COLLISIONS:
config.colGrid = 10;

// CLIENT:
config.clientSendRate = 5;

// UI:
config.healthBarWidth = 50;
config.healthBarPad = 4.5;
config.iconPadding = 15;
config.iconPad = 0.9;
config.deathFadeout = 3000;
config.crownIconScale = 60;
config.crownPad = 35;

// CHAT:
config.chatCountdown = 3000;
config.chatCooldown = 500;

// SANDBOX:
config.inSandbox = true;

// PLAYER:
config.maxAge = 100;
config.gatherAngle = Math.PI/2.6;
config.gatherWiggle = 10;
config.hitReturnRatio = 0.25;
config.hitAngle = Math.PI / 2;
config.playerScale = 35;
config.playerSpeed = 0.0016;
config.playerDecel = 0.993;
config.nameY = 34;

// CUSTOMIZATION:
config.skinColors = ["#bf8f54", "#cbb091", "#896c4b",
                     "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3",
                     "#8bc373"];

// ANIMALS:
config.animalCount = 7;
config.aiTurnRandom = 0.06;
config.cowNames = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper",
                   "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"];

// WEAPONS:
config.shieldAngle = Math.PI/3;
config.weaponVariants = [{
    id: 0,
    src: "",
    xp: 0,
    val: 1
}, {
    id: 1,
    src: "_g",
    xp: 3000,
    val: 1.1
}, {
    id: 2,
    src: "_d",
    xp: 7000,
    val: 1.18
}, {
    id: 3,
    src: "_r",
    poison: true,
    xp: 12000,
    val: 1.18
}];
config.fetchVariant = function(player) {
    var tmpXP = player.weaponXP[player.weaponIndex]||0;
    for (var i = config.weaponVariants.length - 1; i >= 0; --i) {
        if (tmpXP >= config.weaponVariants[i].xp)
            return config.weaponVariants[i];
    }
};

// NATURE:
config.resourceTypes = ["wood", "food", "stone", "points"];
config.areaCount = 7;
config.treesPerArea = 9;
config.bushesPerArea = 3;
config.totalRocks = 32;
config.goldOres = 7;
config.riverWidth = 724;
config.riverPadding = 114;
config.waterCurrent = 0.0011;
config.waveSpeed = 0.0001;
config.waveMax = 1.3;
config.treeScales = [150, 160, 165, 175];
config.bushScales = [80, 85, 95];
config.rockScales = [80, 85, 90];

// BIOME DATA:
config.snowBiomeTop = 2400;
config.snowSpeed = 0.75;

// DATA:
config.maxNameLength = 15;

// MAP:
config.mapScale = 14400;
config.mapPingScale = 40;
config.mapPingTime = 2200;

const UTILS = {};
UTILS.randInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
UTILS.randFloat = function (min, max) {
    return Math.random() * (max - min + 1) + min;
};
UTILS.lerp = function (value1, value2, amount) {
    return value1 + (value2 - value1) * amount;
};
UTILS.decel = function (val, cel) {
    if (val > 0)
        val = Math.max(0, val - cel);
    else if (val < 0)
        val = Math.min(0, val + cel);
    return val;
};
UTILS.getDistance = function (x1, y1, x2, y2) {
    return mathSQRT((x2 -= x1) * x2 + (y2 -= y1) * y2);
};
UTILS.getDirection = function (x1, y1, x2, y2) {
    return mathATAN2(y1 - y2, x1 - x2);
};
UTILS.getAngleDist = function (a, b) {
    var p = mathABS(b - a) % (mathPI * 2);
    return (p > mathPI ? (mathPI * 2) - p : p);
};
UTILS.isNumber = function (n) {
    return (typeof n == "number" && !isNaN(n) && isFinite(n));
};
UTILS.isString = function (s) {
    return (s && typeof s == "string");
};
UTILS.kFormat = function (num) {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num;
};
UTILS.capitalizeFirst = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
UTILS.fixTo = function (n, v) {
    return parseFloat(n.toFixed(v));
};
UTILS.sortByPoints = function (a, b) {
    return parseFloat(b.points) - parseFloat(a.points);
};
UTILS.lineInRect = function (recX, recY, recX2, recY2, x1, y1, x2, y2) {
    var minX = x1;
    var maxX = x2;
    if (x1 > x2) {
        minX = x2;
        maxX = x1;
    }
    if (maxX > recX2)
        maxX = recX2;
    if (minX < recX)
        minX = recX;
    if (minX > maxX)
        return false;
    var minY = y1;
    var maxY = y2;
    var dx = x2 - x1;
    if (Math.abs(dx) > 0.0000001) {
        var a = (y2 - y1) / dx;
        var b = y1 - a * x1;
        minY = a * minX + b;
        maxY = a * maxX + b;
    }
    if (minY > maxY) {
        var tmp = maxY;
        maxY = minY;
        minY = tmp;
    }
    if (maxY > recY2)
        maxY = recY2;
    if (minY < recY)
        minY = recY;
    if (minY > maxY)
        return false;
    return true;
};
UTILS.containsPoint = function (element, x, y) {
    var bounds = element.getBoundingClientRect();
    var left = bounds.left + window.scrollX;
    var top = bounds.top + window.scrollY;
    var width = bounds.width;
    var height = bounds.height;

    var insideHorizontal = x > left && x < left + width;
    var insideVertical = y > top && y < top + height;
    return insideHorizontal && insideVertical;
};
UTILS.mousifyTouchEvent = function(event) {
    var touch = event.changedTouches[0];
    event.screenX = touch.screenX;
    event.screenY = touch.screenY;
    event.clientX = touch.clientX;
    event.clientY = touch.clientY;
    event.pageX = touch.pageX;
    event.pageY = touch.pageY;
};
UTILS.hookTouchEvents = function (element, skipPrevent) {
    var preventDefault = !skipPrevent;
    var isHovering = false;
    // var passive = window.Modernizr.passiveeventlisteners ? {passive: true} : false;
    var passive = false;
    element.addEventListener("touchstart", UTILS.checkTrusted(touchStart), passive);
    element.addEventListener("touchmove", UTILS.checkTrusted(touchMove), passive);
    element.addEventListener("touchend", UTILS.checkTrusted(touchEnd), passive);
    element.addEventListener("touchcancel", UTILS.checkTrusted(touchEnd), passive);
    element.addEventListener("touchleave", UTILS.checkTrusted(touchEnd), passive);
    function touchStart(e) {
        UTILS.mousifyTouchEvent(e);
        window.setUsingTouch(true);
        if (preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (element.onmouseover)
            element.onmouseover(e);
        isHovering = true;
    }
    function touchMove(e) {
        UTILS.mousifyTouchEvent(e);
        window.setUsingTouch(true);
        if (preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (UTILS.containsPoint(element, e.pageX, e.pageY)) {
            if (!isHovering) {
                if (element.onmouseover)
                    element.onmouseover(e);
                isHovering = true;
            }
        } else {
            if (isHovering) {
                if (element.onmouseout)
                    element.onmouseout(e);
                isHovering = false;
            }
        }
    }
    function touchEnd(e) {
        UTILS.mousifyTouchEvent(e);
        window.setUsingTouch(true);
        if (preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (isHovering) {
            if (element.onclick)
                element.onclick(e);
            if (element.onmouseout)
                element.onmouseout(e);
            isHovering = false;
        }
    }
};
UTILS.removeAllChildren = function (element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
};
UTILS.generateElement = function (config) {
    var element = document.createElement(config.tag || "div");
    function bind(configValue, elementValue) {
        if (config[configValue])
            element[elementValue] = config[configValue];
    }
    bind("text", "textContent");
    bind("html", "innerHTML");
    bind("class", "className");
    for (var key in config) {
        switch (key) {
            case "tag":
            case "text":
            case "html":
            case "class":
            case "style":
            case "hookTouch":
            case "parent":
            case "children":
                continue;
            default:
                break;
        }
        element[key] = config[key];
    }
    if (element.onclick)
        element.onclick = UTILS.checkTrusted(element.onclick);
    if (element.onmouseover)
        element.onmouseover = UTILS.checkTrusted(element.onmouseover);
    if (element.onmouseout)
        element.onmouseout = UTILS.checkTrusted(element.onmouseout);
    if (config.style) {
        element.style.cssText = config.style;
    }
    if (config.hookTouch) {
        UTILS.hookTouchEvents(element);
    }
    if (config.parent) {
        config.parent.appendChild(element);
    }
    if (config.children) {
        for (var i = 0; i < config.children.length; i++) {
            element.appendChild(config.children[i]);
        }
    }
    return element;
}
UTILS.eventIsTrusted = function(ev) {
    if (ev && typeof ev.isTrusted == "boolean") {
        return ev.isTrusted;
    } else {
        return true;
    }
}
UTILS.checkTrusted = function(callback) {
    return function(ev) {
        if (ev && ev instanceof Event && UTILS.eventIsTrusted(ev)) {
            callback(ev);
        } else {
            //console.error("Event is not trusted.", ev);
        }
    }
}
UTILS.randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
UTILS.countInArray = function(array, val) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === val) count++;
    } return count;
};

class GameObject {
    constructor(sid) {
        this.sid = sid;
    }

    // INIT:
    init(x, y, dir, scale, type, data, owner) {
        data = data||{};
        this.sentTo = {};
        this.gridLocations = [];
        this.active = true;
        this.doUpdate = data.doUpdate;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.xWiggle = 0;
        this.yWiggle = 0;
        this.scale = scale;
        this.type = type;
        this.id = data.id;
        this.owner = owner;
        this.name = data.name;
        this.isItem = (this.id!=undefined);
        this.group = data.group;
        this.health = data.health;
        this.layer = 2;
        if (this.group != undefined) {
            this.layer = this.group.layer;
        } else if (this.type == 0) {
            this.layer = 3;
        } else if (this.type == 2) {
            this.layer = 0;
        }  else if (this.type == 4) {
            this.layer = -1;
        }
        this.colDiv = data.colDiv||1;
        this.blocker = data.blocker;
        this.ignoreCollision = data.ignoreCollision;
        this.dontGather = data.dontGather;
        this.hideFromEnemy = data.hideFromEnemy;
        this.friction = data.friction;
        this.projDmg = data.projDmg;
        this.dmg = data.dmg;
        this.pDmg = data.pDmg;
        this.pps = data.pps;
        this.zIndex = data.zIndex||0;
        this.turnSpeed = data.turnSpeed;
        this.req = data.req;
        this.trap = data.trap;
        this.healCol = data.healCol;
        this.teleport = data.teleport;
        this.boostSpeed = data.boostSpeed;
        this.projectile = data.projectile;
        this.shootRange = data.shootRange;
        this.shootRate = data.shootRate;
        this.shootCount = this.shootRate;
        this.spawnPoint = data.spawnPoint;
    };

    // GET HIT:
    changeHealth(amount, doer) {
        this.health += amount;
        return (this.health <= 0);
    };

    // GET SCALE:
    getScale(sM, ig) {
        sM = sM||1;
        return this.scale * ((this.isItem||this.type==2||this.type==3||this.type==4)
                             ?1:(0.6*sM)) * (ig?1:this.colDiv);
    };

    // VISIBLE TO PLAYER:
    visibleToPlayer(player) {
        return !(this.hideFromEnemy) || (this.owner && (this.owner == player ||
                                                        (this.owner.team && player.team == this.owner.team)));
    };

    // UPDATE:
    update(delta) {
        if (this.active) {
            if (this.xWiggle) {
                this.xWiggle *= Math.pow(0.99, delta);
            } if (this.yWiggle) {
                this.yWiggle *= Math.pow(0.99, delta);
            }
            if (this.turnSpeed) {
                this.dir += this.turnSpeed * delta;
            }
        }
    };
};

class ObjectManager {
    constructor(gameObjects) {
        this.objects = gameObjects;
        this.grids = {};
        this.updateObjects = [];

        this.tmpX = undefined;
        this.tmpY = undefined;
        this.tmpS = config.mapScale / config.colGrid;
    }
    // SET OBJECT GRIDS:
    setObjectGrids(obj) {
        var objX = Math.min(config.mapScale, Math.max(0, obj.x));
        var objY = Math.min(config.mapScale, Math.max(0, obj.y));
        for (var x = 0; x < config.colGrid; ++x) {
            this.tmpX = x * this.tmpS;
            for (var y = 0; y < config.colGrid; ++y) {
                this.tmpY = y * this.tmpS;
                if (objX + obj.scale >= this.tmpX && objX - obj.scale <= this.tmpX + this.tmpS &&
                    objY + obj.scale >= this.tmpY && objY - obj.scale <= this.tmpY + this.tmpS) {
                    if (!this.grids[x + "_" + y])
                        this.grids[x + "_" + y] = [];
                    this.grids[x + "_" + y].push(obj);
                    obj.gridLocations.push(x + "_" + y);
                }
            }
        }
    };

    // REMOVE OBJECT FROM GRID:
    removeObjGrid(obj) {
        var tmpIndx;
        for (var i = 0; i < obj.gridLocations.length; ++i) {
            tmpIndx = this.grids[obj.gridLocations[i]].indexOf(obj);
            if (tmpIndx >= 0) {
                this.grids[obj.gridLocations[i]].splice(tmpIndx, 1);
            }
        }
    };

    // DISABLE OBJ:
    disableObj(obj) {
        obj.active = false;
        if (server) {
            if (obj.owner && obj.pps) obj.owner.pps -= obj.pps;
            this.removeObjGrid(obj);
            var tmpIndx = this.updateObjects.indexOf(obj);
            if (tmpIndx >= 0) {
                this.updateObjects.splice(tmpIndx, 1);
            }
        }
    };

    // HIT OBJECT:
    hitObj(tmpObj, tmpDir) {
        for (var p = 0; p < players.length; ++p) {
            if (players[p].active) {
                if (tmpObj.sentTo[players[p].id]) {
                    if (!tmpObj.active) server.send(players[p].id, "12", tmpObj.sid);
                    else if (players[p].canSee(tmpObj))
                        server.send(players[p].id, "8", UTILS.fixTo(tmpDir, 1), tmpObj.sid);
                } if (!tmpObj.active && tmpObj.owner == players[p])
                    players[p].changeItemCount(tmpObj.group.id, -1);
            }
        }
    };

    // GET GRID ARRAY:
    getGridArrays(xPos, yPos, s) {
        let tmpArray = [];
        let tmpGrid;
        this.tmpX = mathFloor(xPos / this.tmpS);
        this.tmpY = mathFloor(yPos / this.tmpS);
        tmpArray.length = 0;
        try {
            if (this.grids[this.tmpX + "_" + this.tmpY])
                tmpArray.push(this.grids[this.tmpX + "_" + this.tmpY]);
            if (xPos + s >= (this.tmpX + 1) * this.tmpS) { // RIGHT
                tmpGrid = this.grids[(this.tmpX + 1) + "_" + this.tmpY];
                if (tmpGrid) tmpArray.push(tmpGrid);
                if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP RIGHT
                    tmpGrid = this.grids[(this.tmpX + 1) + "_" + (this.tmpY - 1)];
                    if (tmpGrid) tmpArray.push(tmpGrid);
                } else if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM RIGHT
                    tmpGrid = this.grids[(this.tmpX + 1) + "_" + (this.tmpY + 1)];
                    if (tmpGrid) tmpArray.push(tmpGrid);
                }
            } if (this.tmpX && xPos - s <= this.tmpX * this.tmpS) { // LEFT
                tmpGrid = this.grids[(this.tmpX - 1) + "_" + this.tmpY];
                if (tmpGrid) tmpArray.push(tmpGrid);
                if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP LEFT
                    tmpGrid = this.grids[(this.tmpX - 1) + "_" + (this.tmpY - 1)];
                    if (tmpGrid) tmpArray.push(tmpGrid);
                } else if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM LEFT
                    tmpGrid = this.grids[(this.tmpX - 1) + "_" + (this.tmpY + 1)];
                    if (tmpGrid) tmpArray.push(tmpGrid);
                }
            } if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM
                tmpGrid = this.grids[this.tmpX + "_" + (this.tmpY + 1)];
                if (tmpGrid) tmpArray.push(tmpGrid);
            } if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP
                tmpGrid = this.grids[this.tmpX + "_" + (this.tmpY - 1)];
                if (tmpGrid) tmpArray.push(tmpGrid);
            }
        } catch (e) {}
        return tmpArray;
    };

    // ADD NEW:
    add(sid, x, y, dir, s, type, data, setSID, owner) {
        let tmpObj = null;
        for (var i = 0; i < gameObjects.length; ++i) {
            if (gameObjects[i].sid == sid) {
                tmpObj = gameObjects[i];
                break;
            }
        } if (!tmpObj) {
            for (var i = 0; i < gameObjects.length; ++i) {
                if (!gameObjects[i].active) {
                    tmpObj = gameObjects[i];
                    break;
                }
            }
        } if (!tmpObj) {
            tmpObj = new GameObject(sid);
            gameObjects.push(tmpObj);
        }
        if (setSID)
            tmpObj.sid = sid;
        tmpObj.init(x, y, dir, s, type, data, owner);
        if (server) {
            this.setObjectGrids(tmpObj);
            if (tmpObj.doUpdate)
                this.updateObjects.push(tmpObj);
        }
    };

    // DISABLE BY SID:
    disableBySid(sid) {
        for (var i = 0; i < gameObjects.length; ++i) {
            if (gameObjects[i].sid == sid) {
                this.disableObj(gameObjects[i]);
                break;
            }
        }
    };

    // REMOVE ALL FROM PLAYER:
    removeAllItems(sid, server) {
        for (var i = 0; i < gameObjects.length; ++i) {
            if (gameObjects[i].active && gameObjects[i].owner && gameObjects[i].owner.sid == sid) {
                this.disableObj(gameObjects[i]);
            }
        }
        if (server) {
            server.broadcast("13", sid);
        }
    };

    // FETCH SPAWN OBJECT:
    fetchSpawnObj(sid) {
        var tmpLoc = null;
        for (var i = 0; i < gameObjects.length; ++i) {
            tmpObj = gameObjects[i];
            if (tmpObj.active && tmpObj.owner && tmpObj.owner.sid == sid && tmpObj.spawnPoint) {
                tmpLoc = [tmpObj.x, tmpObj.y];
                this.disableObj(tmpObj);
                server.broadcast("12", tmpObj.sid);
                if (tmpObj.owner) {
                    tmpObj.owner.changeItemCount(tmpObj.group.id, -1);
                }
                break;
            }
        }
        return tmpLoc;
    };

    // CHECK IF PLACABLE:
    checkItemLocation(x, y, s, sM, indx, ignoreWater, placer) {
        for (var i = 0; i < gameObjects.length; ++i) {
            var blockS = (gameObjects[i].blocker?
                          gameObjects[i].blocker:gameObjects[i].getScale(sM, gameObjects[i].isItem));
            if (gameObjects[i].active && UTILS.getDistance(x, y, gameObjects[i].x,
                                                           gameObjects[i].y) < (s + blockS))
                return false;
        } if (!ignoreWater && indx != 18 && y >= (config.mapScale / 2) - (config.riverWidth / 2) && y <=
              (config.mapScale / 2) + (config.riverWidth / 2)) {
            return false;
        }
        return true;
    };

    // ADD PROJECTILE:
    addProjectile(x, y, dir, range, indx) {
        var tmpData = items.projectiles[indx];
        var tmpProj;
        for (var i = 0; i < projectiles.length; ++i) {
            if (!projectiles[i].active) {
                tmpProj = projectiles[i];
                break;
            }
        }
        if (!tmpProj) {
            tmpProj = new Projectile(players, UTILS);
            projectiles.push(tmpProj);
        }
        tmpProj.init(indx, x, y, dir, tmpData.speed, range, tmpData.scale);
    };

    // CHECK PLAYER COLLISION:
    checkCollision(player, other, delta) {
        delta = delta||1;
        var dx = player.x - other.x;
        var dy = player.y - other.y;
        var tmpLen = player.scale + other.scale;
        if (mathABS(dx) <= tmpLen || mathABS(dy) <= tmpLen) {
            tmpLen = player.scale + (other.getScale?other.getScale():other.scale);
            var tmpInt = mathSQRT(dx * dx + dy * dy) - tmpLen;
            if (tmpInt <= 0) {
                if (!other.ignoreCollision) {
                    var tmpDir = UTILS.getDirection(player.x, player.y, other.x, other.y);
                    var tmpDist = UTILS.getDistance(player.x, player.y, other.x, other.y);
                    if (other.isPlayer) {
                        tmpInt = (tmpInt * -1) / 2;
                        player.x += (tmpInt * mathCOS(tmpDir));
                        player.y += (tmpInt * mathSIN(tmpDir));
                        other.x -= (tmpInt * mathCOS(tmpDir));
                        other.y -= (tmpInt * mathSIN(tmpDir));
                    } else {
                        player.x = other.x + (tmpLen * mathCOS(tmpDir));
                        player.y = other.y + (tmpLen * mathSIN(tmpDir));
                        player.xVel *= 0.75;
                        player.yVel *= 0.75;
                    }
                    if (other.dmg && other.owner != player && !(other.owner &&
                                                                other.owner.team && other.owner.team == player.team)) {
                        player.changeHealth(-other.dmg, other.owner, other);
                        var tmpSpd = 1.5 * (other.weightM||1);
                        player.xVel += tmpSpd * mathCOS(tmpDir);
                        player.yVel += tmpSpd * mathSIN(tmpDir);
                        if (other.pDmg && !(player.skin && player.skin.poisonRes)) {
                            player.dmgOverTime.dmg = other.pDmg;
                            player.dmgOverTime.time = 5;
                            player.dmgOverTime.doer = other.owner;
                        }
                        if (player.colDmg && other.health) {
                            if (other.changeHealth(-player.colDmg)) this.disableObj(other);
                            this.hitObj(other, UTILS.getDirection(player.x, player.y, other.x, other.y));
                        }
                    }
                } else if (other.trap && !player.noTrap && other.owner != player && !(other.owner &&
                                                                                      other.owner.team && other.owner.team == player.team)) {
                    player.lockMove = true;
                    other.hideFromEnemy = false;
                } else if (other.boostSpeed) {
                    player.xVel += (delta * other.boostSpeed * (other.weightM||1)) * mathCOS(other.dir);
                    player.yVel += (delta * other.boostSpeed * (other.weightM||1)) * mathSIN(other.dir);
                } else if (other.healCol) {
                    player.healCol = other.healCol;
                } else if (other.teleport) {
                    player.x = UTILS.randInt(0, config.mapScale);
                    player.y = UTILS.randInt(0, config.mapScale);
                }
                if (other.zIndex > player.zIndex) player.zIndex = other.zIndex;
                return true;
            }
        }
        return false;
    };

};
const objectManager = new ObjectManager([]);

const items = {}
items.groups = [{
    id: 0,
    name: "food",
    layer: 0
}, {
    id: 1,
    name: "walls",
    place: true,
    limit: 30,
    layer: 0
}, {
    id: 2,
    name: "spikes",
    place: true,
    limit: 15,
    layer: 0
}, {
    id: 3,
    name: "mill",
    place: true,
    limit: 7,
    layer: 1
}, {
    id: 4,
    name: "mine",
    place: true,
    limit: 1,
    layer: 0
}, {
    id: 5,
    name: "trap",
    place: true,
    limit: 6,
    layer: -1
}, {
    id: 6,
    name: "booster",
    place: true,
    limit: 12,
    layer: -1
}, {
    id: 7,
    name: "turret",
    place: true,
    limit: 2,
    layer: 1
}, {
    id: 8,
    name: "watchtower",
    place: true,
    limit: 12,
    layer: 1
}, {
    id: 9,
    name: "buff",
    place: true,
    limit: 4,
    layer: -1
}, {
    id: 10,
    name: "spawn",
    place: true,
    limit: 1,
    layer: -1
}, {
    id: 11,
    name: "sapling",
    place: true,
    limit: 2,
    layer: 0
}, {
    id: 12,
    name: "blocker",
    place: true,
    limit: 3,
    layer: -1
}, {
    id: 13,
    name: "teleporter",
    place: true,
    limit: 2,
    layer: -1
}];

// PROJECTILES:
items.projectiles = [{
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 25,
    speed: 1.6,
    scale: 103,
    range: 1000
}, {
    indx: 1,
    layer: 1,
    dmg: 25,
    scale: 20
}, {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 35,
    speed: 2.5,
    scale: 103,
    range: 1200
}, {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 30,
    speed: 2,
    scale: 103,
    range: 1200
}, {
    indx: 1,
    layer: 1,
    dmg: 16,
    scale: 20
}, {
    indx: 0,
    layer: 0,
    src: "bullet_1",
    dmg: 50,
    speed: 3.6,
    scale: 160,
    range: 1400
}];

// WEAPONS:
items.weapons = [{
    id: 0,
    type: 0,
    name: "tool hammer",
    desc: "tool for gathering all resources",
    src: "hammer_1",
    length: 140,
    width: 140,
    xOff: -3,
    yOff: 18,
    dmg: 25,
    range: 65,
    gather: 1,
    speed: 300
}, {
    id: 1,
    type: 0,
    age: 2,
    name: "hand axe",
    desc: "gathers resources at a higher rate",
    src: "axe_1",
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 30,
    spdMult: 1,
    range: 70,
    gather: 2,
    speed: 400
}, {
    id: 2,
    type: 0,
    age: 8,
    pre: 1,
    name: "great axe",
    desc: "deal more damage and gather more resources",
    src: "great_axe_1",
    length: 140,
    width: 140,
    xOff: -8,
    yOff: 25,
    dmg: 35,
    spdMult: 1,
    range: 75,
    gather: 4,
    speed: 400
}, {
    id: 3,
    type: 0,
    age: 2,
    name: "short sword",
    desc: "increased attack power but slower move speed",
    src: "sword_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 46,
    dmg: 35,
    spdMult: 0.85,
    range: 110,
    gather: 1,
    speed: 300
}, {
    id: 4,
    type: 0,
    age: 8,
    pre: 3,
    name: "katana",
    desc: "greater range and damage",
    src: "samurai_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 59,
    dmg: 40,
    spdMult: 0.8,
    range: 118,
    gather: 1,
    speed: 300
}, {
    id: 5,
    type: 0,
    age: 2,
    name: "polearm",
    desc: "long range melee weapon",
    src: "spear_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 45,
    knock: 0.2,
    spdMult: 0.82,
    range: 142,
    gather: 1,
    speed: 700
}, {
    id: 6,
    type: 0,
    age: 2,
    name: "bat",
    desc: "fast long range melee weapon",
    src: "bat_1",
    iPad: 1.3,
    length: 110,
    width: 180,
    xOff: -8,
    yOff: 53,
    dmg: 20,
    knock: 0.7,
    range: 110,
    gather: 1,
    speed: 300
}, {
    id: 7,
    type: 0,
    age: 2,
    name: "daggers",
    desc: "really fast short range weapon",
    src: "dagger_1",
    iPad: 0.8,
    length: 110,
    width: 110,
    xOff: 18,
    yOff: 0,
    dmg: 20,
    knock: 0.1,
    range: 65,
    gather: 1,
    hitSlow: 0.1,
    spdMult: 1.13,
    speed: 100
}, {
    id: 8,
    type: 0,
    age: 2,
    name: "stick",
    desc: "great for gathering but very weak",
    src: "stick_1",
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 1,
    spdMult: 1,
    range: 70,
    gather: 7,
    speed: 400
}, {
    id: 9,
    type: 1,
    age: 6,
    name: "hunting bow",
    desc: "bow used for ranged combat and hunting",
    src: "bow_1",
    req: ["wood", 4],
    length: 120,
    width: 120,
    xOff: -6,
    yOff: 0,
    projectile: 0,
    spdMult: 0.75,
    speed: 600
}, {
    id: 10,
    type: 1,
    age: 6,
    name: "great hammer",
    desc: "hammer used for destroying structures",
    src: "great_hammer_1",
    length: 140,
    width: 140,
    xOff: -9,
    yOff: 25,
    dmg: 10,
    spdMult: 0.88,
    range: 75,
    sDmg: 7.5,
    gather: 1,
    speed: 400
}, {
    id: 11,
    type: 1,
    age: 6,
    name: "wooden shield",
    desc: "blocks projectiles and reduces melee damage",
    src: "shield_1",
    length: 120,
    width: 120,
    shield: 0.2,
    xOff: 6,
    yOff: 0,
    spdMult: 0.7
}, {
    id: 12,
    type: 1,
    age: 8,
    pre: 9,
    name: "crossbow",
    desc: "deals more damage and has greater range",
    src: "crossbow_1",
    req: ["wood", 5],
    aboveHand: true,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 2,
    spdMult: 0.7,
    speed: 700
}, {
    id: 13,
    type: 1,
    age: 9,
    pre: 12,
    name: "repeater crossbow",
    desc: "high firerate crossbow with reduced damage",
    src: "crossbow_2",
    req: ["wood", 10],
    aboveHand: true,
    armS: 0.75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 3,
    spdMult: 0.7,
    speed: 230
}, {
    id: 14,
    type: 1,
    age: 6,
    name: "mc grabby",
    desc: "steals resources from enemies",
    src: "grab_1",
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 0,
    steal: 250,
    knock: 0.2,
    spdMult: 1.05,
    range: 125,
    gather: 0,
    speed: 700
}, {
    id: 15,
    type: 1,
    age: 9,
    pre: 12,
    name: "musket",
    desc: "slow firerate but high damage and range",
    src: "musket_1",
    req: ["stone", 10],
    aboveHand: true,
    rec: 0.35,
    armS: 0.6,
    hndS: 0.3,
    hndD: 1.6,
    length: 205,
    width: 205,
    xOff: 25,
    yOff: 0,
    projectile: 5,
    hideProjectile: true,
    spdMult: 0.6,
    speed: 1500
}];

// ITEMS:
items.list = [{
    group: items.groups[0],
    name: "apple",
    desc: "restores 20 health when consumed",
    req: ["food", 10],
    consume: function(doer) {
        return doer.changeHealth(20, doer);
    },
    scale: 22,
    holdOffset: 15
}, {
    age: 3,
    group: items.groups[0],
    name: "cookie",
    desc: "restores 40 health when consumed",
    req: ["food", 15],
    consume: function(doer) {
        return doer.changeHealth(40, doer);
    },
    scale: 27,
    holdOffset: 15
}, {
    age: 7,
    group: items.groups[0],
    name: "cheese",
    desc: "restores 30 health and another 50 over 5 seconds",
    req: ["food", 25],
    consume: function(doer) {
        if (doer.changeHealth(30, doer) || doer.health < 100) {
            doer.dmgOverTime.dmg = -10;
            doer.dmgOverTime.doer = doer;
            doer.dmgOverTime.time = 5;
            return true;
        }
        return false;
    },
    scale: 27,
    holdOffset: 15
}, {
    group: items.groups[1],
    name: "wood wall",
    desc: "provides protection for your village",
    req: ["wood", 10],
    projDmg: true,
    health: 380,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 3,
    group: items.groups[1],
    name: "stone wall",
    desc: "provides improved protection for your village",
    req: ["stone", 25],
    health: 900,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    pre: 1,
    group: items.groups[1],
    name: "castle wall",
    desc: "provides powerful protection for your village",
    req: ["stone", 35],
    health: 1500,
    scale: 52,
    holdOffset: 20,
    placeOffset: -5
}, {
    group: items.groups[2],
    name: "spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 20, "stone", 5],
    health: 400,
    dmg: 20,
    scale: 49,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 5,
    group: items.groups[2],
    name: "greater spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 30, "stone", 10],
    health: 500,
    dmg: 35,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 9,
    pre: 1,
    group: items.groups[2],
    name: "poison spikes",
    desc: "poisons enemies when they touch them",
    req: ["wood", 35, "stone", 15],
    health: 600,
    dmg: 30,
    pDmg: 5,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 9,
    pre: 2,
    group: items.groups[2],
    name: "spinning spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 30, "stone", 20],
    health: 500,
    dmg: 45,
    turnSpeed: 0.003,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    group: items.groups[3],
    name: "windmill",
    desc: "generates gold over time",
    req: ["wood", 50, "stone", 10],
    health: 400,
    pps: 1,
    turnSpeed: 0.0016,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 45,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 5,
    pre: 1,
    group: items.groups[3],
    name: "faster windmill",
    desc: "generates more gold over time",
    req: ["wood", 60, "stone", 20],
    health: 500,
    pps: 1.5,
    turnSpeed: 0.0025,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 8,
    pre: 1,
    group: items.groups[3],
    name: "power mill",
    desc: "generates more gold over time",
    req: ["wood", 100, "stone", 50],
    health: 800,
    pps: 2,
    turnSpeed: 0.005,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 5,
    group: items.groups[4],
    type: 2,
    name: "mine",
    desc: "allows you to mine stone",
    req: ["wood", 20, "stone", 100],
    iconLineMult: 12,
    scale: 65,
    holdOffset: 20,
    placeOffset: 0
}, {
    age: 5,
    group: items.groups[11],
    type: 0,
    name: "sapling",
    desc: "allows you to farm wood",
    req: ["wood", 150],
    iconLineMult: 12,
    colDiv: 0.5,
    scale: 110,
    holdOffset: 50,
    placeOffset: -15
}, {
    age: 4,
    group: items.groups[5],
    name: "pit trap",
    desc: "pit that traps enemies if they walk over it",
    req: ["wood", 30, "stone", 30],
    trap: true,
    ignoreCollision: true,
    hideFromEnemy: true,
    health: 500,
    colDiv: 0.2,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 4,
    group: items.groups[6],
    name: "boost pad",
    desc: "provides boost when stepped on",
    req: ["stone", 20, "wood", 5],
    ignoreCollision: true,
    boostSpeed: 1.5,
    health: 150,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[7],
    doUpdate: true,
    name: "turret",
    desc: "defensive structure that shoots at enemies",
    req: ["wood", 200, "stone", 150],
    health: 800,
    projectile: 1,
    shootRange: 700,
    shootRate: 2200,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[8],
    name: "platform",
    desc: "platform to shoot over walls and cross over water",
    req: ["wood", 20],
    ignoreCollision: true,
    zIndex: 1,
    health: 300,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[9],
    name: "healing pad",
    desc: "standing on it will slowly heal you",
    req: ["wood", 30, "food", 10],
    ignoreCollision: true,
    healCol: 15,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 9,
    group: items.groups[10],
    name: "spawn pad",
    desc: "you will spawn here when you die but it will dissapear",
    req: ["wood", 100, "stone", 100],
    health: 400,
    ignoreCollision: true,
    spawnPoint: true,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[12],
    name: "blocker",
    desc: "blocks building in radius",
    req: ["wood", 30, "stone", 25],
    ignoreCollision: true,
    blocker: 300,
    health: 400,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: items.groups[13],
    name: "teleporter",
    desc: "teleports you to a random point on the map",
    req: ["wood", 60, "stone", 60],
    ignoreCollision: true,
    teleport: true,
    health: 200,
    colDiv: 0.7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}]

// ASSIGN IDS:
for (var i = 0; i < items.list.length; ++i) {
    items.list[i].id = i;
    if (items.list[i].pre) items.list[i].pre = i - items.list[i].pre;
}

const hats = [{
    id: 45,
    name: "Shame!",
    dontSell: true,
    price: 0,
    scale: 120,
    desc: "hacks are for losers"
}, {
    id: 51,
    name: "Moo Cap",
    price: 0,
    scale: 120,
    desc: "coolest mooer around"
}, {
    id: 50,
    name: "Apple Cap",
    price: 0,
    scale: 120,
    desc: "apple farms remembers"
}, {
    id: 28,
    name: "Moo Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 29,
    name: "Pig Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 30,
    name: "Fluff Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 36,
    name: "Pandou Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 37,
    name: "Bear Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 38,
    name: "Monkey Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 44,
    name: "Polar Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 35,
    name: "Fez Hat",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 42,
    name: "Enigma Hat",
    price: 0,
    scale: 120,
    desc: "join the enigma army"
}, {
    id: 43,
    name: "Blitz Hat",
    price: 0,
    scale: 120,
    desc: "hey everybody i'm blitz"
}, {
    id: 49,
    name: "Bob XIII Hat",
    price: 0,
    scale: 120,
    desc: "like and subscribe"
}, {
    id: 57,
    name: "Pumpkin",
    price: 50,
    scale: 120,
    desc: "Spooooky"
}, {
    id: 8,
    name: "Bummle Hat",
    price: 100,
    scale: 120,
    desc: "no effect"
}, {
    id: 2,
    name: "Straw Hat",
    price: 500,
    scale: 120,
    desc: "no effect"
}, {
    id: 15,
    name: "Winter Cap",
    price: 600,
    scale: 120,
    desc: "allows you to move at normal speed in snow",
    coldM: 1
}, {
    id: 5,
    name: "Cowboy Hat",
    price: 1000,
    scale: 120,
    desc: "no effect"
}, {
    id: 4,
    name: "Ranger Hat",
    price: 2000,
    scale: 120,
    desc: "no effect"
}, {
    id: 18,
    name: "Explorer Hat",
    price: 2000,
    scale: 120,
    desc: "no effect"
}, {
    id: 31,
    name: "Flipper Hat",
    price: 2500,
    scale: 120,
    desc: "have more control while in water",
    watrImm: true
}, {
    id: 1,
    name: "Marksman Cap",
    price: 3000,
    scale: 120,
    desc: "increases arrow speed and range",
    aMlt: 1.3
}, {
    id: 10,
    name: "Bush Gear",
    price: 3000,
    scale: 160,
    desc: "allows you to disguise yourself as a bush"
}, {
    id: 48,
    name: "Halo",
    price: 3000,
    scale: 120,
    desc: "no effect"
}, {
    id: 6,
    name: "Soldier Helmet",
    price: 4000,
    scale: 120,
    desc: "reduces damage taken but slows movement",
    spdMult: 0.94,
    dmgMult: 0.75
}, {
    id: 23,
    name: "Anti Venom Gear",
    price: 4000,
    scale: 120,
    desc: "makes you immune to poison",
    poisonRes: 1
}, {
    id: 13,
    name: "Medic Gear",
    price: 5000,
    scale: 110,
    desc: "slowly regenerates health over time",
    healthRegen: 3
}, {
    id: 9,
    name: "Miners Helmet",
    price: 5000,
    scale: 120,
    desc: "earn 1 extra gold per resource",
    extraGold: 1
}, {
    id: 32,
    name: "Musketeer Hat",
    price: 5000,
    scale: 120,
    desc: "reduces cost of projectiles",
    projCost: 0.5
}, {
    id: 7,
    name: "Bull Helmet",
    price: 6000,
    scale: 120,
    desc: "increases damage done but drains health",
    healthRegen: -5,
    dmgMultO: 1.5,
    spdMult: 0.96
}, {
    id: 22,
    name: "Emp Helmet",
    price: 6000,
    scale: 120,
    desc: "turrets won't attack but you move slower",
    antiTurret: 1,
    spdMult: 0.7
}, {
    id: 12,
    name: "Booster Hat",
    price: 6000,
    scale: 120,
    desc: "increases your movement speed",
    spdMult: 1.16
}, {
    id: 26,
    name: "Barbarian Armor",
    price: 8000,
    scale: 120,
    desc: "knocks back enemies that attack you",
    dmgK: 0.6
}, {
    id: 21,
    name: "Plague Mask",
    price: 10000,
    scale: 120,
    desc: "melee attacks deal poison damage",
    poisonDmg: 5,
    poisonTime: 6
}, {
    id: 46,
    name: "Bull Mask",
    price: 10000,
    scale: 120,
    desc: "bulls won't target you unless you attack them",
    bullRepel: 1
}, {
    id: 14,
    name: "Windmill Hat",
    topSprite: true,
    price: 10000,
    scale: 120,
    desc: "generates points while worn",
    pps: 1.5
}, {
    id: 11,
    name: "Spike Gear",
    topSprite: true,
    price: 10000,
    scale: 120,
    desc: "deal damage to players that damage you",
    dmg: 0.45
}, {
    id: 53,
    name: "Turret Gear",
    topSprite: true,
    price: 10000,
    scale: 120,
    desc: "you become a walking turret",
    turret: {
        proj: 1,
        range: 700,
        rate: 2500
    },
    spdMult: 0.7
}, {
    id: 20,
    name: "Samurai Armor",
    price: 12000,
    scale: 120,
    desc: "increased attack speed and fire rate",
    atkSpd: 0.78
}, {
    id: 58,
    name: "Dark Knight",
    price: 12000,
    scale: 120,
    desc: "restores health when you deal damage",
    healD: 0.4
}, {
    id: 27,
    name: "Scavenger Gear",
    price: 15000,
    scale: 120,
    desc: "earn double points for each kill",
    kScrM: 2
}, {
    id: 40,
    name: "Tank Gear",
    price: 15000,
    scale: 120,
    desc: "increased damage to buildings but slower movement",
    spdMult: 0.3,
    bDmg: 3.3
}, {
    id: 52,
    name: "Thief Gear",
    price: 15000,
    scale: 120,
    desc: "steal half of a players gold when you kill them",
    goldSteal: 0.5
}, {
    id: 55,
    name: "Bloodthirster",
    price: 20000,
    scale: 120,
    desc: "Restore Health when dealing damage. And increased damage",
    healD: 0.25,
    dmgMultO: 1.2,
}, {
    id: 56,
    name: "Assassin Gear",
    price: 20000,
    scale: 120,
    desc: "Go invisible when not moving. Can't eat. Increased speed",
    noEat: true,
    spdMult: 1.1,
    invisTimer: 1000
}];

const accessories = [{
    id: 12,
    name: "Snowball",
    price: 1000,
    scale: 105,
    xOff: 18,
    desc: "no effect"
}, {
    id: 9,
    name: "Tree Cape",
    price: 1000,
    scale: 90,
    desc: "no effect"
}, {
    id: 10,
    name: "Stone Cape",
    price: 1000,
    scale: 90,
    desc: "no effect"
}, {
    id: 3,
    name: "Cookie Cape",
    price: 1500,
    scale: 90,
    desc: "no effect"
}, {
    id: 8,
    name: "Cow Cape",
    price: 2000,
    scale: 90,
    desc: "no effect"
}, {
    id: 11,
    name: "Monkey Tail",
    price: 2000,
    scale: 97,
    xOff: 25,
    desc: "Super speed but reduced damage",
    spdMult: 1.35,
    dmgMultO: 0.2
}, {
    id: 17,
    name: "Apple Basket",
    price: 3000,
    scale: 80,
    xOff: 12,
    desc: "slowly regenerates health over time",
    healthRegen: 1
}, {
    id: 6,
    name: "Winter Cape",
    price: 3000,
    scale: 90,
    desc: "no effect"
}, {
    id: 4,
    name: "Skull Cape",
    price: 4000,
    scale: 90,
    desc: "no effect"
}, {
    id: 5,
    name: "Dash Cape",
    price: 5000,
    scale: 90,
    desc: "no effect"
}, {
    id: 2,
    name: "Dragon Cape",
    price: 6000,
    scale: 90,
    desc: "no effect"
}, {
    id: 1,
    name: "Super Cape",
    price: 8000,
    scale: 90,
    desc: "no effect"
}, {
    id: 7,
    name: "Troll Cape",
    price: 8000,
    scale: 90,
    desc: "no effect"
}, {
    id: 14,
    name: "Thorns",
    price: 10000,
    scale: 115,
    xOff: 20,
    desc: "no effect"
}, {
    id: 15,
    name: "Blockades",
    price: 10000,
    scale: 95,
    xOff: 15,
    desc: "no effect"
}, {
    id: 20,
    name: "Devils Tail",
    price: 10000,
    scale: 95,
    xOff: 20,
    desc: "no effect"
}, {
    id: 16,
    name: "Sawblade",
    price: 12000,
    scale: 90,
    spin: true,
    xOff: 0,
    desc: "deal damage to players that damage you",
    dmg: 0.15
}, {
    id: 13,
    name: "Angel Wings",
    price: 15000,
    scale: 138,
    xOff: 22,
    desc: "slowly regenerates health over time",
    healthRegen: 3
}, {
    id: 19,
    name: "Shadow Wings",
    price: 15000,
    scale: 138,
    xOff: 22,
    desc: "increased movement speed",
    spdMult: 1.1
}, {
    id: 18,
    name: "Blood Wings",
    price: 20000,
    scale: 178,
    xOff: 26,
    desc: "restores health when you deal damage",
    healD: 0.2
}, {
    id: 21,
    name: "Corrupt X Wings",
    price: 20000,
    scale: 178,
    xOff: 26,
    desc: "deal damage to players that damage you",
    dmg: 0.25
}];

class Projectile {
    constructor() {}

    // INIT:
    init(indx, x, y, dir, spd, dmg, rng, scl, owner) {
        console.log("creation projectile")
        this.active = true;
        this.indx = indx;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.skipMov = true;
        this.speed = spd;
        this.dmg = dmg;
        this.scale = scl;
        this.range = rng;
        this.owner = owner;
        this.objectsHit = [];
        this.tmpObj = undefined;

        if (server)
            this.sentTo = {};
    };

    // UPDATE:
    update(delta) {
        if (this.active) {
            var tmpSpeed = this.speed * delta;
            var tmpScale;
            if (!this.skipMov) {
                this.x += tmpSpeed * Math.cos(this.dir);
                this.y += tmpSpeed * Math.sin(this.dir);
                this.range -= tmpSpeed;
                if (this.range <= 0) {
                    this.x += this.range * Math.cos(this.dir);
                    this.y += this.range * Math.sin(this.dir);
                    tmpSpeed = 1;
                    this.range = 0;
                    this.active = false;
                }
            } else {
                this.skipMov = false;
            }
            if (server) {
                for (var i = 0; i < players.length; ++i) {
                    if (!this.sentTo[players[i].id] && players[i].canSee(this)) {
                        this.sentTo[players[i].id] = 1;
                        server.send(players[i].id, "18", UTILS.fixTo(this.x, 1), UTILS.fixTo(this.y, 1),
                                    UTILS.fixTo(this.dir, 2), UTILS.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid);
                    }
                }
                this.objectsHit.length = 0;
                for (var i = 0; i < players.lengthh; ++i) {
                    this.tmpObj = players[i];
                    if (this.tmpObj.alive && this.tmpObj != this.owner && !(this.owner.team && this.tmpObj.team == this.owner.team)) {
                        if (UTILS.lineInRect(tmpObj.x-tmpObj.scale, tmpObj.y-tmpObj.scale, tmpObj.x+tmpObj.scale,
                                             this.tmpObj.y+this.tmpObj.scale, this.x, this.y, this.x+(tmpSpeed*Math.cos(this.dir)),
                                             this.y+(tmpSpeed*Math.sin(this.dir)))) {
                            this.objectsHit.push(this.tmpObj);
                        }
                    }
                }
                var tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
                for (var x = 0; x < tmpList.length; ++x) {
                    for (var y = 0; y < tmpList[x].length; ++y) {
                        this.tmpObj = tmpList[x][y];
                        tmpScale = this.tmpObj.getScale();
                        if (this.tmpObj.active && !(this.ignoreObj == this.tmpObj.sid) && (this.layer <= this.tmpObj.layer) &&
                            this.objectsHit.indexOf(this.tmpObj) < 0 && !this.tmpObj.ignoreCollision && UTILS.lineInRect(this.tmpObj.x-tmpScale, this.tmpObj.y-tmpScale, this.tmpObj.x+tmpScale, this.tmpObj.y+tmpScale,
                                                                                                                         this.x, this.y, this.x+(tmpSpeed*Math.cos(this.dir)), this.y+(tmpSpeed*Math.sin(this.dir)))) {
                            this.objectsHit.push(this.tmpObj);
                        }
                    }
                }

                // HIT OBJECTS:
                if (this.objectsHit.length > 0) {
                    var hitObj = null;
                    var shortDist = null;
                    var tmpDist = null;
                    for (var i = 0; i < this.objectsHit.length; ++i) {
                        tmpDist = UTILS.getDistance(this.x, this.y, this.objectsHit[i].x, this.objectsHit[i].y);
                        if (shortDist == null || tmpDist < shortDist) {
                            shortDist = tmpDist;
                            hitObj = this.objectsHit[i];
                        }
                    }
                    if (hitObj.isPlayer || hitObj.isAI) {
                        var tmpSd = 0.3 * (hitObj.weightM||1);
                        hitObj.xVel += tmpSd * Math.cos(this.dir);
                        hitObj.yVel += tmpSd * Math.sin(this.dir);
                        if (hitObj.weaponIndex == undefined || (!(items.weapons[hitObj.weaponIndex].shield &&
                                                                  UTILS.getAngleDist(this.dir+Math.PI, hitObj.dir) <= config.shieldAngle))) {
                            hitObj.changeHealth(-this.dmg, this.owner, this.owner);
                        }
                    } else {
                        if (hitObj.projDmg && hitObj.health && hitObj.changeHealth(-this.dmg)) {
                            objectManager.disableObj(hitObj);
                        }
                        for (var i = 0; i < players.length; ++i) {
                            if (players[i].active) {
                                if (hitObj.sentTo[players[i].id]) {
                                    if (hitObj.active) {
                                        if (players[i].canSee(hitObj))
                                            server.send(players[i].id, "8", UTILS.fixTo(this.dir, 2), hitObj.sid);
                                    } else {
                                        server.send(players[i].id, "12", hitObj.sid);
                                    }
                                }
                                if (!hitObj.active && hitObj.owner == players[i])
                                    players[i].changeItemCount(hitObj.group.id, -1);
                            }

                        }
                    }
                    this.active = false;
                    for (var i = 0; i < players.length; ++i) {
                        if (this.sentTo[players[i].id])
                            server.send(players[i].id, "19", this.sid, UTILS.fixTo(shortDist, 1));
                    }
                }
            }
        }
    };
};

class ProjectileManager {
    constructor () {
        this.projectiles = [];
    }

    addProjectile(x, y, dir, range, speed, indx, owner, ignoreObj, layer) {
        var tmpData = items.projectiles[indx];
        var tmpProj;
        for (var i = 0; i < this.projectiles.length; ++i) {
            if (!this.projectiles[i].active) {
                tmpProj = this.projectiles[i];
                break;
            }
        } if (!tmpProj) {
            tmpProj = new Projectile();
            tmpProj.sid = this.projectiles.length;
            this.projectiles.push(tmpProj);
        }
        tmpProj.init(indx, x, y, dir, speed, tmpData.dmg, range, tmpData.scale, owner);
        tmpProj.ignoreObj = ignoreObj;
        tmpProj.layer = layer||tmpData.layer;
        tmpProj.src = tmpData.src;
        return tmpProj;
    };
};

const projectileManager = new ProjectileManager();

class AiManager {
    constructor(ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server) {
        // AI TYPES:
        this.aiTypes = [
            {
                id: 0,
                src: "cow_1",
                killScore: 150,
                health: 500,
                weightM: 0.8,
                speed: 0.00095,
                turnSpeed: 0.001,
                scale: 72,
                drop: ["food", 50]
            },
            {
                id: 1,
                src: "pig_1",
                killScore: 200,
                health: 800,
                weightM: 0.6,
                speed: 0.00085,
                turnSpeed: 0.001,
                scale: 72,
                drop: ["food", 80]
            },
            {
                id: 2,
                name: "Bull",
                src: "bull_2",
                hostile: true,
                dmg: 20,
                killScore: 1000,
                health: 1800,
                weightM: 0.5,
                speed: 0.00094,
                turnSpeed: 0.00074,
                scale: 78,
                viewRange: 800,
                chargePlayer: true,
                drop: ["food", 100]
            },
            {
                id: 3,
                name: "Bully",
                src: "bull_1",
                hostile: true,
                dmg: 20,
                killScore: 2000,
                health: 2800,
                weightM: 0.45,
                speed: 0.001,
                turnSpeed: 0.0008,
                scale: 90,
                viewRange: 900,
                chargePlayer: true,
                drop: ["food", 400]
            },
            {
                id: 4,
                name: "Wolf",
                src: "wolf_1",
                hostile: true,
                dmg: 8,
                killScore: 500,
                health: 300,
                weightM: 0.45,
                speed: 0.001,
                turnSpeed: 0.002,
                scale: 84,
                viewRange: 800,
                chargePlayer: true,
                drop: ["food", 200]
            },
            {
                id: 5,
                name: "Quack",
                src: "chicken_1",
                dmg: 8,
                killScore: 2000,
                noTrap: true,
                health: 300,
                weightM: 0.2,
                speed: 0.0018,
                turnSpeed: 0.006,
                scale: 70,
                drop: ["food", 100]
            },
            {
                id: 6,
                name: "MOOSTAFA",
                nameScale: 50,
                src: "enemy",
                hostile: true,
                dontRun: true,
                fixedSpawn: true,
                spawnDelay: 60000,
                noTrap: true,
                colDmg: 100,
                dmg: 40,
                killScore: 8000,
                health: 18000,
                weightM: 0.4,
                speed: 0.0007,
                turnSpeed: 0.01,
                scale: 80,
                spriteMlt: 1.8,
                leapForce: 0.9,
                viewRange: 1000,
                hitRange: 210,
                hitDelay: 1000,
                chargePlayer: true,
                drop: ["food", 100]
            },
            {
                id: 7,
                name: "Treasure",
                hostile: true,
                nameScale: 35,
                src: "crate_1",
                fixedSpawn: true,
                spawnDelay: 120000,
                colDmg: 200,
                killScore: 5000,
                health: 20000,
                weightM: 0.1,
                speed: 0.0,
                turnSpeed: 0.0,
                scale: 70,
                spriteMlt: 1.0
            },
            {
                id: 8,
                name: "MOOFIE",
                src: "wolf_2",
                hostile: true,
                fixedSpawn: true,
                dontRun: true,
                hitScare: 4,
                spawnDelay: 30000,
                noTrap: true,
                nameScale: 35,
                dmg: 10,
                colDmg: 100,
                killScore: 3000,
                health: 7000,
                weightM: 0.45,
                speed: 0.0015,
                turnSpeed: 0.002,
                scale: 90,
                viewRange: 800,
                chargePlayer: true,
                drop: ["food", 1000]
            }
        ]

        // SPAWN AI:
        this.spawn = function (x, y, dir, index) {
            var tmpObj
            for (var i = 0; i < ais.length; ++i) {
                if (!ais[i].active) {
                    tmpObj = ais[i]
                    break
                }
            }
            if (!tmpObj) {
                tmpObj = new AI(ais.length, objectManager, players, items, UTILS, config, scoreCallback, server)
                ais.push(tmpObj)
            }
            tmpObj.init(x, y, dir, index, this.aiTypes[index])
            return tmpObj
        }
    }
}
const aiManager = new AiManager([]);

var PI2 = Math.PI * 2

class AI {
    constructor(sid, objectManager, players, items, UTILS, config, scoreCallback, server) {
        this.sid = sid
        this.isAI = true
        this.nameIndex = UTILS.randInt(0, config.cowNames.length - 1)

        // INIT:
        this.init = function (x, y, dir, index, data) {
            this.x = x
            this.y = y
            this.startX = data.fixedSpawn ? x : null
            this.startY = data.fixedSpawn ? y : null
            this.xVel = 0
            this.yVel = 0
            this.zIndex = 0
            this.dir = dir
            this.dirPlus = 0
            this.index = index
            this.src = data.src
            if (data.name) this.name = data.name
            this.weightM = data.weightM
            this.speed = data.speed
            this.killScore = data.killScore
            this.turnSpeed = data.turnSpeed
            this.scale = data.scale
            this.maxHealth = data.health
            this.leapForce = data.leapForce
            this.health = this.maxHealth
            this.chargePlayer = data.chargePlayer
            this.viewRange = data.viewRange
            this.drop = data.drop
            this.dmg = data.dmg
            this.hostile = data.hostile
            this.dontRun = data.dontRun
            this.hitRange = data.hitRange
            this.hitDelay = data.hitDelay
            this.hitScare = data.hitScare
            this.spriteMlt = data.spriteMlt
            this.nameScale = data.nameScale
            this.colDmg = data.colDmg
            this.noTrap = data.noTrap
            this.spawnDelay = data.spawnDelay
            this.hitWait = 0
            this.waitCount = 1000
            this.moveCount = 0
            this.targetDir = 0
            this.active = true
            this.alive = true
            this.runFrom = null
            this.chargeTarget = null
            this.dmgOverTime = {}
        }

        // UPDATE:
        var timerCount = 0
        this.update = function (delta) {
            if (this.active) {
                // SPAWN DELAY:
                if (this.spawnCounter) {
                    this.spawnCounter -= delta
                    if (this.spawnCounter <= 0) {
                        this.spawnCounter = 0
                        this.x = this.startX || UTILS.randInt(0, config.mapScale)
                        this.y = this.startY || UTILS.randInt(0, config.mapScale)
                    }
                    return
                }

                // REGENS AND AUTO:
                timerCount -= delta
                if (timerCount <= 0) {
                    if (this.dmgOverTime.dmg) {
                        this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer)
                        this.dmgOverTime.time -= 1
                        if (this.dmgOverTime.time <= 0) {
                            this.dmgOverTime.dmg = 0
                        }
                    }
                    timerCount = 1000
                }

                // BEHAVIOUR:
                var charging = false
                var slowMlt = 1
                if (
                    !this.zIndex &&
                    !this.lockMove &&
                    this.y >= config.mapScale / 2 - config.riverWidth / 2 &&
                    this.y <= config.mapScale / 2 + config.riverWidth / 2
                ) {
                    slowMlt = 0.33
                    this.xVel += config.waterCurrent * delta
                }
                if (this.lockMove) {
                    this.xVel = 0
                    this.yVel = 0
                } else if (this.waitCount > 0) {
                    this.waitCount -= delta
                    if (this.waitCount <= 0) {
                        if (this.chargePlayer) {
                            var tmpPlayer, bestDst, tmpDist
                            for (let i = 0; i < players.length; ++i) {
                                if (players[i].alive && !(players[i].skin && players[i].skin.bullRepel)) {
                                    tmpDist = UTILS.getDistance(this.x, this.y, players[i].x, players[i].y)
                                    if (tmpDist <= this.viewRange && (!tmpPlayer || tmpDist < bestDst)) {
                                        bestDst = tmpDist
                                        tmpPlayer = players[i]
                                    }
                                }
                            }
                            if (tmpPlayer) {
                                this.chargeTarget = tmpPlayer
                                this.moveCount = UTILS.randInt(8000, 12000)
                            } else {
                                this.moveCount = UTILS.randInt(1000, 2000)
                                this.targetDir = UTILS.randFloat(-Math.PI, Math.PI)
                            }
                        } else {
                            this.moveCount = UTILS.randInt(4000, 10000)
                            this.targetDir = UTILS.randFloat(-Math.PI, Math.PI)
                        }
                    }
                } else if (this.moveCount > 0) {
                    var tmpSpd = this.speed * slowMlt
                    if (this.runFrom && this.runFrom.active && !(this.runFrom.isPlayer && !this.runFrom.alive)) {
                        this.targetDir = UTILS.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y)
                        tmpSpd *= 1.42
                    } else if (this.chargeTarget && this.chargeTarget.alive) {
                        this.targetDir = UTILS.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y)
                        tmpSpd *= 1.75
                        charging = true
                    }
                    if (this.hitWait) {
                        tmpSpd *= 0.3
                    }
                    if (this.dir != this.targetDir) {
                        this.dir %= PI2
                        var netAngle = (this.dir - this.targetDir + PI2) % PI2
                        var amnt = Math.min(Math.abs(netAngle - PI2), netAngle, this.turnSpeed * delta)
                        var sign = netAngle - Math.PI >= 0 ? 1 : -1
                        this.dir += sign * amnt + PI2
                    }
                    this.dir %= PI2
                    this.xVel += tmpSpd * delta * Math.cos(this.dir)
                    this.yVel += tmpSpd * delta * Math.sin(this.dir)
                    this.moveCount -= delta
                    if (this.moveCount <= 0) {
                        this.runFrom = null
                        this.chargeTarget = null
                        this.waitCount = this.hostile ? 1500 : UTILS.randInt(1500, 6000)
                    }
                }

                // OBJECT COLL:
                this.zIndex = 0
                this.lockMove = false
                var tmpList
                var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta)
                var depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40)))
                var tMlt = 1 / depth
                for (let i = 0; i < depth; ++i) {
                    if (this.xVel) {
                        this.x += this.xVel * delta * tMlt
                    }
                    if (this.yVel) {
                        this.y += this.yVel * delta * tMlt
                    }
                    tmpList = objectManager.getGridArrays(this.x, this.y, this.scale)
                    for (let x = 0; x < tmpList.length; ++x) {
                        for (let y = 0; y < tmpList[x].length; ++y) {
                            if (tmpList[x][y].active) {
                                objectManager.checkCollision(this, tmpList[x][y], tMlt)
                            }
                        }
                    }
                }

                // HITTING:
                var hitting = false
                if (this.hitWait > 0) {
                    this.hitWait -= delta
                    if (this.hitWait <= 0) {
                        hitting = true
                        this.hitWait = 0
                        if (this.leapForce && !UTILS.randInt(0, 2)) {
                            this.xVel += this.leapForce * Math.cos(this.dir)
                            this.yVel += this.leapForce * Math.sin(this.dir)
                        }
                        let tmpList = objectManager.getGridArrays(this.x, this.y, this.hitRange)
                        let tmpObj, tmpDst
                        for (var t = 0; t < tmpList.length; ++t) {
                            for (var x = 0; x < tmpList[t].length; ++x) {
                                tmpObj = tmpList[t][x]
                                if (tmpObj.health) {
                                    tmpDst = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y)
                                    if (tmpDst < tmpObj.scale + this.hitRange) {
                                        if (tmpObj.changeHealth(-this.dmg * 5)) objectManager.disableObj(tmpObj)
                                        objectManager.hitObj(tmpObj, UTILS.getDirection(this.x, this.y, tmpObj.x, tmpObj.y))
                                    }
                                }
                            }
                        }
                        for (let x = 0; x < players.length; ++x) {
                            if (players[x].canSee(this)) {
                                server.send(players[x].id, "aa", this.sid)
                            }
                        }
                    }
                }

                // PLAYER COLLISIONS:
                if (charging || hitting) {
                    let tmpObj, tmpDst, tmpDir
                    for (let i = 0; i < players.length; ++i) {
                        tmpObj = players[i]
                        if (tmpObj && tmpObj.alive) {
                            tmpDst = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y)
                            if (this.hitRange) {
                                if (!this.hitWait && tmpDst <= this.hitRange + tmpObj.scale) {
                                    if (hitting) {
                                        tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y)
                                        tmpObj.changeHealth(-this.dmg)
                                        tmpObj.xVel += 0.6 * Math.cos(tmpDir)
                                        tmpObj.yVel += 0.6 * Math.sin(tmpDir)
                                        this.runFrom = null
                                        this.chargeTarget = null
                                        this.waitCount = 3000
                                        this.hitWait = !UTILS.randInt(0, 2) ? 600 : 0
                                    } else this.hitWait = this.hitDelay
                                }
                            } else if (tmpDst <= this.scale + tmpObj.scale) {
                                tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y)
                                tmpObj.changeHealth(-this.dmg)
                                tmpObj.xVel += 0.55 * Math.cos(tmpDir)
                                tmpObj.yVel += 0.55 * Math.sin(tmpDir)
                            }
                        }
                    }
                }

                // DECEL:
                if (this.xVel) {
                    this.xVel *= Math.pow(config.playerDecel, delta)
                }
                if (this.yVel) {
                    this.yVel *= Math.pow(config.playerDecel, delta)
                }

                // MAP BOUNDARIES:
                var tmpScale = this.scale
                if (this.x - tmpScale < 0) {
                    this.x = tmpScale
                    this.xVel = 0
                } else if (this.x + tmpScale > config.mapScale) {
                    this.x = config.mapScale - tmpScale
                    this.xVel = 0
                }
                if (this.y - tmpScale < 0) {
                    this.y = tmpScale
                    this.yVel = 0
                } else if (this.y + tmpScale > config.mapScale) {
                    this.y = config.mapScale - tmpScale
                    this.yVel = 0
                }
            }
        }

        // CAN SEE:
        this.canSee = function (other) {
            if (!other) return false
            if (other.skin && other.skin.invisTimer && other.noMovTimer >= other.skin.invisTimer) return false
            var dx = Math.abs(other.x - this.x) - other.scale
            var dy = Math.abs(other.y - this.y) - other.scale
            return dx <= (config.maxScreenWidth / 2) * 1.3 && dy <= (config.maxScreenHeight / 2) * 1.3
        }

        var tmpRatio = 0
        var animIndex = 0
        this.animate = function (delta) {
            if (this.animTime > 0) {
                this.animTime -= delta
                if (this.animTime <= 0) {
                    this.animTime = 0
                    this.dirPlus = 0
                    tmpRatio = 0
                    animIndex = 0
                } else {
                    if (animIndex == 0) {
                        tmpRatio += delta / (this.animSpeed * config.hitReturnRatio)
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio))
                        if (tmpRatio >= 1) {
                            tmpRatio = 1
                            animIndex = 1
                        }
                    } else {
                        tmpRatio -= delta / (this.animSpeed * (1 - config.hitReturnRatio))
                        this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio))
                    }
                }
            }
        }

        // ANIMATION:
        this.startAnim = function () {
            this.animTime = this.animSpeed = 600
            this.targetAngle = Math.PI * 0.8
            tmpRatio = 0
            animIndex = 0
        }

        // CHANGE HEALTH:
        this.changeHealth = function (val, doer, runFrom) {
            if (this.active) {
                this.health += val
                if (runFrom) {
                    if (this.hitScare && !UTILS.randInt(0, this.hitScare)) {
                        this.runFrom = runFrom
                        this.waitCount = 0
                        this.moveCount = 2000
                    } else if (this.hostile && this.chargePlayer && runFrom.isPlayer) {
                        this.chargeTarget = runFrom
                        this.waitCount = 0
                        this.moveCount = 8000
                    } else if (!this.dontRun) {
                        this.runFrom = runFrom
                        this.waitCount = 0
                        this.moveCount = 2000
                    }
                }
                if (val < 0 && this.hitRange && UTILS.randInt(0, 1)) this.hitWait = 500
                if (doer && doer.canSee(this) && val < 0) {
                    server.send(doer.id, "t", Math.round(this.x), Math.round(this.y), Math.round(-val), 1)
                }
                if (this.health <= 0) {
                    if (this.spawnDelay) {
                        this.spawnCounter = this.spawnDelay
                        this.x = -1000000
                        this.y = -1000000
                    } else {
                        this.x = this.startX || UTILS.randInt(0, config.mapScale)
                        this.y = this.startY || UTILS.randInt(0, config.mapScale)
                    }
                    this.health = this.maxHealth
                    this.runFrom = null
                    if (doer) {
                        scoreCallback(doer, this.killScore)
                        if (this.drop) {
                            for (var i = 0; i < this.drop.length; ) {
                                doer.addResource(config.resourceTypes.indexOf(this.drop[i]), this.drop[i + 1])
                                i += 2
                            }
                        }
                    }
                }
            }
        }
    }
}

class TribeManager {
    constructor(Tribe, findPlayerBySID, server) {
        this.tribes = {}
        this.createTribe = (name, player) => {
            const newTribe = new Tribe(name, findPlayerBySID, server)
            this.tribes[name] = newTribe
            newTribe.addPlayer(player)
            return newTribe
        }

        this.deleteTribe = (name) => {
            const tmpTribe = this.tribes[name]
            if (tmpTribe) {
                for (let i = 0; i < tmpTribe.members.length; i++) {
                    const tmpPlayer = findPlayerBySID(tmpTribe.members[i])
                    tmpPlayer.team = null
                    tmpPlayer.isLeader = false
                    server.send(tmpPlayer.id, "st", null, 0)
                }
                delete this.tribes[name]
            }
        }

        this.getTribe = (name) => {
            return this.tribes[name]
        }
    }
}
let tribeManager = new TribeManager([]);

class Tribe {
    constructor(name, findPlayerBySID, server) {
        this.name = name
        this.members = []
        this.ownerID = null
        this.joinQueue = []

        this.addPlayer = (player) => {
            player.team = this.name
            if (this.ownerID === null) {
                this.ownerID = player.sid
                player.isLeader = true
            }
            this.members.push(player.sid)
            const tmpData = this.getMembers()
            for (let i = 0; i < this.members.length; i++) {
                server.send(findPlayerBySID(this.members[i]).id, "sa", tmpData)
            }
        }

        this.removePlayer = (player) => {
            player.team = null
            player.isLeader = false
            this.members.splice(this.members.indexOf(player.sid), 1)
            const tmpData = this.getMembers()
            for (let i = 0; i < this.members.length; i++) {
                server.send(findPlayerBySID(this.members[i]).id, "sa", tmpData)
            }
        }

        this.getData = () => {
            return {
                sid: this.name,
                ownerID: this.ownerID
            }
        }

        this.getMembers = () => {
            var tmpMembers = []
            for (let i = 0; i < this.members.length; i++) {
                const tmpPlayer = findPlayerBySID(this.members[i])
                if (tmpPlayer) {
                    tmpMembers.push(tmpPlayer.sid, tmpPlayer.name)
                }
            }
            return tmpMembers
        }
    }
}

class Player {
    constructor(id, sid, isBot = false, data = {}) {
        this.id = id;
        this.sid = sid;
        this.isBot = isBot;
        if (isBot) {
            this.data = {};
            this.data.lockPos = data.lockPos ? {
                x: data.lockPos.x,
                y: data.lockPos.y
            } : false;
            this.onupdate = data.onupdate || (function() {});
            this.data.noCol = !!data.noCol;
        }
        this.tmpScore = 0;
        this.team = null;
        this.skinIndex = 0;
        this.tailIndex = 0;
        this.hitTime = 0;
        this.hits = 0;
        this.tails = {};
        for (var i = 0; i < accessories.length; ++i) {
            if (accessories[i].price <= 0)
                this.tails[accessories[i].id] = 1;
        }
        this.skins = {};
        for (var i = 0; i < hats.length; ++i) {
            if (hats[i].price <= 0)
                this.skins[hats[i].id] = 1;
        }
        this.timerCount = 0;
        this.points = 0;
        this.dt = 0;
        this.hidden = false;
        this.itemCounts = {};
        this.isPlayer = true;
        this.pps = 0;
        this.moveDir = undefined;
        this.skinRot = 0;
        this.lastPing = 0;
        this.iconIndex = 0;
        this.skinColor = 0;
    }

    // SPAWN:
    spawn(moofoll) {
        this.active = true;
        this.alive = true;
        this.lockMove = false;
        this.lockDir = false;
        this.minimapCounter = 0;
        this.chatCountdown = 0;
        this.shameCount = 0;
        this.shameTimer = 0;
        this.sentTo = {};
        this.gathering = 0;
        this.autoGather = 0;
        this.animTime = 0;
        this.animSpeed = 0;
        this.mouseState = 0;
        this.buildIndex = -1;
        this.weaponIndex = 0;
        this.dmgOverTime = {};
        this.noMovTimer = 0;
        this.maxXP = 300;
        this.XP = 0;
        this.age = 1;
        this.kills = 0;
        this.upgrAge = 2;
        this.upgradePoints = 0;
        this.x = Math.random() * config.mapScale;
        this.y = Math.random() * config.mapScale;
        this.zIndex = 0;
        this.xVel = 0;
        this.yVel = 0;
        this.slowMult = 1;
        this.dir = 0;
        this.dirPlus = 0;
        this.targetDir = 0;
        this.targetAngle = 0;
        this.maxHealth = 100;
        this.health = this.maxHealth;
        this.scale = config.playerScale;
        this.speed = config.playerSpeed;
        this.resetMoveDir();
        this.resetResources(moofoll);
        this.items = [0, 3, 6, 10];
        this.weapons = [0, 0];
        this.shootCount = 0;
        this.weaponXP = [];
        this.reloads = {};
    };

    // RESET MOVE DIR:
    resetMoveDir() {
        this.moveDir = undefined;
    };

    // RESET RESOURCES:
    resetResources(moofoll) {
        for (var i = 0; i < config.resourceTypes.length; ++i) {
            this[config.resourceTypes[i]] = 999999;//moofoll?100:0;
        }
    };

    // ADD ITEM:
    addItem(id) {
        var tmpItem = items.list[id];
        if (tmpItem) {
            for (var i = 0; i < this.items.length; ++i) {
                if (items.list[this.items[i]].group == tmpItem.group) {
                    if (this.buildIndex == this.items[i])
                        this.buildIndex = id;
                    this.items[i] = id;
                    return true;
                }
            }
            this.items.push(id);
            return true;
        }
        return false;
    };

    // SET USER DATA:
    setUserData(data) {
        if (data) {
            // SET INITIAL NAME:
            this.name = "unknown";

            // VALIDATE NAME:
            var name = data.name + "";
            //name = name.slice(0, config.maxNameLength);
            //name = name.replace(/[^\w:\(\)\/? -]+/gmi, " ");  // USE SPACE SO WE CAN CHECK PROFANITY
            //name = name.replace(/[^\x00-\x7F]/g, " ");
            name = name.trim();

            // CHECK IF IS PROFANE:
            /*var isProfane = false;
            var convertedName = name.toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
            for (var word of langFilter.list) {
                if (convertedName.indexOf(word) != -1) {
                    isProfane = true;
                    break;
                }
            }*/

            if (name.length > 0) {
                this.name = name;
            }

            // SKIN:
            this.skinColor = 0;
            if (config.skinColors[data.skin])
                this.skinColor = data.skin;
        }
    };

    // GET DATA TO SEND:
    getData() {
        return [
            this.id,
            this.sid,
            this.name,
            UTILS.fixTo(this.x, 2),
            UTILS.fixTo(this.y, 2),
            UTILS.fixTo(this.dir, 3),
            this.health,
            this.maxHealth,
            this.scale,
            this.skinColor
        ];
    };

    // SET DATA:
    setData(data) {
        this.id = data[0];
        this.sid = data[1];
        this.name = data[2];
        this.x = data[3];
        this.y = data[4];
        this.dir = data[5];
        this.health = data[6];
        this.maxHealth = data[7];
        this.scale = data[8];
        this.skinColor = data[9];
    };

    setSkin(id) {
        this.skin = hats.find(hat => hat.id == id);
        this.skinIndex = id;
    }

    setTail(id) {
        this.tail = accessories.find(acc => acc.id == id);
        this.tailIndex = id;
    }

    // UPDATE:
    update(delta) {
        if (!this.alive) return;

        if (this.onupdate) {
            this.onupdate.call(this, delta);
        }

        // SHAME SHAME SHAME:
        if (this.shameTimer > 0) {
            this.skinIndex = 45;
            this.shameTimer -= delta;
            if (this.shameTimer <= 0) {
                this.skinIndex = this.skin.id || 0;
                this.shameTimer = 0;
                this.shameCount = 0;
            }
        }

        // REGENS AND AUTO:
        this.timerCount -= delta;
        if (this.timerCount <= 0) {
            var regenAmount = (this.skin && this.skin.healthRegen?this.skin.healthRegen:0) +
                (this.tail && this.tail.healthRegen?this.tail.healthRegen:0);
            if (regenAmount) {
                this.changeHealth(regenAmount, this);
            } if (this.dmgOverTime.dmg) {
                this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer);
                this.dmgOverTime.time -= 1;
                if (this.dmgOverTime.time <= 0)
                    this.dmgOverTime.dmg = 0;
            } if (this.healCol) {
                this.changeHealth(this.healCol, this);
            }
            this.timerCount = 1000;
        }

        // CHECK KILL:
        if (!this.alive)
            return;

        // SLOWER:
        if (this.slowMult < 1) {
            this.slowMult += 0.0008 * delta;
            if (this.slowMult > 1)
                this.slowMult = 1;
        }

        // MOVE:
        this.noMovTimer += delta;
        if (this.xVel || this.yVel) this.noMovTimer = 0;
        if (this.lockMove) {
            this.xVel = 0;
            this.yVel = 0;
        } else {
            var spdMult = ((this.buildIndex>=0)?0.5:1) * (items.weapons[this.weaponIndex].spdMult||1) *
                (this.skin?(this.skin.spdMult||1):1) * (this.tail?(this.tail.spdMult||1):1) * (this.y<=config.snowBiomeTop?
                                                                                               ((this.skin&&this.skin.coldM)?1:config.snowSpeed):1) * this.slowMult;
            if (!this.zIndex && this.y >= (config.mapScale / 2) - (config.riverWidth / 2) &&
                this.y <= (config.mapScale / 2) + (config.riverWidth / 2)) {
                if (this.skin && this.skin.watrImm) {
                    spdMult *= 0.75;
                    this.xVel += config.waterCurrent * 0.4 * delta;
                } else {
                    spdMult *= 0.33;
                    this.xVel += config.waterCurrent * delta;
                }
            }
            var xVel = (this.moveDir!=undefined)?mathCOS(this.moveDir):0;
            var yVel = (this.moveDir!=undefined)?mathSIN(this.moveDir):0;
            var length = mathSQRT(xVel * xVel + yVel * yVel);
            if (length != 0) {
                xVel /= length;
                yVel /= length;
            }

            if (xVel) this.xVel += xVel * this.speed * spdMult * delta;
            if (yVel) this.yVel += yVel * this.speed * spdMult * delta;
        }

        // OBJECT COLL:
        this.zIndex = 0;
        this.lockMove = false;
        this.healCol = 0;
        var tmpList;
        var tmpSpeed = UTILS.getDistance(0, 0, this.xVel * delta, this.yVel * delta);
        var depth = Math.min(4, Math.max(1, Math.round(tmpSpeed / 40)));
        var tMlt = 1 / depth;
        for (var i = 0; i < depth; ++i) {
            if (this.xVel)
                this.x += (this.xVel * delta) * tMlt;
            if (this.yVel)
                this.y += (this.yVel * delta) * tMlt;
            tmpList = objectManager.getGridArrays(this.x, this.y, this.scale);
            for (var x = 0; x < tmpList.length; ++x) {
                for (var y = 0; y < tmpList[x].length; ++y) {
                    if (tmpList[x][y].active)
                        objectManager.checkCollision(this, tmpList[x][y], tMlt);
                }
            }
        }

        // PLAYER COLLISIONS:
        var tmpIndx = players.indexOf(this);
        for (var i = tmpIndx + 1; i < players.length; ++i) {
            if (players[i] != this && players[i].alive)
                objectManager.checkCollision(this, players[i]);
        }

        // DECEL:
        const decel = mathPOW(config.playerDecel, delta);
        if (this.xVel) {
            this.xVel *= decel;
            //if (this.xVel <= 0.01 && this.xVel >= -0.01) this.xVel = 0;
        } if (this.yVel) {
            this.yVel *= decel;
            //if (this.yVel <= 0.01 && this.yVel >= -0.01) this.yVel = 0;
        }

        // MAP BOUNDARIES:
        if (this.x - this.scale < 0) {
            this.x = this.scale;
        } else if (this.x + this.scale > config.mapScale) {
            this.x = config.mapScale - this.scale;
        } if (this.y - this.scale < 0) {
            this.y = this.scale;
        } else if (this.y + this.scale > config.mapScale) {
            this.y = config.mapScale - this.scale;
        }

        // USE WEAPON OR TOOL:
        this.useTool(delta);
        this.hits = 0;

        if (this.data && this.data.lockPos) {
            this.x = this.data.lockPos.x;
            this.y = this.data.lockPos.y;
        }
    };

    useTool(delta) {
        if (this.buildIndex < 0) {
            this.gathering = this.mouseState || this.hits > 0;
            if (this.reloads[this.weaponIndex] > 0) {
                this.reloads[this.weaponIndex] -= delta;
            } else if (this.gathering || this.autoGather) {
                var worked = true;
                if (items.weapons[this.weaponIndex].gather != undefined) {
                    this.gather(players);
                } else if (items.weapons[this.weaponIndex].projectile != undefined &&
                           this.hasRes(items.weapons[this.weaponIndex], (this.skin?this.skin.projCost:0))) {
                    this.useRes(items.weapons[this.weaponIndex], (this.skin?this.skin.projCost:0));
                    this.noMovTimer = 0;
                    var tmpIndx = items.weapons[this.weaponIndex].projectile;
                    var projOffset = this.scale * 2;
                    var aMlt = (this.skin&&this.skin.aMlt)?this.skin.aMlt:1;
                    if (items.weapons[this.weaponIndex].rec) {
                        this.xVel -= items.weapons[this.weaponIndex].rec * mathCOS(this.dir);
                        this.yVel -= items.weapons[this.weaponIndex].rec * mathSIN(this.dir);
                    }
                    projectileManager.addProjectile(this.x+(projOffset*mathCOS(this.dir)),
                                                    this.y+(projOffset*mathSIN(this.dir)), this.dir, items.projectiles[tmpIndx].range*aMlt,
                                                    items.projectiles[tmpIndx].speed*aMlt, tmpIndx, this, null, this.zIndex);
                } else {
                    worked = false;
                }
                this.gathering = this.mouseState;
                if (worked) {
                    this.reloads[this.weaponIndex] = items.weapons[this.weaponIndex].speed*(this.skin?(this.skin.atkSpd||1):1);
                }
            }
        }
    }

    // ADD WEAPON XP:
    addWeaponXP(amnt) {
        if (!this.weaponXP[this.weaponIndex])
            this.weaponXP[this.weaponIndex] = 0;
        this.weaponXP[this.weaponIndex] += amnt;
    };

    // EARN XP:
    earnXP(amount) {
        if (this.age < config.maxAge) {
            this.XP += amount;
            if (this.XP >= this.maxXP) {
                if (this.age < config.maxAge) {
                    this.age++;
                    this.XP = 0;
                    this.maxXP *= 1.2;
                } else {
                    this.XP = this.maxXP;
                }
                this.upgradePoints++;
                server.send(this.id, "16", this.upgradePoints, this.upgrAge);
                server.send(this.id, "15", this.XP, UTILS.fixTo(this.maxXP, 1), this.age);
            } else {
                server.send(this.id, "15", this.XP);
            }
        }
    };

    // CHANGE HEALTH:
    changeHealth(amount, doer) {
        if (amount > 0 && this.health >= this.maxHealth)
            return false
        if (amount < 0 && this.skin)
            amount *= this.skin.dmgMult||1;
        if (amount < 0 && this.tail)
            amount *= this.tail.dmgMult||1;
        if (amount < 0)
            this.hitTime = Date.now();
        this.health += amount;
        if (this.health > this.maxHealth) {
            amount -= (this.health - this.maxHealth);
            this.health = this.maxHealth;
        }
        if (this.health <= 0)
            this.kill(doer);
        for (var i = 0; i < players.length; ++i) {
            if (this.sentTo[players[i].id])
                server.send(players[i].id, "h", this.sid, Math.round(this.health));
        }
        if (doer && doer.canSee(this) && !(doer == this && amount < 0)) {
            server.send(doer.id, "t", Math.round(this.x),
                        Math.round(this.y), Math.round(-amount), 1);
        }
        return true;
    };

    // KILL:
    kill(doer) {
        if (doer && doer.alive) {
            doer.kills++;
            //if (doer.skin && doer.skin.goldSteal) scoreCallback(doer, Math.round(this.points / 2));
            //else scoreCallback(doer, Math.round(this.age*100*((doer.skin&&doer.skin.kScrM)?doer.skin.kScrM:1)));
            server.send(doer.id, "9", "kills", doer.kills, 1);
        }
        this.alive = false;
        server.send(this.id, "11");
        objectManager.removeAllItems(this.sid, server);
        //iconCallback();
    };

    // ADD RESOURCE:
    addResource(type, amount, auto) {
        if (!auto && amount > 0)
            this.addWeaponXP(amount);
        /*if (type == 3) {
            scoreCallback(this, amount, true);
        } else */{
            this[config.resourceTypes[type]] += amount;
            server.send(this.id, "9", config.resourceTypes[type], this[config.resourceTypes[type]], 1);
        }
    };

    // CHANGE ITEM COUNT:
    changeItemCount(index, value) {
        this.itemCounts[index] = this.itemCounts[index]||0;
        this.itemCounts[index] += value;
        server.send(this.id, "14", index, this.itemCounts[index]);
    };

    // BUILD:
    buildItem(item) {
        var tmpS = (this.scale + item.scale + (item.placeOffset||0));
        var tmpX = this.x + (tmpS * mathCOS(this.dir));
        var tmpY = this.y + (tmpS * mathSIN(this.dir));
        let worked = false;
        if (this.canBuild(item) && !(item.consume && (this.skin && this.skin.noEat))
            && (item.consume || objectManager.checkItemLocation(tmpX, tmpY, item.scale,
                                                                0.6, item.id, false, this))) {
            if (item.consume) {
                if (this.hitTime) {
                    var timeSinceHit = Date.now() - this.hitTime;
                    this.hitTime = 0;
                    if (timeSinceHit <= 120) {
                        this.shameCount++;
                        if (this.shameCount >= 8) {
                            this.shameTimer = 30000;
                            this.shameCount = 0;
                        }
                    } else {
                        this.shameCount -= 2;
                        if (this.shameCount <= 0) {
                            this.shameCount = 0;
                        }
                    }
                }
                if (this.shameTimer <= 0)
                    worked = item.consume(this);
            } else {
                worked = true;
                if (item.group.limit) {
                    this.changeItemCount(item.group.id, 1);
                }
                if (item.pps)
                    this.pps += item.pps;
                objectManager.add(gameObjects.length, tmpX, tmpY, this.dir, item.scale,
                                  item.id, item, false, this);
            }
            if (worked) {
                this.useRes(item);
                this.buildIndex = -1;
            }
        }
        return worked;
    };

    // HAS RESOURCES:
    hasRes(item, mult) {
        for (var i = 0; i < item.req.length;) {
            if (this[item.req[i]] < Math.round(item.req[i + 1] * (mult||1)))
                return false;
            i+=2;
        }
        return true;
    };

    // USE RESOURCES:
    useRes(item, mult) {
        if (config.inSandbox)
            return;
        for (var i = 0; i < item.req.length;) {
            this.addResource(config.resourceTypes.indexOf(item.req[i]), -Math.round(item.req[i+1]*(mult||1)));
            i+=2;
        }
    };

    // CAN BUILD:
    canBuild(item) {
        if (config.inSandbox)
            return true;
        if (item.group.limit && this.itemCounts[item.group.id] >= item.group.limit)
            return false;
        return this.hasRes(item);
    };

    // GATHER:
    gather() {

        // SHOW:
        this.noMovTimer = 0;

        // SLOW MOVEMENT:
        this.slowMult -= (items.weapons[this.weaponIndex].hitSlow||0.3);
        if (this.slowMult < 0)
            this.slowMult = 0;

        // VARIANT DMG:
        var tmpVariant = config.fetchVariant(this);
        var applyPoison = tmpVariant.poison;
        var variantDmg = tmpVariant.val;

        // CHECK IF HIT GAME OBJECT:
        var hitObjs = {};
        var tmpDist, tmpDir, tmpObj, hitSomething;
        var tmpList = objectManager.getGridArrays(this.x, this.y, items.weapons[this.weaponIndex].range);
        for (var t = 0; t < tmpList.length; ++t) {
            for (var i = 0; i < tmpList[t].length; ++i) {
                tmpObj = tmpList[t][i];
                if (tmpObj.active && !tmpObj.dontGather && !hitObjs[tmpObj.sid] && tmpObj.visibleToPlayer(this)) {
                    tmpDist = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - tmpObj.scale;
                    if (tmpDist <= items.weapons[this.weaponIndex].range) {
                        tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y);
                        if (UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle) {
                            hitObjs[tmpObj.sid] = 1;
                            if (tmpObj.health) {
                                if (tmpObj.changeHealth(-items.weapons[this.weaponIndex].dmg*(variantDmg)*
                                                        (items.weapons[this.weaponIndex].sDmg||1)*(this.skin&&this.skin.bDmg?this.skin.bDmg:1), this)) {
                                    for (var x = 0; x < tmpObj.req.length;) {
                                        this.addResource(config.resourceTypes.indexOf(tmpObj.req[x]), tmpObj.req[x+1]);
                                        x+=2;
                                    }
                                    objectManager.disableObj(tmpObj);
                                }
                            } else {
                                this.earnXP(4*items.weapons[this.weaponIndex].gather);
                                var count = items.weapons[this.weaponIndex].gather+(tmpObj.type==3?4:0);
                                if (this.skin && this.skin.extraGold) {
                                    this.addResource(3, 1);
                                } this.addResource(tmpObj.type, count);
                            }
                            hitSomething = true;
                            objectManager.hitObj(tmpObj, tmpDir);
                        }
                    }
                }
            }
        }

        // CHECK IF HIT PLAYER:
        for (var i = 0; i < players.length; ++i) {
            tmpObj = players[i];
            if (tmpObj != this && tmpObj.alive && !(tmpObj.team && tmpObj.team == this.team)) {
                tmpDist = UTILS.getDistance(this.x, this.y, tmpObj.x, tmpObj.y) - (tmpObj.scale * 1.8);
                if (tmpDist <= items.weapons[this.weaponIndex].range) {
                    tmpDir = UTILS.getDirection(tmpObj.x, tmpObj.y, this.x, this.y);
                    if (UTILS.getAngleDist(tmpDir, this.dir) <= config.gatherAngle) {

                        // STEAL RESOURCES:
                        var stealCount = items.weapons[this.weaponIndex].steal;
                        if (stealCount && tmpObj.addResource) {
                            stealCount = Math.min((tmpObj.points||0), stealCount);
                            this.addResource(3, stealCount);
                            tmpObj.addResource(3, -stealCount);
                        }

                        // MELEE HIT PLAYER:
                        var dmgMlt = variantDmg;
                        if (tmpObj.weaponIndex != undefined && items.weapons[tmpObj.weaponIndex].shield &&
                            UTILS.getAngleDist(tmpDir+Math.PI, tmpObj.dir) <= config.shieldAngle) {
                            dmgMlt = items.weapons[tmpObj.weaponIndex].shield;
                        }
                        var dmgVal = items.weapons[this.weaponIndex].dmg *
                            (this.skin && this.skin.dmgMultO?this.skin.dmgMultO:1) *
                            (this.tail && this.tail.dmgMultO?this.tail.dmgMultO:1);
                        var tmpSpd = (0.3 * (tmpObj.weightM||1)) + (items.weapons[this.weaponIndex].knock||0);
                        tmpObj.xVel += tmpSpd * mathCOS(tmpDir);
                        tmpObj.yVel += tmpSpd * mathSIN(tmpDir);
                        if (this.skin && this.skin.healD)
                            this.changeHealth(dmgVal * dmgMlt * this.skin.healD, this);
                        if (this.tail && this.tail.healD)
                            this.changeHealth(dmgVal * dmgMlt * this.tail.healD, this);
                        if (tmpObj.skin && tmpObj.skin.dmg && dmgMlt == 1)
                            this.changeHealth(-dmgVal * tmpObj.skin.dmg, tmpObj);
                        if (tmpObj.tail && tmpObj.tail.dmg && dmgMlt == 1)
                            this.changeHealth(-dmgVal * tmpObj.tail.dmg, tmpObj);
                        if (tmpObj.dmgOverTime && this.skin && this.skin.poisonDmg &&
                            !(tmpObj.skin && tmpObj.skin.poisonRes)) {
                            tmpObj.dmgOverTime.dmg = this.skin.poisonDmg;
                            tmpObj.dmgOverTime.time = this.skin.poisonTime||1;
                            tmpObj.dmgOverTime.doer = this;
                        } if (tmpObj.dmgOverTime && applyPoison &&
                              !(tmpObj.skin && tmpObj.skin.poisonRes)) {
                            tmpObj.dmgOverTime.dmg = 5;
                            tmpObj.dmgOverTime.time = 5;
                            tmpObj.dmgOverTime.doer = this;
                        } if (tmpObj.skin && tmpObj.skin.dmgK) {
                            this.xVel -= tmpObj.skin.dmgK * mathCOS(tmpDir);
                            this.yVel -= tmpObj.skin.dmgK * mathSIN(tmpDir);
                        } tmpObj.changeHealth(-dmgVal * dmgMlt, this, this);

                    }
                }
            }
        }

        // SEND FOR ANIMATION:
        this.sendAnimation(hitSomething?1:0);
    };

    // SEND ANIMATION:
    sendAnimation(hit) {
        for (var i = 0; i < players.length; ++i) {
            if (this.sentTo[players[i].id] && this.canSee(players[i])) {
                server.send(players[i].id, "7", this.sid, hit?1:0, this.weaponIndex);
            }
        }
    };

    // ANIMATE:
    animate(delta) {
        if (this.animTime > 0) {
            this.animTime -= delta;
            if (this.animTime <= 0) {
                this.animTime = 0;
                this.dirPlus = 0;
                tmpRatio = 0;
                animIndex = 0;
            } else {
                if (animIndex == 0) {
                    tmpRatio += delta / (this.animSpeed * config.hitReturnRatio);
                    this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.min(1, tmpRatio));
                    if (tmpRatio >= 1) {
                        tmpRatio = 1;
                        animIndex = 1;
                    }
                } else {
                    tmpRatio -= delta / (this.animSpeed * (1-config.hitReturnRatio));
                    this.dirPlus = UTILS.lerp(0, this.targetAngle, Math.max(0, tmpRatio));
                }
            }
        }
    };

    // GATHER ANIMATION:
    startAnim(didHit, index) {
        this.animTime = this.animSpeed = items.weapons[index].speed;
        this.targetAngle = (didHit?-config.hitAngle:-Math.PI);
        tmpRatio = 0;
        animIndex = 0;
    };

    // CAN SEE:
    canSee(other) {
        if (!other) return false;
        if (other.skin && other.skin.invisTimer && other.noMovTimer
            >= other.skin.invisTimer) return false;
        var dx = mathABS(other.x - this.x) - other.scale;
        var dy = mathABS(other.y - this.y) - other.scale;
        return dx <= (config.maxScreenWidth / 2) * 1.3 && dy <= (config.maxScreenHeight / 2) * 1.3;
    };

};

function encounterPlayer(p) {
    server.send("self", "2", [
        p.id,
        p.sid,
        p.name,
        p.x,
        p.y,
        p.dir,
        p.health,
        p.maxHealth,
        p.scale,
        p.skinColor
    ], player.sid == p.sid);
    p.sentTo[player.id] = true;
}

var alliances = [];
let players = [];
var ais = []
let seenPlayers = [];

let delta,
    now,
    lastUpdate = Date.now();
let lastPlayerUpdate = 0;

let playersSid = []
function gameLoop() {
    const now = Date.now();
    const delta = now - lastUpdate;
    lastUpdate = now;

    for (let i = 0; i < players.length; i++) players[i].update(delta);
    for (let i = 0; i < ais.length; i++) ais[i].update(delta);

    for (let i = 0; i < players.length; ++i) {
        let tmpObj = players[i]
        if (tmpObj && tmpObj.alive) {
            if (tmpObj.shootCount > 0) {
                tmpObj.shootCount -= delta
            } else if (tmpObj.skin && tmpObj.skin.turret) {
                var tmpPlayer, bestDst, tmpDist
                for (let i = 0; i < players.length; ++i) {
                    if (
                        players[i].alive &&
                        !(players[i].skin && players[i].skin.antiTurret) &&
                        players[i].sid !== tmpObj.sid &&
                        !(tmpObj.team && tmpObj.team == players[i].team)
                    ) {
                        tmpDist = UTILS.getDistance(tmpObj.x, tmpObj.y, players[i].x, players[i].y)
                        if (tmpDist <= tmpObj.skin.turret.range && (!tmpPlayer || tmpDist < bestDst)) {
                            bestDst = tmpDist
                            tmpPlayer = players[i]
                        }
                    }
                }
                for (let i = 0; i < ais.length; ++i) {
                    if (ais[i].alive && ais[i].hostile) {
                        tmpDist = UTILS.getDistance(tmpObj.x, tmpObj.y, ais[i].x, ais[i].y)
                        if (tmpDist <= tmpObj.skin.turret.range && (!tmpPlayer || tmpDist < bestDst)) {
                            bestDst = tmpDist
                            tmpPlayer = ais[i]
                        }
                    }
                }
                if (tmpPlayer) {
                    tmpObj.shootCount = tmpObj.skin.turret.rate
                    projectileManager.addProjectile(
                        tmpObj.x,
                        tmpObj.y,
                        UTILS.getDirection(tmpPlayer.x, tmpPlayer.y, tmpObj.x, tmpObj.y),
                        tmpObj.skin.turret.range,
                        1.5,
                        tmpObj.skin.turret.proj,
                        tmpObj
                    )
                }
            }
        }
    }

    for (let i = 0; i < objectManager.updateObjects.length; i++) {
        let tmpObj = objectManager.updateObjects[i]
        if (tmpObj.shootCount > 0) {
            tmpObj.shootCount -= delta
        } else {
            var tmpPlayer, bestDst, tmpDist
            for (let i = 0; i < players.length; ++i) {
                if (
                    players[i].alive &&
                    !(players[i].skin && players[i].skin.antiTurret) &&
                    players[i].sid !== tmpObj.owner.sid &&
                    !(tmpObj.owner.team && tmpObj.owner.team == players[i].team)
                ) {
                    tmpDist = UTILS.getDistance(tmpObj.x, tmpObj.y, players[i].x, players[i].y)
                    if (tmpDist <= tmpObj.shootRange && (!tmpPlayer || tmpDist < bestDst)) {
                        bestDst = tmpDist
                        tmpPlayer = players[i]
                    }
                }
            }
            for (let i = 0; i < ais.length; ++i) {
                if (ais[i].alive && ais[i].hostile) {
                    tmpDist = UTILS.getDistance(tmpObj.x, tmpObj.y, ais[i].x, ais[i].y)
                    if (tmpDist <= tmpObj.shootRange && (!tmpPlayer || tmpDist < bestDst)) {
                        bestDst = tmpDist
                        tmpPlayer = ais[i]
                    }
                }
            }
            if (tmpPlayer) {
                tmpObj.dir = UTILS.getDirection(tmpPlayer.x, tmpPlayer.y, tmpObj.x, tmpObj.y)
                tmpObj.shootCount = tmpObj.shootRate
                projectileManager.addProjectile(tmpObj.x, tmpObj.y, tmpObj.dir, tmpObj.shootRange, 1.5, tmpObj.projectile, tmpObj.owner, tmpObj.sid)
                server.broadcast("sp", tmpObj.sid, tmpObj.dir)
            }
        }
    }

    for (let i = 0; i < projectileManager.projectiles.length; i++) projectileManager.projectiles[i].update(delta);
    for (let i = 0; i < projectiles.length; i++) projectiles[i].update(delta);

    for (let i = 0; i < players.length; i++) {
        let tmpPlayer = players[i];
        if (!tmpPlayer) return;
        if (!tmpPlayer.canSee(players[i])) return;
        if (!player) break;
        if (!players[i].sentTo[player.id]) {
            encounterPlayer(players[i]);
            players[i].sentTo[player.id] = true;
        }
    }

    let sendObjects = [];
    for (let i = 0; i < gameObjects.length; i++) {
        if (!player) break;
        if (!gameObjects[i].sentTo[player.id]) {
            sendObjects.push(gameObjects[i]);
            gameObjects[i].sentTo[player.id] = true;
        }
    }

    if (server) {
        server.broadcast("33", players.filter(x => x.alive).map(p => [
            p.sid,
            Math.round(p.x),
            Math.round(p.y),
            UTILS.fixTo(p.dir, 2),
            p.buildIndex,
            p.weaponIndex,
            config.fetchVariant(p).id,
            p.team,
            false,
            p.skinIndex,
            p.tailIndex,
            false,
            1
        ]).flatMap(x => x));

        const tmpAiData = []
        for (let i = 0; i < ais.length; ++i) {
            let tmpObj = ais[i]
            if (tmpObj && tmpObj.alive && tmpPlayer.canSee(tmpObj)) {
                tmpAiData.push(tmpObj.sid, tmpObj.index, tmpObj.x, tmpObj.y, tmpObj.dir, tmpObj.health, tmpObj.nameIndex)
            }
        }
        server.send("self", "a", tmpAiData)

        if (sendObjects.length > 0) {
            server.send("self", "6", sendObjects.map(object => [
                object.sid,
                Math.round(object.x),
                Math.round(object.y),
                UTILS.fixTo(object.dir, 2),
                object.scale,
                ,
                object.type,
                object.owner.sid
            ]).flatMap(x => x));
        }
    }
}

function updateLeaderboard() {
    const tmpLeaderboardData = []
    for (const player of players
         .filter((player) => player.alive)
         .sort(UTILS.sortByPoints)
         .slice(0, 10)) {
        tmpLeaderboardData.push(player.sid, player.name, player.points)
    }
    server.broadcast("5", tmpLeaderboardData)
}

// Update Leaderboard
setInterval(() => {
    for (let i = 0; i < players.length; i++) {
        if (players[i].pps) {
            scoreCallback(players[i], players[i].pps)
        }
    }
    updateLeaderboard()
}, 1000)

// SEND MAP DATA
setInterval(() => {
    for (const key in tribeManager.tribes) {
        const tmpMembers = tribeManager.tribes[key].members
        const tmpPlayersID = []
        const posData = []
        for (let i = 0; i < tmpMembers.length; i++) {
            const tmpPlayer = findPlayerBySID(tmpMembers[i])
            tmpPlayersID.push(tmpPlayer.id)
            posData.push(tmpPlayer.x, tmpPlayer.y)
        }
        for (let i = 0; i < tmpPlayersID.length; i++) {
            server.send("self", "mm", posData.filter((value, index) => ![i * 2, i * 2 + 1].includes(index)))
        }
    }
    for (let i = 0; i < players.length; i++) {
        if (players[i].team == null) {
            server.send("self", "mm", 0)
        }
    }
}, 3000)

function scoreCallback(player, amount, setResource) {
    player.points += amount
    player.earnXP(amount)
    server.send("self", "9", "points", Math.round(player.points), 1)
}

function iconCallback() {
    var highestKill = 0
    var highest = null
    for (let i = 0; i < players.length; i++) {
        const player = players[i]
        player.iconIndex = 0
        if (player && player.alive && player.kills > 0 && (highest == null || highestKill < player.kills)) {
            highest = i
            highestKill = player.kill
        }
    }
    if (highest !== null) {
        players[highest].iconIndex = 1
    }
}

function addBossArenaStones(stoneCount, stoneScale, xCenter, yCenter) {
    const arenaScale = (stoneScale * stoneCount) / Math.PI
    for (let i = 0; i <= stoneCount; i++) {
        let tmpX = xCenter + arenaScale * Math.cos((i * 2 * Math.PI) / stoneCount)
        let tmpY = yCenter + arenaScale * Math.sin((i * 2 * Math.PI) / stoneCount)
        let size = UTILS.randInt(0, 1)
        if (i === 0) {
            tmpX -= 175
            size = 2
        } else if (i === stoneCount) {
            tmpX += 175
            size = 2
        }
        objectManager.add(objectManager.objects.length, tmpX, tmpY, UTILS.randFloat(-Math.PI, Math.PI), config.rockScales[size], 2, null, true, null)
    }
}

function addTree(treeCount) {
    for (let j = 0; j < treeCount; j++) {
        const tmpX = UTILS.randFloat(0, config.mapScale)
        const tmpY = UTILS.randInt(0, 1) ? UTILS.randFloat(0, 6850) : UTILS.randFloat(7550, 12000)
        const size = config.treeScales[UTILS.randInt(0, 3)]
        let overlap

        for (let i = 0; i < gameObjects.length; i++) {
            if (UTILS.getDistance(tmpX, tmpY, gameObjects[i].x, gameObjects[i].y) < 100 + size) {
                overlap = true
                break
            }
        }
        if (overlap) continue

        objectManager.add(objectManager.objects.length, tmpX, tmpY, UTILS.randFloat(-Math.PI, Math.PI), size, 0, null, true, null)
    }
}

function addBush(bushCount) {
    for (let j = 0; j < bushCount; j++) {
        const tmpX = UTILS.randFloat(0, config.mapScale)
        const tmpY = UTILS.randInt(0, 1) ? UTILS.randFloat(0, 6850) : UTILS.randFloat(7550, 12000)
        const size = config.bushScales[UTILS.randInt(0, 2)]
        let overlap

        for (let i = 0; i < gameObjects.length; i++) {
            if (UTILS.getDistance(tmpX, tmpY, gameObjects[i].x, gameObjects[i].y) < 100 + size) {
                overlap = true
                break
            }
        }
        if (overlap) continue

        objectManager.add(objectManager.objects.length, tmpX, tmpY, UTILS.randFloat(-Math.PI, Math.PI), size, 1, null, true, null)
    }
}

function addCacti(cactiCount) {
    for (let j = 0; j < cactiCount; j++) {
        const tmpX = UTILS.randFloat(0, config.mapScale)
        const tmpY = UTILS.randFloat(12000, config.mapScale)
        const size = config.bushScales[2]
        let overlap

        for (let i = 0; i < gameObjects.length; i++) {
            if (UTILS.getDistance(tmpX, tmpY, gameObjects[i].x, gameObjects[i].y) < 100 + size) {
                overlap = true
                break
            }
        }
        if (overlap) continue

        const tmpObj = objectManager.add(objectManager.objects.length, tmpX, tmpY, UTILS.randFloat(-Math.PI, Math.PI), size, 1, null, true, null)
        tmpObj.dmg = 35
    }
}

function addStoneGold(stoneCount, isStone) {
    for (let j = 0; j < stoneCount; j++) {
        const tmpX = UTILS.randFloat(0, config.mapScale)
        const tmpY = UTILS.randInt(0, 1) ? UTILS.randFloat(0, 6850) : UTILS.randFloat(7550, config.mapScale)
        const size = config.rockScales[UTILS.randInt(0, 2)]
        let overlap

        for (let i = 0; i < gameObjects.length; i++) {
            if (UTILS.getDistance(tmpX, tmpY, gameObjects[i].x, gameObjects[i].y) < 100 + size) {
                overlap = true
                break
            }
        }
        if (overlap) continue

        objectManager.add(objectManager.objects.length, tmpX, tmpY, UTILS.randFloat(-Math.PI, Math.PI), size, isStone ? 2 : 3, null, true, null)
    }
}

function addRiverStone(riverStoneCount) {
    for (let j = 0; j < riverStoneCount; j++) {
        const tmpX = UTILS.randFloat(0, config.mapScale)
        const tmpY = UTILS.randFloat(6850, 7550)
        const size = config.rockScales[UTILS.randInt(0, 2)]
        let overlap

        for (let i = 0; i < gameObjects.length; i++) {
            if (UTILS.getDistance(tmpX, tmpY, gameObjects[i].x, gameObjects[i].y) < 100 + size) {
                overlap = true
                break
            }
        }
        if (overlap) continue

        objectManager.add(objectManager.objects.length, tmpX, tmpY, UTILS.randFloat(-Math.PI, Math.PI), size, 2, null, true, null)
    }
}

function addAnimal() {
    const animalCount = [10, 10, 10, 2, 15, 2, 1, 1, 1]
    for (let i = 0; i < animalCount.length; i++) {
        for (let j = 0; j < animalCount[i]; j++) {
            aiManager.spawn(
                animalCount[i] === 1 ? config.mapScale / 2 : UTILS.randFloat(0, config.mapScale),
                animalCount[i] === 1 ? config.mapScale - config.snowBiomeTop / 2 : UTILS.randFloat(0, config.mapScale),
                Math.PI / 2,
                i
            )
        }
    }
}

// INIT SERVER

let bots = 200

const botOffset = 500;

let botId = 1;

for (let i = 0; i < bots; i++) {

    let bot = new Player("bot_" + botId, botId++, true, {
        onupdate: function() {
            const angle = UTILS.getDirection(player.x, player.y, bot.x, bot.y);
            this.dir = angle;
            this.moveDir = angle;
            this.hits = 1
        }
    });
    bot.spawn();
    bot.setUserData({
        name: "Zombie",
        skinColor: 3
    })
    bot.team = "Zombies"
    players.push(bot);
}


setInterval(gameLoop, 1000 / config.serverUpdateRate);

window.WebSocket = class {
    constructor() {
        server = {
            send: (pid, id, ...data) => {
                if (pid == player.id) {
                    this.receive(id, ...data);
                }
            },
            broadcast: (id, ...data) => {
                this.receive(id, ...data);
            }
        }
        this.events = [];
    }

    set onopen(callback) {
        callback();
        this.receive("io-init", "self");
        this.receive("id", {
            "teams": []
        });
    }

    set onmessage(callback) {
        this.receive = function(id, ...args) {
            let result = {
                data: msgpack.encode([id, args])
            };
            for (let event of this.events) event[1](result);
            callback(result);
        };
    }

    addEventListener(type, callback) {
        switch (type) {
            case "message":
                this.events.push(["message", callback]);
                break;
        }
    }

    close(reason) {
        console.log("Closed: " + reason);
    }

    send(msg) {
        const [id, data] = msgpack.decode(msg);

        if (id == "id") {
            alliances = data[0].teams;
        }

        if (id == "pp") {
            //server.send("self", "pp")
        }

        if (id == "sp") {
            player = new Player("self", 0);
            if (player) {
                player.spawn();
                player.resetResources();
                player.setUserData({
                    name: data[0].name,
                    skinColor: data[0].skinColor
                });
                player.visible = false;
                /*const location = objectManager.fetchSpawnObj(player.sid) || [UTILS.randInt(0, config.mapScale), UTILS.randInt(0, config.mapScale)]
                player.setData([player.id, player.sid, data[0].name, location[0], location[1], 0, 100, 100, config.playerScale, data[0].skin])*/
                server.send("self", "1", player.sid)
                this.receive("1", 0);
                encounterPlayer(player);
                players.push(player);
                for (let i = 0; i < 9; i++) player.earnXP(player.maxXP);
                updateLeaderboard()
            }
        }

        if (id == "rmd") {
            if (player && player.alive) {
                player.resetMoveDir();
            }
        }

        if (id == "33") {
            if (player && player.alive) {
                player.moveDir = data[0];
            }
        }

        if (id == "c") {
            if (player && player.alive) {
                if (data[1]) {
                    player.dir = data[1]
                }
                player.mouseState = data[0];
                if (data[0] && player.buildIndex == -1) {
                    player.hits++;
                }

                if (player.buildIndex >= 0) {
                    const item = items.list[player.buildIndex];

                    if (item) {
                        player.buildItem(item);
                        player.mouseState = 0;
                    }

                    if (data[1]) player.dir = data[1];
                } else {
                    player.gathering = data[0]
                }
            }
        }

        if (id == "2") {
            if (player && player.alive) {
                player.dir = data[0];
            }
        }

        if (id == "5") {
            if (player && player.alive) {
                if (data[1]) {
                    player.buildIndex = -1;
                    player.weaponIndex = data[0];
                } else {
                    var canbuild = true
                    for (let i = 0; i < items.list.length; i++) {
                        if (i === data[0]) {
                            canbuild = player.canBuild(items.list[i])
                            break
                        }
                    }
                    if (!canbuild || player.buildIndex === data[0]) {
                        player.buildIndex = -1
                    } else {
                        player.buildIndex = data[0]
                    }
                }
            }
        }

        if (id == "7") {
            if (player && player.alive) {
                if (data[0] === 0) {
                    player.lockDir = player.lockDir ? 0 : 1
                } else if (data[0] === 1) {
                    player.autoGather = player.autoGather ? 0 : 1
                }
            }
        }

        if (id == "6") {
            if (data[0] < 0 || data[0] > items.weapons.length + items.list.length) return
            if (!player || !player.alive) return
            let item = data[0];
            const upgradableItems = items.list.filter(item => item.age == player.upgrAge);
            const upgradableWeapons = items.weapons.filter(item => item.age == player.upgrAge);

            let worked = false;

            if (item <= 15) {
                if (upgradableWeapons.map(weapon => weapon.id).indexOf(item) != -1) {
                    if (upgradableWeapons.filter(weapon => weapon.type == 0).map(weapon => weapon.id).indexOf(item) != -1) {
                        if (player.buildIndex == -1 && player.weaponIndex == player.weapons[0]) {
                            player.weaponIndex = item;
                        }
                        console.log("primary update");
                        player.weapons[0] = item;
                        player.weaponXP[0] = 0;
                    } else {
                        if (player.buildIndex == -1 && player.weaponIndex == player.weapons[1]) {
                            player.weaponIndex = item;
                        }
                        console.log("secondary update");
                        player.weapons[1] = item;
                        player.weaponXP[1] = 0;
                    }
                    worked = true;
                }
                console.log(player.weapons);
            } else {
                item -= 16;
                if (upgradableItems.map(weapon => weapon.id).indexOf(item) != -1) {
                    player.items[items.list[item].group.id] = item;
                    worked = true;
                }
            }

            if (worked) {
                player.upgrAge++;

                server.send("self", "17", player.items, 0);
                server.send("self", "17", player.weapons, 1);

                if (player.age - player.upgrAge + 1) {
                    server.send("self", "16", player.age - player.upgrAge + 1, player.upgrAge);
                } else {
                    server.send("self", "16", 0, 0);
                }
            }
        }

        if (id == "13c") {
            if (!player || !player.alive) return
            if (data[0] && !(data[2] ? player.tails : player.skins)[data[1]]) {
                const item = (data[2] ? accessories : hats).find(x => x.id == data[1]);
                if (player.points >= item.price) {
                    player.addResource(3, -item.price, true);
                    player[data[2] ? "tails" : "skins"][item.id] = 1;
                }
                server.send("self", "us", false, data[1], data[2]);
            } else if (!data[0] && ((data[2] ? player.tails : player.skins)[data[1]] || !data[1])) {
                const item = data[1] ? (data[2] ? accessories : hats).find(x => x.id == data[1]) : { id: 0 };
                player[data[2] ? "setTail" : "setSkin"](item.id);
                server.send("self", "us", true, data[1], data[2]);
            }
        }

        if (id == "ch") {
            if (!player || !player.alive) return
            server.broadcast("ch", player.sid, data[0].toString())
        }

        if (id == "8") {
            if (typeof data[0] !== "string" || data[0].length <= 0) return

            if (player && player.alive) {
                if (tribeManager.getTribe(data[0]) == null) {
                    const tmpClan = tribeManager.createTribe(data[0], player)
                    server.broadcast("ac", tmpClan.getData())
                    server.send("self", "st", data[0], 1)
                }
            }
        }

        if (id == "9") {
            if (player && player.alive) {
                if (player.isLeader) {
                    server.broadcast("ad", player.team)
                    tribeManager.deleteTribe(player.team)
                } else {
                    tribeManager.getTribe(player.team).removePlayer(player)
                    server.send("self", "st", null, 0)
                }
            }
        }

        if (id == "13") {
            if (player && player.alive && player.isLeader) {
                const tmpObj = findPlayerBySID(data[0])
                if (tmpObj) {
                    tribeManager.getTribe(player.team).removePlayer(tmpObj)
                    server.send("self", "st", null, 0)
                }
            }
        }

        if (id == "10") {
            if (player && player.alive && player.isLeader) {
                const tmpClan = tribeManager.getTribe(data[0])
                if (tmpClan) {
                    let isRequestSent = false
                    for (let i = 0; i < tmpClan.joinQueue.length; i++) {
                        if (tmpClan.joinQueue[i][1] === "self") {
                            isRequestSent = true
                            break
                        }
                    }

                    if (!isRequestSent) {
                        tmpClan.joinQueue.push([player.sid, player.id])
                        server.send("self", "an", player.sid, player.name)
                    }
                }
            }
        }

        if (id == "11") {
            if (player && player.alive && player.isLeader) {
                const tmpObj = findPlayerBySID(data[0])
                const tmpClan = tribeManager.getTribe(player.team)
                if (tmpClan && tmpObj) {
                    let queue = tmpClan.joinQueue.shift()
                    if (queue[1] !== tmpObj.id) return
                    if (data[1] && tmpObj.team == null) {
                        tmpClan.addPlayer(tmpObj)
                        server.send("self", "st", player.team, 0)
                    }
                }
            }
        }

        if (id == "14") {
            if (data[0]) {
                if (player && player.alive) {
                    if (player.team) {
                        for (let i = 0; i < players.length; i++) {
                            if (players[i] && players[i].team === player.team) {
                                server.send("self", "p", player.x, player.y)
                            }
                        }
                    } else {
                        server.send("self", "p", player.x, player.y)
                    }
                }
            }
        }
    }

    error() {
        console.log();
    }
}
function setupServer() {
    config.isStarted = false
    ais = []
    players = []
    gameObjects = []
    projectiles = []
    playersSid = []
    objectManager = new ObjectManager(GameObject, gameObjects, UTILS, config, players, server)
    aiManager = new AiManager(ais, AI, players, items, objectManager, config, UTILS, scoreCallback, server)
    projectileManager = new ProjectileManager(Projectile, projectiles, players, ais, objectManager, items, config, UTILS, server)
    tribeManager = new TribeManager(Tribe, findPlayerBySID, server)

    /*server.clients.forEach((socket) => {
		if (socket.readyState === WebSocket.OPEN) {
			socket.close()
		}
	})*/

    config.canHitObj = true
    addBossArenaStones(config.totalRocks - 1, config.rockScales[1], config.mapScale / 2, config.mapScale - config.snowBiomeTop / 2)
    addTree(200)
    addBush(100)
    addCacti(20)
    addStoneGold(100, true)
    addStoneGold(10, false)
    addRiverStone(15)
    addAnimal()
}
});
