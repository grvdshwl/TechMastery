//* index as Keys id anti pattern in react

//* 1. If we add something to start of list it will still reflect
//* Incorrect data(previous data) as react will think to reuse and reassign
//* the previous to the start of list.

//* If we reorder or filter the list it will not reflect the changes
//* as react will reassign the previous index values to the new one.

//* example when we sort the data
