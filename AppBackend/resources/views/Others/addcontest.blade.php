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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Add Contest</a></li>
                            <li class="breadcrumb-item active">Add Contest</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
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
                                            <input type="text" class="form-control" id="" placeholder="enter title"
                                                name="title">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Start Date</label>
                                            <input type="datetime-local" class="form-control" id="valueval"
                                                placeholder="enter value" name="startdate">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">End Date</label>
                                            <input type="datetime-local" class="form-control" id="valueval"
                                                placeholder="enter value" name="enddate">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Registration Fees</label>
                                            <input type="text" class="form-control" id=""
                                                placeholder="enter registration fee" name="registrationfees">
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
                                            <select class="form-select" id="type" name="totalspin">
                                                <option value="default" selected>Choose...</option>
                                                @for ($i = 1; $i <= 10; $i++) <option value="{{ $i }}">{{ $i }}</option>
                                                    @endfor
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Thumbnail</label>
                                            <input type="file" class="form-control" id="image" placeholder="enter color"
                                                name="thumbnail">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Total Member
                                                Joined</label>
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
                                    <th scope="col">Registration Fees</th>
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
                                    <td>{{ $row->registrationfees }}</td>
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
                                        <select class="form-select" id="conteststatus" name="totalspin">
                                            <option value="1" selected>Deactivate</option>
                                            <option value="2" >Activate</option>
                                            <option value="3">Completed</option>
                                        </select>
                                        <input type="hidden" name="contestid" value="{{$row->id}}" class="contestid">
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
            var contestid;
            $('#conteststatus').on('change', function()  {
                var selectedvalue = $(this).val();
                contestid = $(this).closest('td').find('.contestid').val();
                console.log(selectedvalue);
                console.log(contestid);

                //Updating Contest Status
                $.ajax({
                    url: '/updateactivationstatus',
                    method: 'POST',
                    data: {
                        status: selectedvalue,
                        contestid : contestid
                    },
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function(response) {
                        window.location.reload();
                        console.log(response);
                    },
                    error: function(error) {
                        console.error(error);
                    }
                });
            });
        });
    </script>
</x-app-layout>
