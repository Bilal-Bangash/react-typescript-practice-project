interface DropdownOptionObj {
  optionLabel: string
  optionValue: number
}

export interface DropdownProps {
  label: string
  value: string
  fullWidth: boolean
  onChange: (e: any) => void
  options: DropdownOptionObj[]
}
