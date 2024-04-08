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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Add Contest</a></li>
                            <li class="breadcrumb-item active">Add Contest</li>
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
                        <h4 class="card-title mb-0 flex-grow-1">Add Contest</h4>
                        {{-- <div class="flex-shrink-0">
                                <div class="form-check form-switch form-switch-right form-switch-md">

                                </div>
                            </div> --}}
                    </div><!-- end card header -->
                    <div class="card-body">
                        <div class="live-preview">
                            <form action="{{ route('createcontest') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row gy-4">
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Title</label>
                                            <input type="text" class="form-control" id=""
                                                placeholder="enter title" name="title">
                                            {{-- @error('title')
                                                <div class="alert alert-danger">{{ $message }}</div>
                                            @enderror --}}
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Start Date</label>
                                            <input type="date" class="form-control" id="valueval"
                                                placeholder="enter value" name="startdate">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">End Date</label>
                                            <input type="date" class="form-control" id="valueval"
                                                placeholder="enter value" name="enddate">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Total Round</label>
                                            <select class="form-select" id="type" name="totalround" required>
                                                <option value="default" selected>Choose...</option>
                                                @for ($i = 1; $i <= 10; $i++)
                                                    <option value="{{ $i }}">{{ $i }}</option>
                                                @endfor
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Completed Round</label>
                                            <input type="text" class="form-control" id="valueval"
                                                placeholder="enter completed rounds" name="completedround">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Total Price</label>
                                            <input type="text" class="form-control" id="valueval"
                                                placeholder="enter total price" name="totalprice">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Total Spin</label>
                                            <select class="form-select" id="type" name="totalspin" required>
                                                <option value="default" selected>Choose...</option>
                                                @for ($i = 1; $i <= 10; $i++)
                                                    <option value="{{ $i }}">{{ $i }}</option>
                                                @endfor
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Thumbnail</label>
                                            <input type="file" class="form-control" id="image"
                                                placeholder="enter color" name="thumbnail">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Total Member Joined</label>
                                            <input type="text" class="form-control" id="image"
                                                placeholder="enter total member joined" name="joinmembers">
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
                                <tr class="text-center">
                                    <th scope="col">ID</th>
                                    <th scope="col">Thumbnail</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Total Round</th>
                                    <th scope="col">Completed Round</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col">Total Spin</th>
                                    <th scope="col">Total Member Joined</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($contestdata as $index => $row)
                                    <tr>
                                        <td>{{ $index + 1 }}</td>
                                        <td>
                                            @if ($row->thumbnail)
                                                {{-- @php
                                                        $imagePaths = explode(',', $row->image);
                                                        $firstImagePath = $imagePaths[0];
                                                    @endphp --}}
                                                <img src="{{ asset('uploads/' . $row->thumbnail) }}" alt="Thumbnail"
                                                    width="100px" class="rounded-pill">
                                            @endif
                                        </td>
                                        <td>{{ $row->title }}</td>
                                        <td>{{ $row->startdate }}</td>
                                        <td>{{ $row->enddate }}</td>
                                        <td>{{ $row->totalround }}</td>
                                        <td>{{ $row->completedround }}</td>
                                        <td>{{ $row->totalprice }}</td>
                                        <td>{{ $row->totalspin }}</td>
                                        <td>{{ $row->joinmembers }}</td>
                                        <td>
                                            <span
                                                class="badge rounded-pill bg-{{ $row->status == 0 ? 'danger' : 'success' }}-subtle text-{{ $row->status == 0 ? 'danger' : 'success' }}">
                                                {{ $row->status == 0 ? 'Inactive' : 'Active' }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="d-flex justify-content-center gap-2">
                                                <button
                                                    class="btn btn-soft-dark waves-effect waves-light btn-sm"id="btnid{{ $row->id }}"
                                                    onclick="state('{{ $row->id }}')">Dectivate</button>
                                                <button type="button" data-bs-toggle="modal"
                                                    data-record-id="{{ json_encode($row) }}"
                                                    data-bs-target="#showmasteredit"
                                                    class="btn btn-soft-success waves-effect waves-light recordidbtn"><i
                                                        class="bx bx-plus"></i>Create Round</button>
                                            </div>
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
    <div id="showmasteredit" class="modal zoomIn" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 overflow-hidden">
                <div class="modal-header p-3 text-center">
                    <h4 class="card-title mb-0 ">Create Round</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="modalbody">

                </div>
            </div>
        </div>
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
    <script>
        $(document).ready(function() {
            $('.recordidbtn').on('click', function() {
                var recordId = $(this).data('record-id');
                console.log(recordId.id);
                $('#modalbody').empty();
                var modal = `
        <form id="createRoundForm" action="" method="POST">
            @csrf
                <div class="row g-3 align-items-center">
                    <div class="col-sm-12">
                        <div>
                            <label for="placeholderInput" class="form-label">Round Stage</label>
                            <select class="form-select" id="type" name="roundstage" required>
                                <option value="" disabled selected>Choose...</option>
                                @for ($i = 1; $i <= 3; $i++)
                                    <option value="{{ $i }}">{{ $i }}</option>
                                @endfor
                            </select>
                        </div>
                        <input type="hidden" name="contestid" value="` + recordId.id + `">
                    </div>
                    <div class="col-sm-12">
                        <div>
                            <label for="placeholderInput" class="form-label">Spins</label>
                            <select class="form-select" id="type" name="totalspins" required>
                                <option value="" disabled selected>Choose...</option>
                                @for ($i = 1; $i <= 10; $i++)
                                    <option value="{{ $i }}">{{ $i }}</option>
                                @endfor
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div>
                            <label for="placeholderInput" class="form-label">Winners</label>
                            <input type="text" class="form-control" id="image"
                                placeholder="enter winners" name="winners" required>
                        </div>
                    </div>
                    <div class="col-auto text-center w-100">
                        <button id="sa-warning" class="btn btn-soft-success waves-effect waves-light sa-warning-btn">Create</button>
                    </div>
                </div>
            </form>
        `
                $('#modalbody').append(modal);
            });
        });
        $(document).on('submit', '#createRoundForm', function(event) {
            event.preventDefault();


            var isValid = true;
            $(this).find('[required]').each(function() {
                if ($(this).val() === '') {
                    isValid = false;
                    return false;
                }
            });


            if (!isValid) {
                Swal.fire({
                    title: "Error!",
                    text: "Please fill out all required fields.",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
                    buttonsStyling: false,
                    showCloseButton: true,
                });
                return;
            }
            var formData = $(this).serialize();
            $.ajax({
                url: "{{ route('createround') }}",
                type: "POST",
                data: formData,
                success: function(response) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your data has been successfully submitted.",
                        icon: "success",
                        showCancelButton: false,
                        confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
                        buttonsStyling: false,
                        showCloseButton: true,
                    });
                },
                error: function(xhr, status, error) {
                    Swal.fire({
                        title: "Error!",
                        text: "There was an error submitting your data. Please try again.",
                        icon: "error",
                        showCancelButton: false,
                        confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
                        buttonsStyling: false,
                        showCloseButton: true,
                    });
                }
            });
        });
    </script>
    <script>
        $(document).on('submit', '#createRoundForm', function(event) {
                    event.preventDefault();

                    // Check for empty required fields
                    var isValid = true;
                    $(this).find('[required]').each(function() {
                            if ($(this).val().trim() === '') {
                                isValid = false;
                                return false;
                            });

                        if (!isValid) {
                            // Show error message if any required field is empty
                            Swal.fire({
                                title: "Error!",
                                text: "Please fill out all required fields.",
                                icon: "error",
                                showCancelButton: false,
                                confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
                                buttonsStyling: false,
                                showCloseButton: true,
                            });
                            return;
                        }

                        var formData = $(this).serialize(); $.ajax({
                            url: "{{ route('createround') }}",
                            type: "POST",
                            data: formData,
                            success: function(response) {
                                Swal.fire({
                                    title: "Success!",
                                    text: "Your data has been successfully submitted.",
                                    icon: "success",
                                    showCancelButton: false,
                                    confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
                                    buttonsStyling: false,
                                    showCloseButton: true,
                                });
                            },
                            error: function(xhr, status, error) {
                                Swal.fire({
                                    title: "Error!",
                                    text: "There was an error submitting your data. Please try again.",
                                    icon: "error",
                                    showCancelButton: false,
                                    confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
                                    buttonsStyling: false,
                                    showCloseButton: true,
                                });
                            }
                        });
                    });
    </script>
</x-app-layout>
