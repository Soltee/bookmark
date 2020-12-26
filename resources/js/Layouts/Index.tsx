import React from 'react';

interface Props {
	// bookmarks : Array<any>
}

const App: React.FC<Props> = ({ children }) => {

	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
	        
	        <main>
	        	{ children }
	        </main>
		</div>
	)
}

export default App;