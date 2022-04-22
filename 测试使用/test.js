let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
        console.log(this)
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ': ' + student);
    });
  }
};
globalThis.title = 'hhh'
group.showList();