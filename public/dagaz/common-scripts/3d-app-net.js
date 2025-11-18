(function() {

const STATE = {
    INIT: 0,
    IDLE: 1,
    WAIT: 2,
    BUZY: 3,
    EXEC: 4,
    DONE: 5,
    STOP: 6
};

var SERVICE = "/api/";

const WAIT_FRAME = 100;

let dropIndex    = 0;
let once         = false;
let onceDraw     = true;
let onceGameOver = true;
let isAnimating  = false;

var inProgress = false;
var auth = null;
var uid = null;
var bot = null;
var player_num = null;
var setup = null;
var last_move = null;
var sid = null;
var turn = 1;
var netstamp = null;
var recovery_setup = null;
var time_limit = null;
var additional_time = null;
var time_stamp = null;
var onceWinPlay = true;
var last_setup = null;
var dice = false;
var last_turn = null;

function App(canvas) {
  this.design = Dagaz.Model.getDesign();
  this.canvas = canvas;
  this.view   = Dagaz.View.getView();
  this.state  = STATE.INIT;
  this.params = [];
}

App.prototype.setState = function(state, mark) {
//console.log(this.state + ' =(' + mark + ')=>' + state);
  this.state = state;
}

var gameOver = function(text, self, player) {
  if (!Dagaz.Model.silent || (player != 0)) {
      if (!_.isUndefined(Dagaz.Controller.clearGame)) {
          Dagaz.Controller.clearGame();
      }
      if (!(localStorage.getItem('myFlags') & 1)) alert(text);
  }
}

App.prototype.gameOver = function(text, player) {
  Dagaz.Controller.Done(this.board);
  if (onceGameOver && (uid || !dice)) {
      this.view.clearControls();
      _.delay(gameOver, 2000, text, this, player);
      onceGameOver = false;
  }
}

Dagaz.Controller.createApp = function(canvas) {
  if (_.isUndefined(Dagaz.Controller.app)) {
      Dagaz.Controller.app = new App(canvas);
  }
  return Dagaz.Controller.app;
}

App.prototype.done = function() {
  if ((this.state != STATE.DONE) && (this.state != STATE.INIT)) {       
      this.setState(STATE.STOP, 1);
  } else {
      if (this.doneMessage) {
          this.gameOver(this.doneMessage, this.winPlayer);
      }
  }
}

App.prototype.setDone = function() {
  if (uid) {
      this.setState(STATE.DONE, 2);
  } else {
      this.setState(STATE.IDLE, 3);
  }
}

Dagaz.Controller.open = function(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
}

Dagaz.Controller.switchSound = function() {
  Dagaz.Controller.soundOff = Dagaz.Controller.soundOff ? false : true;
  console.log('Dagaz.Controller.soundOff = ' + Dagaz.Controller.soundOff);
}

App.prototype.getStarts = function() {
  if (_.isUndefined(this.starts)) {
      if (_.isUndefined(this.list)) {
          this.starts = [];
      } else {
          this.starts = this.list.getStarts();
      }
  }
  return this.starts;
}

App.prototype.getStops = function() {
  if (_.isUndefined(this.stops)) {
      if (_.isUndefined(this.list)) {
          this.stops = [];
      } else {
          this.stops = this.list.getStops();
      }
  }
  return this.stops;
}

App.prototype.getTargets = function() {
  if (_.isUndefined(this.targets)) {
      if (_.isUndefined(this.list)) {
          this.targets = [];
      } else {
          this.targets = this.list.getTargets();
      }
  }
  return this.targets;
}

App.prototype.getDrops = function() {
  if (_.isUndefined(this.list) || (Dagaz.Model.showDrops == 0)) {
      this.drops = [];
  } else {
      if (_.isUndefined(this.drops) || (this.drops.length == 0)) {
          this.drops = this.list.getDrops();
      }
  }
  return this.drops;
}

App.prototype.clearPositions = function() {
  delete this.starts;
  delete this.stops;
  delete this.targets;
  delete this.drops;
  this.view.clearDrops();
}

App.prototype.setPosition = function(pos) {
  this.move = this.list.setPosition(pos);
  this.clearPositions();
  this.setState(STATE.EXEC, 4);
  Canvas.style.cursor = "default";
  this.view.markPositions(Dagaz.View.markType.CURRENT, [ pos ]);
}

App.prototype.boardApply = function(move) {
  this.board = this.board.apply(move);
  if (!_.isUndefined(this.view.sync)) {
      this.view.sync(this.board);
  }
}

App.prototype.mouseLocate = function(view, pos) {
  if (isAnimating) return;
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
       if (pos !== null) {
           Canvas.style.cursor = "pointer";
       } else {
           Canvas.style.cursor = "default";
       }
  }
}

App.prototype.click = function(pos, name) {
  if (isAnimating) return;
  if (_.indexOf(this.getDrops(), +pos) >= 0) {
      this.setPosition(pos);
      return;
  }
  if (_.indexOf(this.getStarts(), +pos) >= 0) {
      this.setPosition(pos);
      const targets = this.getTargets();
      this.view.markPositions(Dagaz.View.markType.TARGET, targets);
      const starts = this.getStarts();
      this.view.setHots(_.union(starts, targets));
  }
  if (_.indexOf(this.getTargets(), +pos) >= 0) {
      this.view.markPositions(Dagaz.View.markType.TARGET, []);
      this.setPosition(pos);
      this.clearPositions();
  }
}

App.prototype.getBoard = function() {
  if (_.isUndefined(this.board)) {
      this.board = Dagaz.Model.getInitBoard();
      Dagaz.Model.Done(this.design, this.board);
  }
  return this.board;
}

App.prototype.isReady = function() {
  return this.state == STATE.IDLE;
}

Dagaz.Controller.isBuzy = function() {
  var self = Dagaz.Controller.app;
  return (self.state == STATE.BUZY);
}

Dagaz.Controller.apply = function(move, setup, limit) {
  var self = Dagaz.Controller.app;
  if (self.state == STATE.BUZY) {
      recovery_setup = setup;
      last_move = move;
      delete self.list;
      self.clearPositions();
      if (limit) {
          time_limit = limit;
      }
  }
}

Dagaz.Controller.setup = function(setup, player, limit) {
  var self = Dagaz.Controller.app;
  if (self.state == STATE.BUZY) {
      Dagaz.Model.setup(self.board, setup);
      delete self.board.moves;
      self.view.reInit(self.board);
      delete self.list;
      self.clearPositions();
      if (limit) {
          time_limit = limit;
      }
  }
}

App.prototype.setHots = function() {
  this.view.markPositions(Dagaz.View.markType.TARGET, []);
  this.list = Dagaz.Model.getMoveList(this.board);
  if (!this.list) return;
  const drops = this.getDrops();
  if (drops.length > 0) {
      this.view.setDrops(drops);
  }
  const starts = _.union(drops, this.getStarts());
  this.view.setHots(starts);
}

App.prototype.setBoard = function(board, isForced) {
  if (this.isReady() || isForced) {
      this.board = board;
      this.view.reInit(board);
      this.setHots();
      delete this.list;
      this.clearPositions();
      this.view.markPositions(Dagaz.View.markType.TARGET, []);
  }
}

App.prototype.setMove = function(move) {
  if (this.state == STATE.IDLE) {
      delete this.list;
      this.boardApply(move);
/*    var s = move.toString();
      if (!_.isUndefined(Dagaz.Model.getSetup)) {
          s = Dagaz.Model.getSetup(this.design, this.board);
      }
      addMove(move.toString(), s, uid);*/
      Dagaz.Model.Done(this.design, this.board);
      this.move = move;
      this.setState(STATE.EXEC, 5);
  }
}

var getSid = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]sid=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return null;
  }
}

