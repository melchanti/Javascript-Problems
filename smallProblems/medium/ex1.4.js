function minilang(string) {
  let stringArr = string.split (' ');
  let stack = [];
  let register = 0;

  stringArr.forEach(word => {
    if (!isNaN(parseInt(word))) {
      register = parseInt(word);
    } else if (word === 'PUSH') {
      stack.push(register);
    } else if (word === 'ADD') {
      register = register + stack.pop();
    } else if (word === 'SUB') {
      register = register - stack.pop();
    } else if (word === 'MULT') {
      register = register * stack.pop();
    } else if (word === 'DIV') {
      register = Math.round(register / stack.pop());
    } else if (word === 'REMAINDER') {
      register = register % stack.pop();
    } else if (word === 'POP') {
      register = stack.pop();
    } else if (word === 'PRINT') {
      console.log(register);
    }
  });
}

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)