const collections = require('../models/models');
const Rate = collections.Rate;
const Cake = collections.Cake;

module.exports = {
    cakes: (req, res) => {
        Cake.find({}, (err, cakes) => {
            if (err) {
                res.json({ status: "Error", message: err });
            } else {
                res.json({ status: "Success", cakes: cakes });
            }
        });
    },

    cake: (req, res) => {
        Cake.find({ _id: req.params.id }, (err, cake) => {
            if (err) {
                res.json({ status: "Error", message: err });
            } else {
                res.json({ status: "Success", cake: cake });
            }
        });
    },

    post: (req, res) => {
        Cake.create(req.body, (err, cake) => {
            if (err) {
                let data = {}
                for (let key in err.errors) {
                    data[key] = err.errors[key].message;
                }
                res.json({ status: "Error", message: data });
            } else {
                res.json({ status: "Cake successfully added!" });
            }
        });
    },

    put: (req, res) => {
        Cake.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err) => {
            if (err) {
                res.json({ status: "Error", message: err });
            } else {
                res.json({ status: "Success" });
            }
        });
    },

    postRate: (req, res) => {
        Rate.create(req.body, (err, rating) => {
            if (err) {
                let data = {}
                for (let key in err.errors) {
                    data[key] = err.errors[key].message;
                }
                res.json({ status: "Error", message: data });
            } else {
                Cake.findByIdAndUpdate({ _id: req.params.cakeID }, { $push: { ratings: rating } }, (err) => {
                    if (err) {
                        res.json({ status: "Error", message: err });
                    } else {
                        res.json({ status: "Rating successfully added!" });
                    }
                })
            }
        });
    }
}