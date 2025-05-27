@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('Voiceover')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('Voiceover')]) }}</strong>
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
            <td class="text-center list-th"> {{ __('Prompt') }} </td>
            <td class="text-center list-th"> {{ __('Provider') }} </td>
            <td class="text-center list-th"> {{ __('Creator') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($voiceovers as $key => $voiceover)
        <tr>
            <td class="text-center list-td"> {{ trimWords(ucfirst($voiceover->title), 60) }} </td>
            <td class="text-center list-td"> {{ ucFirst($voiceover->provider) }} </td>
            <td class="text-center list-td"> {{ optional($voiceover->voiceoverCreator)->name }} </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($voiceover->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
