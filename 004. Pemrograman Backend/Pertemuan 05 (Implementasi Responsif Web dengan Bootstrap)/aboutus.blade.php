@extends('adminlte::page')
@section('title', 'About Us')

@section('content_header')
    <h1>About Us</h1>
@stop

@section('content')
    <div class="accordion mb-3" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
                </button>
            </h2>
        </div>
        <div class="card">
            <div class="card-body">
              Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code style="color: pin
              ">.show</code> class.
            </div>
        </div>
    </div>

    <div class="accordion mb-3" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #2
                </button>
            </h2>
        </div>
    </div>

    <div class="accordion mb-3" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #3
                </button>
            </h2>
        </div>
    </div>
@endsection

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script>console.log('Hi!')</script>
@stop