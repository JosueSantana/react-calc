# React Calc
## A Simple Pocket Calculator made with React

This project is intended as practice on fundamental concepts of the React framework.

The idea is to emulate a physical pocket calculator in which each button, barring **CLEAR** and **=**,
add a token to the expression displayed.

Pressing **=** will evaluate the expression, pressing **CLEAR** will wipe it.

Pressing **=** with an incomplete or malformed expression will result in a *syntax error*.
Dividing by 0 will produce a *divide by 0 error*.

The maximum number of characters allowed in each expression is **50**.

### Known Issues

* Unary negative operator and Minus operator are essentially the same. This is due to how javascript treats the **-** token. I relied on an external library to parse the expressions, so I would need to instead parse them myself to be able to make a distinction. 
* Not able to backtrack once a key is pressed.
* Not able to repeat a previously executed expression (aside from the one executed right before).  