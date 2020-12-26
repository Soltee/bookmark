<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bookmark;
use App\Models\User;

use Inertia\Inertia;
use Auth;
use App\Http\Requests\BookmarkStoreRequest;
use App\Http\Requests\BookmarkMakeActiveRequest;
use OpenGraph;
use DB;

class BookmarkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookmarks = Auth::user()
                            ->bookmarks()
                            ->latest()
                            // ->where('is_active', 1)
                            // ->orderByDesc('updated_at')
                            ->paginate(2);
        return Inertia::render('User/Bookmark/Index', [
                'bookmarks' => $bookmarks->items(),
                'prev'      => $bookmarks->previousPageUrl(),
                'current'   => $bookmarks->currentPage(),
                'first'     => $bookmarks->firstItem(),
                'last'      => $bookmarks->lastItem(),
                'next'      => $bookmarks->nextPageUrl(),
                'total'     => $bookmarks->total()
            ]);
    }

    /**
     * Show the form for adding a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function add()
    {
        return Inertia::render('User/Bookmark/Add', [
                // 'auth'  => Auth::user()
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BookmarkStoreRequest $request)
    {
        // return $request->validated();
        $validated  = $request->validated();

        $data       = OpenGraph::fetch($validated['url'], true);

        // return $data;
        $title         = $data['title'] ?? $validated['url'];
        $type          = $data['type'] ?? '';
        $descr         = $data['description'] ?? '';

        $bookmark = Auth::user()->bookmarks()->create([
                'title'            => $title,
                'url'              => $validated['url'],
                'img_url'          => $data['image'],
                'type'             => $type,
                'description'      => $descr
            ]);

        return redirect()
                // ->back()->with('success', 'Bookmark added');
                ->route('bookmarks.show', ['bookmark' => $bookmark->id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Bookmark $bookmark)
    {
        
        // return Auth::user()->id;
        // return $bookmark->user_id;
        if(Auth::user()->id != $bookmark->user_id)
        {
            abort(401, 'You are unauthorized to view this bookmark');
            return redirect()->back();
        }

        return Inertia::render('User/Bookmark/Show', [
                'bookmark'  => $bookmark,
                'user'      => Auth::user()
            ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * make_active the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function make_active(BookmarkMakeActiveRequest $request)
    {
        $validated = $request->validated();


        $bookmark = Bookmark::findOrfail($validated['id']);

        if(Auth::user()->id != $bookmark->user_id)
        {
            abort(401, 'You are unauthorized');
            return redirect()->back();
        }

        $bookmark->is_active  = !$bookmark->is_active;
        $bookmark->save();

        return redirect()
                ->route('bookmarks.show', ['bookmark' => $bookmark->id])
                ->with('success', 'Bookmark is set as active');
    }

    /** Redirect **/
    public function redirect(Bookmark $bookmark)
    {
        if(Auth::user()->id != $bookmark->user_id)
        {
            abort(401, 'You are unauthorized');
            return redirect()->back();
        }

        DB::table($bookmark->getTable())
            ->where('id', $bookmark->id)
            ->increment('views');

        return redirect($bookmark->url);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookmark $bookmark)
    {
        // dd($bookmark);
        $bookmark->delete();
        return redirect()
                    ->route('bookmarks')
                    ->with('success', 'Bookmark was removed from records.');
        // return response()->json([], 204);
        // return redirect()->back()
        //         ->with('success', 'Bookmark was removed from records.');            
    }
}
