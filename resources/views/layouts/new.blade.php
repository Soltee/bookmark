<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name', 'Laravel') }}</title>
        @routes

        <link rel="icon" href="{{ asset('/img/bookmark.svg') }}">
    	<link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
  	</head>
	<body class="font-sans antialiased">
        @include('sweetalert::alert')
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            @include('layouts.navigation')

            <!-- Page Content -->
            <main>
    	       @inertia
            </main>
        </div>
        <script src="{{ mix('/js/app.js') }}" defer></script>
  </body>
</html>