var authorize = function() {
  if (auth !== null) return;
  auth = localStorage.getItem('myAuthToken');
  if (auth) {
      console.log(auth);
      return;
  }
  $.ajax({
     url: SERVICE + "auth/guest",
     type: "GET",
     dataType: "json",
     success: function(data) {
         auth = data.refresh_token;
         inProgress = false;
     },
     error: function() {
         console.log('Auth: Error!');
         window.location = '/';
     },
     statusCode: {
        500: function() {
             console.log('Auth: Internal Error!');
             window.location = '/';
        }
     }
  });
}

var recovery = function(s) {
  if (auth === null) return;
  if (sid === null) return;
  if (setup !== null) return;
  if (uid !== null) return;
  inProgress = true;
  $.ajax({
     url: SERVICE + "session/recovery",
     type: "POST",
     data: {
         id: sid,
         last_setup: s
     },
     dataType: "json",
     beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         uid = data.uid;
         if (data.ai) {
             bot = data.ai;
         }
         last_turn = data.last_turn;
         player_num = data.player_num;
         setup = data.last_setup;
         time_limit = data.time_limit;
         additional_time = data.additional_time;
         dice = !!data.is_dice;
         Dagaz.Controller.SERVER_KO = data.ko_setup;
         time_stamp = Date.now();
         console.log('Recovery: Succeed [uid = ' + uid + '], time_limit = ' + time_limit + ', additional_time = ' + additional_time);
         inProgress = false;
     },
     error: function() {
         Dagaz.Controller.app.setState(STATE.STOP, 20);
         console.log('Recovery: Error!');
     },
     statusCode: {
        401: function() {
             Dagaz.Controller.app.setState(STATE.STOP, 21);
             console.log('Recovery: Bad User!');
             window.location = '/';
        },
        404: function() {
             Dagaz.Controller.app.setState(STATE.STOP, 22);
             console.log('Recovery: Not found!');
             window.location = '/';
        },
        500: function() {
             Dagaz.Controller.app.setState(STATE.STOP, 23);
             console.log('Recovery: Internal Error!');
        }
     }
  });
}

