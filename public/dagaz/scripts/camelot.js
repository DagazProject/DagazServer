Dagaz.Controller.persistense = "none";
Dagaz.Model.WIDTH = 12;

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
    design.checkVersion("pass-partial", "true");
    design.checkVersion("detect-loops", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f16", [13, 12, 11, 1, 0, 0, 0, 0]);
    design.addPosition("g16", [13, 12, 11, 0, -1, 0, 0, 0]);
    design.addPosition("h16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c15", [13, 12, 11, 1, 0, 0, 0, 0]);
    design.addPosition("d15", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("e15", [13, 12, 11, 1, -1, -11, 0, 0]);
    design.addPosition("f15", [13, 12, 11, 1, -1, -11, 0, -12]);
    design.addPosition("g15", [13, 12, 11, 1, -1, 0, -13, -12]);
    design.addPosition("h15", [13, 12, 11, 1, -1, 0, -13, 0]);
    design.addPosition("i15", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("j15", [13, 12, 11, 0, -1, 0, 0, 0]);
    design.addPosition("k15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b14", [13, 12, 11, 1, 0, -11, 0, 0]);
    design.addPosition("c14", [13, 12, 11, 1, -1, -11, 0, -12]);
    design.addPosition("d14", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e14", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f14", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g14", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h14", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i14", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j14", [13, 12, 11, 1, -1, 0, -13, -12]);
    design.addPosition("k14", [13, 12, 11, 0, -1, 0, -13, 0]);
    design.addPosition("l14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a13", [13, 12, 0, 1, 0, -11, 0, 0]);
    design.addPosition("b13", [13, 12, 11, 1, -1, -11, 0, -12]);
    design.addPosition("c13", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d13", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e13", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f13", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g13", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h13", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i13", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j13", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k13", [13, 12, 11, 1, -1, 0, -13, -12]);
    design.addPosition("l13", [0, 12, 11, 0, -1, 0, -13, 0]);
    design.addPosition("a12", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k12", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l12", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a11", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l11", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a10", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l10", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a9", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l9", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a8", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l8", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a7", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l7", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a6", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l6", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l5", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a4", [13, 0, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b4", [13, 12, 0, 1, -1, -11, -13, -12]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k4", [0, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l4", [0, 0, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [13, 0, 0, 1, 0, -11, -13, -12]);
    design.addPosition("c3", [13, 12, 0, 1, -1, -11, -13, -12]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j3", [0, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k3", [0, 0, 11, 0, -1, -11, -13, -12]);
    design.addPosition("l3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 1, 0, -11, -13, -12]);
    design.addPosition("d2", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("e2", [13, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("f2", [13, 12, 0, 1, -1, -11, -13, -12]);
    design.addPosition("g2", [0, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h2", [0, 0, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i2", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("j2", [0, 0, 0, 0, -1, -11, -13, -12]);
    design.addPosition("k2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 1, 0, -11, -13, -12]);
    design.addPosition("g1", [0, 0, 0, 0, -1, -11, -13, -12]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("goal-zone", 1, [5, 6]);
    design.addZone("goal-zone", 2, [185, 186]);
    design.addZone("home-zone", 1, [185, 186]);
    design.addZone("home-zone", 2, [5, 6]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// goal-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	2);
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0, 1);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [7, 7], 1);
    design.addMove(0, 1, [6, 6], 1);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [5, 5], 1);
    design.addMove(0, 1, [4, 4], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [0, 0], 1);

    design.addPiece("Knight", 1, 10);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 1, [7, 7], 1);
    design.addMove(1, 1, [6, 6], 1);
    design.addMove(1, 1, [3, 3], 1);
    design.addMove(1, 1, [5, 5], 1);
    design.addMove(1, 1, [4, 4], 1);
    design.addMove(1, 1, [2, 2], 1);
    design.addMove(1, 1, [1, 1], 1);
    design.addMove(1, 1, [0, 0], 1);

    design.setup("White", "Knight", 122);
    design.setup("White", "Knight", 111);
    design.setup("White", "Knight", 129);
    design.setup("White", "Knight", 116);
    design.setup("White", "Man", 123);
    design.setup("White", "Man", 124);
    design.setup("White", "Man", 125);
    design.setup("White", "Man", 126);
    design.setup("White", "Man", 127);
    design.setup("White", "Man", 128);
    design.setup("White", "Man", 112);
    design.setup("White", "Man", 113);
    design.setup("White", "Man", 114);
    design.setup("White", "Man", 115);
    design.setup("Black", "Knight", 62);
    design.setup("Black", "Knight", 75);
    design.setup("Black", "Knight", 69);
    design.setup("Black", "Knight", 80);
    design.setup("Black", "Man", 63);
    design.setup("Black", "Man", 64);
    design.setup("Black", "Man", 65);
    design.setup("Black", "Man", 66);
    design.setup("Black", "Man", 67);
    design.setup("Black", "Man", 68);
    design.setup("Black", "Man", 76);
    design.setup("Black", "Man", 77);
    design.setup("Black", "Man", 78);
    design.setup("Black", "Man", 79);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
 
    view.defPosition("a16", 2, 2, 50, 50);
    view.defPosition("b16", 52, 2, 50, 50);
    view.defPosition("c16", 102, 2, 50, 50);
    view.defPosition("d16", 152, 2, 50, 50);
    view.defPosition("e16", 202, 2, 50, 50);
    view.defPosition("f16", 252, 2, 50, 50);
    view.defPosition("g16", 302, 2, 50, 50);
    view.defPosition("h16", 352, 2, 50, 50);
    view.defPosition("i16", 402, 2, 50, 50);
    view.defPosition("j16", 452, 2, 50, 50);
    view.defPosition("k16", 502, 2, 50, 50);
    view.defPosition("l16", 552, 2, 50, 50);
    view.defPosition("a15", 2, 52, 50, 50);
    view.defPosition("b15", 52, 52, 50, 50);
    view.defPosition("c15", 102, 52, 50, 50);
    view.defPosition("d15", 152, 52, 50, 50);
    view.defPosition("e15", 202, 52, 50, 50);
    view.defPosition("f15", 252, 52, 50, 50);
    view.defPosition("g15", 302, 52, 50, 50);
    view.defPosition("h15", 352, 52, 50, 50);
    view.defPosition("i15", 402, 52, 50, 50);
    view.defPosition("j15", 452, 52, 50, 50);
    view.defPosition("k15", 502, 52, 50, 50);
    view.defPosition("l15", 552, 52, 50, 50);
    view.defPosition("a14", 2, 102, 50, 50);
    view.defPosition("b14", 52, 102, 50, 50);
    view.defPosition("c14", 102, 102, 50, 50);
    view.defPosition("d14", 152, 102, 50, 50);
    view.defPosition("e14", 202, 102, 50, 50);
    view.defPosition("f14", 252, 102, 50, 50);
    view.defPosition("g14", 302, 102, 50, 50);
    view.defPosition("h14", 352, 102, 50, 50);
    view.defPosition("i14", 402, 102, 50, 50);
    view.defPosition("j14", 452, 102, 50, 50);
    view.defPosition("k14", 502, 102, 50, 50);
    view.defPosition("l14", 552, 102, 50, 50);
    view.defPosition("a13", 2, 152, 50, 50);
    view.defPosition("b13", 52, 152, 50, 50);
    view.defPosition("c13", 102, 152, 50, 50);
    view.defPosition("d13", 152, 152, 50, 50);
    view.defPosition("e13", 202, 152, 50, 50);
    view.defPosition("f13", 252, 152, 50, 50);
    view.defPosition("g13", 302, 152, 50, 50);
    view.defPosition("h13", 352, 152, 50, 50);
    view.defPosition("i13", 402, 152, 50, 50);
    view.defPosition("j13", 452, 152, 50, 50);
    view.defPosition("k13", 502, 152, 50, 50);
    view.defPosition("l13", 552, 152, 50, 50);
    view.defPosition("a12", 2, 202, 50, 50);
    view.defPosition("b12", 52, 202, 50, 50);
    view.defPosition("c12", 102, 202, 50, 50);
    view.defPosition("d12", 152, 202, 50, 50);
    view.defPosition("e12", 202, 202, 50, 50);
    view.defPosition("f12", 252, 202, 50, 50);
    view.defPosition("g12", 302, 202, 50, 50);
    view.defPosition("h12", 352, 202, 50, 50);
    view.defPosition("i12", 402, 202, 50, 50);
    view.defPosition("j12", 452, 202, 50, 50);
    view.defPosition("k12", 502, 202, 50, 50);
    view.defPosition("l12", 552, 202, 50, 50);
    view.defPosition("a11", 2, 252, 50, 50);
    view.defPosition("b11", 52, 252, 50, 50);
    view.defPosition("c11", 102, 252, 50, 50);
    view.defPosition("d11", 152, 252, 50, 50);
    view.defPosition("e11", 202, 252, 50, 50);
    view.defPosition("f11", 252, 252, 50, 50);
    view.defPosition("g11", 302, 252, 50, 50);
    view.defPosition("h11", 352, 252, 50, 50);
    view.defPosition("i11", 402, 252, 50, 50);
    view.defPosition("j11", 452, 252, 50, 50);
    view.defPosition("k11", 502, 252, 50, 50);
    view.defPosition("l11", 552, 252, 50, 50);
    view.defPosition("a10", 2, 302, 50, 50);
    view.defPosition("b10", 52, 302, 50, 50);
    view.defPosition("c10", 102, 302, 50, 50);
    view.defPosition("d10", 152, 302, 50, 50);
    view.defPosition("e10", 202, 302, 50, 50);
    view.defPosition("f10", 252, 302, 50, 50);
    view.defPosition("g10", 302, 302, 50, 50);
    view.defPosition("h10", 352, 302, 50, 50);
    view.defPosition("i10", 402, 302, 50, 50);
    view.defPosition("j10", 452, 302, 50, 50);
    view.defPosition("k10", 502, 302, 50, 50);
    view.defPosition("l10", 552, 302, 50, 50);
    view.defPosition("a9", 2, 352, 50, 50);
    view.defPosition("b9", 52, 352, 50, 50);
    view.defPosition("c9", 102, 352, 50, 50);
    view.defPosition("d9", 152, 352, 50, 50);
    view.defPosition("e9", 202, 352, 50, 50);
    view.defPosition("f9", 252, 352, 50, 50);
    view.defPosition("g9", 302, 352, 50, 50);
    view.defPosition("h9", 352, 352, 50, 50);
    view.defPosition("i9", 402, 352, 50, 50);
    view.defPosition("j9", 452, 352, 50, 50);
    view.defPosition("k9", 502, 352, 50, 50);
    view.defPosition("l9", 552, 352, 50, 50);
    view.defPosition("a8", 2, 402, 50, 50);
    view.defPosition("b8", 52, 402, 50, 50);
    view.defPosition("c8", 102, 402, 50, 50);
    view.defPosition("d8", 152, 402, 50, 50);
    view.defPosition("e8", 202, 402, 50, 50);
    view.defPosition("f8", 252, 402, 50, 50);
    view.defPosition("g8", 302, 402, 50, 50);
    view.defPosition("h8", 352, 402, 50, 50);
    view.defPosition("i8", 402, 402, 50, 50);
    view.defPosition("j8", 452, 402, 50, 50);
    view.defPosition("k8", 502, 402, 50, 50);
    view.defPosition("l8", 552, 402, 50, 50);
    view.defPosition("a7", 2, 452, 50, 50);
    view.defPosition("b7", 52, 452, 50, 50);
    view.defPosition("c7", 102, 452, 50, 50);
    view.defPosition("d7", 152, 452, 50, 50);
    view.defPosition("e7", 202, 452, 50, 50);
    view.defPosition("f7", 252, 452, 50, 50);
    view.defPosition("g7", 302, 452, 50, 50);
    view.defPosition("h7", 352, 452, 50, 50);
    view.defPosition("i7", 402, 452, 50, 50);
    view.defPosition("j7", 452, 452, 50, 50);
    view.defPosition("k7", 502, 452, 50, 50);
    view.defPosition("l7", 552, 452, 50, 50);
    view.defPosition("a6", 2, 502, 50, 50);
    view.defPosition("b6", 52, 502, 50, 50);
    view.defPosition("c6", 102, 502, 50, 50);
    view.defPosition("d6", 152, 502, 50, 50);
    view.defPosition("e6", 202, 502, 50, 50);
    view.defPosition("f6", 252, 502, 50, 50);
    view.defPosition("g6", 302, 502, 50, 50);
    view.defPosition("h6", 352, 502, 50, 50);
    view.defPosition("i6", 402, 502, 50, 50);
    view.defPosition("j6", 452, 502, 50, 50);
    view.defPosition("k6", 502, 502, 50, 50);
    view.defPosition("l6", 552, 502, 50, 50);
    view.defPosition("a5", 2, 552, 50, 50);
    view.defPosition("b5", 52, 552, 50, 50);
    view.defPosition("c5", 102, 552, 50, 50);
    view.defPosition("d5", 152, 552, 50, 50);
    view.defPosition("e5", 202, 552, 50, 50);
    view.defPosition("f5", 252, 552, 50, 50);
    view.defPosition("g5", 302, 552, 50, 50);
    view.defPosition("h5", 352, 552, 50, 50);
    view.defPosition("i5", 402, 552, 50, 50);
    view.defPosition("j5", 452, 552, 50, 50);
    view.defPosition("k5", 502, 552, 50, 50);
    view.defPosition("l5", 552, 552, 50, 50);
    view.defPosition("a4", 2, 602, 50, 50);
    view.defPosition("b4", 52, 602, 50, 50);
    view.defPosition("c4", 102, 602, 50, 50);
    view.defPosition("d4", 152, 602, 50, 50);
    view.defPosition("e4", 202, 602, 50, 50);
    view.defPosition("f4", 252, 602, 50, 50);
    view.defPosition("g4", 302, 602, 50, 50);
    view.defPosition("h4", 352, 602, 50, 50);
    view.defPosition("i4", 402, 602, 50, 50);
    view.defPosition("j4", 452, 602, 50, 50);
    view.defPosition("k4", 502, 602, 50, 50);
    view.defPosition("l4", 552, 602, 50, 50);
    view.defPosition("a3", 2, 652, 50, 50);
    view.defPosition("b3", 52, 652, 50, 50);
    view.defPosition("c3", 102, 652, 50, 50);
    view.defPosition("d3", 152, 652, 50, 50);
    view.defPosition("e3", 202, 652, 50, 50);
    view.defPosition("f3", 252, 652, 50, 50);
    view.defPosition("g3", 302, 652, 50, 50);
    view.defPosition("h3", 352, 652, 50, 50);
    view.defPosition("i3", 402, 652, 50, 50);
    view.defPosition("j3", 452, 652, 50, 50);
    view.defPosition("k3", 502, 652, 50, 50);
    view.defPosition("l3", 552, 652, 50, 50);
    view.defPosition("a2", 2, 702, 50, 50);
    view.defPosition("b2", 52, 702, 50, 50);
    view.defPosition("c2", 102, 702, 50, 50);
    view.defPosition("d2", 152, 702, 50, 50);
    view.defPosition("e2", 202, 702, 50, 50);
    view.defPosition("f2", 252, 702, 50, 50);
    view.defPosition("g2", 302, 702, 50, 50);
    view.defPosition("h2", 352, 702, 50, 50);
    view.defPosition("i2", 402, 702, 50, 50);
    view.defPosition("j2", 452, 702, 50, 50);
    view.defPosition("k2", 502, 702, 50, 50);
    view.defPosition("l2", 552, 702, 50, 50);
    view.defPosition("a1", 2, 752, 50, 50);
    view.defPosition("b1", 52, 752, 50, 50);
    view.defPosition("c1", 102, 752, 50, 50);
    view.defPosition("d1", 152, 752, 50, 50);
    view.defPosition("e1", 202, 752, 50, 50);
    view.defPosition("f1", 252, 752, 50, 50);
    view.defPosition("g1", 302, 752, 50, 50);
    view.defPosition("h1", 352, 752, 50, 50);
    view.defPosition("i1", 402, 752, 50, 50);
    view.defPosition("j1", 452, 752, 50, 50);
    view.defPosition("k1", 502, 752, 50, 50);
    view.defPosition("l1", 552, 752, 50, 50);
}
