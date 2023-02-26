import { Stack } from '@mui/material';
import { categories } from '../utils/constants'

export default function Sidebar({ selectedCategory, setSelectedCategory}) {
  return (
    <Stack
      direction='row'
      sx={{
        overflow: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}
    >
      {/* map categories */}
      {categories.map((category) => (
        <button
          key={category.name}
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)}
          style={{
            color: 'white',
            background: category.name === selectedCategory && '#fc1503'
          }}
        >
          {/* category icon */}
          <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>
            {category.icon}
          </span>
          {/* category name */}
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}
