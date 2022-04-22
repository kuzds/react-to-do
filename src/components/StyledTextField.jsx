import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
const StyledTextField = styled(TextField)(({ theme }) => {
  return ({
  "& .MuiFormLabel-root.Mui-focused ": {
    color: theme.custom.primaryOrSecondary,
  },
  "& .MuiFormControl-root": {
    color: theme.custom.primaryOrSecondary,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: theme.custom.primaryOrSecondary,
    },
  },
})}
)

export default StyledTextField