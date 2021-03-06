import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
	const [inputSearch, setInputSearch] = useState('');

	return (
		<div className='header'>
			<div className='header_left'>
				<MenuIcon />
				<Link to='/'>
					<img
						className='header_logo'
						src='https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_of_YouTube_%282005-2011%29.svg'
						alt=''
					/>
				</Link>
			</div>

			<div className='header_input'>
				<input
					onChange={(e) => setInputSearch(e.target.value)}
					value={inputSearch}
					placeholder='Search'
					type='text'
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className='header_inputButton' />
				</Link>
			</div>

			<div className='header_icons'>
				<VideoCallSharpIcon className='header_icon' />
				<AppsIcon className='header_icon' />
				<NotificationsIcon className='header_icon' />
				<Avatar
					src='https://avatars.dicebear.com/api/avataaars/example.svg'
					alt='Johny Deep'
				/>
			</div>
		</div>
	);
}

export default Header;
//src='https://upload.wikimedia.org/wikipedia/commons/5/52/YouTube_social_white_circle_%282017%29.svg'
