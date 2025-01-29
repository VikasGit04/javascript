const obj2 = {
    name: "Eve",
    greet() {
      console.log(this.name);
    }
  };
  const greet = obj2.greet.bind(obj2);
  greet();