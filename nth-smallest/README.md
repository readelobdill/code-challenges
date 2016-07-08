## Find the Nth Smallest Number

### The Challenge:

Find the Nth smallest number in the following binary sorted tree:

	      16
	    /   \
	   5     22
	  / \      \
	 2   8      23
 
Characteristics of the tree:
* Anything to the left is less than the parent
* Anything to the right is bigger than the parent

Example Cases:
* `findTheNthSmallestNumber(root, 1)` -> 2
* `findTheNthSmallestNumber(root, 3)` -> 8
* `findTheNthSmallestNumber(root, -1)` -> raise Exception

### Instructions: 

1. Fork the repo. Add an initial commit to mark your start time. 

2. Complete the function in `exercise.js`

	```
	function findTheNthSmallestNumber(root, nth) {

	}
	```

3. Commit your solution, and open a Pull Request. 

4. Contact hiring@kiddom.co to let us know you're done. 