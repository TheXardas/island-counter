# island-counter
Small console application, which counts "islands" of "1"s in a matrix, assessment test task on node.js

DFS algorithm is used.

# How to run
- node island-counter.js "1,0,1;1,0,0;"

# Requirements
Create a Node.js script that accepts a matrix consisting of 0s and 1s as a parameter. The script should
output a single value to the console – the number of regions formed by the number 1, and then exit.
The matrix is presented as a string value where ‘,’ is used as a separator for columns, ‘;’ is used as a
separator for rows. For instance, “1,0,1;0,1,0” string value should be converted to the matrix [[1,0,1],
[0,1,0]].
The maximum size of the matrix is 100x100.
Examples of the input and output:
1. Input: “1,0,1;0,1,0”
   Output: 3
2. Input: “1,0,1;1,1,0”
   Output: 2
3. Input: “1,1,1,0;0,1,0,0”
   Output: 1

Try to keep the source code clean and easy to read.

# TODO
- Write some tests