App.prototype.acceptMove = function(move, setup, limit) {
  if (_.isUndefined(Dagaz.Controller.addMoves)) {
      last_move  = move;
      time_limit = limit;
  } else {
      if (_.isUndefined(this.top)) {
          this.top = this.board;
      }
      this.top.generate(this.design);
      var r = null;
      _.each(this.top.moves, function(m) {
          var x = m.toString() + ' ';
          if (x.startsWith(move + ' ')) {
              r = m;
          }
      });
      if (r === null) {
          Dagaz.Model.setup(this.top, setup);
      } else {
          this.top = this.top.apply(r);
      }
      Dagaz.Controller.addMoves([{
          turn_num: turn,
          branch_num: 1,
          next_player: this.top.player,
          move_str: r,
          setup_str: Dagaz.Model.getSetup(this.design, this.top),
          time_limit: limit
      }]);
  }
}

var watchMove = function() {
  if (inProgress) return;
  if (auth === null) return;
  if (sid === null) return;
  if (turn === null) return;
  if (netstamp !== null) {
      if (Date.now() - netstamp < 1000) return;
      netstamp = null;
  } else {
      netstamp = Date.now();
  }
  inProgress = true;
  $.ajax({
     url: SERVICE + "move/all/" + sid + "/" + turn,
     type: "GET",
     dataType: "json",
     beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         if (data.length > 0) {
             Dagaz.Controller.app.acceptMove(data[0].move_str, data[0].setup_str, data[0].time_limit);
             turn++;
             console.log('Watch Move: Succeed [move = ' + last_move + '], time_limit = ' + data[0].time_limit);
         }
         inProgress = false;
     },
     error: function() {
         Dagaz.Controller.app.setState(STATE.STOP, 24);
         console.log('Watch Move: Error!');
     },
     statusCode: {
        401: function() {
             Dagaz.Controller.app.setState(STATE.STOP, 25);
             console.log('Watch Move: Bad User!');
        },
        500: function() {
             Dagaz.Controller.app.setState(STATE.STOP, 26);
             console.log('Watch Move: Internal Error!');
        }
     }
  });
}

