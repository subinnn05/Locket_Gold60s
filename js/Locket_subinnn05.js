// ========= ID ========= //
// Locket: Gold + Filter Pack
// @duyvinh09
// ========= Phần cố định ========= //

// Lấy User-Agent (không thực sự dùng đến, nhưng giữ nguyên theo code gốc)
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];

// Parse body JSON từ response
var obj = JSON.parse($response.body);

// Thêm thông báo vào response
obj.Attention = "Chúc mừng bạn! Vui lòng không sử dụng chúng dưới mục đích thương mại!";

// Hàm tạo object subscription (không dùng trong code này nhưng giữ nguyên)
function makeSub(displayName, priceAmount, priceCurrency) {
  return {
    auto_resume_date: null,
    display_name: displayName,
    is_sandbox: true,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    management_url: "https://apps.apple.com/account/subscriptions",
    period_type: "normal",
    price: {
      amount: priceAmount,
      currency: priceCurrency
    },
    expires_date: "9999-01-09T10:10:14Z",
    grace_period_expires_date: null,
    refunded_at: null,
    unsubscribe_detected_at: null,
    original_purchase_date: "2005-01-09T10:10:14Z",
    purchase_date: "2005-01-09T10:10:14Z",
    store: "app_store",
    store_transaction_id: "2000001108724193"
  };
}

// Hàm tạo object entitlement (không dùng trong code này nhưng giữ nguyên)
function makeEnt(productIdentifier) {
  return {
    grace_period_expires_date: null,
    purchase_date: "2005-01-09T10:10:14Z",
    product_identifier: productIdentifier,
    expires_date: "9999-01-09T10:10:14Z"
  };
}

// Khởi tạo các object con nếu chưa có
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

// ============================================================
// 1. Giả lập mua gói "locket_1600_1y" (Gold 1 năm)
// ============================================================
obj.subscriber.subscriptions["locket_1600_1y"] = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: true,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: {
    amount: 399000,
    currency: "VND"
  },
  expires_date: "9999-01-09T10:10:14Z",
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2005-01-09T10:10:14Z",
  purchase_date: "2005-01-09T10:10:14Z",
  store: "app_store",
  store_transaction_id: "2000001108724193"
};

// Gán entitlement "Gold" cho gói vừa mua
obj.subscriber.entitlements["Gold"] = {
  grace_period_expires_date: null,
  purchase_date: "2005-01-09T10:10:14Z",
  product_identifier: "locket_1600_1y",
  expires_date: "9999-01-09T10:10:14Z"
};

// ============================================================
// 2. Giả lập mua gói "FilterPack_20Photos_500" (Filter Pack)
// ============================================================
obj.subscriber.subscriptions["com.locket.Locket.FilterPack_20Photos_500"] = {
  auto_resume_date: null,
  display_name: "com.locket.Locket.FilterPack_20Photos_500",
  is_sandbox: true,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: {
    amount: 0,
    currency: "VND"
  },
  expires_date: "9999-01-09T10:10:14Z",
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2005-01-09T10:10:14Z",
  purchase_date: "2005-01-09T10:10:14Z",
  store: "app_store",
  store_transaction_id: "2000001108724193"
};

// Gán entitlement "effect_pack_20" cho gói Filter Pack
obj.subscriber.entitlements["effect_pack_20"] = {
  grace_period_expires_date: null,
  purchase_date: "2005-01-09T10:10:14Z",
  product_identifier: "com.locket.Locket.FilterPack_20Photos_500",
  expires_date: "9999-01-09T10:10:14Z"
};

// Trả response đã sửa
$done({
  body: JSON.stringify(obj)
});
