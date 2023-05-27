import { RefObject, useRef, useState } from 'react'

export type InputValue = string | null | undefined

interface ValidationResult {
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
      if (!item.rule(inputRef.current?.value)) {
        setValidateResult({
          isValid: false,
          message: item.failureMessage,
        })
        return
      } else {
        setValidateResult({
          isValid: true,
          message: '',
        })
      }
    })
  }

  return [inputRef, validateResult, validator]
}
