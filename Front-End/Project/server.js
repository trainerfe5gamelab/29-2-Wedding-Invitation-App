const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wedding_invitation'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected...');
});

const SECRET_KEY = 'your_secret_key';

app.post('/register', (req, res) => {
  const { name, email, whatsapp, password, role } = req.body;
  if (!name || !email || !whatsapp || !password || !role) {
      return res.json({ success: false, message: 'All fields are required' });
  }

  const query = `INSERT INTO users (name, whatsapp, email, password, role) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [name, whatsapp, email, password, role], (err, result) => {
      if (err) {
          console.error('Database error:', err);
          return res.json({ success: false, message: 'Database error' });
      }
      res.json({ success: true });
  });
});


app.post('/login', (req, res) => {
  const { email, password, role } = req.body;
  const query = `SELECT * FROM users WHERE email = ? AND password = ? AND role = ?`;
  db.query(query, [email, password, role], (err, results) => {
      if (err) {
          console.error('Database query error:', err);
          return res.json({ success: false, message: 'Database query error' });
      }
      if (results.length === 0) {
          return res.json({ success: false, message: 'Invalid credentials or role' });
      }
      res.json({ success: true, token: 'dummy-token', role: results[0].role });
  });
});

// Setelah autentikasi berhasil
if (user.role === 'admin') {
  this.$router.push('/admin-dashboard');
} else {
  // Redirect ke halaman lain jika tidak memiliki role admin
}


app.post('/orders', upload.single('photo'), (req, res) => {
  const { orderID, maleName, femaleName, biMale, biFemale, quotes, theme } = req.body;
  const photo = req.file.path;
  const userId = 1; // Mock user ID, replace with actual logic
  const eventId = 1; // Mock event ID, replace with actual logic
  const query = `INSERT INTO orders (order_id, male_name, female_name, bi_male, bi_female, quotes, theme, photo, user_id, event_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(query, [orderID, maleName, femaleName, biMale, biFemale, quotes, theme, photo, userId, eventId], (err, result) => {
    if (err) return res.json({ success: false });
    res.json({ success: true });
  });
});

app.get('/admin/orders', (req, res) => {
  const query = `SELECT * FROM orders`;
  db.query(query, (err, results) => {
    if (err) return res.json({ success: false });
    res.json({ success: true, orders: results });
  });
});

app.put('/orders/:id', (req, res) => {
  const { status } = req.body;
  const query = `UPDATE orders SET status = ? WHERE id = ?`;
  db.query(query, [status, req.params.id], (err, result) => {
    if (err) return res.json({ success: false });
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Verify Token Function
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
