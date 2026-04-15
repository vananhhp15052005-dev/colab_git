// Đợi trang load xong rồi mới chạy
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", function () {
        // Tên 3 thành viên (đổi lại nếu cần)
        const members = ["Tom", "Jerry", "Spike"];
        // Hiển thị danh sách
        alert("Thành viên nhóm:\n" + members.join("\n"));
    });
});