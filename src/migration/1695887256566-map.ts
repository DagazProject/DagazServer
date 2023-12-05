import {MigrationInterface, QueryRunner} from "typeorm";

export class map1695887256566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(1, 'Abalone', 'abalone', 'abalone-1', 'https://en.wikipedia.org/wiki/Abalone_(board_game)', '1987 Michel Lalet and Laurent Levi')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules, copyright) values(2, 'Adiyukh Checkers', 'adiuh-checkers', 'https://ru.wikipedia.org/wiki/Столбовые_шашки#Шашки_Адиюх', '2007 Viktor Pankovich')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(3, 'Agon', 'agon', 'agon', 'http://www.kruzno.com/Agon.html')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(4, 'Alapo', 'alapo', 'alapo', 'https://www.chessvariants.com/small.dir/alapo.html', '1982 Johannes Tranelis')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(5, 'Alquerque', 'alquerque', 'https://en.wikipedia.org/wiki/Alquerque')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview) values(6, 'Altai Shatra', 'shatra', 'shatra-1')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(7, 'Amazons', 'amazons', 'amazons', 'http://www.iggamecenter.com/info/en/amazons.html', '1988 Walter Zamkauskas')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(8, 'Andalusia', 'andalusia', 'andalusia', 'https://www.zillions-of-games.com/cgi-bin/zilligames/submissions.cgi?do=show;id=1733', '2009 Chris Huntoon')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(9, 'Archimedes', 'archimedes', 'archimedes', 'http://www.di.fc.ul.pt/~jpn/gv/archimedes.htm', '1988 Scott Marley and Philip Cohen')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(10, 'Backgammon', 'backgammon', 'https://bkgm.com/rules.html')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(11, 'Banqi', 'banqi', 'https://en.wikipedia.org/wiki/Banqi')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(12, 'Bizingo', 'bizingo', 'bizingo', 'https://en.wikipedia.org/wiki/Bizingo')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(13, 'Bushi', 'bushi', 'bushi', '1970 Henri Sala')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(14, 'Camelot', 'camelot', 'camelot', 'https://en.wikipedia.org/wiki/Camelot_(board_game)', '1930 George S. Parker')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(15, 'Captain''s Mistress', 'connect-four', 'connect-four', 'https://en.wikipedia.org/wiki/Connect_Four', '1974 Milton Bradley')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(16, 'Chaturanga', 'chaturanga', 'https://en.wikipedia.org/wiki/Chaturanga')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(17, 'Checkers', 'russian-checkers-1', 'https://en.wikipedia.org/wiki/Checkers')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules, copyright) values(18, 'Cheskers', 'cheskers-8x8', 'https://en.wikipedia.org/wiki/Cheskers', '1948 Solomon W. Golomb')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(19, 'Chess', 'chess-1', 'https://en.wikipedia.org/wiki/Chess')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(20, 'Chessball', 'chessball', 'chessball', '1957 Kamzolov J.N.')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(21, 'Chessence', 'chessence', 'chessence', 'https://en.wikipedia.org/wiki/Chessence', '2000 Jason D. Wittman')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(22, 'Chess Go', 'chess-go', 'chess-go', '2020 Valentin Chelnokov')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(23, 'Cinc Camins', 'cinc-camins', 'cinc-camins', 'https://en.wikipedia.org/wiki/Cinc_Camins')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(24, 'Co Ganh', 'co-ganh', 'co-ganh', 'https://vi.wikipedia.org/wiki/C%E1%BB%9D_g%C3%A1nh')`);
        await queryRunner.query(`insert into game_map(id, name, preview) values(25, 'Connect games', 'hex')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(26, 'Column Checkers', 'column-checkers', 'https://en.wikipedia.org/wiki/Bashni')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(27, 'Dodgem', 'dodgem', 'dodgem', 'http://www.di.fc.ul.pt/~jpn/gv/dodgem.htm', '1972 Colin Vout')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(28, 'Dropper', 'dropper-10x10', 'dropper-10x10', 'https://andreachia.wordpress.com/2023/04/01/dropper/', 'Andrea Chia')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(29, 'Duel', 'duel', 'duel-1', 'Parker Brothers')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(30, 'Elementals', 'elementals', 'elementals-1', '2017 Valentin Chelnokov')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(31, 'Escalation', 'escalation', 'escalation', '1973 G. P. Jelliss')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(32, 'Euclid', 'euclid', 'euclid-1', 'http://www.di.fc.ul.pt/~jpn/gv/euclid.htm', '2003 Chris Huntoon')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules, copyright) values(33, 'Fairy Eater Chess', 'fairy-eater', 'https://fairyeaterchess.blogspot.com/2021/12/welcome-to-world-of-fairy-eater-chess.html#more', '2021 Vadrya Pokshtya')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview) values(34, 'Dafang', 'dafang', 'dafang')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview) values(35, 'Fangyuan TiaoQi', 'fangyuan-tiaoqi', 'fangyuan-tiaoqi')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(36, 'Fanorona', 'fanorona', 'fanorona', 'https://en.wikipedia.org/wiki/Fanorona')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(37, 'Four Field Kono', 'kono', 'kono', 'http://www.di.fc.ul.pt/~jpn/gv/kono2.htm')`);
        await queryRunner.query(`insert into game_map(id, name, preview) values(38, 'Fox and Geese', 'fox-and-geese-british')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(39, 'Gala', 'gala', 'gala', 'https://www.chessvariants.com/historic.dir/gala.html')`);        
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(40, 'Gate', 'gate', 'gate', 'http://www.iggamecenter.com/info/en/gate.html', '2010 Gregory Keith Van Patten')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(41, 'Gauntlet', 'gauntlet', 'gauntlet', 'http://homepages.di.fc.ul.pt/~jpn/gv/gauntlet.htm', '1980 Phillip L. Leduc')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(42, 'GESS', 'gess', 'gess', 'https://en.wikipedia.org/wiki/Gess', '1994 Puzzles and Games Ring of The Archimedeans')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(43, 'Go', 'go-19x19', 'https://en.wikipedia.org/wiki/Rules_of_Go')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(44, 'Grand Dice Chess', 'grand-dice-chess', 'grand-dice-chess', 'https://granddicechess.blogspot.com/2022/01/grand-dice-chess.html', '2021 Vadrya Pokshtya')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(45, 'Hexagonal Chess', 'glinski', 'https://en.wikipedia.org/wiki/Hexagonal_chess')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules, copyright) values(46, 'Halma', 'halma-8', 'http://www.iggamecenter.com/info/en/halma.html', '1883 George Howard Monks')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(47, 'Hanga Roa', 'hanga-roa', 'hanga-roa', 'https://www.chessvariants.com/other.dir/hanga_roa/hanga_roa.html', 'Hernan Marcelo Dominguez Placencia and Juan Pablo Schweitzer Kirsinger')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(48, 'Hiashatar', 'hiashatar', 'hiashatar', 'https://en.wikipedia.org/wiki/Hiashatar')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(49, 'Hnefatafl', 'tafl-1', 'https://en.wikipedia.org/wiki/Tafl_games')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(50, 'Janggi', 'janggi', 'https://en.wikipedia.org/wiki/Janggi')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(51, 'Jasir', 'jasir', 'jasir', 'https://en.wikipedia.org/wiki/Jarmo_(game)')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(52, 'Jeson Mor', 'jeson-mor', 'jeson-mor', 'https://en.wikipedia.org/wiki/Jeson_Mor')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(53, 'Jungle', 'jungle', 'jungle', 'https://en.wikipedia.org/wiki/Jungle_(board_game)')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview) values(54, 'Khans', 'khans', 'khans')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(55, 'Lines of Action', 'loa', 'loa-1', 'http://www.iggamecenter.com/info/en/loa.html', 'Claude Soucie')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(56, 'Makruk', 'makruk', 'makruk', 'https://en.wikipedia.org/wiki/Makruk')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(57, 'Makyek', 'makyek', 'makyek-1', 'https://en.wikipedia.org/wiki/Mak-yek')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(58, 'Mana', 'mana', 'mana-1', 'http://www.zillions-of-games.com/cgi-bin/zilligames/submissions.cgi?do=show;id=2462', '2005 Claude Leroy')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(59, 'Mancala', 'oware', 'https://mancala.fandom.com/wiki/Category:Traditional_Mancala_Games')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(60, 'Martian Chess', 'martian-chess', 'martian', 'https://en.wikipedia.org/wiki/Martian_chess', '1999 Andrew Looney')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(61, 'Ming-Mang', 'ming-mang-17x17', 'http://homepages.di.fc.ul.pt/~jpn/gv/mingmang.htm')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(62, 'Morris', '9-men', 'https://en.wikipedia.org/wiki/Nine_Men%27s_Morris')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(63, 'Nam Dinh', 'nam-dinh', 'nam-dinh', 'http://mlwi.magix.net/bg/nam_dinh.htm')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(64, 'Neutron', 'neutron', 'neutron-4', 'https://en.wikipedia.org/wiki/Neutron_(game)', '1978 Robert A. Kraus')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(65, 'Not Chess', 'not-chess', 'not-chess', 'http://www.di.fc.ul.pt/~jpn/gv/notchess.htm', '2003 Ronald Brierley')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(66, 'Nubia', 'nubia', 'nubia', '2009 Chris Huntoon')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(67, 'Ordo', 'ordo', 'ordo', 'http://www.iggamecenter.com/info/en/ordo.html', '2009 Dieter Stein')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(68, 'Pasang', 'pasang', 'pasang-1', 'https://en.wikipedia.org/wiki/Pasang_(game)')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(69, 'Puluc', 'puluc', 'puluc', 'https://en.wikipedia.org/wiki/Bul_(game)')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(70, 'Renju', 'renju', 'https://en.wikipedia.org/wiki/Renju')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(71, 'Reversi', 'reversi', 'reversi-1', 'https://en.wikipedia.org/wiki/Reversi')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(72, 'Rithmomachia', 'rithmomachia', 'rithm-1', 'http://www.boardspace.net/rithmomachy/english/rules.html')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(73, 'Seega', 'seega', 'http://www.cyningstan.com/game/120/seega')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(74, 'Senet', 'senet', 'senet', 'https://en.wikipedia.org/wiki/Senet')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(75, 'Shatranj', 'shatranj-93', 'https://en.wikipedia.org/wiki/Shatranj')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(76, 'Shen', 'shen', 'shen', 'https://en.wikipedia.org/wiki/Hounds_and_Jackals')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(77, 'Shogi', 'shogi-1', 'https://en.wikipedia.org/wiki/Shogi')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(78, 'Sittuyin', 'sittuyin', 'sittuyin', 'https://en.wikipedia.org/wiki/Sittuyin')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules, copyright) values(79, 'Sovereign Chess', 'sovereign-chess', 'https://en.wikipedia.org/wiki/Sovereign_Chess', 'Mark Bates, Infinite Pi Games')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(80, 'Spock', 'spock', 'spock', '2017 Valentin Chelnokov')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(81, 'Stations', 'stations', 'stations', '2001 L. Lynn Smith')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(82, 'Straits', 'straits', 'straits', 'https://www.chess.com/blog/Pokshtya/chess-variant-from-1893', '1893 Anna Marriott Watson')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(83, 'Stratego', 'stratego', 'https://en.wikipedia.org/wiki/Stratego')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(84, 'Suffragetto', 'suff', 'suff', 'http://suffrajitsu.com/play-suffragetto-online-the-1909-suffragettes-vs-police-board-game-meets-the-digital-age/', '1908 Women''s Social and Political Union')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(85, 'Surakarta', 'surakarta', 'surakarta', 'https://en.wikipedia.org/wiki/Surakarta_(game)')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(86, 'Three Crowns', 'three-crowns', 'three-crowns', 'http://www.di.fc.ul.pt/~jpn/gv/3crowns.htm', '2001 Larry Back')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(87, 'Three Musketeers', 'musketeers', 'musketeers', 'http://www.di.fc.ul.pt/~jpn/gv/3musketeers.htm', 'Haar Hoolim')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(88, 'Thud!', 'thud', 'thud', 'https://en.wikipedia.org/wiki/Games_of_the_Discworld#Thud', '2002 Trevor Truran')`);
        await queryRunner.query(`insert into game_map(id, name, preview) values(89, 'Tile Chess', 'tile-chess')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(90, 'Toguz Kumalak', 'toguz-kumalak', 'toguz-kumalak', 'https://mancala.fandom.com/wiki/Toguz_Kumalak')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(91, 'Turnover', 'turnover', 'turnover-1', 'https://www.chessvariants.com/rules/turnover', '2019 Lucio Jose Patrocinio Filho')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(92, 'Ultima', 'ultima', 'ultima', 'https://www.chessvariants.com/other.dir/ultima.html', '1962 Robert Abbott')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules, copyright) values(93, 'Ur', 'ur', 'ur', 'https://www.ancientgames.org/royal-game-ur-game-20-squares/', '2011 Dmitry Skyruk')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, copyright) values(94, 'Walhall', 'walhall', 'walhall-3', '2017 Valentin Chelnokov')`);
        await queryRunner.query(`insert into game_map(id, name, filename, preview, rules) values(95, 'Watermelon Chess', 'watermelon', 'watermelon-1', 'https://sites.google.com/site/boardandpieces/list-of-games/watermelon-chess')`);
        await queryRunner.query(`insert into game_map(id, name, preview, rules) values(96, 'XiangQi', 'xiangqi', 'https://en.wikipedia.org/wiki/Xiangqi')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(201, 2, 'Adiyukh Checkers (8x8)', 'adiuh-checkers', 'adiuh-checkers', 'https://ru.wikipedia.org/wiki/Столбовые_шашки#Шашки_Адиюх', '2007 Viktor Pankovich')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(202, 2, 'Adiyukh Checkers (8x10)', 'adiuh-checkers-8x10', 'adiuh-checkers-8x10', 'https://ru.wikipedia.org/wiki/Столбовые_шашки#Шашки_Адиюх', '2007 Viktor Pankovich')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(203, 2, 'Adiyukh Checkers (10x10)', 'adiuh-checkers-10x10', 'adiuh-checkers-10x10', 'https://ru.wikipedia.org/wiki/Столбовые_шашки#Шашки_Адиюх', '2007 Viktor Pankovich')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(204, 2, 'Tavrida', 'tavrida-8x10', 'adiuh-checkers-8x10', '2007 Viktor Pankovich')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(205, 2, 'Stavropol Adiyukh Checkers (8x8)', 'stavropol-adiuh-checkers', 'adiuh-checkers', '2007 Viktor Pankovich')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(501, 5, 'Alquerque', 'alquerque', 'alquerque', 'https://en.wikipedia.org/wiki/Alquerque')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(502, 5, 'Double Alquerque', 'double-alquerque', 'double-alquerque', 'https://en.wikipedia.org/wiki/Alquerque')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(503, 5, 'Dablot Frostviken (Child)', 'dablot-child', 'dablot-child', 'https://en.wikipedia.org/wiki/Dablot_Prejjesne')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(504, 5, 'Dablot Frostviken', 'dablot-frostviken', 'dablot-frostviken', 'https://en.wikipedia.org/wiki/Dablot_Prejjesne')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(505, 5, 'Dablot Asele', 'dablot-asele', 'dablot-asele', 'https://en.wikipedia.org/wiki/Dablot_Prejjesne')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(506, 5, 'Dablot Dares', 'dablot-dares', 'dablot-dares', 'https://en.wikipedia.org/wiki/Dablot_Prejjesne')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(507, 5, 'Dablot Prejjesne', 'dablot-prejjesne', 'dablot-prejjesne', 'https://en.wikipedia.org/wiki/Dablot_Prejjesne')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(508, 5, 'Kharbaga', 'kharbaga', 'kharbaga', 'https://en.wikipedia.org/wiki/Kharbaga')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(509, 5, 'Zamma', 'zamma', 'zamma', 'https://en.wikipedia.org/wiki/Zamma')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(510, 5, 'Permainan Tabal', 'permainan-tabal', 'permainan-tabal', 'https://en.wikipedia.org/wiki/Permainan-Tabal')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(511, 5, 'Kolowisi Awithlaknannai', 'serpents', 'serpents', 'https://www.bead.game/games/traditional/fighting-serpents')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1001, 10, 'Hypergammon', 'hypergammon', 'hypergammon', 'https://bkgm.com/variants/HyperBackgammon.html')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1002, 10, 'Backgammon', 'backgammon', 'backgammon', 'https://bkgm.com/rules.html')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1003, 10, 'Jacquet', 'jacquet', 'jacquet', 'https://www.bkgm.com/variants/Jacquet.html')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1101, 11, 'Chinese Banqi', 'banqi-chinese', 'banqi', 'https://en.wikipedia.org/wiki/Banqi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1102, 11, 'Taiwanese Banqi', 'banqi-taiwanese', 'banqi', 'https://en.wikipedia.org/wiki/Banqi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1103, 11, 'Large Banqi', 'banqi-large', 'banqi-large', 'https://en.wikipedia.org/wiki/Banqi')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1601, 16, 'Chaturanga', 'chaturanga', 'chaturanga', 'https://en.wikipedia.org/wiki/Chaturanga')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1602, 16, 'Chaturaji', 'chaturaji', 'chaturaji', 'https://en.wikipedia.org/wiki/Chaturaji')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1701, 17, 'English Checkers', 'english-checkers', 'english-checkers', 'https://en.wikipedia.org/wiki/English_draughts')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1702, 17, 'Italian Checkers', 'italian-checkers', 'italian', 'https://en.wikipedia.org/wiki/Italian_draughts')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1703, 17, 'Italian Damone', 'italian-damone', 'damone', 'https://en.wikipedia.org/wiki/Italian_Damone')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1704, 17, 'Spanish Checkers', 'spanish-checkers', 'italian')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1705, 17, 'Thai Checkers', 'thai-checkers', 'thai-checkers', 'https://checkers.fandom.com/wiki/Mak-hot')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1706, 17, 'Russian Checkers', 'russian-checkers', 'russian-checkers-1', 'https://en.wikipedia.org/wiki/Russian_draughts')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1707, 17, 'Samoedy', 'samoedy', 'russian-checkers-1')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1708, 17, 'Stavropol Checkers', 'stavropol-checkers', 'russian-checkers-1')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1709, 17, '80 Cells Checkers', '80-cells-checkers', '80-cells-checkers', 'https://en.wikipedia.org/wiki/Russian_draughts', 'Nikolay Spancireti 1916-1991')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1710, 17, 'International Checkers', 'international-checkers', 'international-checkers', 'https://en.wikipedia.org/wiki/International_draughts')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1711, 17, 'Frisian Checkers', 'frisian-checkers', 'international-checkers', 'https://en.wikipedia.org/wiki/Frisian_draughts')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1712, 17, 'Canadian Checkers', 'canadian-checkers', 'canadian', 'https://en.wikipedia.org/wiki/Canadian_checkers')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1713, 17, 'Constitutional Checkers', 'constitutional-checkers', 'international-checkers', '2020 Michal Zapala')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1714, 17, 'Cyclic Checkers', 'cyclic-checkers', 'russian-checkers-1', 'Victor Bajguzhakov')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1715, 17, 'Turkish Dama', 'turkish-dama', 'turkish-dama', 'https://en.wikipedia.org/wiki/Turkish_draughts')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1716, 17, 'Greek Checkers', 'greek-checkers', 'turkish-dama')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1717, 17, 'Armenian Tama', 'armenian-tama', 'armenian', 'https://en.wikipedia.org/wiki/Armenian_draughts')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1718, 17, 'Kentish Draughts', 'kentish-draughts', 'kentish-draughts', '1985 Chris Munns')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1719, 17, 'Harzdame', 'harzdame', 'harzdame', 'http://www.iggamecenter.com/info/de/harzdame.html', '2009 Benedikt Rosenau')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1720, 17, 'Dameo', 'dameo', 'dameo', 'http://www.iggamecenter.com/info/en/dameo.html', '2000 Christian Freeling')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1721, 17, 'Lika', 'lika', 'russian-checkers-1', '2000 Oleg Adibekov')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1722, 17, 'Werewolf Checkers', 'werewolf-checkers', 'russian-checkers-1', 'https://granddicechess.livejournal.com/9075.html', '2023 Vadrya Pokshtya')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1723, 17, 'MetaCheckers', 'metacheckers', 'metacheckers', 'https://granddicechess.livejournal.com/9604.html', '2023 Vadrya Pokshtya')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1724, 17, 'North American Checkers', 'north-american-checkers', 'english-checkers')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1725, 17, 'Alaska Checkers', 'alaska-checkers', 'russian-checkers-1')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1726, 17, 'Pskov Checkers', 'pskov-checkers', 'pskov-checkers')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1727, 17, 'Shafran''s Checkers', 'shafran-checkers', 'shafran', 'Isaak Shafran')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1801, 18, 'Cheskers 8x8', 'cheskers-8x8', 'cheskers-8x8', 'https://en.wikipedia.org/wiki/Cheskers', '1948 Solomon W. Golomb')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1802, 18, 'Cheskers 9x9', 'cheskers-9x9', 'cheskers-9x9', 'Peter Aronson')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1803, 18, 'Cheskers 10x10', 'cheskers-10x10', 'cheskers-10x10-1', 'Peter Aronson')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1901, 19, 'Knight''s Court', 'knights-court', 'knights-court', 'https://www.chessvariants.com/small.dir/knightcourt.html', '2000 Jason D. Wittman')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1902, 19, 'Silverman''s Chess', 'silverman-chess', 'silverman', '1981 David Silverman')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1903, 19, 'Micro Chess', 'micro-chess', 'micro-chess-1', 'https://en.wikipedia.org/wiki/Minichess', '1997 Glimne')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1904, 19, 'Mini Chess', 'mini-chess', 'mini-chess-1', 'https://en.wikipedia.org/wiki/Minichess')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1905, 19, 'Gardner''s Chess', 'gardner-chess', 'gardner-1', 'https://en.wikipedia.org/wiki/Minichess', '1969 Martin Gardner')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1906, 19, 'Los Alamos Chess', 'los-alamos-chess', 'los-alamos', 'https://en.wikipedia.org/wiki/Los_Alamos_chess', '1956 Paul Stein, Mark Wells')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1907, 19, 'Demi Chess', 'demi-chess', 'demi-chess', 'https://en.wikipedia.org/wiki/Minichess', '1986 Peter Krystufek')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1908, 19, 'Courier Chess', 'courier-chess', 'courier-chess-1', 'https://en.wikipedia.org/wiki/Courier_chess')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1909, 19, 'Short Assize', 'short-assize', 'short-assize', 'https://en.wikipedia.org/wiki/Short_assize')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1910, 19, 'Maharadja', 'maharadja', 'maharadja-1')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1911, 19, 'Chess', 'chess', 'chess-1', 'https://en.wikipedia.org/wiki/Chess')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1912, 19, 'Dark Chess', 'dark-chess', 'dark-chess', 'https://en.wikipedia.org/wiki/Chess')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1913, 19, 'Romantic Chess', 'romantic-chess', 'chess-1', 'Michal Ryszard Wojcik')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1914, 19, 'Chess960', 'fisher-chess', 'fisher-chess', 'https://en.wikipedia.org/wiki/Fischer_random_chess', '1996 Bobby Fischer')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1915, 19, 'Bomb Chess', 'bomb-chess', 'bomb-chess-1', 'https://en.wikipedia.org/wiki/Chess')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1916, 19, 'Rock Chess', 'rock-chess', 'rock-chess')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1917, 19, 'Legan Chess', 'legan-chess', 'legan-chess', 'https://en.wikipedia.org/wiki/Legan_chess', '1913 L. Legan')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1918, 19, 'Hoppel-Poppel Chess', 'hoppel-poppel', 'hoppel-poppel')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1919, 19, 'Belarusian Chess', 'belarusian-chess', 'belarusian-chess-1')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1920, 19, 'Men Row Chess', 'menrow', 'menrow', 'https://www.iggamecenter.com/info/en/menrowchess.html', '2008 Giuseppe Acciaro')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1921, 19, 'Chessgi', 'chessgi', 'chess-1', 'https://www.chessvariants.com/other.dir/chessgi.html')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1922, 19, 'Dragonfly', 'dragonfly', 'dragonfly', 'https://en.wikipedia.org/wiki/Dragonfly_(chess_variant)', '1983 Christian Freeling')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1923, 19, 'Hexagonal Dragonfly', 'dragonfly-hex', 'dragonfly-hex', 'https://en.wikipedia.org/wiki/Dragonfly_(chess_variant)', '1983 Christian Freeling')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1924, 19, 'Alice Chess', 'alice-chess', 'chess-1', 'https://en.wikipedia.org/wiki/Alice_Chess', '1953 V.R. Parton')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(1925, 19, 'Andernach Chess', 'andernach-chess', 'chess-1', 'https://en.wikipedia.org/wiki/Andernach_chess')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1926, 19, 'Benedict Chess', 'benedict-chess', 'chess-1', 'https://www.chessvariants.com/difftaking.dir/benedict.html', '2001 W. D. Troyka')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1927, 19, 'Genesis Chess', 'genesis-chess', 'genesis-chess-1')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1928, 19, 'Fighting Chess', 'fighting-chess', 'chess-1', 'https://newboardgamesabovechess.blogspot.com/2020/11/fighting-chess-rules.html', '2018 Tony Berard')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1929, 19, 'Vis-a-vis Chess', 'visavis-chess', 'chess-1', '2014 Viktor Pankovich')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1930, 19, 'King''s Vis-a-vis Chess', 'visavis-free', 'visavis-chess', '2014 Viktor Pankovich')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1931, 19, 'Resurrection Chess', 'resurrection-chess', 'chess-1')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(1932, 19, 'Momentum Chess', 'momentum-chess', 'chess-1')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1933, 19, 'Madrasi Chess', 'madrasi-chess', 'chess-1', 'https://en.wikipedia.org/wiki/Madrasi_chess', '1979 Abdul Jabbar Karwatkar')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1934, 19, 'Patrol Chess', 'patrol-chess', 'chess-1', 'https://en.wikipedia.org/wiki/Patrol_chess', '1975 Frederik Hendrik von Meyenfeldt')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1935, 19, 'Neutral King Chess', 'neutral-king', 'neutral-king', 'https://www.chessvariants.com/winning.dir/neutral-king.html', '1953 V.R. Parton')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1936, 19, 'Anti King Chess', 'anti-king', 'anti-king', 'https://www.chessvariants.com/diffobjective.dir/anti-king-chess.html', 'Peter Aronson')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1937, 19, 'Balbo''s Game', 'balbo-chess', 'balbo', 'https://en.wikipedia.org/wiki/Balbo%27s_Game', '1974 M. [Monsieur] G. Balbo')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1938, 19, 'Troitzky Chess', 'troitzky-chess', 'troitzky-1', 'http://mlwi.magix.net/bg/troitzkychess.htm', 'Paul Byway')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(1939, 19, 'Battle of the Kings', 'botk', 'botk', 'https://www.chessvariants.com/rules/battle-of-kings-', '2021 Vadrya Pokshtya')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(1940, 19, 'Platform Chess', 'platform-chess', 'platform-chess-1', '2001 Robert Price')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(2501, 25, 'Hex', 'hex', 'hex', 'http://www.iggamecenter.com/info/en/hex.html', '1942 Piet Hein and John Nash')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(2502, 25, 'Gonnect', 'gonnect', 'gonnect', '2000 Joao Pedro Neto')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(2601, 26, 'Lasca', 'laska', 'laska', 'https://en.wikipedia.org/wiki/Lasca', '1911 Emanuel Lasker')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(2602, 26, 'Stapeldammen', 'stapeldammen', 'stapeldammen', 'http://www.mindsports.nl/index.php/arena/stapeldammen/723-about-stapeldammen')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(2603, 26, 'Column Checkers', 'column-checkers', 'column-checkers', 'https://en.wikipedia.org/wiki/Bashni')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(2604, 26, 'Pioneer Checkers', 'pioneer-checkers', 'pioneer', 'https://en.wikipedia.org/wiki/Bashni')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(2605, 26, 'Frisian Columns', 'frisian-columns', 'frisian-columns')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(2606, 26, 'Turkish Columns', 'turkish-columns', 'turkish-columns')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(2607, 26, 'King''s Checkers', 'kings-checkers', 'column-checkers')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(2608, 26, 'Magyar Dama', 'magyar-dama', 'magyar')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(3301, 33, 'Fairy Eater Chess', 'fairy-eater', 'fairy-eater', 'https://fairyeaterchess.blogspot.com/2021/12/welcome-to-world-of-fairy-eater-chess.html#more', '2021 Vadrya Pokshtya')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(3302, 33, 'Dark Fairy Eater', 'dark-fairy-eater', 'dark-fairy-eater', 'https://fairyeaterchess.blogspot.com/2021/12/welcome-to-world-of-fairy-eater-chess.html#more', '2021 Vadrya Pokshtya')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(3303, 33, 'Esoteric Fairy Eater', 'esoteric-fairy-eater', 'esoteric-fairy-eater', 'https://fairyeaterchess.blogspot.com/2021/12/welcome-to-world-of-fairy-eater-chess.html#more', '2021 Vadrya Pokshtya')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(3801, 38, 'Fox and Geese', 'fox-and-geese', 'fox-and-geese-british')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(3802, 38, 'Asalto', 'asalto', 'asalto', 'https://en.wikipedia.org/wiki/Asalto')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(4301, 43, 'Atari Go', 'atari-go', 'go-9x9', 'https://en.wikipedia.org/wiki/Go_variants#First_Capture')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(4302, 43, 'Go 9x9', 'go-9x9', 'go-9x9', 'https://en.wikipedia.org/wiki/Rules_of_Go')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(4303, 43, 'Go 13x13', 'go-13x13', 'go-13x13', 'https://en.wikipedia.org/wiki/Rules_of_Go')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(4304, 43, 'Go 19x19', 'go-19x19', 'go-19x19', 'https://en.wikipedia.org/wiki/Rules_of_Go')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(4305, 43, 'Redstone', 'redstone-19x19', 'go-19x19', 'https://senseis.xmp.net/?Redstone', '2012 Mark Steere')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(4306, 43, 'Paper Go', 'paper-go', 'paper-go', 'https://en.wikipedia.org/wiki/Go_variants#Paper_and_Pencil_Go')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(4501, 45, 'Glinski''s Chess', 'glinski', 'glinski', 'https://en.wikipedia.org/wiki/Hexagonal_chess#Gli%C5%84ski''s_hexagonal_chess', '1936 Wladyslaw Glinski')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(4502, 45, 'Glinski''s Cheskers', 'glinski-cheskers', 'glinski-cheskers', 'https://en.wikipedia.org/wiki/Hexagonal_chess#Gli%C5%84ski''s_hexagonal_chess', '1936 Wladyslaw Glinski')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(4503, 45, 'McCooey''s Chess', 'mccooey', 'mccooey', 'https://en.wikipedia.org/wiki/Hexagonal_chess#McCooey''s_hexagonal_chess', '1979 Dave McCooey and Richard Honeycutt')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(4504, 45, 'Shafran''s Chess', 'shafran-chess', 'shafran-chess', 'https://en.wikipedia.org/wiki/Hexagonal_chess#Shafran.27s_hexagonal_chess', '1939 Isaak Shafran')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(4505, 45, 'Hexofen', 'hexofen', 'hexofen', 'https://www.chessvariants.com/page/MLhexofen', '1997 Valeriy Trubitsyn')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(4601, 46, 'Halma 8x8', 'halma-8', 'halma-8', 'http://www.iggamecenter.com/info/en/halma.html', '1883 George Howard Monks')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(4602, 46, 'Halma 10x10', 'halma-10', 'halma-10', 'http://www.iggamecenter.com/info/en/halma.html', '1883 George Howard Monks')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(4901, 49, 'Ard-Ri', 'ard-ri', 'ard-ri')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(4902, 49, 'Brandubh', 'brandubh', 'brandubh')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(4903, 49, 'Fidchell', 'fidchell', 'fidchell')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(4904, 49, 'Gwyddbwyll', 'gwyddbwyll', 'gwyddbwyll')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(4905, 49, 'Hnefatafl', 'tafl', 'tafl-1', 'https://en.wikipedia.org/wiki/Tafl_games')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(4906, 49, 'Alea Evangeli', 'alea-evangeli', 'alea-evangeli', 'https://en.wikipedia.org/wiki/Alea_evangelii')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(5001, 50, 'Koma Janggi', 'koma-janggi', 'koma-janggi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(5002, 50, 'Janggi', 'janggi', 'janggi', 'https://en.wikipedia.org/wiki/Janggi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(5003, 50, 'Gwangsanghui', 'gwangsanghui', 'gwangsanghui', 'https://en.wikipedia.org/wiki/Janggi_variants#Gwangsanghui')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(5901, 59, 'Mini Mancala', 'mini-mancala', 'mini-mancala', 'https://mancala.fandom.com/wiki/MiniMancala', '1980 Christian Freeling')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(5902, 59, 'Oware', 'oware', 'oware', 'https://mancala.fandom.com/wiki/Oware')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(5903, 59, 'Cross Oware', 'cross-oware', 'oware', 'https://mancala.fandom.com/wiki/Cross-Wari')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(5904, 59, 'Ohojichi', 'ohojichi', 'ohojichi', 'https://mancala.fandom.com/wiki/Ohojichi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(5905, 59, 'Hawalis', 'hawalis', 'hawalis', 'https://mancala.fandom.com/wiki/Hawalis')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6101, 61, 'Ming-Mang 9x9', 'ming-mang-9x9', 'ming-mang-9x9', 'http://homepages.di.fc.ul.pt/~jpn/gv/mingmang.htm')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6102, 61, 'Ming-Mang 17x17', 'ming-mang-17x17', 'ming-mang-17x17', 'http://homepages.di.fc.ul.pt/~jpn/gv/mingmang.htm')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6201, 62, 'Three Men''s Morris', 'triangle', '3-men', 'Thomas H. O''Beirne and Greg Schmidt')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6202, 62, 'Nine Men''s Morris', 'morris-9', '9-men', 'https://en.wikipedia.org/wiki/Nine_Men%27s_Morris')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6203, 62, 'Six Men''s Morris', 'morris-6', '6-men', 'https://en.wikipedia.org/wiki/Nine_Men%27s_Morris')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6204, 62, 'Seven Men''s Morris', 'morris-7', '7-men', 'https://en.wikipedia.org/wiki/Nine_Men%27s_Morris')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6205, 62, 'Eight Men''s Morris', 'morris-8', '8-men', 'https://en.wikipedia.org/wiki/Nine_Men%27s_Morris')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6206, 62, 'Twelve Men''s Morris', 'morris-12', '12-men', 'https://en.wikipedia.org/wiki/Nine_Men%27s_Morris')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6207, 62, 'Morabaraba', 'morabaraba', 'morabaraba', 'https://en.wikipedia.org/wiki/Morabaraba')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(6208, 62, 'Windmill', 'windmill', 'windmill', 'https://en.wikipedia.org/wiki/Nine_Men%27s_Morris')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7001, 70, 'Renju', 'renju', 'renju', 'https://en.wikipedia.org/wiki/Renju')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7002, 70, 'Gomoku', 'gomoku', 'gomoku', 'https://en.wikipedia.org/wiki/Gomoku')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7003, 70, 'Gomoku Knights', 'gomoku-knights', 'gomoku-knights', '2001 Chris Huntoon')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7004, 70, 'Ninuki Renju', 'ninuki-renju', 'pente', 'https://en.wikipedia.org/wiki/Pente')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7005, 70, 'Pente', 'pente', 'pente', 'https://en.wikipedia.org/wiki/Pente', '1977 Gary Gabrel')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7301, 73, 'Seega', 'seega', 'seega', 'http://www.cyningstan.com/game/120/seega')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7302, 73, 'High Jump', 'high-jump', 'high-jump', 'https://en.wikipedia.org/wiki/High_Jump_(game)')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7501, 75, 'Shatranj', 'shatranj', 'shatranj-93', 'https://en.wikipedia.org/wiki/Shatranj')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7502, 75, 'Oblong Shatranj', 'oblong-shatranj', 'oblong-1', 'http://history.chess.free.fr/oblong.htm')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7701, 77, 'Doubutsu Shogi', 'doubutsu-shogi', 'doubutsu-shogi', 'https://en.wikipedia.org/wiki/D%C5%8Dbutsu_sh%C5%8Dgi', 'Madoka Kitao')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7702, 77, 'Goro Goro Shogi', 'gorogoro-shogi', 'goro', 'https://en.wikipedia.org/wiki/D%C5%8Dbutsu_sh%C5%8Dgi', 'Madoka Kitao')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7703, 77, 'Simple Shogi', 'simple-shogi', 'simple-shogi', '2012 Itsubaki Yoshihisa')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7704, 77, 'Treasure Shogi', 'treasure-shogi', 'treasure-shogi', '2010 Yamamoto Mitsuo')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7705, 77, 'Go-Roku Shogi', 'goroku-shogi', 'goroku', '2018 Shingeki Watanabe')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7706, 77, 'Le Shogi', 'le-shogi', 'le-shogi', '2009 Yamamoto Mitsuo')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7707, 77, 'Mini Shogi', 'mini-shogi', 'mini-shogi', 'https://en.wikipedia.org/wiki/Minishogi', '1970 Shigeo Kusumoto')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(7708, 77, 'REN Shogi', 'ren-shogi', 'ren-shogi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7709, 77, '5x7 Shogi', '5x7-shogi', '5x7-shogi', '1977 Hirobumi Serizawa')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7710, 77, 'Rocket Shogi', 'rocket-shogi', 'rocket-shogi', '2012 Itsubaki Yoshihisa')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7711, 77, 'Ikusa Shogi', 'ikusa-shogi', 'ikusa-shogi', '2011 Yamamoto Mitsuo')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7712, 77, 'Judkins Shogi', 'judkins-shogi', 'judkins', 'https://en.wikipedia.org/wiki/Judkins_shogi', '1998 Paul Judkins')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7713, 77, 'Renge Shogi', 'renge-shogi', 'renge-shogi', '1999 Michel Sandeman')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7714, 77, 'Kantorai Shogi', 'kantorai', 'kantorai-1', 'http://www.zillions-of-games.com/cgi-bin/zilligames/submissions.cgi?do=show;id=541', '2001 Chris Huntoon')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7715, 77, 'Heian Shogi', 'heian-shogi', 'heian-shogi', 'https://en.wikipedia.org/wiki/Heian_shogi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7716, 77, 'Sho Shogi', 'sho-shogi', 'sho-shogi', 'https://en.wikipedia.org/wiki/Sho_shogi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7717, 77, 'Shogi', 'shogi', 'shogi-1', 'https://en.wikipedia.org/wiki/Shogi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7718, 77, 'Annan Shogi', 'annan-shogi', 'annan-shogi', 'https://en.wikipedia.org/wiki/Annan_shogi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7719, 77, 'Micro Shogi', 'micro-shogi', 'micro-shogi', 'https://en.wikipedia.org/wiki/Micro_shogi', '1982 Oyama Yasuharu')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7720, 77, 'Kyoto Shogi', 'kyoto-shogi', 'kyoto-shogi', 'https://en.wikipedia.org/wiki/Kyoto_shogi', '1976 Tamiya Katsuya')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(7721, 77, 'Hexagonal Kyoto Shogi', 'hex-kyoto-shogi', 'hex-kyoto-shogi', '2000 Jochen Drechsler')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7722, 77, 'Chu Shogi', 'chu-shogi', 'chu-shogi', 'https://en.wikipedia.org/wiki/Chu_shogi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7723, 77, 'Tenjiku Shogi', 'tenjiku-shogi', 'tenjiku-shogi', 'https://en.wikipedia.org/wiki/Tenjiku_shogi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(7724, 77, 'Wa Shogi', 'wa-shogi', 'wa-shogi', 'https://www.chessvariants.com/rules/wa-shogi')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7901, 79, 'Sovereign Chess', 'sovereign-chess', 'sovereign-chess', 'https://en.wikipedia.org/wiki/Sovereign_Chess', 'Mark Bates, Infinite Pi Games')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(7902, 79, 'Sovereign Chess Arena', 'sovereign-chess-12x12', 'sovereign-chess-12x12', 'https://en.wikipedia.org/wiki/Sovereign_Chess', 'Mark Bates, Infinite Pi Games')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(8301, 83, 'Game of Generals', 'gog', 'gog', 'https://en.wikipedia.org/wiki/Game_of_the_Generals', '1970 Sofronio H. Pasola, Jr.')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(8302, 83, 'Stratego', 'stratego', 'stratego', 'https://en.wikipedia.org/wiki/Stratego')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(8303, 83, 'Stratego 8x8', 'stratego-small', 'stratego-small', 'https://en.wikipedia.org/wiki/Stratego')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(8304, 83, 'Luzhanqi', 'luzhanqi', 'luzhanqi', 'https://en.wikipedia.org/wiki/Luzhanqi')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview) values(8901, 89, 'Littera Chinese Chess', 'litter-chess', 'litter')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(8902, 89, 'Passive Chess', 'passive-chess', 'passive', '2018 Valentin Chelnokov')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(8903, 89, 'Crazy Tile Chess', 'tile-chess', 'tile-chess', 'https://www.chess.com/forum/view/chess-variants/crazy-tiles-chess', '2022 Vadrya Pokshtya')`);

        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(9601, 96, 'Xiangqi 42', 'mini-xiangqi', 'mini-xiangqi', 'https://www.chessvariants.com/42.dir/xiangqi42.html', 'Robert Price')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(9602, 96, 'MiniXiangQi', 'minixiangqi', 'minixiangqi', '1973 S. Kusumoto')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(9603, 96, 'XiangQi', 'xiangqi', 'xiangqi', 'https://en.wikipedia.org/wiki/Xiangqi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(9604, 96, 'Dark XiangQi', 'dark-chinese-chess', 'dark-chinese-chess', 'https://en.wikipedia.org/wiki/Xiangqi')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(9605, 96, 'Five Tigers', 'tigers', 'tigers', 'https://www.chessvariants.com/xiangqivariants.dir/tigers.html')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(9606, 96, 'WojiaoQi', 'wojiaoqi', 'wojiaoqi', '1890 Tong Xie Geng')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, copyright) values(9607, 96, 'Dark WojiaoQi', 'dark-wojiaoqi', 'dark-wojiaoqi', '1890 Tong Xie Geng')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules) values(9608, 96, 'YitongQi', 'yitongqi', 'yitongqi', 'https://en.wikipedia.org/wiki/Manchu_chess')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(9609, 96, 'Xiang Hex', 'xiang-hex', 'xiang-hex', 'https://www.zillions-of-games.com/cgi-bin/zilligames/submissions.cgi?do=show;id=1645', '2008 L. Lynn Smith')`);
        await queryRunner.query(`insert into game_map(id, parent_id, name, filename, preview, rules, copyright) values(9610, 96, 'Storm the Ivory Tower', 'ivory', 'ivory-1', 'https://www.chessvariants.com/large.dir/ivorytower.html', '2003 Fergus Duniho')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`delete from game_map`);
    }
}
