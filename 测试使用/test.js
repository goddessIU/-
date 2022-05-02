const path = []
function dfs(target, obj) {
  if (obj.id === target) {
    path.push(obj.id)
    return true
  }
  for (const child of obj.children) {
    path.push(obj.id)
    if (dfs(target, child)) return true
    path.pop()
  }
}

dfs(5, {
  id: 1,
  children: [
    { id: 2, children: [{ id: 3, children: [] }] },
    {
      id: 4,
      children: [
        { id: 5, children: [] },
        { id: 6, children: [] },
      ],
    },
    { id: 7, children: [] },
  ],
})


console.log(path)