import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation  style={{
        position: 'fixed',
        bottom: 0,
        width: '100%', // Full width of the viewport
      }}value={value} onChange={handleChange} >
      <BottomNavigationAction
        label="Posts"
        value="Home"
        // onClick={navigate('/Feed')}
        component={Link} to="/Feed" 
        icon={<HomeRoundedIcon />}
      />
      <BottomNavigationAction
        label="Users"
        value="favorites"
        component={Link} to="/Users"
        icon={<PeopleAltOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Friend Requests"
        value="nearby"
        component={Link} to="/Requests"
        icon={<PersonAddAltOutlinedIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}