// var isLogin = false;
// // phép so sánh ==//so sánh giá trị 

// var num__1 = 6;
// var num__2 = "6";
// console.log(num__1 == num__2);

// // phép so sánh === //so sánh giá trị và kiểu dữ liệu

// var num__3 = 10;
// var num__4 = "10";

// console.log(num__3 === num__4);


// //phép so sánh khác     != so sánh khác so  sánh giá trị

// var num__5 = 10;
// var num__6 = 15;

// console.log(num__5 != num__6);


// //phép so sánh khác !== so sánh khác so  sánh giá trị và so snahs kiểu dữ liệu

// var num__7 = 15;
// var num__8 = 15;

// console.log(num__7 !== num__8);

// //phép so sánh lớn (>)
// var num__9 = 15;
// var num__10 = 15;

// console.log(num__9 > num__10);


// //phép so sánh lớn hoặc bằng (>=)
// var num__11 = 15;
// var num__12 = 15;

// console.log(num__11 >= num__12);


// //phép so sánh bé (<)
// var num__13 = 15;
// var num__14 = 15;

// console.log(num__13 < num__14);


// //phép so sánh bé hơn hoặc bằng (<=)
// var num__15 = 15;
// var num__16 = 15;

// console.log(num__15 <= num__16);


// /* so sánh &&  (và)
// -nếu 2 biếu thức là đúng kết quả trả về là true
// -nếu 1 trong 2 kiểu thức có biểu thưc false sẽ trả về false
// */

// var bt_1 = false;
// var bt_2 = false;
// console.log(bt_1 && bt_2);

// var bt_3 = 8 < 4;
// var bt_4 = 10 > 5;
// console.log(bt_3 && bt_4);


// var bt_5 = 30 < 31;
// var bt_6 = 200 < 100;
// console.log(bt_5 && bt_6);

// console.log(bt_1 && bt_2 && bt_3 && bt_4 && bt_5 && bt_6);


// //phép so sánh hoặc (||)
// //nếu 1 trong 2 đúng kết quả là đúng
// //nếu cả 2 biểu thức là false thì kết quả chuyển sang sai
// //nếu cả 2 biểu thức là true đưa ra kết quả là  true

// var bt_7 = 30 < 31;
// var bt_8 = 200 < 100;

// console.log(bt_7 || bt_8);


// //phép so sánh phủ định (!)

// var bt_9 = 30 < 31;


// console.log(!bt_9);




// //cấu trúc câu điều kiện

// if (1==1) {
//     //nếu hành động là đúng thì biểu thứ được thực hiện
//     console.log("Hàng động đúng");
// };

// ///đây là đonạ code dưới câu điều kiện if

// console.log("đây là đoạn code dưới câu  điều kiện");




///chueyern số âm sang số dương

var a = -5;
if (a < 0) {
    a = -a;
    console.log(a);
}


/* vd: tính lãi xuất thẻ  tính dụng
    lđầu vào creditCardBalance=10,000,000vnd
    payment =5,000,000

    xử lý
    balance=creditCardBalance-payment
    nếu balance lớn hơn 0
    pentalty=balance*1,5/100;
    đầu ra

*/

var creditCardBalance = 10000000;
var payment = 5000000;

var balance = creditCardBalance - payment;

if (balance > 0) {
    pentalty = (balance * 1.5) / 100;
    var chuyenDoi = new Intl.NumberFormat('vn-VN');
    var tienChuyenDoi = chuyenDoi.format(pentalty);
    console.log("Tiền lãi cần phải đóng là " + tienChuyenDoi + "VND");
}


//cấu trúc điều kiện if else   
var d1 = 5;
var d2 = 10;
var bigger = 0;

if (d1 > d2) {
    bigger = d1;

} else {
    bigger = d2;
}

console.log("Số lớn nhất là: " + bigger)


