class Class {
  constructor(private id: string, private name: string, private unit: string) {}
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getUnit() {
    return this.unit;
  }
}

export default Class;
