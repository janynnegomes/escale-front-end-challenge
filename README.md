# Mylist

### Task 
~~Using React 16,~~ create a "todo list" component. The component should be the default export (use export defautt). 

## Requirements: 

1. Users should be able to ad items to the list
    * Use an <input> element to accept user input for the todo list item.
    * Use a <button> element to append the text in the <input> element as an item to the list and clear the <input> element,
    * Use <li> elements for todo list items as children of <ul> element. Todo list items should not be empty and there can be multiple items with the same value.

2. Users should be able to mark/unmark items as corn leted: 
    * Cross (strikethrough) the <li> element when clicked to indicate that the item is completed and add is - done" class to the <U> element, 
    * Undo the cross when the item is clicked again and remove H is - done" class from the <ii> element. 

3. Users should be able to track  progress: 

* Display a status message with the number of remaining tasks as X remaining out of Y. tasks", where X = the number of incomplete tasks, V = the total number of items in list. Add "task - counter" class to the status message ("X remaining out of V tasks") element.


## Assessment/Tools: 
* Only two imports are allowed: react (v16.8,6) and classnames (v2.2,5). Both are at the top of the starting code. 
* Use the animation below as a reference for your solution. You  should focus on implementing the requirements; design/styling is not assessed and will not affect the score.
* Design/styling is not assessed and will not affect the score. 
* The "Preview" tab will display your component You can use it for testing purposes. 
