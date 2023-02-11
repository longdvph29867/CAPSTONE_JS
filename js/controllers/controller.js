let batLoading = () => {
    document.getElementById('loading').style.display = 'flex';
}

let tatLoading = () => {
    document.getElementById('loading').style.display = 'none';
}

// lấy thông tin từ form
let layThongTinForm = () => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let screen = document.getElementById('screen').value;
    let backCamera = document.getElementById('backCamera').value;
    let frontCamera = document.getElementById('frontCamera').value;
    let img = document.getElementById('hinhAnh').value;
    let desc = document.getElementById('MoTa').value;
    let type = document.getElementById('loaiSanPham').value;

    let product = new Product(
        name,
        price,
        screen,
        backCamera,
        frontCamera,
        img,
        desc,
        type,
    )
    return product;
}

// show thông tin lên form
let showThongTinForm = (data) => {
    console.log("🚀 ~ file: controller.js:35 ~ showThongTinForm ~ data", data.id)
    document.getElementById('idProduct').value = data.id;
    document.getElementById('name').value = data.name;
    document.getElementById('price').value = data.price;
    document.getElementById('screen').value = data.screen;
    document.getElementById('backCamera').value = data.backCamera;
    document.getElementById('frontCamera').value = data.frontCamera;
    document.getElementById('hinhAnh').value = data.img;
    document.getElementById('MoTa').value = data.desc;
    document.getElementById('loaiSanPham').value = data.type;
}

const kiemTra = () => {
    var idValue = document.getElementById('idProduct').value;
    if(idValue != '') {
        document.getElementById('formProduct').reset();
    }
}
document.getElementById('btnThemNguoiDung').onclick = () => {
    kiemTra();
};