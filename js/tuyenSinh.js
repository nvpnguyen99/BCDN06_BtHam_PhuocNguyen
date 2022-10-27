/**
 * Mô hình 3 khối
 * Khối 1: Input
 *      mark1, mark2, mark3, benchMark, select khuVuc, select
 * Khối 2: Các bước xử lý
 *    tính kết quả tuyển sinh
 *          + lấy dữ liệu từ form
 *          + tính điểm ưu tiên theo khu vực
 *          + tính điểm ưu tiên theo đối tượng
 *          + tính tổng điểm
 *              tongDiem = mark1 + mark2 + mark3 + diemKhuVuc + diemDoiTuong
 *          + so sánh tổng điểm với điểm chuẩn
 *          + hiển thị kết quả lên UI                                                                        
 * Khối 3: Output
 *      kết quả tuyển sinh 
 */

function tinhKetQuaTuyenSinh() {
    var mark1 = document.getElementById("mark1").value;
    var mark2 = document.getElementById("mark2").value;
    var mark3 = document.getElementById("mark3").value;
    var benchMark = document.getElementById("benchMark").value;
    var khuVuc = document.getElementById("selectArea").value;
    var doiTuong = document.getElementById("selectObject").value;

    var tongDiem = Number(mark1) + Number(mark2) + Number(mark3) + tinhDiemKhuVuc(khuVuc) + tinhDiemDoiTuong(doiTuong);
    console.log(tongDiem);
    var tuyenSinhResult = "";
    if(tongDiem >= benchMark){
        tuyenSinhResult = "Bạn đã trúng tuyển";
    } else {
        tuyenSinhResult = "Bạn không trúng tuyển";
    }

    document.getElementById("tuyenSinhResult").innerHTML = tuyenSinhResult;
}

document.getElementById("tuyenSinhBtn").onclick = tinhKetQuaTuyenSinh;

function tinhDiemKhuVuc(khuVuc) {
    var diemKhuVuc = 0;
    switch (khuVuc) {
        case "A":
            diemKhuVuc = 2;
            break;
        case "B":
            diemKhuVuc = 1;
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;
        default:
            diemKhuVuc = 0;
            break;
    }
    return diemKhuVuc;
}

function tinhDiemDoiTuong(doiTuong) {
    var diemDoiTuong = 0;
    switch (doiTuong) {
        case "1":
            diemDoiTuong = 2.5;
            break;
        case "2":
            diemDoiTuong = 1.5;
            break;
        case "3":
            diemDoiTuong = 1;
            break;
        default:
            diemDoiTuong = 0;
            break;
    }
    return diemDoiTuong;
}