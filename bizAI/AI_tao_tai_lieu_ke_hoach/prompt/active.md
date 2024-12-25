Hướng Dẫn Xử Lý Tập Tin JSON
Cấu Trúc Tập Tin Đầu Vào
Mỗi tập tin đầu vào chứa các trường sau:

idea (ý tưởng)
capital (vốn)
location (vị trí)
currency (tiền tệ)
name (tên)

Các Bước Xử Lý
Thao Tác Với Section

Đọc các tập tin đầu vào có cấu trúc giống nhau
Xử lý dữ liệu JSON từ:

11 file từ a1->a11 đọc [idea, capital, location, currency, name]

a12: Đọc sectionD từ a4    [idea, capital, location, currency, name]
a13: Đọc sectionB từ a4    [idea, capital, location, currency, name]
a14: Đọc section B từ a4   [idea, capital, location, currency, name]
a15: Đọc section B từ a4   [idea, capital, location, currency, name]
a16: Đọc tất cả JSON từ a5  [idea, capital, location, currency, name]

Thao Tác Truyền Dữ Liệu
a17: Truyền idea, capital, currency
a18: Đọc section B từ a6    [idea, capital, location, currency, name]
a19: Truyền idea, capital, currency

a20: Truyền tất cả vào 1 JSON của a16 [idea, capital, location, currency, name]
a21: Truyền tất cả vào 1 JSON của a2  [idea, capital, location, currency, name]
a22: Truyền tất cả vào 1 JSON của a20 [idea, capital, location, currency, name]
a23: Truyền tất cả vào 1 JSON của a21 [idea, capital, location, currency, name]

Xử Lý Bổ Sung

a24: Đọc section B của a6 chứa:
a25: Truyền tất cả vào 1 JSON từ a17 [idea, capital, location, currency, name]
a26: Truyền tất cả vào 1 JSON từ a21 [idea, capital, location, currency, name]
a28: Truyền tất cả vào 1 JSON từ a26 [idea, capital, location, currency, name]
a29: Truyền tất cả vào 1 JSON từ a28 [idea, capital, location, currency, name]
a30: Truyền tất cả vào 1 JSON từ a29 [idea, capital, location, currency, name]
a31: Truyền tất cả vào 1 JSON từ a30 [idea, capital, location, currency, name]
a32: Truyền tất cả vào 1 JSON từ a15 [idea, capital, location, currency, name]

Thao Tác Với Section B

a33: Đọc sectionB từ a7       [idea, capital, location, currency, name]
a34: Đọc section B và C từ a7 [idea, capital, location, currency, name]
a35: Đọc 1 file JSON từ a4    [idea, capital, location, currency, name]
a36: Đọc 1 file JSON từ a4    [idea, capital, location, currency, name]

Truyền Dữ Liệu và Thao Tác JSON

a37: Truyền idea, capital, currency
a38: Đọc các file JSON từ a15 a22 a18 a31    [idea, capital, location, currency, name]
a39: Đọc 1 file JSON từ a38    [idea, capital, location, currency, name]
a40: Đọc JSON từ a39     [idea, capital, location, currency, name]
a41: Đọc JSON từ a38     [idea, capital, location, currency, name]
a42 đọc JSON của a39     [idea, capital, location, currency, name]
a43 đọc JSON của a39     [idea, capital, location, currency, name]
a44 đọc JSON của a13     [idea, capital, location, currency, name]
a45 đọc JSON của a44     [idea, capital, location, currency, name]
a46 đọc JSON của a45     [idea, capital, location, currency, name]
a47 đọc JSON của a46     [idea, capital, location, currency, name]