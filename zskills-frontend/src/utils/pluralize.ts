export function pluralize(num: number, forms: [string, string, string]) {
  const n = Math.abs(num) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) return `${num} ${forms[2]}`;
  if (n1 > 1 && n1 < 5) return `${num} ${forms[1]}`;
  if (n1 === 1) return `${num} ${forms[0]}`;
  return `${num} ${forms[2]}`;
}