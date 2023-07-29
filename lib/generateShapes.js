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

module.exports = { Circle, Square, Triangle };

// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="Green"/><text x="150" y="120" text-anchor="middle" font-size="40" fill="Blue">VCR</text></svg>
