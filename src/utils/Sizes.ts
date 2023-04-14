export default class Sizes {
  [x: string]: number;
  width: number;
  height: number;
  aspect: number;
  frustumSize: number;
  constructor() {
    this.frustumSize = 5;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width / this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.aspect = this.width / this.height;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    });
  }
}