//tính tiền lương của nhân viên
document.getElementById("btnTinhTien").onclick = function (event) {
    event.preventDefault();
    var hour = document.getElementById("txtGioLam").value;
    var tienLuong = document.getElementById("txtTienLuong").value;
    var tongTienLuong = 0;

    if (hour == "" || tienLuong == "") {
        document.getElementById("XuatTienLuong").innerHTML = "Bạn đang bỏ trống tiền lương và giờ làm vui lòng nhập lại";
    } else {
        if (hour <= 40) {
            tongTienLuong = tienLuong * hour;
        } else {
            tongTienLuong = (40 * tienLuong) + (hour - 40) * tienLuong * 1.5;
        }
        var chuyenDoi = new Intl.NumberFormat('vn-VN');
        var tongTienLuongChuyenDoi = chuyenDoi.format(tongTienLuong);
        document.getElementById("XuatTienLuong").innerHTML = "Số tiền lương bạn nhận đc là: " + tongTienLuongChuyenDoi + "VND";
    }
}

//sắp xếp loại của sinh viên

document.getElementById("btnTinhDiem").onclick = function (event) {
    event.preventDefault();
    var diemToan = document.getElementById("txtDiemToan").value;
    var diemLy = document.getElementById("txtDiemLy").value;
    var diemHoa = document.getElementById("txtDiemHoa").value;

    var diemTrungBinh = (parseInt(diemToan) + parseInt(diemLy) + parseInt(diemHoa)) / 3;

    if (diemToan == "" || diemLy == "" || diemHoa == "") {
        document.getElementById("XuatXepLoai").innerHTML = "Ô điểm không được để trống";

    } else {
        if (diemTrungBinh >= 8.5) {
            document.getElementById("XuatXepLoai").innerHTML = " Điểm trung bình là: " + diemTrungBinh.toFixed(2) + "&nbsp Xếp loại giỏi";

        } else if (diemTrungBinh >= 6.5) {
            document.getElementById("XuatXepLoai").innerHTML = " Điểm trung bình là: " + diemTrungBinh.toFixed(2) + " &nbsp Xếp loại khá";
        } else if (diemTrungBinh >= 5) {
            document.getElementById("XuatXepLoai").innerHTML = " Điểm trung bình là: " + diemTrungBinh.toFixed(2) + "&nbsp  Xếp loại TB";
        } else {

            document.getElementById("XuatXepLoai").innerHTML = " Điểm trung bình là: " + diemTrungBinh.toFixed(2) + "&nbsp  Xếp loại yếu";

        }

    }


}

//sắp xếp 3 số nguyên bất kì theo thứ tự tăng dần 

document.getElementById("btnSapXep").onclick = function (event) {
    event.preventDefault();
    var a = document.getElementById("txtSo1").value;
    var b = document.getElementById("txtSo2").value;
    var c = document.getElementById("txtSo3").value;

    var temp; //biến tạm

    // chuyển số bé nhất vào a
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }

    // chuyển số bé nhì vào b
    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }
    document.getElementById("XuatBai1").innerHTML = "Số nguyên theo thứ tự tăng dần là: " + a + " " + b + " " + c;
}

document.getElementById("btnEnter").onclick = function (event) {
    event.preventDefault();
    var text = document.getElementById("txtUser").value;
    if (text == "Bố" || text == "bố" || text == "b") {
        document.getElementById("XuatBai2").innerHTML = "Chào bố mời bố sử dụng máy";
    }
    if (text == "Mẹ" || text == "mẹ" || text == "m") {
        document.getElementById("XuatBai2").innerHTML = "Chào mẹ mời mẹ sử dụng máy";
    }
    if (text == "Anh trai" || text == "anh trai" || text == "a") {
        document.getElementById("XuatBai2").innerHTML = "Chào anh trai mời sử dụng :v";
    }
    if (text == "Em gái" || text == "em gái" || text == "e") {
        document.getElementById("XuatBai2").innerHTML = "Chào em gái mời sử dụng :v";
    }
}

//Bài 3
document.getElementById("btnBai3").onclick = function (event) {
    event.preventDefault();
    var soNguyen1 = document.getElementById("txtSoNguyen1").value;
    var soNguyen2 = document.getElementById("txtSoNguyen2").value;
    var soNguyen3 = document.getElementById("txtSoNguyen3").value;


    var chan = 0;
    var le = 0;

    if (soNguyen1 % 2 == 0) {
        chan++;

    } else {
        le++;
    }
    if (soNguyen2 % 2 == 0) {
        chan++;

    } else {
        le++;
    }
    if (soNguyen3 % 2 == 0) {
        chan++;

    } else {
        le++;
    }
    document.getElementById("XuatBai3").innerHTML = "Số chẳn là: " + chan + " Số lẻ là: " + le
}
//end bài 3




