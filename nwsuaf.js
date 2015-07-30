var http = require("http");
var count = 0;
var fresh = function () {
    if(count > 200000){
        console.log("done "+ count);
        return false;
    }
    count++;
    http.get("http://gp.people.com.cn/libin/dwkr/xzn.php?id=39", function(res) {
      console.log("Got response: " + res.statusCode );
      console.log( count + "次")
        console.log(new Date());
        fresh();
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
      fresh();
    });
}

fresh()
