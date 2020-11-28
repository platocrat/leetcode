# 554. Brick Wall
[Reference](https://leetcode.com/problems/brick-wall/)

## Question
There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the **top** to the **bottom** and cross the **least** bricks.

The brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right.

If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks.

**You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.**

**Note:**
1. The width sum of bricks in different rows are the same and won't exceed INT_MAX.
1. The number of bricks in each row is in range [1,10,000]. The height of wall is in range [1,10,000]. Total number of bricks of the wall won't exceed 20,000.

## Intuition
Find min number of crossed bricks

find max number of skipped bricks ('gaps' between bricks)

Idea: build map from each vertical line to count of gaps it goes "through"

Return wall height - maximum count

How do we build this map line2count?
