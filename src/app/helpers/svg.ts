export function getSvgRotation(
  angle: number,
  originX?: number,
  originY?: number
): string {
  const args = [angle];
  if (originX) {
    args.push(originX);
  }
  if (originY) {
    args.push(originY);
  }
  return `rotate(${args.join(' ')})`;
}
