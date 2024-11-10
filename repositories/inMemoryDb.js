class InMemoryDb {
  constructor() {
    this.data = [];
  }

  getAll() {
    return this.data;
  }

  create(item) {
    this.data.push(item);
    return item;
  }

  findById(id) {
    return this.data.find(item => item.id === id);
  }

  deleteById(id) {
    this.data = this.data.filter(item => item.id !== id);
  }
}

module.exports = InMemoryDb;
