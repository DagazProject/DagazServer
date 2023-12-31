Dagaz.Controller.persistense = "none";

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("archimedes-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a8", [0, 1, 8, 0, 0, 9, 0, 0]);
    design.addPosition("b8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("c8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("d8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("e8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("f8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("g8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("h8", [-1, 0, 8, 0, 0, 0, 7, 0]);
    design.addPosition("a7", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h7", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a6", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h6", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a5", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h5", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a4", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h4", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a3", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h3", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a2", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h2", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a1", [0, 1, 0, -7, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("h1", [-1, 0, 0, 0, -8, 0, 0, -9]);

    design.addZone("home", 2, [7]);
    design.addZone("home", 1, [56]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	10);
    design.addCommand(0, ZRF.IN_ZONE,	0);	// home
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-11);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("Man", 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [5, 5], 0);

    design.setup("White", "Man", 12);
    design.setup("White", "Man", 4);
    design.setup("White", "Man", 21);
    design.setup("White", "Man", 13);
    design.setup("White", "Man", 5);
    design.setup("White", "Man", 30);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 14);
    design.setup("White", "Man", 6);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 15);
    design.setup("Black", "Man", 48);
    design.setup("Black", "Man", 40);
    design.setup("Black", "Man", 32);
    design.setup("Black", "Man", 57);
    design.setup("Black", "Man", 49);
    design.setup("Black", "Man", 41);
    design.setup("Black", "Man", 33);
    design.setup("Black", "Man", 58);
    design.setup("Black", "Man", 50);
    design.setup("Black", "Man", 42);
    design.setup("Black", "Man", 59);
    design.setup("Black", "Man", 51);

    design.goal(0, "Black", "Man", [7]);
    design.goal(1, "White", "Man", [56]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a8", 478, 478, 68, 68);
    view.defPosition("b8", 410, 478, 68, 68);
    view.defPosition("c8", 342, 478, 68, 68);
    view.defPosition("d8", 274, 478, 68, 68);
    view.defPosition("e8", 206, 478, 68, 68);
    view.defPosition("f8", 138, 478, 68, 68);
    view.defPosition("g8", 70, 478, 68, 68);
    view.defPosition("h8", 2, 478, 68, 68);
    view.defPosition("a7", 478, 410, 68, 68);
    view.defPosition("b7", 410, 410, 68, 68);
    view.defPosition("c7", 342, 410, 68, 68);
    view.defPosition("d7", 274, 410, 68, 68);
    view.defPosition("e7", 206, 410, 68, 68);
    view.defPosition("f7", 138, 410, 68, 68);
    view.defPosition("g7", 70, 410, 68, 68);
    view.defPosition("h7", 2, 410, 68, 68);
    view.defPosition("a6", 478, 342, 68, 68);
    view.defPosition("b6", 410, 342, 68, 68);
    view.defPosition("c6", 342, 342, 68, 68);
    view.defPosition("d6", 274, 342, 68, 68);
    view.defPosition("e6", 206, 342, 68, 68);
    view.defPosition("f6", 138, 342, 68, 68);
    view.defPosition("g6", 70, 342, 68, 68);
    view.defPosition("h6", 2, 342, 68, 68);
    view.defPosition("a5", 478, 274, 68, 68);
    view.defPosition("b5", 410, 274, 68, 68);
    view.defPosition("c5", 342, 274, 68, 68);
    view.defPosition("d5", 274, 274, 68, 68);
    view.defPosition("e5", 206, 274, 68, 68);
    view.defPosition("f5", 138, 274, 68, 68);
    view.defPosition("g5", 70, 274, 68, 68);
    view.defPosition("h5", 2, 274, 68, 68);
    view.defPosition("a4", 478, 206, 68, 68);
    view.defPosition("b4", 410, 206, 68, 68);
    view.defPosition("c4", 342, 206, 68, 68);
    view.defPosition("d4", 274, 206, 68, 68);
    view.defPosition("e4", 206, 206, 68, 68);
    view.defPosition("f4", 138, 206, 68, 68);
    view.defPosition("g4", 70, 206, 68, 68);
    view.defPosition("h4", 2, 206, 68, 68);
    view.defPosition("a3", 478, 138, 68, 68);
    view.defPosition("b3", 410, 138, 68, 68);
    view.defPosition("c3", 342, 138, 68, 68);
    view.defPosition("d3", 274, 138, 68, 68);
    view.defPosition("e3", 206, 138, 68, 68);
    view.defPosition("f3", 138, 138, 68, 68);
    view.defPosition("g3", 70, 138, 68, 68);
    view.defPosition("h3", 2, 138, 68, 68);
    view.defPosition("a2", 478, 70, 68, 68);
    view.defPosition("b2", 410, 70, 68, 68);
    view.defPosition("c2", 342, 70, 68, 68);
    view.defPosition("d2", 274, 70, 68, 68);
    view.defPosition("e2", 206, 70, 68, 68);
    view.defPosition("f2", 138, 70, 68, 68);
    view.defPosition("g2", 70, 70, 68, 68);
    view.defPosition("h2", 2, 70, 68, 68);
    view.defPosition("a1", 478, 2, 68, 68);
    view.defPosition("b1", 410, 2, 68, 68);
    view.defPosition("c1", 342, 2, 68, 68);
    view.defPosition("d1", 274, 2, 68, 68);
    view.defPosition("e1", 206, 2, 68, 68);
    view.defPosition("f1", 138, 2, 68, 68);
    view.defPosition("g1", 70, 2, 68, 68);
    view.defPosition("h1", 2, 2, 68, 68);
}
