export function formatDate(dateString: string, options: { time?: boolean } = {}) {
  const date = new Date(dateString)
  
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  
  if (options.time) {
    dateOptions.hour = '2-digit'
    dateOptions.minute = '2-digit'
  }
  
  return date.toLocaleDateString('ru-RU', dateOptions)
}