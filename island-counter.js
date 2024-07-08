const input = process.argv[2];

const matrix = [];
input.split(';').forEach((row, i) => {
    if (!row.length) return;
    matrix[i] = [];
    row.split(',').forEach((cell, j) => {
        if (!cell) return;
        matrix[i][j] = cell;
    });
});


function drownIsland(grid, y, x) {
    if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length || grid[y][x] === '0') return;
    grid[y][x] = '0';
    drownIsland(grid, y+1, x);
    drownIsland(grid, y, x+1);
    drownIsland(grid, y-1, x);
    drownIsland(grid, y, x-1);
}

function countIslands(grid) {
    let numberOfIslands = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '0') continue;
            numberOfIslands++;
            drownIsland(grid, y, x);
        }
    }
    return numberOfIslands;
}

const numberOfIslands = countIslands(matrix);
console.log(numberOfIslands);


