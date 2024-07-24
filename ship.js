class ship{
    constructor(length){
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(){
        this.hits++;
    }

    isSunk(){
        (this.hits === this.length) ? this.sunk = true : this.sunk = false;
        return this.sunk;
    }
}

module.exports = ship;