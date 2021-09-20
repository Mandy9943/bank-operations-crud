export function DateWithoutHourNumber(dateStr: string) {
  const date = new Date(dateStr);
  date.setHours(0);

  return date.getTime();
}
