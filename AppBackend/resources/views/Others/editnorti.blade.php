{{-- -------------------------------------------------🔱HAR HAR MAHADEV🔱--------------------------------------------------------------- --}}
<x-app-layout>
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">DOSSO21</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                            <li class="breadcrumb-item active">Edit Nortification</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    @if ($message = Session::get('success'))
                    <div class="alert border-0 alert-success text-center" role="alert" id="successAlert">
                        <strong>{{ $message }}</strong>
                    </div>
                    @endif
                    @if ($message = Session::get('failure'))
                    <div class="alert border-0 alert-danger text-center" role="alert" id="dangerAlert">
                        <strong>{{ $message }}</strong>
                    </div>
                    @endif
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0">Edit Nortification</h4>
                    </div>
                    <form action="{{route('updatenorti')}}" method="POST">
                        @csrf
                        <div class="card-body">
                            <div>
                                <label for="exampleFormControlTextarea5" class="form-label">Your Nortification
                                    here</label>
                                <textarea name="message" class="form-control" id="exampleFormControlTextarea5" rows="3">{{$messagedataedit->message}}</textarea>
                            </div>
                            <input type="hidden" name="nortiid" value="{{$messagedataedit->id}}">
                        </div>
                        <div class="mt-0 p-2 d-flex justify-content-end">
                            <button type="submit" class="btn btn-success btn-border">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id="showmasteredit" class="modal fadeInRight" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg">
            <div class="modal-content border-0 overflow-hidden">
                <div class="modal-header p-3 text-center">
                    <h4 class="card-title mb-0 ">BTech Mart</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="alert alert-success  rounded-0 mb-0">
                    <p class="mb-0 text-center">Edit Category</p>
                </div>
                <div class="modal-body">
                    <form action="{{route('createnortification')}}" method="POST">
                        @csrf
                        <div class="row  g-3 align-items-center">
                            <div class="col-sm-4">
                                <div>
                                    <label for="placeholderInput" class="form-label">Label</label>
                                    <input type="text" class="form-control" id="" placeholder="enter label"
                                        name="label">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div>
                                    <label for="placeholderInput" class="form-label">Value</label>
                                    <input type="text" class="form-control" id="valueval" placeholder="enter value"
                                        name="value" value="">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div>
                                    <label for="placeholderInput" class="form-label">Upload Image</label>
                                    <input type="file" class="form-control" id="image" placeholder="enter color"
                                        name="image">
                                </div>
                            </div>
                            <div class="col-auto text-center w-100">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
    <script>
        setTimeout(function() {
            $('#successAlert').fadeOut('slow');
        }, 2000);

        setTimeout(function() {
            $('#dangerAlert').fadeOut('slow');
        }, 2000);
    </script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</x-app-layout>
