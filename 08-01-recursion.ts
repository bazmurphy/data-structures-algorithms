// ALWAYS THINK CLEARLY what your base case is
// if you don't know your base case recursion is really hard
// if you know your base case and can make it clever recursion becomes exceptionally simple

function foo(n: number): number {
  if (n === 1) {
    return n;
  }

  return n + foo(n - 1);
}

console.log(foo(5));
// 5 + 4 + 3 + 2 + 1
// 15

// there a RETURN ADDRESS rA
// everytime a function is called it needs to know how it got here and where the value goes to

// there a RETURN VALUE rV
// i need a value that i could return (and they have to make a space for it)

// there are ARGUMENTS A
// everytime you call a function there is some memory that is put into your system

// when we call foo(5)

// the rA return address is whoever called foo(5)
// the rV return value - we don't know it at this point (we know its 5 + __) something
// the A argument is 5

// (recursion 1)
// foo(4)
// the rA return adress points to foo(5) that's where we will return when done
// the rV return value is 4 + _ (something we don't know yet)
// the A argument is 4

// (recursion 2)
// foo(3)
// the rA return address points to foo(4) that's where we will return when done
// the rV return value is 3 + _ (something we don't know yet)
// the A argument is 3

// (recursion 3)
// foo(2)
// the rA return address points to foo(3) that's where we will return when done
// the rV return value is 2 + _ (something we don't know yet)
// the A argument is 2

// (recursion 4)
// foo(1)
// we HIT THE BASE CASE because n = 1
// and WE STOP RECURSING
// the rA return address points to foo(2) that's where we will return when done
// the rV return value is 1
// the A argument is 1

// now foo(1) RETURNS to foo(2)
// we now update the foo(2) rV return value to 2 + 1

// now foo(2) RETURNS to foo(3)
// we now update the foo(3) rV return value to 3 + 3

// now foo(3) RETURNS to foo(4)
// we now update the foo(4) rV return value to 4 + 6

// now foo(4) RETURNS to foo(5)
// we now update the foo(5) rV return value to 5 + 10
// and 5 + 10 is RETURNED OUT so 15

// you can see it goes DOWN THE STACK
// then UP THE STACK

// this is really important because it opens up some properties for us to think about

// there are two steps
// 1 BASE CASE
// 2 RECURSE

// We first went down the functions foo(5) foo(4) foo(3) foo(2) foo(1)

// the RECURSE STEP can be broken down into 3 STEPS
// [1] you have a PRE (you can do something BEFORE you recurse)
// in this case it was "n +"
// we took N and we added it and then we did the RECURSION part

// [2] then we RECURSE
// which does the calling of the function

// [3] then we a POST
// then theres an ability for a POST OPERATION
// we can do SOMETHING ELSE after RECURSING

//eg :

function foo2(n: number): number {
  console.log("n:", n);
  if (n === 1) {
    return n;
  }

  const out = n + foo2(n - 1); // PRE is n +
  console.log("out:", out);
  return out;
}

console.log(foo2(5));

// n: 5
// n: 4
// n: 3
// n: 2
// n: 1
// out: 3
// out: 6
// out: 10
// out: 15
// 15

// as we recurse we do the PRE of adding
// we went into foo(4)
// we did the PRE of adding
// we went into foo(3)
// we did the PRE of adding
// we went into foo(2)
// we did the PRE of adding
// we went into foo(1)
// we do the POST of logging
// we return that value back out to foo(2)
// foo(2) did the POST of logging
// we return the value back out to foo(3)
// foo(3) did the POST of logging
// we return the value back out to foo(4)
// foo(4) did the POST of logging
// we return the value back out to foo(5)
// and then we return the total value and we exit

// so we do the pre of adding and go down the functions
// then we do the post back up the functions
