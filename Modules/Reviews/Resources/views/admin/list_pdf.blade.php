@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('Reviews')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('Reviews')]) }}</strong>
    </p>
    <p class="title">
      <span class="title-text">{{ __('Print Date') }}: </span> {{ formatDate(date('d-m-Y')) }}
    </p>
</td>
@endsection

@section('list-table')
<table class="list-table">
    <thead class="list-head">
        <tr>
            <td class="text-center list-th"> {{ __('Title') }} </td>
            <td class="text-center list-th"> {{ __('Comments') }} </td>
            <td class="text-center list-th"> {{ __('Ratings') }} </td>
            <td class="text-center list-th"> {{ __('User Name') }} </td>
            <td class="text-center list-th"> {{ __('Status') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($reviews as $key => $review)
        <tr>
            <td class="text-center list-td"> {!! wrapIt($review->title, 10, ['columns' => 2]) !!} </td>
            <td class="text-center list-td"> {!! wrapIt($review->comments, 50, ['columns' => 2]) !!} </td>
            <td class="text-center list-td"> @php $options = '';
                for ($i = 1; $i <=5 ; $i++) {
                    $options .=  $i <= $review->rating ? '*' : '';
                };
                echo $options; @endphp </td>
            <td class="text-center list-td"> {{ wrapIt(optional($review->user)->name, 10,  ['columns' => 2,'trim' => true]) }} </td>
            <td class="text-center list-td"> {{ ucfirst($review->status) }} </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($review->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
