var newGameBoard;

Template.gameBoard.onCreated(function() {
    newGameBoard = new gameBoard();
    window.theboard = newGameBoard;
});

Template.gameBoard.helpers({
    rows: function() {
        var letsDoThis = _([0, 1, 2]).map(function(item) {
            var row = newGameBoard.state.get().slice(item*3,(item+1)*3);
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

});

gameBoard = function() {
    this.state = new ReactiveVar([0,0,0,0,0,0,0,0,0]);
}
