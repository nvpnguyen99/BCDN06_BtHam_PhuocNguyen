/**
 * Mô hình 3 khối
 * Khối 1: Input
 *      soKw, bảng giá điện
 * Khối 2: Các bước xử lý
 *      Tính tổng tiền điện:
 *          + Lấy giá trị từ form
 *          + Tính tiền theo bảng giá => soKw, bảng giá
 *                                    => trả về tổng tiền điện 
 *          + Hiển thị kết quả lên UI
 * Khối 3: Output
 *      tongTienDien
 */

const GIA_50KW_DAU = 500;
const GIA_50KW_DEN_100KW = 650;
const GIA_100KW_DEN_200KW = 850;
const GIA_200KW_DEN_350KW = 1100;
const GIA_SAU_350KW = 1300;

function tinhTienDien(){
    var soKw = document.getElementById("soKW").value;
    var hoVaTen = document.getElementById("hoVaTen").value;

    if(soKw == "" || soKw == 0){
        alert("Số Kw không hợp lệ");
    } else {
        var tienDien = tinhTienDienTheoSoKW(soKw, GIA_50KW_DAU, GIA_50KW_DEN_100KW, GIA_100KW_DEN_200KW, GIA_200KW_DEN_350KW, GIA_SAU_350KW);
        var tienDienResult = "Họ và Tên: " + hoVaTen + ", Tiền điện: " + tienDien.toLocaleString() + "d";
    }
    document.getElementById("tienDienResult").innerHTML = tienDienResult;
}

function tinhTienDienTheoSoKW(soKw, gia_50kw_dau, gia_50kw_den_100kw, gia_100kw_den_200kw, gia_200kw_den_350kw, gia_sau_350kw) {
    var tienDien = 0;
    if(soKw <= 50){
        tienDien = soKw * gia_50kw_dau;
    } else if (soKw > 50 && soKw <=100){
        tienDien = 50 * gia_50kw_dau + (soKw-50) * gia_50kw_den_100kw;
    } else if (soKw > 100 && soKw <=200){
        tienDien = 50 * gia_50kw_dau + 50 * gia_50kw_den_100kw + (soKw - 100) * gia_100kw_den_200kw;
    } else if (soKw > 200 && soKw <=350){
        tienDien = 50 * gia_50kw_dau + 50 * gia_50kw_den_100kw + 100 * gia_100kw_den_200kw + (soKw - 200) * gia_200kw_den_350kw;
    } else {
        tienDien = 50 * gia_50kw_dau + 50 * gia_50kw_den_100kw + 100 * gia_100kw_den_200kw + 150 * gia_200kw_den_350kw + (soKw - 350) * gia_sau_350kw;
    }
    return tienDien;
}

document.getElementById("tienDienBtn").onclick = tinhTienDien;