var acceptAlert = function() {
  if (auth === null) return;
  if (!sid) return;
  inProgress = true;
  $.ajax({
     url: SERVICE + "move/accept",
     type: "POST",
     data: {
         session_id: sid
     },
     dataType: "json",
     beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         console.log('Accept: Succeed');
         inProgress = false;
     },
     error: function() {
         Dagaz.Controller.app.setState(STATE.STOP, 27);
         console.log('Accept: Error!');
     },
     statusCode: {
        401: function() {
             Dagaz.Controller.app.setState(STATE.STOP, 28);
             console.log('Accept: Bad User!');
        },
        500: function() {
             Dagaz.Controller.app.setState(STATE.STOP, 29);
             console.log('Accept: Internal Error!');
        }
     }
  });
}

var sendAlert = function(result) {
  if (auth === null) return;
  if (!sid) return;
  if (!uid) return;
  inProgress = true;
  $.ajax({
     url: SERVICE + "move/alert",
     type: "POST",
     data: {
         session_id: sid,
         uid: uid,
         result_id: result
     },
     dataType: "json",
     beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         console.log('Alert: Succeed [' + result +']');
         inProgress = false;
     },
     error: function() {
         Dagaz.Controller.app.state = STATE.STOP;
         console.log('Alert: Error!');
     },
     statusCode: {
        401: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Alert: Bad User!');
        },
        500: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Alert: Internal Error!');
        }
     }
  });
}

var winGame = function() {
  if (!onceGameOver) return;
  if (auth === null) return;
  if (!uid) return;
  $.ajax({
     url: SERVICE + "session/close",
     type: "POST",
     data: {
         winner: uid
     },
     dataType: "json",
     beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         console.log('Close: Succeed');
         inProgress = false;
         Dagaz.Controller.app.setState(STATE.STOP, 6);
         acceptAlert();
     },
     error: function() {
         Dagaz.Controller.app.state = STATE.STOP;
         console.log('Close: Error!');
     },
     statusCode: {
        401: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Bad User!');
        },
        403: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Not Found!');
        },
        500: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Internal Error!');
        }
     }
  });
}

var loseGame = function() {
  if (!onceGameOver) return;
  if (auth === null) return;
  if (!uid) return;
  $.ajax({
     url: SERVICE + "session/close",
     type: "POST",
     data: {
         loser: uid
     },
     dataType: "json",
     beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         console.log('Close: Succeed');
         inProgress = false;
         Dagaz.Controller.app.setState(STATE.STOP, 7);
         acceptAlert();
     },
     error: function() {
         Dagaz.Controller.app.state = STATE.STOP;
         console.log('Close: Error!');
     },
     statusCode: {
        401: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Bad User!');
        },
        403: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Not Found!');
        },
        500: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Internal Error!');
        }
     }
  });
}

var drawGame = function() {
  if (!onceGameOver) return;
  if (auth === null) return;
  if (!uid) return;
  $.ajax({
     url: SERVICE + "session/close",
     type: "POST",
     data: {
         winner: uid,
         loser: uid
     },
     dataType: "json",
     beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         console.log('Close: Succeed');
         inProgress = false;
         Dagaz.Controller.app.setState(STATE.STOP, 8);
         acceptAlert();
     },
     error: function() {
         Dagaz.Controller.app.state = STATE.STOP;
         console.log('Close: Error!');
     },
     statusCode: {
        401: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Bad User!');
        },
        403: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Not Found!');
        },
        500: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Close: Internal Error!');
        }
     }
  });
}

