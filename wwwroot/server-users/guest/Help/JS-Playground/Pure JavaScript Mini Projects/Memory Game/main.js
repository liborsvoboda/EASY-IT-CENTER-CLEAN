var mem_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'
];
var curr_tiles = [];
var tiles_ids = [];
var tiles_flipped = 0;

Array.prototype.shuffle = function() {
    for (var i = 0; i < this.length; i++) {
        var j = Math.floor(Math.random() * this.length);
        var tmp = this[j];
        this[j] = this[i];
        this[i] = tmp;
    }
}

function newBoard() {
    tiles_flipped = 0;
    curr_tiles = [];
    tiles_ids = [];
    var output = "";
    mem_array.shuffle();
    for (var i = 0; i < mem_array.length; i++)
        output += "<div id='tile" + i + "' onclick=TileFlip(this,'" + mem_array[i] + "')></div>\n";
    document.getElementById('mem_board').innerHTML = output;
}

function TileFlip(tile, val) {
    if (tile.innerHTML == "" && curr_tiles.length < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        if (curr_tiles.length == 0) {
            curr_tiles.push(val);
            tiles_ids.push(tile.id);
        } else if (curr_tiles.length == 1) {
            curr_tiles.push(val);
            tiles_ids.push(tile.id);
            if (curr_tiles[0] == curr_tiles[1]) {
                tiles_flipped += 2;
                curr_tiles = [];
                tiles_ids = [];
                if (tiles_flipped == mem_array.length) { //finished
                    alert("Well done! Click OK to have a new board!");
                    document.getElementById('mem_board').innerHTML = "";
                    newBoard();
                }
            } else {
                function FlipBack() {
                    var tile1 = document.getElementById(tiles_ids[0]);
                    var tile2 = document.getElementById(tiles_ids[1]);
                    tile1.style.background = '#DD0';
                    tile1.innerHTML = "";
                    tile2.style.background = '#DD0';
                    tile2.innerHTML = "";
                    curr_tiles = [];
                    tiles_ids = [];
                }
                setTimeout(FlipBack, 500);
            }
        }
    }
}