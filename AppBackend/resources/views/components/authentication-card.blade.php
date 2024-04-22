<div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative"
    style="background : url('{{ asset('assets/images/casino.webp') }}'); background-repeat:no-repeat; background-size:cover; background-position:bott;">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div> {{ $logo }} </div>
    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg relative z-10">
        {{ $slot }} </div>
</div>
