const DATA_BASE = 'https://63cf5b70e52f5878299db316.mockapi.io'
let productList = [];

// const myModal = new bootstrap.Modal(document.getElementById("myModal"), {
//     keyboard: false,
// });

const fetchListProduct = () => {
    batLoading();
    axios({
        url: `${DATA_BASE}/products`,
        method: 'GET',
    })
    .then(function(res) {
        tatLoading();
        productList = res.data;
        renderProductList(productList);
    })
    .catch(function(err) {
        tatLoading();
    })
}
// chạy lần đầu khi load trang
fetchListProduct();
function nhap() {
    const varName = document.getElementById('name').value;
    var test = kiemTraTrung(varName, productList, 123)
}

// render product
const renderProductList = (arr) => {
    let contentHTML = arr.map((item) => `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
        <img class="img-product" src="${item.img}" alt="">
        </td>
        <td>
        <div>
            <p>Type: ${item.type}</p>
            <p>Screen: ${item.screen}</p>
            <p>Back camera: ${item.backCamera}</p>
            <p>Front camera: ${item.frontCamera}</p>
            <p>Desc: ${item.desc}</p>
        </div>
        </td>
        <td>
            <button 
                onclick='getUpdateProduct(${item.id})' 
                class='btn btn-warning mt-2'
                >Sửa</button>
            <button
                onclick='deleteProduct(${item.id})' 
                class='btn btn-danger mt-2'
                >Xoá</button>
        </td>
    </tr>`
    ).join('');
    document.getElementById('tbodyDanhSachSanPham').innerHTML = contentHTML;
}

// thêm product
const addProduct = () => {
    let newProduct = layThongTinForm();
    let isValidate = validateForm();
    if(isValidate) {
        batLoading();
        axios({
            url: `${DATA_BASE}/products`,
            method: 'POST',
            data: newProduct,
        })
        .then(function(res) {
            $('#myModal').modal('hide');
            tatLoading();
            fetchListProduct();
        })
        .catch(function(err) {
            tatLoading();
        })
        //reset form;
        document.getElementById('formProduct').reset();
    }
}

// xoa product
const deleteProduct = (idProduct) => {
    batLoading();
    axios({
        url: `${DATA_BASE}/products/${idProduct}`,
        method: 'DELETE',
    })
    .then(function(res) {
        tatLoading;
        fetchListProduct();
    })
    .catch(function(err) {

    })
}

// UPDATE PRODUCT
// UPDATE phần 1: Lấy thông tin show lên form
const getUpdateProduct = (id) => {
    let product = productList.find((item) => item.id == id);
    showThongTinForm(product);
    $('#myModal').modal('show');
}
// UPDATE phần 2: Cho sửa thông tin trên form => Nhấn nút Cập nhật thì lưu thay đổi
const updateProduct = () => {
    let isValidate = validateForm();
    const newProduct = layThongTinForm();
    const idProduct = document.getElementById('idProduct').value;
    if(isValidate) {
        batLoading();
        axios({
            url: `${DATA_BASE}/products/${idProduct}`,
            method: 'PUT',
            data: newProduct,
        })
        .then(function(res) {
            $('#myModal').modal('hide');
            tatLoading();
            fetchListProduct();
            //reset form;
            document.getElementById('formProduct').reset();
        })
        .catch(function(err) {
            tatLoading();
        })
        // document.getElementById('capNhatProduct').setAttribute('data-dismiss', 'modal');
    }
}

// search product
const searchProduct = () => {
    let keyWord = document.getElementById('inputSearch').value.toLowerCase();
    console.log("🚀 ~ file: services.js:141 ~ searxhProduct ~ keyWord", keyWord)
    let result = [];
    productList.forEach((item) => {
        let name = item.name.toLowerCase();
        if(name.includes(keyWord)) {
            result.push(item);
        }
        
    })
    renderProductList(result);
}
document.getElementById('searchProduct').onclick = () => {
    searchProduct();
}

