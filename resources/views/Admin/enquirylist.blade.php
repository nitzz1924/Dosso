{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
<x-app-layout>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">BTech Mart</h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item">
                                <a href="javascript: void(0);">Enquiry List</a>
                            </li>
                            <li class="breadcrumb-item active">BTech Mart</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title mb-0">Filter</h4>
                    </div>
                    <div class="card-body">
                        <div class="listjs-table" id="customerList">
                            <div class="row g-4 mb-3">
                                <div
                                    class="col-sm-auto d-flex justify-content-sm-start gap-2 align-items-end flex-wrap">
                                    <div>
                                        <label for="exampleInputdate" class="form-label">From</label>
                                        <input type="date" class="form-control" id="exampleInputdate">
                                    </div>
                                    <div>
                                        <label for="exampleInputdate" class="form-label">To</label>
                                        <input type="date" class="form-control" id="exampleInputdate">
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-success add-btn"><i
                                                class=" ri-search-eye-line align-bottom me-1"></i>Search</button>
                                    </div>
                                </div>
                                <div class="col-sm d-flex justify-content-sm-end align-items-end">
                                    <div class="">
                                        <div class="search-box ms-2">
                                            <input type="text" class="form-control search"
                                                placeholder="type to search..." />
                                            <i class="ri-search-line search-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xxl-12">
                <div class="card card-height-100">
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">All Enquiries</h4>
                        <div class="flex-shrink-0">
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Today</option>
                                <option value="1">All</option>
                            </select>
                        </div>
                    </div>
                    <!-- end card header -->

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-nowrap align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" style="width: 30%">Deal Name</th>
                                        <th scope="col" style="width: 30%">Sales Rep</th>
                                        <th scope="col" style="width: 20%">Amount</th>
                                        <th scope="col" style="width: 20%">Close Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Acme Inc Install</td>
                                        <td>
                                            <img src="assets/images/users/avatar-1.jpg" alt
                                                class="avatar-xs rounded-circle me-2" />
                                            <a href="#javascript: void(0);" class="text-body fw-medium">Donald
                                                Risher</a>
                                        </td>
                                        <td>$96k</td>
                                        <td>Today</td>
                                    </tr>
                                    <tr>
                                        <td>Save lots Stores</td>
                                        <td>
                                            <img src="assets/images/users/avatar-2.jpg" alt
                                                class="avatar-xs rounded-circle me-2" />
                                            <a href="#javascript: void(0);" class="text-body fw-medium">Jansh Brown</a>
                                        </td>
                                        <td>$55.7k</td>
                                        <td>30 Dec 2021</td>
                                    </tr>
                                    <tr>
                                        <td>William PVT</td>
                                        <td>
                                            <img src="assets/images/users/avatar-7.jpg" alt
                                                class="avatar-xs rounded-circle me-2" />
                                            <a href="#javascript: void(0);" class="text-body fw-medium">Ayaan Hudda</a>
                                        </td>
                                        <td>$102k</td>
                                        <td>25 Nov 2021</td>
                                    </tr>
                                    <tr>
                                        <td>Raitech Soft</td>
                                        <td>
                                            <img src="assets/images/users/avatar-4.jpg" alt
                                                class="avatar-xs rounded-circle me-2" />
                                            <a href="#javascript: void(0);" class="text-body fw-medium">Julia
                                                William</a>
                                        </td>
                                        <td>$89.5k</td>
                                        <td>20 Sep 2021</td>
                                    </tr>
                                    <tr>
                                        <td>Absternet LLC</td>
                                        <td>
                                            <img src="assets/images/users/avatar-4.jpg" alt
                                                class="avatar-xs rounded-circle me-2" />
                                            <a href="#javascript: void(0);" class="text-body fw-medium">Vitoria
                                                Rodrigues</a>
                                        </td>
                                        <td>$89.5k</td>
                                        <td>20 Sep 2021</td>
                                    </tr>
                                </tbody>
                                <!-- end tbody -->
                            </table>
                            <!-- end table -->
                        </div>
                        <!-- end table responsive -->
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div>
        <!-- end row -->
    </div>
</x-app-layout>
