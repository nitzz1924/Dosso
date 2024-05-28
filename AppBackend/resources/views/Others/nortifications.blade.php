{{-- -------------------------------------------------🔱HAR HAR
MAHADEV🔱--------------------------------------------------------------- --}}
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
                            <li class="breadcrumb-item active">Send Nortifications</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0">Send Nortifications</h4>
                    </div>
                    <form action="{{route('createnortification')}}" method="POST">
                        @csrf
                        <div class="card-body">
                            <div>
                                <label for="exampleFormControlTextarea5" class="form-label">Your Nortification
                                    here</label>
                                <textarea name="message" class="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="mt-0 p-2 d-flex justify-content-end">
                            <button type="submit" class="btn btn-success btn-border">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card tablecard">
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
                    <div class="card-body table-responsive">
                        <table class="table table-nowrap table-bordered hover">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Sent Date</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($mesagedata as $key => $value)
                                <tr>
                                    <td>{{$key + 1 }}</td>
                                    <td>{{ $value->created_at->format('d-m-Y') }}</td>
                                    <td>{{$value->message}}</td>
                                    <td>
                                        <div class="dropdown d-inline-block">
                                            <button class="btn btn-soft-secondary btn-sm dropdown" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="ri-more-fill align-middle"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li><a class="dropdown-item edit-item-btn" href="/editnortification/{{$value->id}}"><i
                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                        Edit</a></li>
                                                <li>
                                                    <a href="/deletenortification/{{$value->id}}" class="dropdown-item remove-item-btn" id="sa-warningid">
                                                        <i class=" ri-delete-bin-fill
                                                            align-bottom me-2 text-muted"></i>Remove
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{-- /deletemastercat/{{ $row->id }}/masterpage --}}
                    </div>
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
