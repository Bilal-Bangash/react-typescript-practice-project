interface DropdownOptionObj {
  optionLabel: string
  optionValue: string
}

export interface DropdownProps {
  label: string
  value: string
  fullWidth: boolean
  onChange: (e: any) => void
  options: DropdownOptionObj[]
}
