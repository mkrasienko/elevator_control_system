const floors = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const Elevator = {
  currentFloor: 0,
  direction: 'stopped',
  targetFloor: null,  
  selectFloor: function(targetFloor) {
    this.targetFloor = targetFloor;
    if(this.currentFloor < this.targetFloor) {
      this.currentFloor = targetFloor;
      this.direction = 'going up';
      return this.direction
    }else {
      this.currentFloor = targetFloor;
      this.direction = 'going down';
      return this.direction
    }
  }
}

const panel = {
  floor: null,
  direction: null,
  pressButton: function(direction) {
    Elevator.targetFloor = this.floor;
    
    // if(direction === 'going up') {
      
    // }else if(direction === 'going down') {
      
    // }
  }
}

// console.log(Elevator.selectFloor(7));
// console.log(Elevator.currentFloor);
// console.log(Elevator.selectFloor(3));
// console.log(Elevator.currentFloor);


// console.log(panel.pressButton('going_up'));
// console.log(Elevator.currentFloor);