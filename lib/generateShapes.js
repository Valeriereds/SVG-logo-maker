// class constructor function used to generate shapes according to users color input
class ShapeShift {
  constructor () {
    this.color = '';
  }
  setColor(colorCode) {
    this.color = colorCode;
  }
}

class Circle extends ShapeShift {
  render () {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class Square extends ShapeShift {
  render () {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`;
  }
}

class Triangle extends ShapeShift {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
}

// needed to export shape renders
module.exports = { Circle, Square, Triangle };
