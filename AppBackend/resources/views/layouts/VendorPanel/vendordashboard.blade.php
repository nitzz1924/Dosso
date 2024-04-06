{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
@extends('layouts.VendorPanel.vendor')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="h-100">
                    <div class="row mb-3 pb-1">
                        <div class="col-12">
                            <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                                <div class="flex-grow-1">
                                    <h4 class="fs-16 mb-1">Welcome Anshii</h4>
                                    <p class="text-muted mb-0">
                                        Hope You're Enjoying the game..😊😊
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
                                            data-colors='["--vz-success", "--vz-info", "--vz-danger"]' class="apex-charts"
                                            dir="ltr"></div>
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
                                        <table class="table  table-hover table-bordered align-middle">
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
                        <div class="col-xl-6">
                            <div class="card">
                                <div class="card-header align-items-center d-flex">
                                    <h4 class="card-title mb-0 flex-grow-1">
                                        Best Selling Properties
                                    </h4>
                                    <div class="flex-shrink-0">
                                        <div class="dropdown card-header-dropdown">
                                            <a class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                                <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span
                                                    class="text-muted">Today<i
                                                        class="mdi mdi-chevron-down ms-1"></i></span>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="#">Today</a>
                                                <a class="dropdown-item" href="#">Yesterday</a>
                                                <a class="dropdown-item" href="#">Last 7 Days</a>
                                                <a class="dropdown-item" href="#">Last 30 Days</a>
                                                <a class="dropdown-item" href="#">This Month</a>
                                                <a class="dropdown-item" href="#">Last Month</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end card header -->

                                <div class="card-body">
                                    <div class="table-responsive table-card">
                                        <table class="table table-hover table-centered align-middle table-nowrap mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm bg-light rounded p-1 me-2">
                                                                <img src="assets/images/products/img-1.png" alt=""
                                                                    class="img-fluid d-block" />
                                                            </div>
                                                            <div>
                                                                <h5 class="fs-13 my-1">
                                                                    <a href="apps-ecommerce-product-details.html"
                                                                        class="text-reset">Branded T-Shirts</a>
                                                                </h5>
                                                                <span class="text-muted">24 Apr 2021</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">$29.00</h5>
                                                        <span class="text-muted">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">62</h5>
                                                        <span class="text-muted">Orders</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">510</h5>
                                                        <span class="text-muted">Stock</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">$1,798</h5>
                                                        <span class="text-muted">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm bg-light rounded p-1 me-2">
                                                                <img src="assets/images/products/img-2.png" alt=""
                                                                    class="img-fluid d-block" />
                                                            </div>
                                                            <div>
                                                                <h5 class="fs-14 my-1">
                                                                    <a href="apps-ecommerce-product-details.html"
                                                                        class="text-reset">Bentwood Chair</a>
                                                                </h5>
                                                                <span class="text-muted">19 Mar 2021</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-13 my-1 fw-normal">$85.20</h5>
                                                        <span class="text-muted">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">35</h5>
                                                        <span class="text-muted">Orders</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">
                                                            <span class="badge bg-danger-subtle text-danger">Out of
                                                                stock</span>
                                                        </h5>
                                                        <span class="text-muted">Stock</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">$2982</h5>
                                                        <span class="text-muted">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm bg-light rounded p-1 me-2">
                                                                <img src="assets/images/products/img-3.png" alt=""
                                                                    class="img-fluid d-block" />
                                                            </div>
                                                            <div>
                                                                <h5 class="fs-13 my-1">
                                                                    <a href="apps-ecommerce-product-details.html"
                                                                        class="text-reset">Borosil Paper Cup</a>
                                                                </h5>
                                                                <span class="text-muted">01 Mar 2021</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">$14.00</h5>
                                                        <span class="text-muted">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">80</h5>
                                                        <span class="text-muted">Orders</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">749</h5>
                                                        <span class="text-muted">Stock</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">$1120</h5>
                                                        <span class="text-muted">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm bg-light rounded p-1 me-2">
                                                                <img src="assets/images/products/img-4.png" alt=""
                                                                    class="img-fluid d-block" />
                                                            </div>
                                                            <div>
                                                                <h5 class="fs-13 my-1">
                                                                    <a href="apps-ecommerce-product-details.html"
                                                                        class="text-reset">One Seater Sofa</a>
                                                                </h5>
                                                                <span class="text-muted">11 Feb 2021</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">
                                                            $127.50
                                                        </h5>
                                                        <span class="text-muted">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">56</h5>
                                                        <span class="text-muted">Orders</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">
                                                            <span class="badge bg-danger-subtle text-danger">Out of
                                                                stock</span>
                                                        </h5>
                                                        <span class="text-muted">Stock</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">$7140</h5>
                                                        <span class="text-muted">Amount</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm bg-light rounded p-1 me-2">
                                                                <img src="assets/images/products/img-5.png" alt=""
                                                                    class="img-fluid d-block" />
                                                            </div>
                                                            <div>
                                                                <h5 class="fs-13 my-1">
                                                                    <a href="apps-ecommerce-product-details.html"
                                                                        class="text-reset">Stillbird Helmet</a>
                                                                </h5>
                                                                <span class="text-muted">17 Jan 2021</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">$54</h5>
                                                        <span class="text-muted">Price</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">74</h5>
                                                        <span class="text-muted">Orders</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">805</h5>
                                                        <span class="text-muted">Stock</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 my-1 fw-normal">$3996</h5>
                                                        <span class="text-muted">Amount</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div
                                        class="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                                        <div class="col-sm">
                                            <div class="text-muted">
                                                Showing <span class="fw-semibold">5</span> of
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
                            </div>
                        </div>

                        <div class="col-xl-6">
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

                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card card-height-100">
                                <div class="card-header align-items-center d-flex">
                                    <h4 class="card-title mb-0 flex-grow-1">
                                        Highlights
                                    </h4>
                                    {{-- <div class="flex-shrink-0">
                                    <div class="dropdown card-header-dropdown">
                                        <a class="text-reset dropdown-btn" href="#"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="text-muted">Report<i
                                                    class="mdi mdi-chevron-down ms-1"></i></span>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a class="dropdown-item" href="#">Download Report</a>
                                            <a class="dropdown-item" href="#">Export</a>
                                            <a class="dropdown-item" href="#">Import</a>
                                        </div>
                                    </div>
                                </div> --}}
                                </div>
                                <!-- end card header -->

                                <div class="card-body">
                                    <div id="store-visits-source"
                                        data-colors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'
                                        class="apex-charts" dir="ltr"></div>
                                </div>
                            </div>
                            <!-- .card-->
                        </div>
                        <!-- .col-->

                        <div class="col-xl-8">
                            <div class="card">
                                <div class="card-header align-items-center d-flex">
                                    <h4 class="card-title mb-0 flex-grow-1">
                                        Recent Orders
                                    </h4>
                                    <div class="flex-shrink-0">
                                        <button type="button" class="btn btn-soft-info btn-sm">
                                            <i class="ri-file-list-3-line align-middle"></i>
                                            Generate Report
                                        </button>
                                    </div>
                                </div>
                                <!-- end card header -->

                                <div class="card-body">
                                    <div class="table-responsive table-card">
                                        <table
                                            class="table table-borderless table-centered align-middle table-nowrap mb-0">
                                            <thead class="text-muted table-light">
                                                <tr>
                                                    <th scope="col">Order ID</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Vendor</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a href="apps-ecommerce-order-details.html"
                                                            class="fw-medium link-primary">#VZ2112</a>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 me-2">
                                                                <img src="assets/images/users/avatar-1.jpg" alt=""
                                                                    class="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div class="flex-grow-1">Alex Smith</div>
                                                        </div>
                                                    </td>
                                                    <td>Clothes</td>
                                                    <td>
                                                        <span class="text-success">$109.00</span>
                                                    </td>
                                                    <td>Zoetic Fashion</td>
                                                    <td>
                                                        <span class="badge bg-success-subtle text-success">Paid</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 fw-medium mb-0">
                                                            5.0<span class="text-muted fs-11 ms-1">(61 votes)</span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <!-- end tr -->
                                                <tr>
                                                    <td>
                                                        <a href="apps-ecommerce-order-details.html"
                                                            class="fw-medium link-primary">#VZ2111</a>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 me-2">
                                                                <img src="assets/images/users/avatar-2.jpg" alt=""
                                                                    class="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div class="flex-grow-1">Jansh Brown</div>
                                                        </div>
                                                    </td>
                                                    <td>Kitchen Storage</td>
                                                    <td>
                                                        <span class="text-success">$149.00</span>
                                                    </td>
                                                    <td>Micro Design</td>
                                                    <td>
                                                        <span class="badge bg-warning-subtle text-warning">Pending</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 fw-medium mb-0">
                                                            4.5<span class="text-muted fs-11 ms-1">(61 votes)</span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <!-- end tr -->
                                                <tr>
                                                    <td>
                                                        <a href="apps-ecommerce-order-details.html"
                                                            class="fw-medium link-primary">#VZ2109</a>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 me-2">
                                                                <img src="assets/images/users/avatar-3.jpg" alt=""
                                                                    class="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div class="flex-grow-1">Ayaan Bowen</div>
                                                        </div>
                                                    </td>
                                                    <td>Bike Accessories</td>
                                                    <td>
                                                        <span class="text-success">$215.00</span>
                                                    </td>
                                                    <td>Nesta Technologies</td>
                                                    <td>
                                                        <span class="badge bg-success-subtle text-success">Paid</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 fw-medium mb-0">
                                                            4.9<span class="text-muted fs-11 ms-1">(89 votes)</span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <!-- end tr -->
                                                <tr>
                                                    <td>
                                                        <a href="apps-ecommerce-order-details.html"
                                                            class="fw-medium link-primary">#VZ2108</a>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 me-2">
                                                                <img src="assets/images/users/avatar-4.jpg" alt=""
                                                                    class="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div class="flex-grow-1">Prezy Mark</div>
                                                        </div>
                                                    </td>
                                                    <td>Furniture</td>
                                                    <td>
                                                        <span class="text-success">$199.00</span>
                                                    </td>
                                                    <td>Syntyce Solutions</td>
                                                    <td>
                                                        <span class="badge bg-danger-subtle text-danger">Unpaid</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 fw-medium mb-0">
                                                            4.3<span class="text-muted fs-11 ms-1">(47 votes)</span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <!-- end tr -->
                                                <tr>
                                                    <td>
                                                        <a href="apps-ecommerce-order-details.html"
                                                            class="fw-medium link-primary">#VZ2107</a>
                                                    </td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0 me-2">
                                                                <img src="assets/images/users/avatar-6.jpg" alt=""
                                                                    class="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div class="flex-grow-1">Vihan Hudda</div>
                                                        </div>
                                                    </td>
                                                    <td>Bags and Wallets</td>
                                                    <td>
                                                        <span class="text-success">$330.00</span>
                                                    </td>
                                                    <td>iTest Factory</td>
                                                    <td>
                                                        <span class="badge bg-success-subtle text-success">Paid</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="fs-14 fw-medium mb-0">
                                                            4.7<span class="text-muted fs-11 ms-1">(161 votes)</span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <!-- end tr -->
                                            </tbody>
                                            <!-- end tbody -->
                                        </table>
                                        <!-- end table -->
                                    </div>
                                </div>
                            </div>
                            <!-- .card-->
                        </div>
                        <!-- .col-->
                    </div>
                    <!-- end row-->
                </div>
                <!-- end .h-100-->
            </div>
            <!-- end col -->

            <div class="col-auto layout-rightside-col">
                <div class="overlay"></div>
                <div class="layout-rightside">
                    <div class="card h-100 rounded-0">
                        <div class="card-body p-0">
                            <div class="p-3">
                                <h6 class="text-muted mb-0 text-uppercase">
                                    Recent Enquiries
                                </h6>
                            </div>
                            <div data-simplebar style="max-height: 410px" class="p-3 pt-0">
                                <div class="acitivity-timeline acitivity-main">
                                    <div class="acitivity-item d-flex">
                                        <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                            <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                                <i class="ri-shopping-cart-2-line"></i>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1 lh-base">
                                                Enquiry by Anshul
                                            </h6>
                                            <p class="text-muted mb-1">
                                                Villas
                                            </p>
                                            <small class="mb-0 text-muted">02:14 PM Today</small>
                                        </div>
                                    </div>
                                    {{-- <div class="acitivity-item py-3 d-flex">
                                    <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                        <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                                            <i class="ri-stack-fill"></i>
                                        </div>
                                    </div>
                                </div> --}}
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <img src="assets/images/users/avatar-2.jpg" alt=""
                                                class="avatar-xs rounded-circle acitivity-avatar" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1 lh-base">
                                                Enquiry by Anshul
                                            </h6>
                                            <p class="text-muted mb-1">
                                                Villas
                                            </p>
                                            <small class="mb-0 text-muted">02:14 PM Today</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs acitivity-avatar">
                                                <div class="avatar-title rounded-circle bg-secondary">
                                                    <i class="mdi mdi-sale fs-14"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1 lh-base">
                                                Enquiry by Anshul
                                            </h6>
                                            <p class="text-muted mb-1">
                                                Villas
                                            </p>
                                            <small class="mb-0 text-muted">02:14 PM Today</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs acitivity-avatar">
                                                <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                                    <i class="ri-bookmark-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1 lh-base">
                                                Enquiry by Anshul
                                            </h6>
                                            <p class="text-muted mb-1">
                                                Villas
                                            </p>
                                            <small class="mb-0 text-muted">02:14 PM Today</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs acitivity-avatar">
                                                <div class="avatar-title rounded-circle bg-secondary">
                                                    <i class="mdi mdi-sale fs-14"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1 lh-base">
                                                Enquiry by Anshul
                                            </h6>
                                            <p class="text-muted mb-1">
                                                Villas
                                            </p>
                                            <small class="mb-0 text-muted">02:14 PM Today</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs acitivity-avatar">
                                                <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                                    <i class="ri-line-chart-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1 lh-base">
                                                Enquiry by Anshul
                                            </h6>
                                            <p class="text-muted mb-1">
                                                Villas
                                            </p>
                                            <small class="mb-0 text-muted">02:14 PM Today</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item d-flex">
                                        <div class="flex-shrink-0">
                                            <img src="assets/images/users/avatar-3.jpg" alt=""
                                                class="avatar-xs rounded-circle acitivity-avatar" />
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1 lh-base">
                                                Enquiry by Anshul
                                            </h6>
                                            <p class="text-muted mb-1">
                                                Villas
                                            </p>
                                            <small class="mb-0 text-muted">02:14 PM Today</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3 mt-2">
                                <h6 class="text-muted mb-3 text-uppercase">
                                    Top Categories
                                </h6>

                                <ol class="ps-3 text-muted">
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Cottages <span
                                                class="float-end">(10)</span></a>
                                    </li>
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Plots <span
                                                class="float-end">(12)</span></a>
                                    </li>
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Bungalows <span
                                                class="float-end">(16)</span></a>
                                    </li>
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Warehouses <span
                                                class="float-end">(6)</span></a>
                                    </li>
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Villa <span
                                                class="float-end">(56)</span></a>
                                    </li>
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Building <span
                                                class="float-end">(77)</span></a>
                                    </li>
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Commercial <span
                                                class="float-end">(1)</span></a>
                                    </li>
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Residential projects <span
                                                class="float-end">(88)</span></a>
                                    </li>
                                    <li class="py-1">
                                        <a href="#" class="text-muted">Industrial <span
                                                class="float-end">(100)</span></a>
                                    </li>
                                </ol>
                            </div>
                            <div class="p-3">
                                <h6 class="text-muted mb-3 text-uppercase">
                                    Products Reviews
                                </h6>
                                <!-- Swiper -->
                                <div class="swiper vertical-swiper" style="height: 250px">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="card border border-dashed shadow-none">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0 avatar-sm">
                                                            <div class="avatar-title bg-light rounded">
                                                                <img src="assets/images/companies/img-1.png"
                                                                    alt="" height="30" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <div>
                                                                <p
                                                                    class="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                    " Great product and looks great, lots
                                                                    of features. "
                                                                </p>
                                                                <div class="fs-11 align-middle text-warning">
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="text-end mb-0 text-muted">
                                                                - by
                                                                <cite title="Source Title">Force Medicines</cite>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="card border border-dashed shadow-none">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <img src="assets/images/users/avatar-3.jpg" alt=""
                                                                class="avatar-sm rounded" />
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <div>
                                                                <p
                                                                    class="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                    " Amazing template, very easy to
                                                                    understand and manipulate. "
                                                                </p>
                                                                <div class="fs-11 align-middle text-warning">
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-half-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="text-end mb-0 text-muted">
                                                                - by
                                                                <cite title="Source Title">Henry Baird</cite>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="card border border-dashed shadow-none">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0 avatar-sm">
                                                            <div class="avatar-title bg-light rounded">
                                                                <img src="assets/images/companies/img-8.png"
                                                                    alt="" height="30" />
                                                            </div>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <div>
                                                                <p
                                                                    class="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                    "Very beautiful product and Very
                                                                    helpful customer service."
                                                                </p>
                                                                <div class="fs-11 align-middle text-warning">
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-line"></i>
                                                                    <i class="ri-star-line"></i>
                                                                </div>
                                                            </div>
                                                            <div class="text-end mb-0 text-muted">
                                                                - by
                                                                <cite title="Source Title">Zoetic Fashion</cite>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="card border border-dashed shadow-none">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <div class="flex-shrink-0">
                                                            <img src="assets/images/users/avatar-2.jpg" alt=""
                                                                class="avatar-sm rounded" />
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <div>
                                                                <p
                                                                    class="text-muted mb-1 fst-italic text-truncate-two-lines">
                                                                    " The product is very beautiful. I
                                                                    like it. "
                                                                </p>
                                                                <div class="fs-11 align-middle text-warning">
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-fill"></i>
                                                                    <i class="ri-star-half-fill"></i>
                                                                    <i class="ri-star-line"></i>
                                                                </div>
                                                            </div>
                                                            <div class="text-end mb-0 text-muted">
                                                                - by
                                                                <cite title="Source Title">Nancy Martino</cite>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-3">
                                <h6 class="text-muted mb-3 text-uppercase">
                                    Customer Reviews
                                </h6>
                                <div class="bg-light px-3 py-2 rounded-2 mb-2">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="fs-16 align-middle text-warning">
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-fill"></i>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <h6 class="mb-0">4.5 out of 5</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <div class="text-muted">
                                        Total <span class="fw-medium">5.50k</span> reviews
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <div class="row align-items-center g-2">
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0">5 star</h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="p-1">
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-success" role="progressbar"
                                                        style="width: 50.16%" aria-valuenow="50.16" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0 text-muted">2758</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end row -->

                                    <div class="row align-items-center g-2">
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0">4 star</h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="p-1">
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-success" role="progressbar"
                                                        style="width: 29.32%" aria-valuenow="29.32" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0 text-muted">1063</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end row -->

                                    <div class="row align-items-center g-2">
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0">3 star</h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="p-1">
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-warning" role="progressbar"
                                                        style="width: 18.12%" aria-valuenow="18.12" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0 text-muted">997</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end row -->

                                    <div class="row align-items-center g-2">
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0">2 star</h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="p-1">
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-success" role="progressbar"
                                                        style="width: 4.98%" aria-valuenow="4.98" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0 text-muted">227</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end row -->

                                    <div class="row align-items-center g-2">
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0">1 star</h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="p-1">
                                                <div class="progress animated-progress progress-sm">
                                                    <div class="progress-bar bg-danger" role="progressbar"
                                                        style="width: 7.42%" aria-valuenow="7.42" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="p-1">
                                                <h6 class="mb-0 text-muted">408</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end row -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end card-->
                </div>
                <!-- end .rightbar-->
            </div>
            <!-- end col -->
        </div>
    </div>
@endsection
