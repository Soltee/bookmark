import React , { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import App from '../../../Layouts/Index';
import axios from 'axios';
import swal from '@sweetalert/with-react';

interface Props {
	bookmark : any,
	user     : any
}

const Show: React.FC<Props> = ({ bookmark, user }) => {

	const handleSave = (event: React.MouseEvent) => {
		event.preventDefault();

		Inertia.post("/bookmarks/make_active", {id : bookmark.id});

	}


	const handleDestroy = (event: React.MouseEvent) => {
		event.preventDefault();

		Inertia.delete(`/bookmarks/${bookmark.id}`);

		
		// axios.delete(`/bookmarks/${bookmark.id}`)
		// .then(res => {
		// 	console.log(res);
		// 	if(res.status === 204)
		// 	{
		// 		swal({
		// 		  content: <div className="text-green-600 text-lg">Bookmark removed.</div>,
		// 		  buttons: true,
		// 		  icon   : 'success'
		// 		});
		// 	}
		// }).catch(err  => {
		// 	console.log('Error');
		// });

	}

	return (
		<App>

			<div>
				
		        <div className="mt-5 md:mt-0 md:col-span-2">
		      		<div className="flex justify-between items-center my-3">
						<h3 className="font-bold text-xl">
							{bookmark.title}
						</h3>
						<button
							onClick={handleDestroy}
							className="bg-red-600 hover:bg-red-500 border-b mb-2 rounded-lg px-3 py-3 text-white"
							>Delete
						</button>
					</div>
				     
					<div className="my-3">
					    <div className="bg-white shadow-2xl rounded" >
					        <div>
					            <img src={bookmark.img_url} className="w-full h-64 rounded-t object-cover object-center"/>
					        </div>
					        <div className="px-4 py-2 mt-2 bg-white rounded-b">
					            <h2 className="font-bold text-2xl text-gray-800">{bookmark.title}</h2>
					                <p className="sm:text-sm text-md text-gray-700 px-2 mr-1 my-3">
					                	{bookmark.description}
					                </p>

					            {bookmark.is_active === '1' ?
					            		<div className="flex items-center rounded-lg">
						            		<label
												className="bg-gray-900 hover:bg-gray-900 border-b mb-2 rounded-l px-3 py-3 text-white"
												>
												Status
											</label>
											<span
												className="bg-green-600 hover:bg-green-500 border-b mb-2 rounded-r px-6 py-3 text-white"
												>
												Active
											</span>
										</div>
					            	: 
							            <button
							            	onClick={handleSave}
											className="bg-blue-600 hover:bg-blue-500 border-b mb-2 rounded-lg px-3 py-3 text-white"
											>
											Set As Active
										</button>
					            }
					        </div>
					    </div>
					</div>
	            </div>

			</div>
		</App>
	)
}

export default Show;