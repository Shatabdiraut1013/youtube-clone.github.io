import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneIcon from '@material-ui/icons/Tune';
import VideoRow from './VideoRow';

function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage_filter'>
				<TuneIcon />
				<h2> FILTER </h2>
			</div>
			<hr />

			<ChannelRow
				image='https://yt3.ggpht.com/a/AATXAJzKAcKhT1nk--c6maiu7lwYgF5ZqF8zKCCtDis3Ag=s100-c-k-c0xffffffff-no-rj-mo'
				channel='Code With Harry'
				verified
				subs='999k'
				noOfVideos={432}
				description='Lets learn python in one video in a easy & friendly way..'
			/>

			<hr />
			{/* for results  */}

			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
			<VideoRow
				views='12.4M'
				subs='999k'
				description='Lets learn python in one video in a easy & friendly way..'
				timestamp='34 seconds ago'
				channel='Code With Harry'
				title='learn python in one video'
				image='https://i.ytimg.com/vi/qHJjMvHLJdg/maxresdefault.jpg'
			/>
		</div>
	);
}

export default SearchPage;
