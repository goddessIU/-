var iterableObj = {
    items:[100,200,300],
    [Symbol.iterator]:function(){
    var self=this;
    var i = 0;
    return {
        next: function() {
            var done = (i >= self.items.length);
            var value = !done ? self.items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        },
        return() {
            return {
                done: true
            }
        }
    };
    }

}

for(var item of iterableObj){
    console.log(item);
    if(item===200){
        break;
    }
}

for(var item of iterableObj){
    console.log(item);
    throw new Error();
}
