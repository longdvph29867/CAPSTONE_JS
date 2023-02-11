
// required không để trống
const required = (val, spanId, inputID) => {
    if(val.length === 0) {
        document.getElementById(spanId).style.display = 'block';
        document.getElementById(spanId).innerHTML = '*Trường này bắt buộc nhập!';
        document.getElementById(inputID).classList.add('boder-red');
        return false;
    }
    else {
        document.getElementById(spanId).innerHTML = '';
        document.getElementById(inputID).classList.remove('boder-red');
        return true;
    }
}

// const kiemTraTrung = (val, productList, spanId, inputID) => {
//     let index = productList.findIndex((item) => item.name == val)
//     if(index == -1 ) {
//         document.getElementById(spanId).style.display = 'block';
//         document.getElementById(spanId).innerHTML = '*Tên sản phẩm đã tồn tại!';
//         document.getElementById(inputID).classList.add('boder-red');
//         return false;
//     }
//     else {
//         document.getElementById(spanId).innerHTML = '';
//         document.getElementById(inputID).classList.remove('boder-red');
//         return true;
//     }
// }

// check price
const number = (val, spanId, inputID) => {
    let pattern = /^[0-9]+$/;
    if(!pattern.test(val)) {
        document.getElementById(spanId).style.display = 'block';
        document.getElementById(spanId).innerHTML = '*Nhập kí tự dạng số!';
        document.getElementById(inputID).classList.add('boder-red');
        return false;
    }
    else {
        document.getElementById(spanId).innerHTML = '';
        document.getElementById(inputID).classList.remove('boder-red');
        return true;
    }
}

const validateForm = () => {
    let newProduct = layThongTinForm();
    let isVali = required(newProduct.name, 'tbName', 'name');
    isVali &= required(newProduct.price, 'tbPrice', 'price')
                && number(newProduct.price, 'tbPrice', 'price');
    isVali &= required(newProduct.img, 'tbHinhAnh', 'hinhAnh');
    isVali &= required(newProduct.type, 'tbType', 'loaiSanPham');
    isVali &= required(newProduct.screen, 'tbScreen', 'screen');
    isVali &= required(newProduct.backCamera, 'tbBackCamera', 'backCamera');
    isVali &= required(newProduct.frontCamera, 'tbFrontCamera', 'frontCamera');
    isVali &= required(newProduct.desc, 'tbMoTa', 'MoTa');
    return isVali;
}