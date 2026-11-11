// Delete Header - Xóa ETag khỏi RevenueCat request
var headers = $request.headers;
delete headers["If-None-Match"];
delete headers["if-none-match"];
delete headers["X-RevenueCat-ETag"];
delete headers["x-revenuecat-etag"];
delete headers["X-RevenueCat-Etag"];
$done({ headers: headers });
