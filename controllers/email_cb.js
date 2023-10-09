const email_cb = require("../models/email_cb");

// CREATE: untuk menambahkan data ke tabel testimoni
exports.create = (req, res) => {
  // validate request
  if (!req.body.email_cb) {
    return res.status(400).send({
      message: "email tidak boleh kosong",
    });
  }

  // mengambil data yang dikirimkan oleh client
  const email_cb = {
    email_cb: req.body.email_cb,
  };

  // proses menyimpan kedalam database
  email_cb.create(email_cb)
    .then((data) => {
      res.json({
        message: "user review berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "ada kesalahan saat input data",
        data: null,
      });
    });
};

// READ: menampilkan semua testimoni
exports.findAll = (req, res) => {
  email_cb.findAll()
    .then((email_cb) => {
      res.json({
        message: "user review berhasil didapatkan.",
        data: email_cb,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "ada kesalahan saat mengambil data",
        data: null,
      });
    });
};
