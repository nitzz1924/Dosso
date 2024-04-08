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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Add AdShow</a></li>
                            <li class="breadcrumb-item active">Add AdShow</li>
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
                        <h4 class="card-title mb-0 flex-grow-1">Add AdShow</h4>
                        {{-- <div class="flex-shrink-0">
                                <div class="form-check form-switch form-switch-right form-switch-md">

                                </div>
                            </div> --}}
                    </div><!-- end card header -->
                    <div class="card-body">
                        <div class="live-preview">
                            <form action="{{ route('createadshow') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="row gy-4">
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Ads Title</label>
                                            <input type="text" class="form-control" id=""
                                                placeholder="enter add title" name="adstitle" required>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label" for="inputGroupSelect01">Display Type</label>
                                        <div class="input-group">
                                            <select class="form-select" id="displaytype" name="displayshow" required>
                                                <option selected>Choose...</option>
                                                <option value="home">Home</option>
                                                <option value="about">About</option>
                                                <option value="listings">Listings</option>
                                            </select>
                                        </div>
                                    </div>
                                    {{-- <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">URL</label>
                                            <input type="text" class="form-control" id="valueval"
                                                placeholder="enter link" name="url" required>
                                        </div>
                                    </div> --}}
                                    <div class="col-md-3">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Redirect Link</label>
                                            <input type="text" class="form-control" id="valueval"
                                                placeholder="enter redirect link" name="redirectlink" required>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="form-label" for="inputGroupSelect01">Media Type</label>
                                        <div class="input-group">
                                            <select class="form-select" id="type" onchange="files()"
                                                name="mediatype" required>
                                                <option value="default" selected>Choose...</option>
                                                <option value="image">Image</option>
                                                <option value="video">Video</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3 d-none" id="uploadimage">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Upload Image</label>
                                            <input type="file" id="uploadimage" class="form-control"
                                                placeholder="enter label" name="addimage" value="0">
                                        </div>
                                    </div>
                                    <div class="col-md-3 d-none" id="urlinput">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Enter Video URL</label>
                                            <input type="text" class="form-control" placeholder="enter video link"
                                                name="videourl" id="videolink" value="0">
                                        </div>
                                    </div>
                                    <div class="col-md-12 ">
                                        <div class="mt-0 p-1 float-end">
                                            <button type="submit" class="btn btn-success btn-border">Add</button>
                                        </div>
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
                                    <th scope="col">ID</th>
                                    <th scope="col">Ads Title</th>
                                    <th scope="col">Display Type</th>
                                    <th scope="col">Redirect Link</th>
                                    <th scope="col">Media Type</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($addshowdata as $index => $value)
                                    <tr>
                                        <td>{{ $index + 1 }}</td>
                                        <td>{{ $value->adstitle }}</td>
                                        <td>{{ $value->displayshow }}</td>
                                        <td>{{ $value->redirectlink }}</td>
                                        <td>
                                            @if ($value->mediatype == 'image')
                                                <img src="{{ asset('uploads/' . $value->addimage) }}" alt="Thumbnail"
                                                    width="100px" class="rounded-pill">
                                            @endif
                                            @if ($value->mediatype == 'video')
                                                <a href="{{ $value->videourl }}" target="_blank" class="btn btn-secondary btn-sm"><i class="bi bi-youtube"></i>&nbsp;&nbsp;View Video</a>
                                            @endif
                                        </td>
                                        <td>
                                            <span
                                                class="badge rounded-pill bg-{{ $value->status == 0 ? 'danger' : 'success' }}-subtle text-{{ $value->status == 0 ? 'danger' : 'success' }}">
                                                {{ $value->status == 0 ? 'Inactive' : 'Active' }}
                                            </span>
                                        </td>
                                        <td>
                                            <button class="btn btn-success btn-border btn-sm"
                                                id="btnid{{ $value->id }}"
                                                onclick="state('{{ $value->id }}')">Dectivate</button>
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
        function files() {
            if (document.getElementById('type').value == 'image') {
                var image = document.getElementById('uploadimage')
                var video = document.getElementById('urlinput')
                image.classList.add('d-block');
                image.classList.remove('d-none');
                video.classList.add('d-none');
            }
            if (document.getElementById('type').value == 'video') {
                var video = document.getElementById('urlinput')
                var image = document.getElementById('uploadimage')
                video.classList.add('d-block');
                video.classList.remove('d-none');
                image.classList.add('d-none');
            }
            if (document.getElementById('type').value == 'default') {
                var video = document.getElementById('urlinput')
                var image = document.getElementById('uploadimage')
                video.classList.add('d-none');
                image.classList.add('d-none');
            }
        }

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
