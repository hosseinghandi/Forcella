// ui elements 
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels({ value, setValue, mode }) {
  return (
    <FormControlLabel
      sx={{
        gap: 0,
        margin: 0,
      }}
      control={
        <Switch
          onClick={() => setValue(!value)}
          sx={{
            
            width: 85,
            height: 25,
            padding: 0,
            display: 'flex',
            alignItems: 'center',

            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: 0,
              transform: 'translateX(0px)',

              '&.Mui-checked': {
                transform: 'translateX(60px)', // 85 - 17
                '& + .MuiSwitch-track': {
                  backgroundColor: '#B55638',
                  opacity: 1,
                },
              },
            },

            '& .MuiSwitch-thumb': {
              width: 25,
              height: 25,
              borderRadius: '50%',
              backgroundColor: mode ? "#000000" : "#FFFFFF" ,
            },

            '& .MuiSwitch-track': {
              borderRadius: 8.5,
              backgroundColor: '#B55638',
              opacity: 1,
              position: 'relative',

              '&::before': {
                content: `"${value ? 'Italiano' : 'English'}"`,
                position: 'absolute',
                top: '50%',
                 transform: value
                ? 'translateY(-50%) translateX(10px)'
                : 'translateY(-50%) translateX(26px)',
                fontSize: 14,
                fontWeight: 600,
                pointerEvents: 'none',

                transition: 'left 0.35s ease-in-out', // 👈 smooth & slightly slow
              },
            },
          }}
        />
      }
    />
  );
}
