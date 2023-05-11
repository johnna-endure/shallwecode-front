export interface ValidationRule {
  predicate: () => boolean
  onFailure: () => void
  onValid: () => void
}
