export function formatDate(date: string | undefined) {
  if (!date)
    return ''
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
}
