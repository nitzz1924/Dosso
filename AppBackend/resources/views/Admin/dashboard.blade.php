{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
<x-app-layout>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="h-100">
                    <div class="row mb-3 pb-1">
                        <div class="col-12">
                            <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                                <div class="flex-grow-1">
                                    <h4 class="fs-16 mb-1">Welcome Admin</h4>
                                    <p class="text-muted mb-0">
                                        Here's what's happening today.
                                    </p>
                                </div>
                                <div class="mt-3 mt-lg-0">
                                    <form action="javascript:void(0);">
                                        <div class="row g-3 mb-0 align-items-center">
                                            {{-- <div class="col-sm-auto">
                                                <div class="input-group">
                                                    <input type="text"
                                                        class="form-control border-0 dash-filter-picker shadow"
                                                        data-provider="flatpickr" data-range-date="true"
                                                        data-date-format="d M, Y"
                                                        data-deafult-date="01 Jan 2022 to 31 Jan 2022" />
                                                    <div class="input-group-text bg-primary border-primary text-white">
                                                        <i class="ri-calendar-2-line"></i>
                                                    </div>
                                                </div>
                                            </div> --}}
                                            <!--end col-->
                                            {{-- <div class="col-auto">
                                                <button type="button" class="btn btn-soft-success">
                                                    <i class="ri-add-circle-line align-middle me-1"></i>
                                                    Add Product
                                                </button>
                                            </div> --}}
                                            <!--end col-->
                                            <div class="col-auto">
                                                <button type="button"
                                                    class="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn">
                                                    <i class="ri-pulse-line"></i>
                                                </button>
                                            </div>
                                            <!--end col-->
                                        </div>
                                        <!--end row-->
                                    </form>
                                </div>
                            </div>
                            <!-- end card header -->
                        </div>
                        <!--end col-->
                    </div>
                    <!--end row-->


                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card crm-widget">
                                <div class="card-body p-0">
                                    <div class="row row-cols-md-3 row-cols-1">
                                        <div class="col col-lg border-end">
                                            <div class="py-4 px-3">
                                                <h5 class="text-muted text-uppercase fs-13">Users <i
                                                        class="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                                                </h5>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <i class="ri-space-ship-line display-6 text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-3">
                                                        <h2 class="mb-0"><span class="counter-value"
                                                                data-target="30">0</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end col -->
                                        <div class="col col-lg border-end">
                                            <div class="mt-3 mt-md-0 py-4 px-3">
                                                <h5 class="text-muted text-uppercase fs-13">Agents <i
                                                        class="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                                                </h5>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <i class="ri-exchange-dollar-line display-6 text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-3">
                                                        <h2 class="mb-0"><span class="counter-value"
                                                                data-target="40">0</span>k</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end col -->
                                        <div class="col col-lg border-end">
                                            <div class="mt-3 mt-md-0 py-4 px-3">
                                                <h5 class="text-muted text-uppercase fs-13">Enquiries <i
                                                        class="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i>
                                                </h5>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <i class="ri-pulse-line display-6 text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-3">
                                                        <h2 class="mb-0"><span class="counter-value"
                                                                data-target="100">0</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- end col -->
                                        <div class="col col-lg border-end">
                                            <div class="mt-3 mt-lg-0 py-4 px-3">
                                                <h5 class="text-muted text-uppercase fs-13">Vendors <i
                                                        class="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                                                </h5>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <i class="ri-trophy-line display-6 text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-3">
                                                        <h2 class="mb-0"><span class="counter-value"
                                                                data-target="66">0</span></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col col-lg">
                                            <div class="mt-3 mt-lg-0 py-4 px-3">
                                                <h5 class="text-muted text-uppercase fs-13">Employees <i
                                                        class="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i>
                                                </h5>
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0">
                                                        <i class="ri-service-line display-6 text-muted"></i>
                                                    </div>
                                                    <div class="flex-grow-1 ms-3">
                                                        <h2 class="mb-0"><span class="counter-value"
                                                                data-target="90">0</span></h2>
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
                        <div class="col-xl-8">
                            <div class="card">
                                <div class="card-header border-0 align-items-center d-flex">
                                    <h4 class="card-title mb-0 flex-grow-1">Revenue</h4>
                                    <div>
                                        <button type="button" class="btn btn-soft-dark btn-sm">
                                            ALL
                                        </button>
                                        <button type="button" class="btn btn-soft-dark btn-sm">
                                            1M
                                        </button>
                                        <button type="button" class="btn btn-soft-dark btn-sm">
                                            6M
                                        </button>
                                        <button type="button" class="btn btn-soft-primary btn-sm">
                                            1Y
                                        </button>
                                    </div>
                                </div>
                                <!-- end card header -->

                                <div class="card-header p-0 border-0 bg-light-subtle">
                                    <div class="row g-0 text-center">
                                        <div class="col-6 col-sm-3">
                                            <div class="p-3 border border-dashed border-start-0">
                                                <h5 class="mb-1">
                                                    <span class="counter-value" data-target="7585">0</span>
                                                </h5>
                                                <p class="text-muted mb-0">Orders</p>
                                            </div>
                                        </div>
                                        <!--end col-->
                                        <div class="col-6 col-sm-3">
                                            <div class="p-3 border border-dashed border-start-0">
                                                <h5 class="mb-1">
                                                    $<span class="counter-value" data-target="22.89">0</span>k
                                                </h5>
                                                <p class="text-muted mb-0">Earnings</p>
                                            </div>
                                        </div>
                                        <!--end col-->
                                        <div class="col-6 col-sm-3">
                                            <div class="p-3 border border-dashed border-start-0">
                                                <h5 class="mb-1">
                                                    <span class="counter-value" data-target="367">0</span>
                                                </h5>
                                                <p class="text-muted mb-0">Refunds</p>
                                            </div>
                                        </div>
                                        <!--end col-->
                                        <div class="col-6 col-sm-3">
                                            <div class="p-3 border border-dashed border-start-0 border-end-0">
                                                <h5 class="mb-1 text-success">
                                                    <span class="counter-value" data-target="18.92">0</span>%
                                                </h5>
                                                <p class="text-muted mb-0">
                                                    Conversation Ratio
                                                </p>
                                            </div>
                                        </div>
                                        <!--end col-->
                                    </div>
                                </div>
                                <!-- end card header -->

                                <div class="card-body p-0 pb-2">
                                    <div class="w-100">
                                        <div id="customer_impression_charts"
                                            data-colors='["--vz-success", "--vz-info", "--vz-danger"]'
                                            class="apex-charts" dir="ltr"></div>
                                    </div>
                                </div>
                                <!-- end card body -->
                            </div>
                            <!-- end card -->
                        </div>
                        <!-- end col -->

                        <div class="col-xl-4">
                            <!-- card -->
                            <div class="card card-height-100">
                                <div class="card-header align-items-center d-flex">
                                    <h4 class="card-title mb-0 flex-grow-1">
                                        Sales by Locations
                                    </h4>
                                    <div class="flex-shrink-0">
                                        <button type="button" class="btn btn-soft-primary btn-sm">
                                            Export Report
                                        </button>
                                    </div>
                                </div>
                                <!-- end card header -->

                                <!-- card body -->
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table
                                            class="table  table-hover table-bordered align-middle">
                                            <thead class="">
                                                <tr>
                                                    <th>City Name</th>
                                                    <th>Properties Count</th>
                                                </tr>
                                            </thead>
                                            <tbody class="">
                                                <tr class="">
                                                    <td>Ajmer</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr class="">
                                                    <td>Jaipur</td>
                                                    <td>50</td>
                                                </tr>
                                                <tr class="">
                                                    <td>Ajmer</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr class="">
                                                    <td>Jaipur</td>
                                                    <td>50</td>
                                                </tr>
                                                <tr class="">
                                                    <td>Ajmer</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr class="">
                                                    <td>Jaipur</td>
                                                    <td>50</td>
                                                </tr>
                                                <tr class="">
                                                    <td>Ajmer</td>
                                                    <td>27</td>
                                                </tr>
                                                <tr class="">
                                                    <td>Jaipur</td>
                                                    <td>50</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card card-height-100">
                                <div class="card-header align-items-center d-flex">
                                    <h4 class="card-title mb-0 flex-grow-1">
                                        Today's Enquiries
                                    </h4>
                                    <div class="flex-shrink-0">
                                        <div class="dropdown card-header-dropdown">
                                            <div class="flex-shrink-0">
                                                <button type="button" class="btn btn-soft-primary btn-sm">
                                                    Export Excel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card header -->

                                <div class="card-body">
                                    <table class="table table-striped table-hover table-bordered table-responsive-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Role</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Created_at</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Noizy</th>
                                                <td>Admin</td>
                                                <td>For Commercial land</td>
                                                <td>3rd April 2024</td>
                                            </tr>
                                            <tr>
                                                <th>Noizy</th>
                                                <td>Admin</td>
                                                <td>For Commercial land</td>
                                                <td>3rd April 2024</td>
                                            </tr>
                                            <tr>
                                                <th>Noizy</th>
                                                <td>Admin</td>
                                                <td>For Commercial land</td>
                                                <td>3rd April 2024</td>
                                            </tr>
                                            <tr>
                                                <th>Noizy</th>
                                                <td>Admin</td>
                                                <td>For Commercial land</td>
                                                <td>3rd April 2024</td>
                                            </tr>
                                            <tr>
                                                <th>Noizy</th>
                                                <td>Admin</td>
                                                <td>For Commercial land</td>
                                                <td>3rd April 2024</td>
                                            </tr>
                                            <tr>
                                                <th>Noizy</th>
                                                <td>Admin</td>
                                                <td>For Commercial land</td>
                                                <td>3rd April 2024</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div
                                        class="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                                        <div class="col-sm">
                                            <div class="text-muted">
                                                Showing <span class="fw-semibold">6</span> of
                                                <span class="fw-semibold">25</span> Results
                                            </div>
                                        </div>
                                        <div class="col-sm-auto mt-3 mt-sm-0">
                                            <ul
                                                class="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                                                <li class="page-item disabled">
                                                    <a href="#" class="page-link">←</a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">1</a>
                                                </li>
                                                <li class="page-item active">
                                                    <a href="#" class="page-link">2</a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">3</a>
                                                </li>
                                                <li class="page-item">
                                                    <a href="#" class="page-link">→</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- .card-body-->
                            </div>
                            <!-- .card-->
                        </div>
                        <!-- .col-->
                    </div>
                    <!-- end row-->
                    <!-- end row-->
                </div>
                <!-- end .h-100-->
            </div>
            <!-- end col -->
            <!-- end col -->
        </div>
    </div>
</x-app-layout>
