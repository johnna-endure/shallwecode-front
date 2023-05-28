import { RefObject, useRef, useState } from 'react'

export type InputValue = string | null | undefined

export interface ValidationResult {
  isValid: boolean
  message: string
}

export interface ValidationPredicate {
  rule: (value: InputValue) => boolean
  failureMessage: string
}

export const useValidation = (
  predicates: ValidationPredicate[]
): [RefObject<HTMLInputElement>, ValidationResult, () => void] => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [validateResult, setValidateResult] = useState<ValidationResult>({
    isValid: true,
    message: '',
  })
  const validator = () => {
    predicates.forEach((item) => {
      // 유효성 검증 통과
      const inputValue = inputRef.current?.value
      if (item?.rule && !item.rule(inputValue)) {
        setValidateResult({
          isValid: false,
          message: item.failureMessage,
        })
        return
      }

      setValidateResult({
        isValid: true,
        message: '',
      })
    })
  }

  return [inputRef, validateResult, validator]
}
