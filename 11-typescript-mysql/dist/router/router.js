"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/heroes', (req, res) => {
    res.json({
        ok: true,
        msg: 'Heroes listos',
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: 'Hero listo',
        id,
    });
});
exports.default = router;
