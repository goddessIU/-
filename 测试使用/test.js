// 1.局部作用域与全局作用域
let val = 1;
function foo() {
    console.log(val);
  }
function bar() {
  let val = 2;
  foo();
}
bar();


