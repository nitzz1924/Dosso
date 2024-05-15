{{-- -------------------------------------------------🔱JAI SHREE MAHAKAAL🔱--------------------------------------------------------------- --}}
<div class="app-menu navbar-menu">
    <div class="navbar-brand-box">
        <!-- Dark Logo-->
        <a href="{{ route('dashboard') }}" class="logo logo-dark">
            <span class="logo-sm">
                <img src="{{ asset('assets/images/dossologofinal.png') }}" alt="" height="30" />
                {{-- <h3 class=" fs-3 pt-3 pb-3">D</h3> --}}
            </span>
            <span class="logo-lg">
                <img src="{{ asset('assets/images/dossologofinal.png') }}" alt="" height="90" />
                {{-- <h3 class=" fs-2 pt-3 pb-3 fw-bold">DOSSO21</h3> --}}
            </span>
        </a>
        <!-- Light Logo-->
        <a href="{{ route('dashboard') }}" class="logo logo-light">
            <span class="logo-sm">
                <img src="{{ asset('assets/images/dossologofinal.png') }}" alt="" height="30" />
                {{-- <h3 class="fs-3 pt-3 pb-3">D</h3> --}}
            </span>
            <span class="logo-lg">
                <img src="{{ asset('assets/images/dossologofinal.png') }}" alt="" height="90" />

                {{-- <h3 class=" fs-2 pt-3 pb-3 fw-bold">DOSSO21</h3> --}}
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

                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('dashboard') }}">
                        <i class="bx bxs-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('addcontestview') }}">
                        <i class="bx bxs-user-detail"></i>
                        <span>Add Contest</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('adshowview') }}">
                        <i class="bx bxs-user-detail"></i>
                        <span>Add Ads Show</span>
                    </a>
                </li>
                <li class="menu-title">
                    <i class="ri-more-fill"></i>
                    <span data-key="t-components">Users</span>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{ route('studentslist') }}">
                        <i class='bx bx-list-ul'></i>
                        <span>Users List</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{route('winningreportview')}}">
                        <i class='bx bx-trophy'></i>
                        <span>Contest Winning</span>
                    </a>
                </li>
                <li class="menu-title">
                    <i class='bx bx-user-circle'></i>
                    <span data-key="t-components">Vendors</span>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="#sidebarUIvendor" data-bs-toggle="collapse" role="button"
                        aria-expanded="false" aria-controls="sidebarUIvendor">
                        <i class='bx bx-user-circle'></i>
                        <span data-key="t-base-ui">Vendors</span>
                    </a>
                    <div class="collapse menu-dropdown mega-dropdown-menu" id="sidebarUIvendor">
                        <div class="row">
                            <div class="col-lg-4">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <a href="{{ route('addvendorview') }}" class="nav-link"
                                            data-key="t-alerts">Create Vendor</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="{{route('balanchesheet')}}">
                        <i class=' bx bx-spreadsheet'></i>
                        <span>Balance Sheet</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="sidebar-background"></div>
</div>
