import { Stack } from '@mui/material'
import { categories } from '../utils/constants'


const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction='row'
            sx={{
                overflow: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: {
                    md: 'column'
                },
                width: { sx: '100%', md: '250px' },
            }}
        >
            {categories.map((category) => (
                <button
                    className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#FC1503', color: 'black'
                    }}
                    key={category.name}
                >
                    <span
                        style={{
                            color: category.name === selectedCategory ? 'black' : 'red', marginRight: '15px'
                        }}
                    >{category.icon}</span>
                    <span
                        style={{
                            opacity: category.name === selectedCategory ? '1' : ' 0.8'
                        }}
                    >{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default SideBar