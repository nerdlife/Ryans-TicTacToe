var board;

Template.gameBoard.onCreated(function() {
    board = new gameBoard();
    window.theboard = board;
});

Template.gameBoard.helpers({
    rows: function() {
        var letsDoThis = _([0, 1, 2]).map(function(item) {
            var row = board.state.get().slice(item*3,(item+1)*3);
            row = _(row).map(function(original, index) {
                return {
                    index: item*3+index,
                    value: original
                }
            });
            return row;
        });
        return letsDoThis;
    },
    gameOver: function() {
        return board.finished();
    },
    winner: function() {
        return board.winner();
    },
});

Template.gameBoard.events({
    'click .cell': function(evt, tmpl) {
        var position = new Number(evt.target.closest('.cell').dataset.id);
        if(board.play(position)) {
            setTimeout(function(){
                board.chooseMove();
            },600); 
        }
    },
});

Template.endOfGame.helpers({
    gameOver: function() {
        return board.finished();
    },
    winner: function() {
        return board.winner();
    },
});

Template.endOfGame.events({
    'click .play-again': function() {
        board.reset();
    },
});

Template.chosePlayer.events({
    'click .chose.mario': function() {
        board.started.set(true);
    },
    'click .chose.luigi': function() {
        board.started.set(true);
        board.chooseMove();
    },
});

Template.chosePlayer.helpers({
    started: function() {
        return board.started.get();
    }
});



