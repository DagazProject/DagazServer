(function() {

Dagaz.Model.invisible    = [];
Dagaz.Model.invisibleOld = [];

var doneFlag             = false;
var currentPlayer        = 1;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "dark-cyvasse-view") {
      currentPlayer = +value;
  } else {
      checkVersion(design, name, value);
  }
}

var getSteps = function(type) {
  if (_.indexOf([0, 1, 2, 5, 7, 9], +type) >= 0) return 1;
  else if (_.indexOf([4, 6], +type) >= 0) return 2;
  else if (type == 3) return 3;
  else if (type == 8) return 4;
  else return 0;
}

Dagaz.Model.Done = function(design, board) {
  var visible = []; var steps = []; group = [];
  for (var pos = 108; pos < 216; pos++) {
      steps[pos - 108] = 0;
      var piece = board.getPiece(pos);
      if (piece === null) continue;
      if ((piece.type == 10) || (piece.player != currentPlayer)) continue;
      visible.push(pos);
      steps[pos - 108] = getSteps(piece.type);
      if (steps[pos - 108] > 0) group.push(pos);
  }
  for (var i = 0; i < group.length; i++) {
      var pos = group[i]; 
      var s = steps[pos - 108] - 1;
      if (s < 0) continue;
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(currentPlayer, pos, dir);
          if (p === null) return;
          if (_.indexOf(group, p) >= 0) {
              var x = steps[p - 108];
              if (x < s) {
                  steps[p - 108] = s;
                  group.push(p);
              }
              return;
          }
          var piece = board.getPiece(p);
          if (piece !== null) {
              if (piece.player != currentPlayer) return;
              if (piece.type == 10) return;
          }
          if (_.indexOf(visible, +p) < 0) visible.push(p);
          group.push(p);
      });
  }
  for (var pos = 108; pos < 216; pos++) {
      var piece = board.getPiece(pos);
      if (piece === null) continue;
      if (piece.player != currentPlayer) continue;
      // King, Rabble
      if (_.indexOf([0, 1], +piece.type) >= 0) {
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(currentPlayer, pos, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
          });
      }
      // Spears
      if (piece.type == 2) {
          _.each((board.player == 1) ? [4, 5] : [0, 1], function(dir) {
              var p = design.navigate(currentPlayer, pos, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
          });
      }
      // LightHorse
      if (piece.type == 3) {
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(currentPlayer, pos, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              var first = board.getPiece(p);
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              var second = board.getPiece(p);
              if ((first !== null) && (second !== null)) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              var third = board.getPiece(p);
              if (((first !== null) || (second !== null)) && (third !== null)) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
          });
      }
      // HeavyHorse
      if (piece.type == 4) {
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(currentPlayer, pos, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              var first = board.getPiece(p);
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              var second = board.getPiece(p);
              if ((first !== null) && (second !== null)) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
          });
      }
      // Elephant
      if (piece.type == 5) {
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(currentPlayer, pos, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              if (board.getPiece(p) !== null) return;
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              var piece = board.getPiece(p);
              if (piece === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
          });
      }
      // Trebuchet
      if (piece.type == 7) {
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(currentPlayer, pos, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              var piece = board.getPiece(p);
              if ((piece !== null) && (piece.player !== currentPlayer) && (piece.type != 10)) return;
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              piece = board.getPiece(p);
              if ((piece !== null) && (piece.player !== currentPlayer) && (piece.type != 10)) return;
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              piece = board.getPiece(p);
              if ((piece !== null) && (piece.player !== currentPlayer) && (piece.type != 10)) return;
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
          });
      }
      // Dragon
      if (piece.type == 8) {
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(currentPlayer, pos, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              var piece = board.getPiece(p);
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              piece = board.getPiece(p);
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
              piece = board.getPiece(p);
              p = design.navigate(currentPlayer, p, dir);
              if (p === null) return;
              if (_.indexOf(visible, +p) < 0) visible.push(p);
          });
      }
  }
  Dagaz.Model.invisible = [];
  _.each(_.range(108, 216), function(pos) {
      if (design.isKilledPos(pos)) return;
      var piece = board.getPiece(pos);
      if ((piece !== null) && (_.indexOf(visible, pos) < 0)) {
          Dagaz.Model.invisible.push(pos);
      }
  });
  var ko = [];
  _.each(_.range(108, 216), function(pos) {
      if (design.isKilledPos(pos)) return;
      if (_.indexOf(Dagaz.Model.invisible, pos) < 0) return;
      var piece = board.getPiece(pos);
      if ((piece !== null ) && (piece.player == currentPlayer)) return;
      ko.push(pos);
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
}

Dagaz.Controller.Done = function(board) {
  board.ko = [];
  doneFlag = true;
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y, setup) {
  var isSaved = false;
  if (!doneFlag && (_.indexOf(Dagaz.Model.invisible, setup.pos) >= 0)) {
      ctx.save();
      if (model.player == currentPlayer) {
          ctx.globalAlpha = 0.7;
      } else {
          ctx.globalAlpha = 0;
      }
      isSaved = true;
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (isSaved) {
      ctx.restore();
  }
}

})();
