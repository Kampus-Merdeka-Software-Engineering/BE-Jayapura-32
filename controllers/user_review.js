const user_review = require("../models/user_review");

// CREATE: untuk menambahkan data ke tabel user_review
exports.create = (req, res) => {
  // validate request
  if (!req.body.email) {
    return res.status(400).send({
      message: "email tidak boleh kosong",
    });
  } else if (!req.body.full_name) {
    return res.status(400).send({
      message: "nama tidak boleh kosong",
    });
  } else if (!req.body.no_phone) {
    return res.status(400).send({
      message: "nomor handphone tidak boleh kosong",
    });
  } else if (!req.body.message) {
    return res.status(400).send({
      message: "review tidak boleh kosong",
    });
  } else if (!req.body.star) {
    return res.status(400).send({
      message: "rating tidak boleh kosong",
    });
  }
    
    // proses menyimpan kedalam database
    user_review.create(user_review)
    .then((data) => {
      res.json({
        message: "data berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "ada kesalahan saat input data",
        data: null,
      });
    });

 // })
 // .catch((error) => {
 //   console.error('error:', error);
 //   return res.status(500).json({ error: 'Internal server error' });
 // });
};

// READ: menampilkan semua konseling
exports.findAll = (req, res) => {
  user_review.findAll()
    .then((user_review) => {
      res.json({
        message: "data berhasil didapatkan.",
        data: user_review,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "ada kesalahan saat mengambil data",
        data: null,
      });
    });
};
