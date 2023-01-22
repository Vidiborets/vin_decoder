import { Box } from 'components/Box/Box';
export const SearchBoxByName = ({ value, onChange }) => {
  return (
    <Box>
      <label>
        Search variables
        <input
          onChange={e => {
            onChange(e.target.value);
          }}
          type="text"
          //   value={customer}
          value={value}
          name="variable"
        />
      </label>
    </Box>
  );
};
