/*

Write a progran that create a string that represents an 8x8 grid, using newline
characters to separate lines. At each position of the grid ther is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # # 
# # # #
 # # # # 
# # # #
 # # # # 
# # # #
 # # # # 
# # # #

When you have a program that generates this pattern, define a binding size = 8
and change de program so that it works for any size, outputting a grid of the
given width and heigh.

*/


let size = 8;
let string = ' ';

for (let num = 0; num < size; num++) {
    if (num % 2 == 0) string += ' ';
    else string += '#';
}

for (let row = 0; row < size; row++) {
    if (row % 2 == 0) console.log(string);
    else console.log(string.replace(' ', ''));
}


/*

solution:

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

*/