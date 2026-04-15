// Đợi trang load xong rồi mới chạy
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", function () {
        // Tên 3 thành viên (đổi lại nếu cần)
        const members = ["Vân Anh", "Chí Đạt", "Chí Vĩnh"];
        // Hiển thị danh sách
        alert("Thành viên nhóm:\n" + members.join("\n"));
    });
});