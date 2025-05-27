@extends('admin.layouts.app')
@section('page_title', __('View :x', ['x' => __('Import')]))
@section('content')
<div class="col-sm-12 list-container" id="item-list-container">
    <div class="card">
        <div class="card-header d-md-flex justify-content-between align-items-center">
            <h5>{{ __('Actors Import') }}</h5>
        </div>
        <div class="col-sm-12">
            <div class="card-block pt-2">
                <button class="btn btn-outline-primary custom-btn-smal d-inline-flex rtl:gap-2 align-items-center" id="fileRequest"><i
                        class="fa fa-download"></i>{{ __('Download Sample') }}</button>
                <hr>
                <p>{{ __('Your CSV data should be in the format below. The first line of your CSV file should be the column headers as in the table example. Also make sure that your file is UTF-8 to avoid unnecessary encoding problems.') }}
                </p>

                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>{{ __('Name') }}<span class="text-danger">*</span></th>
                                <th>{{ __('Voice') }}<span class="text-danger">*</span></th>
                                <th>{{ __('Gender') }}<span class="text-danger">*</span></th>
                                <th>{{ __('Language') }}<span class="text-danger">*</span></th>
                                <th class="w-auto">{{ __('Audio') }}<span class="text-danger">*</span></th>
                                <th>{{ __('Status') }}<span class="text-danger">*</span></th>
                                <th>{{ __('Image') }}<span class="text-danger">*</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ethan Parker</td>
                                <td>alloy</td>
                                <td>Male</td>
                                <td>en</td>
                                <td>C:\Users\user\Desktop\audio.mp3</td>
                                <td>Active</td>
                                <td>C:\Users\user\Desktop\ethan.jpeg</td>
                            </tr>
                            <tr>
                                <td>Caleb Mitchell</td>
                                <td>echo</td>
                                <td>Male</td>
                                <td>en</td>
                                <td>C:\Users\user\Desktop\caleb.mp3</td>
                                <td>Active</td>
                                <td>C:\Users\user\Desktop\mitchel.jpeg</td>
                            </tr>
                        </tbody>
                    </table>
                    <span class="badge badge-info">{{ __('Note') }}</span> <small
                        class="text-info">{{ __('Required field is mandatory. If any provider is missing the language field, please ensure it is added in ISO 639-1 format, such as \'en\' for English.') }}</small>
                </div><br>

                <form action="#" method="post" id="myform1" class="form-horizontal"
                    enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <div class="row">
                            <label class="col-md-2 control-label pt-1">{{ __('Select Provider') }}
                                <span class="text-danger">*</span>
                            </label>
                            <div class="custom-file position-relative col-md-8 p-0">
                                <div class="custom-file">
                                    <select class="form-control sl_common_bx"
                                    id="provider" name="provider" required
                                    oninvalid="this.setCustomValidity('{{ __('This field is required.') }}')">
                                    @foreach($providers as $provider)
                                        <option value="{{ $provider['display_name'] }}">{{ $provider['display_name'] }}</option>
                                    @endforeach
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <label class="col-md-2 control-label pt-1">{{ __('Choose CSV File') }}
                                <span class="text-danger">*</span>
                            </label>
                            <div class="custom-file position-relative col-md-8">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" name="file"
                                        id="validatedCustomFile">
                                    <label class="custom-file-label overflow_hidden d-flex align-items-center"
                                        for="validatedCustomFile">{{ __('Upload csv...') }}</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row d-none" id="api_url">
                        <label class="col-md-2 control-label note"></label>
                        
                        <div class="col-md-8">
                            <div id="note_txt_1">
                                <span class="badge badge-info">{{ __('API Url') }}</span>
                                <small class="text-info url-note">
                                    <a href="javascript:void(0)" target="_blank"></a>
                                </small>
                            </div>
                    
                            <div id="note_txt_2">
                                <span class="badge badge-info">{{ __('Note') }}</span>
                                <small class="text-info important-note"></small>
                            </div>
                        </div>
                    </div>
                    

                    <!-- /.box-body -->
                    <div class="col-sm-8 px-0 mt-3">
                        <button class="btn custom-btn-submit" type="submit"
                            id="submit">{{ __('Import') }}</button>
                    </div>
                    <!-- /.box-footer -->
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
@section('js')
    <script src="{{ asset('Modules/OpenAI/Resources/assets/js/admin/actor-import.min.js') }}"></script>
@endsection
