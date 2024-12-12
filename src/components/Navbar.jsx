import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <Stack direction="row"
            alignItems="center"
            p={0}
            sx={{ position: 'sticky', backgroundColor: "#fff", top: 0, justifyContent: 'space-between' }}>
            <Link to='/' style={{ display: 'flex', alignItems: 'center', paddingLeft:'15px'}}>
                <img src={logo} alt='logo' height={45} />
                <p style={{ color: 'black', padding: '0px 20px', fontWeight: 'bold', fontSize:'35px' }}>YT Courses</p>

            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar