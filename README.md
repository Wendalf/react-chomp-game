This is the React implementation of the game CHOMP.

The game idea was prsented during the Basic Javascript Games Meetup on Jan 24, 2017

Below are the description of the game.

Game #1   CHOMP
======================
The Game for tonight is called CHOMP.
CHOMP is a game of 2 or more human players against each other.
CHOMP is played on an NxN grid of squares, like a checkerboard.
The computer is the referee and determines the LOSER. 
There is only one LOSER regardless of the number of players.

(If you like, you can assume N = 5 and exactly 2 human players to make the game a little easier to implement. In my description below I will make this assumption, but the rules of the game are the same regardless.)

HOW TO PLAY
===========
Each player takes turns chomping on one or more of the 25 squares on the grid.
The player who chomps the square in the top-left corner of the grid is the LOSER. Thus, the object of the game is to make the other player chomp the top-left square.

HOW TO CHOMP
============
CHOMPING works in a funny sort of way.
Let (0,0) be the (row, column) of the top-left square.
Let (x,y) be the (row, column) of the square you click to CHOMP.

The COMPUTER WILL CHOMP AND REMOVE FROM THE GRID:
1) The square you click at (x,y), and 
2) all squares below and to the right of the square you click.

In other words, CHOMPING removes a rectangle whose top-left corner is the square you click and which extends to what is remaining of the rest of the grid.

This is probably easier with diagrams!
[CHOMP Diagram](https://goo.gl/UhoXWV)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
