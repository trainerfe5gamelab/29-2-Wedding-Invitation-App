const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const connection = require('./db'); // Pastikan ada file db.js yang sesuai dengan pengaturan database Anda
const mime = require('mime-types');

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // Periksa ekstensi file
    const extname = path.extname(file.originalname).toLowerCase();
    // Periksa mimetype
    const mimetype = file.mimetype === 'application/x-rar-compressed' || file.mimetype === 'application/zip';

    if (extname === '.rar' || extname === '.zip') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only RAR and ZIP are allowed!'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    connection.query('SELECT * FROM pesanan', (err, results) => {
        if (err) throw err;
        res.render('dashboard', { pesanan: results });
    });
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/form', upload.single('photo'), (req, res) => {
    const { male_name, female_name, bi_male, bi_female, quotes, theme, status } = req.body;
    const photo = req.file ? req.file.path : null;

    const query = 'INSERT INTO pesanan (male_name, female_name, bi_male, bi_female, quotes, theme, photo, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [male_name, female_name, bi_male, bi_female, quotes, theme, photo, status], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM pesanan WHERE order_id = ?', [id], (err, results) => {
        if (err) throw err;
        res.render('edit', { pesanan: results[0] });
    });
});

app.post('/edit/:id', upload.single('photo'), (req, res) => {
    const { id } = req.params;
    const { male_name, female_name, bi_male, bi_female, quotes, theme, status } = req.body;
    const photo = req.file ? req.file.path : req.body.existing_photo;

    const query = 'UPDATE pesanan SET male_name = ?, female_name = ?, bi_male = ?, bi_female = ?, quotes = ?, theme = ?, photo = ?, status = ? WHERE order_id = ?';
    connection.query(query, [male_name, female_name, bi_male, bi_female, quotes, theme, photo, status, id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.get('/detail/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM pesanan WHERE order_id = ?', [id], (err, results) => {
        if (err) throw err;
        res.render('detail', { pesanan: results[0] });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