var getConfirmed = function() {
  var app = Dagaz.Controller.app;
  if (inProgress) return;
  if (netstamp !== null) {
      if (Date.now() - netstamp < 1000) return;
      netstamp = null;
  }
  if (auth === null) return;
  if (!uid) return;
  if (last_move !== null) return;
  inProgress = true;
  $.ajax({
     url: SERVICE + "move/confirmed/" + uid,
     type: "GET",
     dataType: "json",
     beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         inProgress = false;
         if (data.length == 1) {
             if (data[0].result_id) {
                 var player = app.design.playerNames[app.board.player];
                 var r = data[0].result_id;
                 if (r == 1) {
                     loseGame();
                     if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                         Dagaz.Controller.play(Dagaz.Sounds.lose);
                         onceWinPlay = false;
                     }
                     Dagaz.Controller.app.setDone();
                     app.doneMessage = player + " won";
                     app.winPlayer   = app.board.player;
                     gameOver(app.doneMessage, app, app.winPlayer);
                 } else if (r == 2) {
                     winGame();
                     if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                         Dagaz.Controller.play(Dagaz.Sounds.win);
                         onceWinPlay = false;
                     }
                     Dagaz.Controller.app.setDone();
                     app.doneMessage = player + " lose";
                     app.winPlayer   = -app.board.player;
                     gameOver(app.doneMessage, app, app.winPlayer);
                 } else {
                     if ((localStorage.getItem('myFlags') & 1) || confirm("Do you agree to a draw?")) {
                         drawGame();
                         if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                             Dagaz.Controller.play(Dagaz.Sounds.draw);
                             onceWinPlay = false;
                         }
                         Dagaz.Controller.app.setDone();
                         app.doneMessage = "Draw";
                         app.winPlayer   = 0;
                         gameOver(app.doneMessage, app, app.winPlayer);
                     } else {
                         acceptAlert();
                     }
                 }
             } else {
                 Dagaz.Controller.SERVER_KO = data[0].ko_setup;
                 last_move  = data[0].move_str;
                 last_setup = data[0].setup_str;
                 time_limit = data[0].time_limit;
                 last_turn  = data[0].turn_num;
                 time_stamp = Date.now();
                 additional_time = data[0].additional_time;
                 console.log('Confirmed: Succeed [move = ' + last_move + '], time_limit = ' + time_limit + ', additional_time = ' + additional_time);
             }
         } else {
             netstamp = Date.now();
         }
     },
     error: function() {
         Dagaz.Controller.app.state = STATE.STOP;
         console.log('Confirmed: Error!');
         window.location = '';
     },
     statusCode: {
        401: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Confirmed: Bad User!');
             window.location = '/';
        },
        404: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Confirmed: Not Found!');
             window.location = '/';
        },
        500: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Confirmed: Internal Error!');
        }
     }
  });
}

var addMove = function(move, setup, id) {
  if (auth === null) return;
  if (!id) return;
  inProgress = true;
  var app = Dagaz.Controller.app;
  var design = app.design;
  var tn = null;
  if (last_turn !== null) {
      last_turn++;
      tn = last_turn;
  }
  $.ajax({
     url: SERVICE + "move",
     type: "POST",
     data: {
         uid: id,
         next_player: design.currPlayer(app.board.turn),
         move_str: move,
         setup_str: setup,
         turn_num: tn
     },
     dataType: "json",
     beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
     },
     success: function(data) {
         console.log('Move: Succeed [move = ' + move + ']');
         inProgress = false;
     },
     error: function() {
         Dagaz.Controller.app.state = STATE.STOP;
         console.log('Move: Error!');
     },
     statusCode: {
        403: function() {
             window.location = window.location;
        },
        401: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Move: Bad User!');
        },
        404: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Move: Not Found!');
        },
        500: function() {
             Dagaz.Controller.app.state = STATE.STOP;
             console.log('Move: Internal Error!');
        }
     }
  });
}

Dagaz.Controller.resign = function() {
  if (uid && !(localStorage.getItem('myFlags') & 1) && !confirm("Resign?")) return;
  loseGame();
}

Dagaz.Controller.drawOffer = function() {
  if (uid && !(localStorage.getItem('myFlags') & 1) && !confirm("Draw Offer?")) return;
  if (bot === null) {
      sendAlert(3);
  } else {
      drawGame();
      window.location = window.location;
  }
}

App.prototype.getContext = function(player, forced) {
  if (Dagaz.AI.isFriend(player_num, player)) return null;
  if (_.isUndefined(this.context)) {
      this.context = [];
  }
  if (_.isUndefined(this.context[player])) {
      this.context[player] = Dagaz.AI.createContext(this.design);
  }
  return this.context[player];
}

