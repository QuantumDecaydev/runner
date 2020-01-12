"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const glob = __importStar(require("@actions/glob"));
function run() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        // arg0 -> node
        // arg1 -> fileFiles.js
        // arg2 -> glob options
        // arg3 -> glob patterns
        let followSymbolicLinks = false;
        let matchPattern = process.argv[2];
        if (process.argv[2] === '--followSymbolicLinks') {
            console.log('Follow symbolic links');
            followSymbolicLinks = true;
            matchPattern = process.argv[3];
        }
        matchPattern = Buffer.from(matchPattern, 'base64').toString('utf-8');
        console.log(`Match Pattern: ${matchPattern}`);
        const globber = yield glob.create(matchPattern, { followSymbolicLinks });
        try {
            for (var _b = __asyncValues(globber.globGenerator()), _c; _c = yield _b.next(), !_c.done;) {
                const file = _c.value;
                console.error(`__OUTPUT__${Buffer.from(file).toString('base64')}__OUTPUT__`);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
run();
