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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Winning Report</a></li>
                            <li class="breadcrumb-item active">Winning Report</li>
                        </ol>
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
                                        <a href="/reportpage/{{$row->id}}">
                                            <button class="btn btn-soft-dark waves-effect waves-light btn-sm" id=""
                                            data-bs-toggle="modal" data-bs-target="#showmasteredit">View Report</button>
                                        </a>
                                    </td>
                                    {{-- <td>
                                        <select class="form-select" name="status" id="conteststatus">
                                            <option value="0" {{$row->status==0 ? 'selected' : ''}}>Activate</option>
                                            <option value="1" {{$row->status==1 ? 'selected' : ''}}>deactivate</option>
                                            <option value="2" {{$row->status==2 ? 'selected' : ''}}>Completed</option>
                                        </select>
                                        <input type="hidden" name="contestid" value="{{$row->id}}" class="contestid">
                                    </td> --}}
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
</x-app-layout>
