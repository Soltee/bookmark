import React from 'react';
import App from '../../Layouts/Index';
import {Bar} from 'react-chartjs-2';

interface Props {
	bookmarks : Array<any>,
	active    : Number,
	inactive  : Number,
	total     : Number
	// bookmarks : any
}

const Home:React.FC<Props> = ({ bookmarks, active, inactive, total }) => {

	const data = {
	  labels: ['Active', 'Inactive'],
	  datasets: [
	    {
	      label: 'Bookmarks',
	      backgroundColor: 'rgb(209,213,219)',
	      borderColor: 'rgb(209,213,219)',
	      borderWidth: 1,
	      hoverBackgroundColor: 'rgb(75,85,99)',
	      hoverBorderColor: 'rgb(75,85,99)',
	      data: [active, inactive]
	    }
	  ]
	};

	return (
	    <App>
	        <p className="text-lg text-gray-900 my-3">Dashboard</p>

	        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white overflow-hidden shadow-md rounded sm:rounded-lg flex  flex-col items-start px-5 py-3 bg-gray-900">
                    <h3 className="text-xl font-black mb-3 text-white">
                         {total} <span className="text-sm font-sm">Total</span>
                    </h3>
                </div>

                <div className="bg-white overflow-hidden shadow-md rounded sm:rounded-lg flex  flex-col items-start px-5 py-3 bg-gray-600">
                    <h3 className="text-xl font-black mb-3 text-white">
                         {active} <span className="text-sm font-sm">Active</span>
                    </h3>
                </div>

                <div className="bg-white overflow-hidden shadow-md rounded sm:rounded-lg flex  flex-col items-start px-5 py-3 bg-gray-300">
                    <h3 className="text-xl font-black mb-3">
                        {inactive} <span className="text-sm font-sm">Inactive</span>
                    </h3>
                </div>
            </div>

            <div className="my-10">
            	<Bar
				  data={data}
				  height={400}
				  options={{ maintainAspectRatio: false }}
				/>
            </div>
	    </App>
	  )
}

export default Home;