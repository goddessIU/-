let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      // 可怕的 CPU 过载任务
      console.log("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  
  // 和之前例子中的代码相同
  function cachingDecorator(func) {
    let cache = new Map()
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x)
        }
        let res = func.call(this, x)
        cache.set(x, res)
        return res
    }
  }
  
worker.slow = cachingDecorator(worker.slow)
console.log(worker.slow(1))