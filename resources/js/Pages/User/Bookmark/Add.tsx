import React , { useState } from 'react';
import App from '../../../Layouts/Index';
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'

interface Props {}

const Add: React.FC<Props> = ({errors}) => {
  	// const { errors } = usePage().props
	const  [state, setState] = useState({
			url     : '',
			title   : 'Some title'
		});
	
	//
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({...state, 
			[event.target.id] : event.target.value
		});
	}

	//Handle form
	const handleForm = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();

		Inertia.post("/bookmarks", state);
	}

	return (
		<App>

			<div>
				
		        <div className="mt-5 md:mt-0 md:col-span-2">
			      	<form action="#" method="POST">
			      		<div className="flex justify-between items-center my-3">
							<h3 className="font-bold text-xl">New</h3>
							<button
								onClick={handleForm}
								className="bg-green-600 hover:bg-green-500 border-b mb-2 rounded-lg px-3 py-3 text-white"
								>Add
							</button>
						</div>
						
				        <div className="shadow sm:rounded-md sm:overflow-hidden">
				          	<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
					            <div className="grid grid-cols-3 gap-6 flex items-center">
					                <label htmlFor="url" 
					                	className="block text-sm font-medium text-gray-700">
					                  	URL
					                </label>
					                <div className="mt-1 flex rounded-md shadow-sm">
					                  	{/*<span 
					                  		className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
					                  	</span>*/}
						               	<input type="text" 
						                    id="url"
						                    value={state.url}
						                  	className={errors.url ? 'border border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300'} 
						                  	placeholder="www.example.com" 
						               		onChange={handleChange}
						                  	/>
					                </div>
					            </div>
					            <div className="grid grid-cols-3 gap-6  flex items-center">
					                <label 
					                	className="block text-sm font-medium text-gray-700">
					                  	
					                </label>
					                <div className="mt-1 flex rounded-md shadow-sm">
					                  	{errors.url && <div className="text-red-600 text-md">{errors.url}</div>}
					                </div>
					            </div>
				            </div>
				        </div>
	            	</form>
	            </div>

			</div>
		</App>
	)
}

export default Add;