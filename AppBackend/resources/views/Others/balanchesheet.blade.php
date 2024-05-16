{{-- -------------------------------------------------🔱HAR HAR
MAHADEV🔱--------------------------------------------------------------- --}}
<x-app-layout>
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">DOSSO21</h4>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Contest Balance Sheet</a></li>
                            <li class="breadcrumb-item active">Contest Balance Sheet</li>
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
                            <form>
                                <div class="row g-4 mb-3">
                                    <div class="col d-flex justify-content-between gap-2  flex-wrap">
                                        <div>
                                            <label for="placeholderInput" class="form-label">Select Contest</label>
                                            <select name="contest" class="form-select"
                                                aria-label="Default select example" id="contestseleect">
                                                <option value="">select contest</option>
                                                @foreach ($contestdata as $row)
                                                    <option value="{{ $row->id }}">{{ $row->title }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div>
                                            <label for="exampleInputdate" class="form-label">Total Amount</label>
                                            <input type="text" value="0" readonly name="totalamt"
                                                class="form-control" id="totalamt">
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
                        <table class="table table-nowrap table-bordered table-hover">
                            <thead>
                                <tr class="text-center">
                                    <th scope="col">Contest ID</th>
                                    <th scope="col">User ID</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Payment Mode</th>
                                    <th scope="col">Payment ID</th>
                                </tr>
                            </thead>
                            <tbody id="table-kii-laash">
                                {{-- table ki laash yahan aayegiii --}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
        $(document).on('change', '#contestseleect', function() {
            var id = $(this).val();
            console.log(id);
            $.ajax({
                url: "/getcontestajax/" + id,
                type: "GET",
                success: function(data) {
                    console.log(data);
                    $('#totalamt').val(data.totalamount);
                    $('#table-kii-laash').empty();
                    var body = '';
                    $.each(data.data, function(index, items) {
                        body += `
                        <tr class="text-center">
                                <td>${items.contestid}</td>
                                <td>${items.userid}</td>
                                <td>${items.username}</td>
                                <td>${items.date}</td>
                                <td>${items.amount}</td>
                                <td>${items.paymode}</td>
                                <td>${items.paymentid}</td>
                            </tr>
                        `;
                    });
                    $('#table-kii-laash').append(body);
                }
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
        setTimeout(function() {
            $('#successAlert').fadeOut('slow');
        }, 2000);

        setTimeout(function() {
            $('#dangerAlert').fadeOut('slow');
        }, 2000);
    </script>
</x-app-layout>
