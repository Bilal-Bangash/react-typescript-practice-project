import { FC } from 'react'
import { InputLabel, FormControl, Select } from '@material-ui/core'
import { dropDownStyles } from './Dropdown.styles'
import { DropdownProps } from './Dropdown.interface'

const Dropdown: FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
  fullWidth,
}) => {
  const classes = dropDownStyles()
  return (
    <>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        fullWidth={fullWidth}
      >
        <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
        <Select native value={value} onChange={onChange} label={label}>
          <option aria-label="None" value="" />
          {options.map(({ optionValue, optionLabel }, index) => (
            <option value={optionValue} key={index}>
              {optionLabel}
            </option>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
export default Dropdown
