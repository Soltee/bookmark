import React from 'react';
import App from '../../Layouts/Index';

interface Props {
	bookmarks : Array<any>
	// bookmarks : any
}

const Home:React.FC<Props> = ({ bookmarks }) => {

	return (
	    <App>
	      <p className="text-center my-3">Welcome to home page</p>
	    </App>
	  )
}

export default Home;