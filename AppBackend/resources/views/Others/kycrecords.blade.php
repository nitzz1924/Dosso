{{-- -------------------------------------------------🔱HAR HAR
MAHADEV🔱--------------------------------------------------------------- --}}
<x-app-layout>
    <div class="container-fluid">
        <link rel="stylesheet" href="https://cdn.datatables.net/2.0.7/css/dataTables.dataTables.css">
        <style>
            table.dataTable th.dt-type-numeric,
            table.dataTable th.dt-type-date,
            table.dataTable td.dt-type-numeric,
            table.dataTable td.dt-type-date {
                text-align: left !important;
            }
        </style>
        <link rel="stylesheet" href="https://cdn.datatables.net/datetime/1.5.2/css/dataTables.dateTime.min.css">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">DOSSO21</h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">KYC Records</a></li>
                            <li class="breadcrumb-item active">KYC Records</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card tablecard">
                    <div class="card-body table-responsive">
                        <table id="example" class="table table-nowrap table-bordered">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">Player Type</th>
                                    <th scope="col">Student-ID</th>
                                    <th scope="col">Player-ID</th>
                                    <th scope="col">Aaadhar</th>
                                    <th scope="col">PAN-Number</th>
                                    <th scope="col">GST-Number</th>
                                    <th scope="col">Account-Number</th>
                                    <th scope="col">IFSC-Code</th>
                                    <th scope="col">Account Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($kycdata as $row)
                                <tr>
                                    <td>{{ $row->playertype }}</td>
                                    <td>{{ $row->studentid }}</td>
                                    <td>{{ $row->playerid }}</td>
                                    <td>{{ $row->aadhaar }}</td>
                                    <td>{{ $row->pannumber }}</td>
                                    <td>{{ $row->gstnumber }}</td>
                                    <td>{{ $row->accnumber }}</td>
                                    <td>{{ $row->ifsccode }}</td>
                                    <td>{{ $row->accname }}</td>
                                    <td>
                                        <span
                                            class="badge rounded-pill bg-{{ $row->status == 0 ? 'danger' : 'success' }}-subtle text-{{ $row->status == 0 ? 'danger' : 'success' }}">
                                            {{ $row->status == 0 ? 'Inactive' : 'Active' }}
                                        </span>
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
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
        $(document).ready(function() {
        // Initialize DataTables for each table
        var dataTableCustomer = $('#example').DataTable({
            layout: {
                topStart: {
                    buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                }
            }
        });

        });
    </script>
    <script>
        setTimeout(function() {
            $('#successAlert').fadeOut('slow');
        }, 2000);

        setTimeout(function() {
            $('#dangerAlert').fadeOut('slow');
        }, 2000);
    </script>
</x-app-layout>
