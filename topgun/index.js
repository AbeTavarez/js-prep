console.log("Loading game...", "&#128512;");

class FighterJet {
    name;
    health;
    damage;

    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    takeDamage(damage) {
        this.health -= damage;
    }

    attack() {
        console.log(`${this.name} is attacking!`);
    }

    getHealth() {
        console.log(`${this.name} has ${this.health} health.`);
        return this.health;
    }
}

const enemy = new FighterJet("Darth Vader 🛩️", 100, 5);
const player = new FighterJet("R2-D2 ✈️", 100, 10);

// testing damage
// console.log(enemy.name);
// player.takeDamage(enemy.damage);
// console.log(player.health);

class Game {
    constructor() {
        this.players = [];
        this.enemies = [];
    }
    addPlayer(player) {
        this.players.push(player);
    }
    addEnemy(enemy) {
        this.enemies.push(enemy);
    }
    removePlayer(player) {
        this.players.splice(this.players.indexOf(player), 1);
    }
    removeEnemy(enemy) {
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
    }
    update() {
        this.players.forEach(player => {
        });
    }
    render() {
    }
    start() {
        this.players.forEach(player => {
        });
    }
    stop() {
        this.players.forEach(player => {
        });
    }
    destroy() {
        this.players.forEach(player => {
        });
    }
    getEnemies() {
        return this.enemies;
    }
    getPlayers() {
        return this.players;
    }
    getPlayerByName(name) {
        return this.players.find(player => player.name === name);
    }
    getEnemyByName(name) {
        return this.enemies.find(enemy => enemy.name === name);
    }
    getPlayerById(id) {
        return this.players.find(player => player.id === id);
    }
    getEnemyById(id) {
        return this.enemies.find(enemy => enemy.id === id);
    }

    play() {
        this.players[0].attack();
        this.enemies[0].takeDamage(this.players[0].damage);
        this.enemies[0].getHealth();
    }

}

const game = new Game();
game.addPlayer(player);
game.addEnemy(enemy);

console.log(game.getEnemies());

game.play();