// Maze Solver

// a list of strings

// the # represent walls

// how to get from S(tart) to E(nd)

// [
// "#####E#",
// "#.....#",
// "#S#####",
// ]

// recursion is our friend here

// how do we theoretically solve it?

// once we know where our (S)tart condition is
// and we know what walls look like
// and we know what pathways look like
// and we know that we are looking for our (E)nd

// what can we do at any one square?
// we can go up/down/right/left

// but you can't always do those
// you could run into walls
// you could OFF the graph

// you can also go to a spot we have seen before and get stuck in a loop

// they are ALL our BASE CASE
// and NOT CHECK for it in the RECURSIVE CASE

// BASE CASE

// #1 it's a wall "#"
// if the point we are at in recursion we are on a wall - we cannot be here
// that's an invalid state

// #2 off the map
// if somehow you are in a spot that is not on the map - you have to return

// #3 it's the (E)nd
// if we make it to the end we are done recursing

// #4 if we have seen it already
// we don't want to visit anything twice

// RECURSIVE CASES

// check every direction

// the entrance to the recursive function isn't the one you want to recurse in

// we will walk the maze
// we want to do our base cases and then our recursive cases
// the base cases require us to know where we are currently at
// the recursive case requires us to be able to walk in directions

// (!!!) whenever you traverse 2d Arrays you traverse the Columns and then the Rows
function walk(
  maze: string[],
  wall: string,
  current: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // 1 Base Case

  // off the map
  if (
    current.x < 0 ||
    current.x >= maze[0].length || // how many columns we have
    current.y < 0 ||
    current.y >= maze.length // how many rows we have
  ) {
    return false; // this is not a place we should be looking
  }

  // on a wall
  if (maze[current.y][current.x] === wall) {
    return false;
  }

  // at the (E)nd
  if (current.x === end.x && current.y === end.y) {
    // in this case we have to push here BEFORE we return true because the push operation below will never trigger
    path.push(end);
    return true;
  }

  // How do we do a "have already seen"??
  // We can make a Boolean 2D Array seen: boolean[][]
  // Here is every position that is possible, false if we haven't seen it, true if we have seen it
  if (seen[current.y][current.x]) {
    return false;
  }

  // 3 Steps to Recursion
  // Pre
  // Recurse
  // Post
  // The reason why the PRE and POST steps are important is because we are PATHING
  // We need to go a direction and keep TRACK of our path
  // Because when you are recursing you don't know what happens below your point (in the function stack)
  // eg. when we move point, we push into the array that we were at START
  // then we start recursing
  // then at UP we CAN move ^ and we push in (x0)
  // then we go UP and we start recursing, and we hit a wall
  // NOTE: when we hit our BASE CASE and we left, we did not POP x0 off the array,
  // because we have to check all of our recursion steps (and then we can pop it off)(??)
  // we are BUILDING OUR PATH AS WE WALK
  // then we go RIGHT and we CAN move > and we push in (x1)
  // we build this series of steps in RECURSION and as we UNWIND our stack we will POP things back off
  // this is why PRE and POST is so important in RECURSION
  // pre condition - we don't have a Path, so we need to add it to the arguments: path: Point[]
  // so everytime we successfully visit a spot we will add that in the pre-condition and remove it in the post-condition
  // we add, then we recursion up/right/down/left, if we come back out, we pop
  // because we don't know how much further we are going to recurse, if we will meet a dead end, etc.

  // PRE
  seen[current.y][current.x] = true; // we have to update the seen 2d array from false to true to keep track of where we've been
  path.push(current);

  // RECURSE
  for (let i = 0; i < directions.length; i++) {
    // recurse our four directions we want to go

    // we need to define our new current point
    // we array destructure the directions from above
    const [x, y] = directions[i];

    // we recursively call this function
    if (
      walk(
        maze,
        wall,
        {
          // here is our differential
          x: current.x + x,
          y: current.y + y,
        },
        end,
        seen,
        path
      )
    ) {
      return true;
      // if the base case returns true from above (because we have found the End point)
      // we have to stop the recursion at this point
    }
  }

  // POST
  path.pop();

  // if we recurse and we reach the end and we did not find (E)nd in our current position, its false
  return false;
}

// this is a trick to define the four directions
const directions = [
  [0, 1], // up
  [0, -1], // down
  [1, 0], // right
  [-1, 0], // left
];

// the RECURSIVE CASE is completely separate from the BASE CASE
// you don't need to think about what happens in the base case at this point

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  // an array that tracks using booleans what cells we have visited
  const seen: boolean[][] = [];
  // an array that keeps track of the PATH we have taken
  const path: Point[] = [];

  for (let i = 0; i < maze.length; ++i) {
    // create our seen array with all false
    seen.push(new Array(maze[0].length).fill(false));
  }

  // run the walk function (which recursively calls itself)
  walk(maze, wall, start, end, seen, path);

  return path;
}

// ALWAYS THINK about your BASE CASES
// MOVE EVERYTHING INTO THE BASE CASE and you will drastically reduce your complexity

// When do I use recursion?
// Alot of these things seem like you can do a For Loop
// When you cannot concretely use a For Loop - when there is no defined end
// Especially if there is a Branching Factor - you can't write a for loop simply for that
