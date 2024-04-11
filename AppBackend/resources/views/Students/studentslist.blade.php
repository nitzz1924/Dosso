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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Students List</a></li>
                            <li class="breadcrumb-item active">Students List</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card tablecard">
                    <div class="card-body table-responsive">
                        <table class="table table-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Picture</th>
                                    <th scope="col">Contact Number</th>
                                    <th scope="col">Email Address</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Pin</th>
                                    <th scope="col">Refer By ID</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1001</td>
                                    <td>Dummy</td>
                                    <td>dummy_123</td>
                                    <td>
                                        <img class="rounded-pill" src="{{ asset('assets/images/user-dummy-img.jpg') }}" alt="" width="50px" height="50px">
                                    </td>
                                    <td>1234567890</td>
                                    <td>john.doe@example.com</td>
                                    <td>New York</td>
                                    <td>New York</td>
                                    <td>305006</td>
                                    <td>ref1</td>
                                    <td>
                                        <span class="badge rounded-pill bg-success-subtle text-success">Success</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-soft-dark waves-effect waves-light btn-sm" id="">Dectivate</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</x-app-layout>
