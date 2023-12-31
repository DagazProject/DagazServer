(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "grand-chess-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  var f = 0; var e = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == king)) {
           if (piece.player == player) {
               f++;
           } else {
               e++;
           }
      }
  });
  if (e < 1) return 1;
  if (f < 1) return -1;
  return checkGoals(design, board, player);
}

})();
