// Elevator object

const Elevator = {
  currentFloor: 0,
  direction: 'stopped',
  targetFloor: null,
  isMoving: false,
  moveInterval: null,
  selectFloor: function(targetFloor) {
    this.targetFloor = targetFloor;
    if (this.currentFloor < this.targetFloor) {
      this.direction = 'going up';
      this.startMoving();
    } else if (this.currentFloor > this.targetFloor) {
      this.direction = 'going down';
      this.startMoving();
    } else {
      this.direction = 'stopped';
    }
    return this.direction;
  },
  startMoving: function() {
    if (this.isMoving) {
      return;
    }
    this.isMoving = true;
    this.moveInterval = setInterval(() => {
      if (this.direction === 'going up') {
        this.currentFloor++;
        console.log(`Elevator is now at floor ${this.currentFloor}`);
        if (this.currentFloor === this.targetFloor) {
          this.stopMoving();
        }
      } else if (this.direction === 'going down') {
        this.currentFloor--;
        console.log(`Elevator is now at floor ${this.currentFloor}`);
        if (this.currentFloor === this.targetFloor) {
          this.stopMoving();
        }
      }
    }, 1000);
  },
  stopMoving: function() {
    clearInterval(this.moveInterval);
    this.isMoving = false;
    this.direction = 'stopped';
    console.log('Elevator has arrived at the destination floor');
  }
};

// Panel object - can select floors and call elevator
const panel = {
  floor: null,
  pressButton: function(floor) {
    return Elevator.selectFloor(floor);
  }
}

console.log(panel.pressButton(3));

// remember last floor
// set max floors
// add basement/garage
// add penthouse with access code