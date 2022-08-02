function btnClick() {
    {
        $("#zero").html(0);
        $("#one").html(0);
        $("#two").html(0);
        $("#three").html(0);
        $("#four").html(0);
    }
    const value = $("#input").val();
    let count = 1;
    var arr;
    var countInterval;
    countInterval = setInterval(function () {
        arr = Array.from(count.toString()).map(Number).reverse();
        $("#zero").html(arr[0]);
        $("#one").html(arr[1]);
        $("#two").html(arr[2]);
        $("#three").html(arr[3]);
        $("#four").html(arr[4]);

        if (count == value) {
            clearInterval(countInterval);
        }
        count++;
    }, 500);
}
