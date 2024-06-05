class Building {
  constructor(sqrt) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqrt = sqrt;
  }

  get sqrt() {
    return this._sqrt;
  }
}
export default Building;
