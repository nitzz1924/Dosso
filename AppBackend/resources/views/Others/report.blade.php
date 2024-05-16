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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Your Report Report</a></li>
                            <li class="breadcrumb-item active">Your Report</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="card">
                    <div class="text-center pt-4">
                        <div class="profile-user position-relative d-inline-block mx-auto  mb-4">
                            <img src="{{ asset('uploads/'. $contestdata->thumbnail) }}"
                                class="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                alt="user-profile-image">
                        </div>
                        <h5 class="fs-16 mb-1">{{$contestdata->title}}</h5>
                        <p class="text-muted mb-0">Total Price : {{$contestdata->totalprice}} Rs</p>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-4">
                            <div class="flex-grow-1">
                                <h5 class="card-title mb-0">Contest Details</h5>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="row" style="width: 200px;">
                                            Start Date</th>
                                        <td>{{$contestdata->startdate}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">End Date</th>
                                        <td>{{$contestdata->enddate}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Registration Fees</th>
                                        <td>{{$contestdata->registrationfees}} Rs</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total Spin</th>
                                        <td>{{$contestdata->totalspin}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Members Joined</th>
                                        <td>{{$contestdata->joinmembers}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card tablecard">
                    <div class="card-body table-responsive">
                        <table class="table table-nowrap table-bordered">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">Rank</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Winning Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($playdata as $value)
                                <tr class="text-center">
                                    <td>{{$value->rank}}</td>
                                    <td>{{$value->studentname}}</td>
                                    <td>{{$value->winningprice}}</td>
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
</x-app-layout>