App.prototype.getAI = function() {
  if (_.isUndefined(this.ai)) {
      this.ai = Dagaz.AI.findBot("random",  this.params, null);
      this.ai = Dagaz.AI.findBot("common",  this.params, this.ai);
      this.ai = Dagaz.AI.findBot("smart",   this.params, this.ai);
      this.ai = Dagaz.AI.findBot("opening", this.params, this.ai);
  }
  return this.ai;
}

App.prototype.checkCaptures = function(move) {
  let f = false;
  const a = [];
  for (let i = 0; i < move.actions.length; i++) {
       const m = move.actions[i];
       if ((m[0] !== null) && (m[1] !== null) && (m[0][0] != m[1][0]) && (m[2] !== null)) {
           const piece = this.board.getPiece(m[1][0]);
           if ((piece !== null) && (piece.player != m[2][0].player)) {
               f = true;
               a.push([ [m[1][0]], null, null, m[3]]);
               m[3] = m[3] + 1;
           }
       }
       a.push(m);
  }
  if (f) {
      move.actions = a;
  }
}

App.prototype.animate = function(f) {
  isAnimating = f;
  this.state = STATE.IDLE;
}

Dagaz.AI.callback = function(result) {
  var app = Dagaz.Controller.app;
  var player = app.design.playerNames[app.board.player];
  if (app.state != STATE.WAIT) return;
  console.log("Player: " + player);
  var move = null;
  _.each(app.board.moves, function(m) {
      var x = m.toString() + ' ';
      if (x.startsWith(result + ' ')) {
          move = m;
      }
  });
  if (move === null) return;
  app.boardApply(move);
  var s = move.toString();
  if (!_.isUndefined(Dagaz.Model.getSetup)) {
      s = Dagaz.Model.getSetup(app.design, app.board);
      console.log("Setup: " + s);
  }
  if (!_.isUndefined(Dagaz.Controller.regSetup)) {
      Dagaz.Controller.regSetup(s);
  }
  Dagaz.Model.Done(app.design, app.board);
  addMove(move.toString(), s, bot);
  move.applyAll(app.view);
  app.move = move;
  app.state = STATE.EXEC;
}

App.prototype.animate = function(f) {
  isAnimating = f;
}

