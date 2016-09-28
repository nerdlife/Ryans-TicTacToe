gameBoard = function() {
    this.state = new ReactiveVar([0,0,0,0,0,0,0,0,0]);
    this.turn = new ReactiveVar('x');
    this.started = new ReactiveVar(false);
}
