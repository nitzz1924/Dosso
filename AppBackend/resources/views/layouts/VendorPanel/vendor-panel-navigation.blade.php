{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
<div class="app-menu navbar-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="{{ route('vendordashboardview') }}" class="logo logo-dark">
            <span class="logo-sm">
                {{-- <img src="{{ asset('assets/images/faviconbtech.png') }}" alt="" height="30" /> --}}
                <h3 class=" fs-3 pt-3 pb-3">D</h3>
            </span>
            <span class="logo-lg">
                {{-- <img src="{{ asset('assets/images/logofinal.png') }}" alt="" height="50" /> --}}
                <h3 class=" fs-2 pt-3 pb-3 fw-bold">DOSSO21</h3>
            </span>
        </a>
        <!-- Light Logo-->
        <a href="{{ route('vendordashboardview') }}" class="logo logo-light">
            <span class="logo-sm">
                {{-- <img src="{{ asset('assets/images/faviconbtech.png') }}" alt="" height="30" /> --}}
                <h3 class="fs-3 pt-3 pb-3">D</h3>
            </span>
            <span class="logo-lg">
                {{-- <img src="{{ asset('assets/images/logofinal.png') }}" alt="" height="50" /> --}}

                <h3 class=" fs-2 pt-3 pb-3 fw-bold">DOSSO21</h3>
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">
            <div id="two-column-menu"></div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="menu-title"><span data-key="t-menu">Master</span></li>
                {{-- <li class="nav-item">
                    <a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarDashboards">
                        <i class="bx bxs-dashboard"></i>
                        <span data-key="t-dashboards">Dashboards</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarDashboards">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <a href="dashboard-analytics.html" class="nav-link" data-key="t-analytics">
                                    Analytics
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="dashboard-crm.html" class="nav-link" data-key="t-crm">
                                    CRM
                                </a>
                            </li>
                        </ul>
                    </div>
                </li> --}}
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('vendordashboardview') }}">
                        <i class="bx bxs-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('vendorprofile') }}">
                        <i class="bx bxs-user-account"></i>
                        <span>My Profile</span>
                    </a>
                </li>
                <li class="menu-title">
                    <i class="ri-more-fill"></i>
                    <span data-key="t-components">Others</span>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{route('studentslistvendor')}}">
                        <i class="bx bx-male-female"></i>
                        <span>Students List</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- Sidebar -->
    </div>

    <div class="sidebar-background"></div>
</div>
