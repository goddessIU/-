

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise4 = 2

Promise.allSettled([promise1, promise2, promise3, promise4]).then(val => {
    console.log(val)
})