const Ship = require('./ship');

test('ship has corrent length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
})

test('hit() method increases hits count', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
})

test('isSunk() method correctly identifies a sunk ship', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test('isSunk() method returns false if ship is not yet sunk', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
})