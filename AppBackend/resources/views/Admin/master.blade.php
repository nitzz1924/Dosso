{{-- -------------------------------------------------🔱HAR HAR MAHADEV🔱--------------------------------------------------------------- --}}
<x-app-layout>
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">BTech Mart</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Category</a></li>
                            <li class="breadcrumb-item active">Add Category</li>
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
                        <h4 class="card-title mb-0 flex-grow-1">Add Category</h4>
                        {{-- <div class="flex-shrink-0">
                                <div class="form-check form-switch form-switch-right form-switch-md">

                                </div>
                            </div> --}}
                    </div><!-- end card header -->
                    <div class="card-body">
                        <div class="live-preview">
                            <form action="#" method="POST">
                                @csrf
                                <div class="row gy-4">
                                    <div class="col-xxl-3 col-md-6">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Label</label>
                                            <input type="text" class="form-control" id=""
                                                placeholder="enter label" name="label">
                                        </div>
                                    </div>
                                    <div class="col-xxl-3 col-md-6">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Value</label>
                                            <input type="text" class="form-control" id="valueval"
                                                placeholder="enter value" name="value" value="">
                                        </div>
                                    </div>
                                    <div class="col-xxl-3 col-md-6">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Upload Image</label>
                                            <input type="file" class="form-control" id="image"
                                                placeholder="enter color" name="image">
                                        </div>
                                    </div>
                                    <div class="col-xxl-3 col-md-6">
                                        <div class="mt-4 p-1">
                                            <button type="button"
                                                class="btn btn-success btn-border">Add</button>
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
                        <table class="table table-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Label</th>
                                    <th scope="col">Value</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><img src="{{ asset('assets/images/favicon.ico') }}" alt="" height="50px" width="50px"></td>
                                    <td>Label Name</td>
                                    <td>Value Name</td>
                                    <td>Admin</td>
                                    <td>1</td>
                                    <td>
                                        <div class="dropdown d-inline-block">
                                            <button class="btn btn-soft-secondary btn-sm dropdown"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="ri-more-fill align-middle"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li><a href=""
                                                        id="openModalBtnone" data-bs-toggle="modal"
                                                        class="dropdown-item openModalBtn"><i
                                                            class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                        View</a></li>
                                                <li><a class="dropdown-item edit-item-btn"
                                                        href="" data-bs-toggle="modal" data-bs-target="#showmasteredit"><i
                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                        Edit</a></li>
                                                {{-- <li>
                                                    <a href="/viewuservehicles/{{$row->id}}" class="dropdown-item remove-item-btn">
                                                        <i
                                                            class="ri-car-fill align-bottom me-2 text-muted"></i>All
                                                        Vehicles
                                                    </a>
                                                </li> --}}
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item remove-item-btn"  id="sa-warningid">
                                                        <i
                                                            class=" ri-delete-bin-fill
                                                            align-bottom me-2 text-muted"></i>Remove
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><img src="{{ asset('assets/images/favicon.ico') }}" alt="" height="50px" width="50px"></td>
                                    <td>Label Name</td>
                                    <td>Value Name</td>
                                    <td>Admin</td>
                                    <td>1</td>
                                    <td>
                                        <div class="dropdown d-inline-block">
                                            <button class="btn btn-soft-secondary btn-sm dropdown"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="ri-more-fill align-middle"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li><a href=""
                                                        id="openModalBtnone" data-bs-toggle="modal"
                                                        class="dropdown-item openModalBtn"><i
                                                            class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                        View</a></li>
                                                <li><a class="dropdown-item edit-item-btn"
                                                        href=""><i
                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                        Edit</a></li>
                                                {{-- <li>
                                                    <a href="/viewuservehicles/{{$row->id}}" class="dropdown-item remove-item-btn">
                                                        <i
                                                            class="ri-car-fill align-bottom me-2 text-muted"></i>All
                                                        Vehicles
                                                    </a>
                                                </li> --}}
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item remove-item-btn"  id="">
                                                        <i
                                                            class=" ri-delete-bin-fill
                                                            align-bottom me-2 text-muted"></i>Remove
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><img src="{{ asset('assets/images/favicon.ico') }}" alt="" height="50px" width="50px"></td>
                                    <td>Label Name</td>
                                    <td>Value Name</td>
                                    <td>Admin</td>
                                    <td>1</td>
                                    <td>
                                        <div class="dropdown d-inline-block">
                                            <button class="btn btn-soft-secondary btn-sm dropdown"
                                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="ri-more-fill align-middle"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end">
                                                <li><a href=""
                                                        id="openModalBtnone" data-bs-toggle="modal"
                                                        class="dropdown-item openModalBtn"><i
                                                            class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                        View</a></li>
                                                <li><a class="dropdown-item edit-item-btn"
                                                        href=""><i
                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                        Edit</a></li>
                                                {{-- <li>
                                                    <a href="/viewuservehicles/{{$row->id}}" class="dropdown-item remove-item-btn">
                                                        <i
                                                            class="ri-car-fill align-bottom me-2 text-muted"></i>All
                                                        Vehicles
                                                    </a>
                                                </li> --}}
                                                <li>
                                                    <a href="#"
                                                        class="dropdown-item remove-item-btn"  id="">
                                                        <i
                                                            class=" ri-delete-bin-fill
                                                            align-bottom me-2 text-muted"></i>Remove
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
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
        setTimeout(function() {
            $('#successAlert').fadeOut('slow');
        }, 2000);

        setTimeout(function() {
            $('#dangerAlert').fadeOut('slow');
        }, 2000);
    </script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</x-app-layout>
