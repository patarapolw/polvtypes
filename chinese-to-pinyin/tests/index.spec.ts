import pinyin from "chinese-to-pinyin";
import "../src/index";

const p = pinyin("你好");
const q = pinyin("123淘宝", {keepRest: true});
