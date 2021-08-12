interface DropdownOptionObj {
  optionLabel: string
  optionValue: number
}

export interface DropdownProps {
  label: string
  value: string
  onChange: (e: any) => void
  options: DropdownOptionObj[]
}
