<?php
session_start();
if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="home.php">Home</a></li>
            <li><a href="quotes.php">Quotes</a></li>
            <li><a href="undangan.php">Undangan</a></li>
            <?php if ($_SESSION['role'] == 'admin'): ?>
                <li><a href="admin.php">Admin</a></li>
            <?php endif; ?>
            <li><a href="logout.php">Logout</a></li>
        </ul>
    </nav>
    <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
</body>
</html>
