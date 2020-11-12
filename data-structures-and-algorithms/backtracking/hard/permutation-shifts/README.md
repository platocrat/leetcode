# Permutation Shifts
Given a word `w` consisting of unique lowercase English letters, return all the permutations of `w`. In each permutation, include in front of each letter how many positions that letter shifted to the right from its starting in `w`.

Return the strings in sorted **ASCII lexicographical order** ('-' comes before digits, and digits come before letters).

**Example**:
```
w = "az"

Output: 
["-1z1a", "0a0z"]

w = "abc"

Output:
["-1b-1c2a", "-1b1a0c", "-2c0b2a", "-2c1a1b", "0a-1c1b", "0a0b0c"]
```


## Hackerrank Boilerplate
In python:
```py
#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'permutationShifts' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts STRING w as parameter.
#

def permutationShifts(w):
    # Write your code here
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    w = input()

    result = permutationShifts(w)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()
```


In JavaScript:
```js
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'permutationShifts' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING w as parameter.
 */

function permutationShifts(w) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const w = readLine();

    const result = permutationShifts(w);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
```

