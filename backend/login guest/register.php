<?php
session_start();
include 'koneksi.php'; // File koneksi ke database

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $role = 'guest';

    // Cek apakah username sudah ada
    $stmt = $pdo->prepare('SELECT * FROM users WHERE username = ?');
    $stmt->execute([$username]);
    if ($stmt->rowCount() > 0) {
        echo "Username sudah ada. Silakan pilih username lain.";
    } else {
        // Simpan user baru ke database
        $stmt = $pdo->prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)');
        if ($stmt->execute([$username, $hashed_password, $role])) {
            $_SESSION['username'] = $username;
            $_SESSION['role'] = $role;
            $_SESSION['message'] = "Registrasi berhasil. Selamat datang, $username!";
            header('Location: index.php');
            exit();
        } else {
            echo "Terjadi kesalahan. Silakan coba lagi.";
        }
    }
}
?>
