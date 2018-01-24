<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    @yield('css')
</head>
<body>

    @yield('content')

    <script>
        var loadingTime = 2000;
        var loadingBlockLength = 21;
        var loadingBlockCount = 0;
        var maxLoadingBlockAmount = 28;
        var loadingPersentCount = 0;

        var loading = setInterval(function() {
            if (loadingBlockCount === maxLoadingBlockAmount) {
                clearInterval(loading);
            }
            document.getElementById("loading__block").style.width = 21 * loadingBlockCount + "px";
            loadingBlockCount++;
        }, loadingTime/maxLoadingBlockAmount);

        var loadingPersent = setInterval(function() {
            loadingPersentCount += 1.11;
            if (loadingPersentCount >= 100.00) {
                loadingPersentCount = 100;
                clearInterval(loadingPersent);
            }
            document.getElementById("loading__persent").innerText = loadingPersentCount.toFixed(2);
        }, loadingTime / 100); // 100%

        function removeLoading() {
            if (loadingPersentCount === 100) {
                document.getElementById("game_wrapper").removeChild(document.getElementById("loading"));
                clearInterval(loading);
                clearInterval(loadingPersent);
                return;
            }
            setTimeout(removeLoading, 100);
        }

        function onGameLoaded() {
            removeLoading();
        }
    </script>

    <script src="{{asset('public/js/_common_settings.js')}}"></script>
    @yield('js')
</body>
</html>
