export type IndicatorProps =
  | 'performance'
  | 'bias'
  | 'impact'
  | 'violence'
  | 'vulnerability'
  | 'concentration'

export type TagMapperProps = {
  variant?: 'status' | 'problem' | 'indicator' | 'cause'
  indicator?: IndicatorProps
  score?: 1 | 2 | 3
  count?: number
  text?: string
}

const pluralizeText = (count: number, text: string, suffix = 's') => {
  return text
    .split(' ')
    .map((word) => `${word}${count !== 1 ? suffix : ''}`)
    .join(' ')
}

export const tagTextMapper = ({
  variant,
  indicator,
  score,
  count,
  text
}: TagMapperProps) => {
  if (variant === 'problem' || variant === 'cause')
    return `${pluralizeText(count!, text!)}`

  if (variant === 'indicator') return tagIndicatorText[indicator!][score!]

  if (variant === 'status') return tagStatusText[score!]
}

export const tagColorMapper = (
  variant: string,
  word?: string,
  count?: number,
  score?: 1 | 2 | 3
) => {
  if (
    variant === 'problem' &&
    (word === 'probema relacionado' || word == 'problema priorizado')
  )
    return 'white'
  if (variant === 'problem' && word === 'problema crítico' && count === 0)
    return 'green'
  if (variant === 'problem' && word === 'problema crítico') return 'red'

  if (score) return tagTextColor[score]
}

export const tagTextColor = {
  1: 'green',
  2: 'orange',
  3: 'red'
}

export const tagStatusText = {
  1: 'Bom',
  2: 'Atenção',
  3: 'Crítico'
}

export const tagIndicatorText = {
  performance: {
    1: 'Bom',
    2: 'Médio',
    3: 'Ruim'
  },
  bias: {
    1: 'Redução',
    2: 'Estável',
    3: 'Aumento'
  },
  impact: {
    1: 'Baixo',
    2: 'Médio',
    3: 'Alto'
  },
  violence: {
    1: 'Não violento',
    2: 'Não letal',
    3: 'Letal'
  },
  vulnerability: {
    1: 'Não afeta',
    2: 'Afeta',
    3: 'Afeta'
  },
  concentration: {
    1: 'Não concentrado',
    2: 'Concentrado',
    3: 'Muito concentrado'
  }
}
