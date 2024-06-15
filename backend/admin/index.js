const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Konfigurasi Mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the MongoDB database.');
});

// Buat skema dan model untuk koleksi pesanan
const orderSchema = new mongoose.Schema({
    male_name: String,
    female_name: String,
    bi_male: String,
    bi_female: String,
    quotes: String,
    theme: String,
    photo: String,
    status: String
});

const Order = mongoose.model('Order', orderSchema);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const extname = path.extname(file.originalname).toLowerCase();
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
app.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.render('dashboard', { pesanan: orders });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.post('/form', upload.single('photo'), async (req, res) => {
    const { male_name, female_name, bi_male, bi_female, quotes, theme, status } = req.body;
    const photo = req.file ? req.file.path : null;

    const order = new Order({
        male_name,
        female_name,
        bi_male,
        bi_female,
        quotes,
        theme,
        photo,
        status
    });

    try {
        await order.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/edit/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).send('Order not found');
        }
        res.render('edit', { pesanan: order });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/edit/:id', upload.single('photo'), async (req, res) => {
    const { id } = req.params;
    const { male_name, female_name, bi_male, bi_female, quotes, theme, status } = req.body;
    const photo = req.file ? req.file.path : req.body.existing_photo;

    try {
        await Order.findByIdAndUpdate(id, {
            male_name,
            female_name,
            bi_male,
            bi_female,
            quotes,
            theme,
            photo,
            status
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/detail/:id', async (req, res) => {
    console.log('Detail route hit, ID:', req.params.id);  // Tambahkan log ini
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).send('Order not found');
        }
        res.render('detail', { pesanan: order });
    } catch (err) {
        console.error('Error retrieving order details: ', err);
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
