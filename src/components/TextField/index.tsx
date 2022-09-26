import {
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef
} from 'react'

import ErrorIcon from 'components/icons/ErrorIcon'

import * as S from './styles'

export type TextFieldProps = {
  error?: string | boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  { name, error = null, ...rest },
  ref
) => {
  return (
    <S.Wrapper error={!!error}>
      <S.Input type="text" name={name} error={!!error} {...rest} ref={ref} />
      {!!error && (
        <S.WrapperError>
          <S.ErrorMessage>{error}</S.ErrorMessage>
          <S.Icon data-testid="error-icon">
            <ErrorIcon />
          </S.Icon>
        </S.WrapperError>
      )}
    </S.Wrapper>
  )
}

export default forwardRef(TextField)
