// Đăng ký sự kiện cho nút logout
document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault();
            localStorage.removeItem('authToken'); // Xóa token
            alert('Bạn đã đăng xuất!');
            window.location.href = 'logout.html'; // Chuyển hướng đến trang logout
        });
    }
});

// Biểu đồ Sparkline
$("#lineChart").sparkline([102, 109, 120, 99, 110, 105, 115], {
    type: "line",
    height: "70",
    width: "100%",
    lineWidth: "2",
    lineColor: "#177dff",
    fillColor: "rgba(23, 125, 255, 0.14)",
});
