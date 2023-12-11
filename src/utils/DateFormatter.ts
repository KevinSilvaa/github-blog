import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function DateFormatter(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })
}
