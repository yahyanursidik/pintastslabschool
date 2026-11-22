const formatDate = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Jakarta',
});

export function formatSchoolDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : formatDate.format(date);
}
