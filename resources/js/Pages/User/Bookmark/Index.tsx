import React from 'react';
import App from '../../../Layouts/Index';
import { InertiaLink } from '@inertiajs/inertia-react'
import route from 'ziggy-js';
import dayjs from 'dayjs' // ES 2015

interface Props {
	bookmarks : Array<any>
	// bookmarks : any
}

const Index: React.FC<Props> = ({ bookmarks, prev, next, current, first,last, total }) => {

	const format = (date) => {
		return dayjs(date).format('ddd MMM YYYY');
	}


	return (
		<App>

			<div className="w-full">
				<div className="flex justify-between items-center my-3">
					<h3 className="font-bold text-xl">Bookmarks</h3>
					<InertiaLink 
						href="/bookmarks/add" 
						preserveState
						className="border-b mb-2 hover:border-gray-900"
						>+ Add New
					</InertiaLink>
				</div>

				{bookmarks.length > 0 && bookmarks.map((bookmark, index) => {
	        		return (
	                    <div 
	                    	key={index}
	                    	className="flex flex-col md:flex-row mb-12 rounded w-full bg-gray-300 shadow">
	                    	<div className="w-full md:w-64">
							    <InertiaLink href={route('bookmarks.show', {bookmark :bookmark.id})}>

						            <img 
								        src={bookmark.img_url} 
								        alt={bookmark.title}         
								        className="object-cover hover:opacity-75 rounded-t md:rounded-none md:rounded-l h-64 w-full" />
						        
						        </InertiaLink>
					        </div>
						    <div className="rounded-r p-3 flex-1 flex flex-col">
						        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
						        
								    <InertiaLink href={route('bookmarks.show', {bookmark :bookmark.id})}>
								        <h1 className="text-xl  m-0 mr-3 font-bold">{bookmark.title}</h1>
								    </InertiaLink>
								    <p className="w-auto md:w-full text-md rounded  mt-2 md:mt-0 md:p-2 text-gray-800">{format(bookmark.created_at)}</p>

						        </div>

						      	<p className="text-md text-gray-900 font-bold mt-4 text-left">{bookmark.description}</p>
						    	<InertiaLink href={bookmark.url}>
								    <h1 className="mt-5 w-32 text-center text-md border border-gray-500 hover:bg-gray-600 hover:text-white rounded-lg text-gray-900  m-0 px-3 py-3 font-bold">
								    	Visit
								    </h1>
								</InertiaLink>
						    </div>
						</div>
	            	)}
	            )}

	            {bookmarks.length < 1  &&
                    <div className=" flex flex-col justify-center w-full items-center my-6">
				      	<svg className="h-10 w-10 text-red-600" stroke="1" fill="currentColor" viewBox="0 0 20 20">
				      		<path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 6H4.34a6 6 0 0 1 11.32 0z"/></svg>
				      	<p className="mt-3">Oops! No Bookmarks yet .</p>
                    </div>
                }

            {/*Pagination*/}

            	<div className="flex justify-between items-center my-5">

            		<div className="flex items-center text-md font-semibold text-gray-900">
            			Showing {first} - {last} of {total} 
            		</div>

            		<div className="flex items-center text-md font-semibold">
            			{prev && 
            				<InertiaLink href={prev} preserveScroll>
	            				<span className="px-3 py-3 rounded border border-gray-300 text-gray-900 hover:border-gray-600">
	            					Prev
	            				</span>
	            			</InertiaLink>
            			}
            			{next && 
	            			<InertiaLink href={next} preserveScroll>
	            				<span className="px-3 py-3 rounded border border-gray-300 text-gray-900 hover:border-gray-600">
	            					Next
	            				</span>
	            			</InertiaLink>
            			}
            		</div>
            	</div>

				{/*Table Layouts*/}
		        {/*<div  className=" overflow-x-auto">
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
					                            <InertiaLink href={route('bookmarks.show', {bookmark :bookmark.id})}>
					                            	{bookmark.title}
					                            </InertiaLink>
					                        </td>
					                        <td className="px-5 whitespace-no-wrap py-5 border-b border-gray-200 bg-white text-sm">
					                            <p className="text-gray-900 whitespace-no-wrap font-black">
					        						{bookmark.url}
					                            </p>
					                        </td>
					                        <td className="px-5 whitespace-no-wrap py-5 border-b border-gray-200 bg-white text-sm">
					                            <p className="text-gray-900 whitespace-no-wrap font-black">
					        						{format(bookmark.created_at)}
					                            </p>
					                        </td>
					                        <td className="px-5 whitespace-no-wrap py-5 border-b border-gray-200 bg-white text-sm">
					                            <p className="text-gray-900 whitespace-no-wrap font-black">
					                            </p>
					                        </td>
					                    </tr>
					        		)
					        	})}
			                       
			                    {bookmarks.length < 1  &&
			                    	<tr>
				                        <td className="">
				                            <div className=" flex flex-col justify-center w-full items-center">
									      		<svg className="h-10 w-10 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 6H4.34a6 6 0 0 1 11.32 0z"/></svg>
									      		<p className="mt-3">Oops! No Bookmarks yet .</p>
								     		</div>
			                            </td>
			                        </tr>
			                    }
			                </tbody>
			            </table>

			        </div>
			    </div>*/}

		        
			</div>
		</App>
	)
}

export default Index;