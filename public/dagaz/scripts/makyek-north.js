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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");

    design.addPlayer("Green", [3, 2, 1, 0]);
    design.addPlayer("Red", [0, 1, 2, 3]);

    design.addPosition("a8", [8, 1, 0, 0]);
    design.addPosition("b8", [8, 1, -1, 0]);
    design.addPosition("c8", [8, 1, -1, 0]);
    design.addPosition("d8", [8, 1, -1, 0]);
    design.addPosition("e8", [8, 1, -1, 0]);
    design.addPosition("f8", [8, 1, -1, 0]);
    design.addPosition("g8", [8, 1, -1, 0]);
    design.addPosition("h8", [8, 0, -1, 0]);
    design.addPosition("a7", [8, 1, 0, -8]);
    design.addPosition("b7", [8, 1, -1, -8]);
    design.addPosition("c7", [8, 1, -1, -8]);
    design.addPosition("d7", [8, 1, -1, -8]);
    design.addPosition("e7", [8, 1, -1, -8]);
    design.addPosition("f7", [8, 1, -1, -8]);
    design.addPosition("g7", [8, 1, -1, -8]);
    design.addPosition("h7", [8, 0, -1, -8]);
    design.addPosition("a6", [8, 1, 0, -8]);
    design.addPosition("b6", [8, 1, -1, -8]);
    design.addPosition("c6", [8, 1, -1, -8]);
    design.addPosition("d6", [8, 1, -1, -8]);
    design.addPosition("e6", [8, 1, -1, -8]);
    design.addPosition("f6", [8, 1, -1, -8]);
    design.addPosition("g6", [8, 1, -1, -8]);
    design.addPosition("h6", [8, 0, -1, -8]);
    design.addPosition("a5", [8, 1, 0, -8]);
    design.addPosition("b5", [8, 1, -1, -8]);
    design.addPosition("c5", [8, 1, -1, -8]);
    design.addPosition("d5", [8, 1, -1, -8]);
    design.addPosition("e5", [8, 1, -1, -8]);
    design.addPosition("f5", [8, 1, -1, -8]);
    design.addPosition("g5", [8, 1, -1, -8]);
    design.addPosition("h5", [8, 0, -1, -8]);
    design.addPosition("a4", [8, 1, 0, -8]);
    design.addPosition("b4", [8, 1, -1, -8]);
    design.addPosition("c4", [8, 1, -1, -8]);
    design.addPosition("d4", [8, 1, -1, -8]);
    design.addPosition("e4", [8, 1, -1, -8]);
    design.addPosition("f4", [8, 1, -1, -8]);
    design.addPosition("g4", [8, 1, -1, -8]);
    design.addPosition("h4", [8, 0, -1, -8]);
    design.addPosition("a3", [8, 1, 0, -8]);
    design.addPosition("b3", [8, 1, -1, -8]);
    design.addPosition("c3", [8, 1, -1, -8]);
    design.addPosition("d3", [8, 1, -1, -8]);
    design.addPosition("e3", [8, 1, -1, -8]);
    design.addPosition("f3", [8, 1, -1, -8]);
    design.addPosition("g3", [8, 1, -1, -8]);
    design.addPosition("h3", [8, 0, -1, -8]);
    design.addPosition("a2", [8, 1, 0, -8]);
    design.addPosition("b2", [8, 1, -1, -8]);
    design.addPosition("c2", [8, 1, -1, -8]);
    design.addPosition("d2", [8, 1, -1, -8]);
    design.addPosition("e2", [8, 1, -1, -8]);
    design.addPosition("f2", [8, 1, -1, -8]);
    design.addPosition("g2", [8, 1, -1, -8]);
    design.addPosition("h2", [8, 0, -1, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [0, 1, -1, -8]);
    design.addPosition("c1", [0, 1, -1, -8]);
    design.addPosition("d1", [0, 1, -1, -8]);
    design.addPosition("e1", [0, 1, -1, -8]);
    design.addPosition("f1", [0, 1, -1, -8]);
    design.addPosition("g1", [0, 1, -1, -8]);
    design.addPosition("h1", [0, 0, -1, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);

    design.setupSelector(2);

    design.setup("Green", "Man", 56, 1);
    design.setup("Green", "Man", 57, 1);
    design.setup("Green", "Man", 58, 1);
    design.setup("Green", "Man", 59, 1);
    design.setup("Green", "Man", 60, 1);
    design.setup("Green", "Man", 61, 1);
    design.setup("Green", "Man", 62, 1);
    design.setup("Green", "Man", 63, 1);
    design.setup("Green", "Man", 40, 1);
    design.setup("Green", "Man", 41, 1);
    design.setup("Green", "Man", 42, 1);
    design.setup("Green", "Man", 43, 1);
    design.setup("Green", "Man", 44, 1);
    design.setup("Green", "Man", 45, 1);
    design.setup("Green", "Man", 46, 1);
    design.setup("Green", "Man", 47, 1);
    design.setup("Red", "Man", 16, 1);
    design.setup("Red", "Man", 17, 1);
    design.setup("Red", "Man", 18, 1);
    design.setup("Red", "Man", 19, 1);
    design.setup("Red", "Man", 20, 1);
    design.setup("Red", "Man", 21, 1);
    design.setup("Red", "Man", 22, 1);
    design.setup("Red", "Man", 23, 1);
    design.setup("Red", "Man", 0, 1);
    design.setup("Red", "Man", 1, 1);
    design.setup("Red", "Man", 2, 1);
    design.setup("Red", "Man", 3, 1);
    design.setup("Red", "Man", 4, 1);
    design.setup("Red", "Man", 5, 1);
    design.setup("Red", "Man", 6, 1);
    design.setup("Red", "Man", 7, 1);

    design.setup("Green", "Man", 56, 2);
    design.setup("Green", "Man", 57, 2);
    design.setup("Green", "Man", 58, 2);
    design.setup("Green", "Man", 59, 2);
    design.setup("Green", "Man", 60, 2);
    design.setup("Green", "Man", 61, 2);
    design.setup("Green", "Man", 62, 2);
    design.setup("Green", "Man", 63, 2);
    design.setup("Red", "Man", 0, 2);
    design.setup("Red", "Man", 1, 2);
    design.setup("Red", "Man", 2, 2);
    design.setup("Red", "Man", 3, 2);
    design.setup("Red", "Man", 4, 2);
    design.setup("Red", "Man", 5, 2);
    design.setup("Red", "Man", 6, 2);
    design.setup("Red", "Man", 7, 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("GreenMan", "Green Man");
    view.defPiece("RedMan", "Red Man");
 
    view.defPosition("a8", 542, 542, 60, 60);
    view.defPosition("b8", 466, 542, 60, 60);
    view.defPosition("c8", 390, 542, 60, 60);
    view.defPosition("d8", 314, 542, 60, 60);
    view.defPosition("e8", 238, 542, 60, 60);
    view.defPosition("f8", 162, 542, 60, 60);
    view.defPosition("g8", 86, 542, 60, 60);
    view.defPosition("h8", 10, 542, 60, 60);
    view.defPosition("a7", 542, 466, 60, 60);
    view.defPosition("b7", 466, 466, 60, 60);
    view.defPosition("c7", 390, 466, 60, 60);
    view.defPosition("d7", 314, 466, 60, 60);
    view.defPosition("e7", 238, 466, 60, 60);
    view.defPosition("f7", 162, 466, 60, 60);
    view.defPosition("g7", 86, 466, 60, 60);
    view.defPosition("h7", 10, 466, 60, 60);
    view.defPosition("a6", 542, 390, 60, 60);
    view.defPosition("b6", 466, 390, 60, 60);
    view.defPosition("c6", 390, 390, 60, 60);
    view.defPosition("d6", 314, 390, 60, 60);
    view.defPosition("e6", 238, 390, 60, 60);
    view.defPosition("f6", 162, 390, 60, 60);
    view.defPosition("g6", 86, 390, 60, 60);
    view.defPosition("h6", 10, 390, 60, 60);
    view.defPosition("a5", 542, 314, 60, 60);
    view.defPosition("b5", 466, 314, 60, 60);
    view.defPosition("c5", 390, 314, 60, 60);
    view.defPosition("d5", 314, 314, 60, 60);
    view.defPosition("e5", 238, 314, 60, 60);
    view.defPosition("f5", 162, 314, 60, 60);
    view.defPosition("g5", 86, 314, 60, 60);
    view.defPosition("h5", 10, 314, 60, 60);
    view.defPosition("a4", 542, 238, 60, 60);
    view.defPosition("b4", 466, 238, 60, 60);
    view.defPosition("c4", 390, 238, 60, 60);
    view.defPosition("d4", 314, 238, 60, 60);
    view.defPosition("e4", 238, 238, 60, 60);
    view.defPosition("f4", 162, 238, 60, 60);
    view.defPosition("g4", 86, 238, 60, 60);
    view.defPosition("h4", 10, 238, 60, 60);
    view.defPosition("a3", 542, 162, 60, 60);
    view.defPosition("b3", 466, 162, 60, 60);
    view.defPosition("c3", 390, 162, 60, 60);
    view.defPosition("d3", 314, 162, 60, 60);
    view.defPosition("e3", 238, 162, 60, 60);
    view.defPosition("f3", 162, 162, 60, 60);
    view.defPosition("g3", 86, 162, 60, 60);
    view.defPosition("h3", 10, 162, 60, 60);
    view.defPosition("a2", 542, 86, 60, 60);
    view.defPosition("b2", 466, 86, 60, 60);
    view.defPosition("c2", 390, 86, 60, 60);
    view.defPosition("d2", 314, 86, 60, 60);
    view.defPosition("e2", 238, 86, 60, 60);
    view.defPosition("f2", 162, 86, 60, 60);
    view.defPosition("g2", 86, 86, 60, 60);
    view.defPosition("h2", 10, 86, 60, 60);
    view.defPosition("a1", 542, 10, 60, 60);
    view.defPosition("b1", 466, 10, 60, 60);
    view.defPosition("c1", 390, 10, 60, 60);
    view.defPosition("d1", 314, 10, 60, 60);
    view.defPosition("e1", 238, 10, 60, 60);
    view.defPosition("f1", 162, 10, 60, 60);
    view.defPosition("g1", 86, 10, 60, 60);
    view.defPosition("h1", 10, 10, 60, 60);
}
