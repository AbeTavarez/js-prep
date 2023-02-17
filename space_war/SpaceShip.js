class SpaceShip {
    health;
    hitPoints;

    constructor(health, hitPoints) {
        this.health = health;
        this.hitPoints = hitPoints;
    }

    takeDamage(damage) {
        this.health -= damage;
    }
    getHealth() {
        return this.health;
    }
    attack() {
        return this.hitPoints;
    }
}
const ss = new SpaceShip(60, 5);
const es = new SpaceShip(50, 5);

ss.attack()
console.log(ss);
console.log(es);