//bài  4 

document.getElementById("btnBai4").onclick = function (event) {
    event.preventDefault();
    var canhA = document.getElementById("txtCanhA").value;
    var canhB = document.getElementById("txtCanhB").value;
    var canhC = document.getElementById("txtCanhC").value;

    if (canhA < parseInt(canhB) + parseInt(canhC) && canhB < parseInt(canhA) + parseInt(canhC) && canhC < parseInt(canhA) + parseInt(canhB)) {
        if (canhA * canhA == canhB * canhB + canhC * canhC || canhB * canhB == canhA * canhA + canhC * canhC || canhC * canhC == canhA * canhA + canhB * canhB)
            document.getElementById("XuatBai4").innerHTML = "Đây làm tam giác vuông"
        else if (canhA == canhB && canhB == canhC)
            document.getElementById("XuatBai4").innerHTML = "Đây làm tam giác đều";

        else if (canhA == canhB || canhA == canhC || canhB == canhC)
            document.getElementById("XuatBai4").innerHTML = "Đây làm tam giác cân";

        else if (canhA * canhA > (canhB * canhB) + (canhC * canhC) || canhB * canhB > (canhA * canhA) + (canhC * canhC) || canhC * canhC > (canhA * canhA) + (canhB * canhB))
            document.getElementById("XuatBai4").innerHTML = "Đây làm tam giác tù";
        else
            document.getElementById("XuatBai4").innerHTML = "Đây làm tam giác nhọn";
    } else {
        document.getElementById("XuatBai4").innerHTML = "Ba cạnh không phải tam giác";
    }

}

//bài tập nâng cao


ngayKeTiep();
ngayTrongThang();
namNhuan();
var ngay = document.getElementById("txtNgay").value;
var thang = document.getElementById("txtThang").value;
var nam = document.getElementById("txtNam").value;

function namNhuan(nam){
    return (nam%4==0&&nam%100!=0)||(nam%400==0)
}
function ngayTrongThang(thang){
    if(thang<1||thang>12)
    {
        ngay=-1;
    }
   else{
    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10:  case 12:{
            ngay= 31;
            break;
        }
        
        case 4: case 6: case 9: case 11:

           {
               ngay= 30;
               break;
           } 
           default:
               {
                   if(namNhuan(nam)==0){
                       ngay=28;
                       break;
                   }
               }
       
    }
    return ngay;
    }
}

function ngayKeTiep(ngay,thang,nam){
    var day;
    day=ngayTrongThang(thang);
    if(day==1||ngay<1||ngay>day)
    return -1;
    else{
        if(ngay<day)
        {
            ngay++;

        }
        else if(thang!=12){
            ngay=1;
            thang++;

        }
        else{
            ngay=thang=1;
            nam++;
        }
    }
}
document.getElementById("btnNgayKeTiep").onclick = function (event) {
    event.preventDefault();

    
document.getElementById("XuatBai1NC").innerHTML="Ngày"+ngay+"tháng"+thang+"nam"+nam
        
    
}


///bai 3 

document.getElementById("btnCachDoc").onclick=function(event){
    event.preventDefault();
    var so=document.getElementById("txtSo").value;
    var donVi=so%10;
    so/=10;
    var chuc=so%10;
    var tram=so/10;

    if(tram==1)
    {
        document.getElementById("XuatBai3NC").innerHTML="Một"
    }
    else if(tram==2)
    {
        document.getElementById("XuatBai3NC").innerHTML="Hai"
    }
    else if(tram==3)
    {
        document.getElementById("XuatBai3NC").innerHTML="Ba"
    }
    else if(tram==4)
    {
        document.getElementById("XuatBai3NC").innerHTML="Bốn"
    }
    else if(tram==5)
    {
        document.getElementById("XuatBai3NC").innerHTML="Năm"
    }
    else if(tram==6)
    {
        document.getElementById("XuatBai3NC").innerHTML="Sáu"
    }
    else if(tram==7)
    {
        document.getElementById("XuatBai3NC").innerHTML="Bảy"
    }
    else if(tram==8)
    {
        document.getElementById("XuatBai3NC").innerHTML="Tám"
    }
    else if(tram==9)
    {
        document.getElementById("XuatBai3NC").innerHTML="Chín"
    }


}