(function(){

    var root = document.documentElement;

    document.addEventListener('mousemove', function(e) {
        var x = e.clientX / innerWidth;
        var y = e.clientY / innerHeight;

        root.style.setProperty("--mouse-x", x);
        root.style.setProperty("--mouse-y", y);
    }, false);

})();