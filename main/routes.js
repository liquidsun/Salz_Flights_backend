var express = require('express');
var router = express.Router();
var pool = require('./db');

router.get('/api/hello', (req, res) => {
    res.json('hello world')
});

router.get('/get/flights/bymonth', (req, res, next ) => {
    pool.query(
        `SELECT extract(month from day) as month, to_char(day,'Mon') as gr, count(*) as count
        FROM public.salz_flights
        group by month,gr
        order by month`,
        (q_err, q_res) => {
        console.log(q_err)
            res.json(q_res.rows)
        })
});

router.get('/get/flights/byday', (req, res, next ) => {
    pool.query(
        `SELECT extract(DOW from day) as dow, to_char(day,'Dy') as gr, count(*) as count
        FROM public.salz_flights
        group by dow,gr
        order by dow`,
        (q_err, q_res) => {
            console.log(q_err);
            res.json(q_res.rows)
        })
});

router.get('/get/flights/bydaymonth', (req, res, next ) => {
    pool.query(
        `SELECT extract(month from day) as month, extract(dow from day) as dow, count(*) as count,
        concat(extract(month from day),',',extract(dow from day)) as gr
        FROM public.salz_flights
        group by month,dow,gr
        order by month,dow`,
        (q_err, q_res) => {
            console.log(q_err);
            res.json(q_res.rows)
        })
});
module.exports = router;