App.prototype.exec = function() {
  this.view.configure();
  if (onceDraw || isAnimating) {
      this.view.draw(this.canvas);
      onceDraw = false;
  }
  if (inProgress) return;
  if (this.state == STATE.STOP) {
      this.setState(STATE.IDLE, 9);
      return;
  }
  if (isAnimating) return;
  if (!onceGameOver && uid) return;
  if (this.state == STATE.INIT) {
      authorize();
      if (auth === null) return;
      if (sid === null) {
          sid = getSid();
          if (sid === null) {
              window.location = '/';
          }
      }
      var s = null;
      if (!_.isUndefined(Dagaz.Model.getSetup)) {
          s = Dagaz.Model.getSetup(this.design, this.getBoard());
      }
      if (!_.isUndefined(Dagaz.Controller.init)) {
          Dagaz.Controller.init(s, this.board.player);
      }
      recovery(s);
      if (setup && uid) {
          Dagaz.Model.setup(this.board, setup);
          this.view.reInit(this.board);
          Dagaz.Model.Done(this.design, this.board);
          setup = null;
      }
      if (player_num === null) return;
      this.setState(STATE.IDLE, 10);
  }
  if (this.state == STATE.IDLE) {
      if (Dagaz.AI.isFriend(player_num, this.board.player)) {
          if (_.isUndefined(this.list)) {
              var player = this.design.playerNames[this.board.player];
              console.log("Player: " + player);
              var s = Dagaz.Model.getSetup(this.design, this.board);
              if (!_.isUndefined(Dagaz.Model.getSetup)) {
                  console.log("Setup: " + s);
              }
              if (!_.isUndefined(Dagaz.Controller.regSetup)) {
                  Dagaz.Controller.regSetup(s);
              }
              if (!Dagaz.Controller.noDropIndex) {
                  dropIndex = 0;
              }
              this.setHots();
              var ko = [];
              if (!_.isUndefined(this.board.ko)) {
                  ko = this.board.ko;
              }
              this.view.markPositions(Dagaz.View.markType.KO, ko);
          }
      } else {
          var ctx = this.getContext(this.getBoard().player);
          var ai  = this.getAI();
          if ((ctx !== null) && (ai !== null) && (bot !== null)) {
              ai.setContext(ctx, this.board);
              var moves = Dagaz.AI.generate(ctx, ctx.board);
              if (moves.length == 0) {
                  var player = this.design.playerNames[this.board.player];
                  Dagaz.Controller.app.setDone();
                  Canvas.style.cursor = "default";
                  if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                      Dagaz.Controller.play(Dagaz.Sounds.win);
                      onceWinPlay = false;
                  }
                  winGame();
                  this.gameOver(player + " lose", -this.board.player);
                  return;
              }
              Canvas.style.cursor = "wait";
              this.timestamp = Date.now();
              var player = this.design.playerNames[this.board.player];
              var result = this.getAI().getMove(ctx);
              this.setState(STATE.WAIT, 11);
              if (result && result.move) {
                  console.log("Player: " + player);
                  result.move.applyAll(this.view);
                  this.boardApply(result.move);
                  var s = result.move.toString();
                  if (!_.isUndefined(Dagaz.Model.getSetup)) {
                      s = Dagaz.Model.getSetup(this.design, this.board);
                      console.log("Setup: " + s);
                  }
                  Dagaz.Model.Done(this.design, this.board);
                  addMove(result.move.toString(), s, bot);
                  this.move = result.move;
                  this.setState(STATE.EXEC, 12);
                  return;
              }
          } else {
              this.setState(STATE.BUZY, 13);
              this.timestamp = Date.now();
          }
      }
  }
  if (this.state == STATE.BUZY) {
      if (uid) {
          getConfirmed();
      } else {
          watchMove();
      }
      if (last_move === null) return;
      this.move = null;
      _.each(this.board.moves, function(move) {
          if (move.toString() == last_move) {
              this.move = move;
          }
      }, this);
      if (this.move === null) {
          if ((recovery_setup === null) && (last_setup !== null)) {
              recovery_setup = last_setup;
              last_setup = null;
          }
          if (recovery_setup !== null) {
              Dagaz.Controller.setup(recovery_setup);
              console.log('Buzy: Setup recovered [' + recovery_setup + ']');
              this.setState(STATE.IDLE, 14);
              recovery_setup = null;
              last_move = null;
              return;
          }
          this.setState(STATE.STOP, 15);
          var s = '';
          if (!_.isUndefined(Dagaz.Model.getSetup)) {
              s = ', setup=' + Dagaz.Model.getSetup(this.design, this.board);
          }         
          console.log('Buzy: Bad move [' + last_move + ']' + s);
          return;
      }
      if (!_.isUndefined(Dagaz.Controller.setUndoVisible)) {
          Dagaz.Controller.setUndoVisible(null);
      }
      var player = this.design.playerNames[this.board.player];
      console.log("Player: " + player);
      if (!_.isUndefined(Dagaz.Model.getSetup)) {
          console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
      }
      if (!_.isUndefined(Dagaz.Controller.regSetup)) {
          Dagaz.Controller.regSetup(s);
      }
      this.boardApply(this.move);
      Dagaz.Model.Done(this.design, this.board);
      this.setState(STATE.EXEC, 16);
      last_move = null;
  }
  if (this.state == STATE.EXEC) {
      delete Dagaz.AI.advisorStamp;
      this.setState(STATE.IDLE, 17);
      if (!_.isUndefined(this.list) && this.list.isDone()) {
          var moves = this.list.filterDrops(this.list.getMoves(), dropIndex);
          if ((moves.length == 1) && (moves[0].isDropMove())) this.move = moves[0];
      }
      if (!this.move.isPass()) {
          this.checkCaptures(this.move);
          lastPosition = null;
          if (Dagaz.Model.showMoves) {
              console.log(this.move.toString());
          }
          this.move.applyAll(this.view);
          this.setState(STATE.IDLE, 18);
      }
      if (!_.isUndefined(this.list)) {
          if (this.list.isDone() || (Dagaz.Model.completePartial && !this.move.isPass())) {
              var moves = this.list.filterDrops(this.list.getMoves(), dropIndex);
              delete this.list;
              this.view.clearDrops();
              var m = this.move;
              this.boardApply(m);
              var s = m.toString();
              if (!_.isUndefined(Dagaz.Model.getSetup)) {
                  s = Dagaz.Model.getSetup(this.design, this.board);
              }
              if (!_.isUndefined(Dagaz.Controller.regSetup)) {
                  Dagaz.Controller.regSetup(s);
              }
              addMove(m.toString(), s, uid);
              Dagaz.Model.Done(this.design, this.board);
              console.log("Debug: " + m.toString());
              if (!_.isUndefined(Dagaz.Controller.setUndoVisible)) {
                  Dagaz.Controller.setUndoVisible(uid, auth);
              }
              this.setState(STATE.IDLE, 19);
          }
      }
      if (!this.move.isPass()) {
          if (!_.isUndefined(Dagaz.Controller.play)) {
              var sound = Dagaz.Sounds.move;
              if (!_.isUndefined(this.move.sound)) {
                  sound = this.move.sound;
              }
              Dagaz.Controller.play(sound, this.board.player);
          }
      }
      if (this.board.parent !== null) {
          var g = this.board.checkGoals(this.design, this.board.parent.player);
          var message = '';
          if (_.isObject(g)) {
              message = g.message;
              g = g.result;
          }
          if (g !== null) {
              var player = this.design.playerNames[this.board.parent.player];
              Dagaz.Controller.app.setDone();
              Canvas.style.cursor = "default";
              if (g > 0) {
                  if (player_num == this.board.parent.player) {
                      winGame();
                      if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                          Dagaz.Controller.play(Dagaz.Sounds.win);
                          onceWinPlay = false;
                      }
                  } else {
                      loseGame();
                      if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                          Dagaz.Controller.play(Dagaz.Sounds.lose);
                          onceWinPlay = false;
                      }
                  }
                  this.doneMessage = player + " won" + message;
                  this.winPlayer   = this.board.parent.player;
              } else if (g < 0) {
                  if (player_num == this.board.parent.player) {
                      loseGame();
                      if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                          Dagaz.Controller.play(Dagaz.Sounds.lose);
                          onceWinPlay = false;
                      }
                  } else {
                      winGame();
                      if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                          Dagaz.Controller.play(Dagaz.Sounds.win);
                          onceWinPlay = false;
                      }
                  }
                  this.doneMessage = player + " lose" + message;
                  this.winPlayer   = -this.board.parent.player;
              } else {
                  drawGame();
                  if (!_.isUndefined(Dagaz.Controller.play) && onceWinPlay && (uid || !dice)) {
                      Dagaz.Controller.play(Dagaz.Sounds.draw);
                      onceWinPlay = false;
                  }
                  this.doneMessage = "Draw" + message;
                  this.winPlayer   = 0;
              }
              this.gameOver(this.doneMessage, this.winPlayer);
              this.done();
          }
      }
  }
}

Dagaz.Model.InitGame();
Dagaz.Controller.app = Dagaz.Controller.createApp(Canvas);

App.prototype.run = function() {
  var timestamp = Date.now();
  this.exec();
  var delta = Date.now() - timestamp;
  _.delay(function() {
     Dagaz.Controller.app.run();
  }, (delta > WAIT_FRAME) ? 0 : WAIT_FRAME - delta);
}

Dagaz.Controller.app.view.init(Dagaz.Controller.app.canvas, Dagaz.Controller.app);
Dagaz.Controller.app.run();

})();
