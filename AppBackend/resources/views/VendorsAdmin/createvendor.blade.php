{{-- -------------------------------------------------🔱HAR HAR MAHADEV🔱--------------------------------------------------------------- --}}
<x-app-layout>
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">DOSSO</h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Add Vendor</a></li>
                            <li class="breadcrumb-item active">Add Vendor</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    @if ($mymess = Session::get('success'))
                        <div class="alert border-0 alert-success text-center" role="alert" id="successAlert">
                            <strong>{{ $mymess }}</strong>
                        </div>
                    @endif
                    @if ($mymess = Session::get('error'))
                        <div class="alert border-0 alert-danger text-center" role="alert" id="dangerAlert">
                            <strong>{{ $mymess }}</strong>
                        </div>
                    @endif
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">Add Vendor</h4>
                        {{-- <div class="flex-shrink-0">
                                <div class="form-check form-switch form-switch-right form-switch-md">

                                </div>
                            </div> --}}
                    </div><!-- end card header -->
                    <div class="card-body">
                        <div class="live-preview">
                            <form action="{{ route('createvendor') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row gy-4">
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Name</label>
                                            <input type="text" class="form-control" id=""
                                                placeholder="enter vendor name" name="vendorname">
                                            {{-- @error('title')
                                                <div class="alert alert-danger">{{ $message }}</div>
                                            @enderror --}}
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Profile Image</label>
                                            <input type="file" class="form-control" id="valueval"
                                                placeholder="enter value" name="vendorprofile">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">School Name</label>
                                            <input type="text" class="form-control" id="valueval"
                                                placeholder="enter school name" name="schoolname">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Contact Number</label>
                                            <input type="text" class="form-control" id="valueval"
                                                placeholder="enter mobile number" name="contactno">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Email Address</label>
                                            <input type="email" class="form-control" id="valueval"
                                                placeholder="enter email" name="emailaddress">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="valueval"
                                                placeholder="enter your password" name="password">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mt-4 p-1">
                                            <button type="submit" class="btn btn-success btn-border">Add</button>
                                        </div>
                                        {{-- <button type="button" class="btn btn-primary btn-sm">Click me</button> --}}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card tablecard">
                    <div class="card-body table-responsive">
                        <table class="table table-nowrap table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Refer ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Profile Image</th>
                                    <th scope="col">School Name</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">Email Address</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($vendordata as $row)
                                    <tr>
                                        <td>{{ $row->id }}</td>
                                        <td>{{ $row->vendorname }}</td>
                                        <td><img src="{{ asset('uploads/' . $row->vendorprofile) }}" alt="Thumbnail"
                                                width="100px" class="rounded-pill"></td>
                                        <td>{{ $row->schoolname }}</td>
                                        <td>{{ $row->contactno }}</td>
                                        <td>{{ $row->emailaddress }}</td>
                                        {{-- <td>{{ $row->referidvendor }}</td> --}}
                                        <td>
                                            <span
                                                class="badge rounded-pill bg-{{ $row->status == 0 ? 'danger' : 'success' }}-subtle text-{{ $row->status == 0 ? 'danger' : 'success' }}">
                                                {{ $row->status == 0 ? 'Inactive' : 'Active' }}
                                            </span>
                                        </td>
                                        <td>
                                            <button class="btn btn-success btn-border btn-sm" id="btnid{{ $row->id }}"
                                                onclick="state('{{ $row->id }}')">Dectivate</button>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
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
                    <form action="javascript:void(0);">
                        <div class="row  g-3 align-items-center">
                            <div class="col-sm-4">
                                <div>
                                    <label for="placeholderInput" class="form-label">Label</label>
                                    <input type="text" class="form-control" id=""
                                        placeholder="enter label" name="label">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div>
                                    <label for="placeholderInput" class="form-label">Value</label>
                                    <input type="text" class="form-control" id="valueval"
                                        placeholder="enter value" name="value" value="">
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div>
                                    <label for="placeholderInput" class="form-label">Upload Image</label>
                                    <input type="file" class="form-control" id="image"
                                        placeholder="enter color" name="image">
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
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("sa-warningid").addEventListener("click", function() {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You want to delete this Vehicle..?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
                    cancelButtonClass: "btn btn-danger w-xs mt-2",
                    confirmButtonText: '<a href="#" class="text-white">Yes, delete it!</a>',
                    buttonsStyling: false,
                    showCloseButton: true,
                });
            });
        });
    </script>
    <script>
        function state(rowId) {
            var btn = document.getElementById('btnid' + rowId);
            btn.disabled = true;
            btn.classList.remove('btn-success');
            btn.classList.add('btn-danger');
            btn.textContent = "Deactivated";
        }
        setTimeout(function() {
            $('#successAlert').fadeOut('slow');
        }, 2000);

        setTimeout(function() {
            $('#dangerAlert').fadeOut('slow');
        }, 2000);
    </script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</x-app-layout>
