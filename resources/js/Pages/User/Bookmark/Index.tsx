import React from 'react';
import App from '../../../Layouts/Index';
import { InertiaLink } from '@inertiajs/inertia-react'

interface Props {
	bookmarks : Array<any>
}

const Index: React.FC<Props> = ({ bookmarks }) => {

	return (
		<App>

			<div>
				<div className="flex justify-between items-center my-3">
					<h3 className="font-bold text-xl">Bookmarks</h3>
					<InertiaLink 
						href="/bookmarks/add" 
						preserveState
						className="border-b mb-2 hover:border-gray-900"
						>Add New Bookmark
					</InertiaLink>
				</div>

		        <div  className=" overflow-x-auto">
			        <div  className="inline-block min-w-full  rounded-lg overflow-hidden">
			            <table className="min-w-full leading-normal">
			                <thead>
			                    <tr>
			                        <th
			                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-custom-light-black uppercase tracking-wider">
			                            Title
			                        </th>
			                        <th
			                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-custom-light-black uppercase tracking-wider">
			                            Url
			                        </th>
			                        <th
			                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-custom-light-black uppercase tracking-wider">
			                            Created
			                        </th>
			                        <th
			                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-custom-light-black uppercase tracking-wider">
			                            Action
			                        </th>
			                      
			                    </tr>
			                </thead>
			                <tbody>

				                {bookmarks.length > 0 && bookmarks.map((bookmark, index) => {
					        		return (
					        			<tr key={index}>
					                        <td className="px-5 whitespace-no-wrap py-5 border-b border-gray-200 bg-white text-sm">
					                            <p className="text-gray-900 whitespace-no-wrap font-black">
					        						{bookmark.title}
					                            </p>
					                        </td>
					                        <td className="px-5 whitespace-no-wrap py-5 border-b border-gray-200 bg-white text-sm">
					                            <p className="text-gray-900 whitespace-no-wrap font-black">
					        						{bookmark.url}
					                            </p>
					                        </td>
					                        <td className="px-5 whitespace-no-wrap py-5 border-b border-gray-200 bg-white text-sm">
					                            <p className="text-gray-900 whitespace-no-wrap font-black">
					        						{bookmark.created_at}
					                            </p>
					                        </td>
					                        <td className="px-5 whitespace-no-wrap py-5 border-b border-gray-200 bg-white text-sm">
					                            <p className="text-gray-900 whitespace-no-wrap font-black">
					                            </p>
					                        </td>
					                    </tr>
					        		)
					        	})}
			                       
			                    {bookmarks.length < 1  ? 
			                    	<tr>
				                        <td className="">
				                            <div className=" flex flex-col justify-center w-full items-center">
									      		<svg className="h-10 w-10 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 6H4.34a6 6 0 0 1 11.32 0z"/></svg>
									      		<p className="mt-3">Oops! No Bookmarks yet .</p>
								     		</div>
			                            </td>
			                        </tr>
			                    : ''}
			                </tbody>
			            </table>

			        </div>
			    </div>

		        
			</div>
		</App>
	)
}

export default Index;