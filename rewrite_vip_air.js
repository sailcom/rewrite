/*
计算器Air解锁VIP
https?:\/\/(buy|pushserv)\.(itunes|airapps)\.(apple.com/verifyReceipt|co:6001/firstrunV2)
*/

const path1 = "pushserv.airapps.co:6001";
const path2 = "buy.itunes.apple.com";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.subscriptionStatus = 1,
obj.expirationDate = 20991231
}
if ($request.url.indexOf(path2) != -1){
  obj.service = 1,
  obj.payYear = true,
  obj.end = 1867248816000
 }
$done({body: JSON.stringify(obj)});
