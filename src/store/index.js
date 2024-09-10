const { atom } = require("jotai");

const titlejotai = atom("");
const mockquestionnum = atom(0);
const mockquestions = atom([]);
const pricestate = atom(0);
export { titlejotai, mockquestionnum, mockquestions, pricestate };
