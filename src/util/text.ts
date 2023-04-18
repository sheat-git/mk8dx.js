export const normalizer = new Map([
    ['０', '0'], ['１', '1'], ['２', '2'], ['３', '3'], ['４', '4'], ['５', '5'], ['６', '6'], ['７', '7'], ['８', '8'], ['９', '9'],
    ['A', 'a'], ['B', 'b'], ['C', 'c'], ['D', 'd'], ['E', 'e'], ['F', 'f'], ['G', 'g'], ['H', 'h'], ['I', 'i'], ['J', 'j'],
    ['K', 'k'], ['L', 'l'], ['M', 'm'], ['N', 'n'], ['O', 'o'], ['P', 'p'], ['Q', 'q'], ['R', 'r'], ['S', 's'], ['T', 't'],
    ['U', 'u'], ['V', 'v'], ['W', 'w'], ['X', 'x'], ['Y', 'y'], ['Z', 'z'],
    ['Ａ', 'a'], ['Ｂ', 'b'], ['Ｃ', 'c'], ['Ｄ', 'd'], ['Ｅ', 'e'], ['Ｆ', 'f'], ['Ｇ', 'g'], ['Ｈ', 'h'], ['Ｉ', 'i'], ['Ｊ', 'j'],
    ['Ｋ', 'k'], ['Ｌ', 'l'], ['Ｍ', 'm'], ['Ｎ', 'n'], ['Ｏ', 'o'], ['Ｐ', 'p'], ['Ｑ', 'q'], ['Ｒ', 'r'], ['Ｓ', 's'], ['Ｔ', 't'],
    ['Ｕ', 'u'], ['Ｖ', 'v'], ['Ｗ', 'w'], ['Ｘ', 'x'], ['Ｙ', 'y'], ['Ｚ', 'z'],
    ['ａ', 'a'], ['ｂ', 'b'], ['ｃ', 'c'], ['ｄ', 'd'], ['ｅ', 'e'], ['ｆ', 'f'], ['ｇ', 'g'], ['ｈ', 'h'], ['ｉ', 'i'], ['ｊ', 'j'],
    ['ｋ', 'k'], ['ｌ', 'l'], ['ｍ', 'm'], ['ｎ', 'n'], ['ｏ', 'o'], ['ｐ', 'p'], ['ｑ', 'q'], ['ｒ', 'r'], ['ｓ', 's'], ['ｔ', 't'],
    ['ｕ', 'u'], ['ｖ', 'v'], ['ｗ', 'w'], ['ｘ', 'x'], ['ｙ', 'y'], ['ｚ', 'z'],
    ['あ', 'ｱ'], ['い', 'ｲ'], ['う', 'ｳ'], ['え', 'ｴ'], ['お', 'ｵ'], ['か', 'ｶ'], ['き', 'ｷ'], ['く', 'ｸ'], ['け', 'ｹ'], ['こ', 'ｺ'],
    ['さ', 'ｻ'], ['し', 'ｼ'], ['す', 'ｽ'], ['せ', 'ｾ'], ['そ', 'ｿ'], ['た', 'ﾀ'], ['ち', 'ﾁ'], ['つ', 'ﾂ'], ['て', 'ﾃ'], ['と', 'ﾄ'],
    ['な', 'ﾅ'], ['に', 'ﾆ'], ['ぬ', 'ﾇ'], ['ね', 'ﾈ'], ['の', 'ﾉ'], ['は', 'ﾊ'], ['ひ', 'ﾋ'], ['ふ', 'ﾌ'], ['へ', 'ﾍ'], ['ほ', 'ﾎ'],
    ['ま', 'ﾏ'], ['み', 'ﾐ'], ['む', 'ﾑ'], ['め', 'ﾒ'], ['も', 'ﾓ'], ['や', 'ﾔ'], ['ゆ', 'ﾕ'], ['よ', 'ﾖ'],
    ['ら', 'ﾗ'], ['り', 'ﾘ'], ['る', 'ﾙ'], ['れ', 'ﾚ'], ['ろ', 'ﾛ'], ['わ', 'ﾜ'], ['ゐ', 'ヰ'], ['ゑ', 'ヱ'], ['を', 'ｦ'], ['ん', 'ﾝ'],
    ['が', 'ｶﾞ'], ['ぎ', 'ｷﾞ'], ['ぐ', 'ｸﾞ'], ['げ', 'ｹﾞ'], ['ご', 'ｺﾞ'], ['ざ', 'ｻﾞ'], ['じ', 'ｼﾞ'], ['ず', 'ｽﾞ'], ['ぜ', 'ｾﾞ'], ['ぞ', 'ｿﾞ'],
    ['だ', 'ﾀﾞ'], ['ぢ', 'ﾁﾞ'], ['づ', 'ﾂﾞ'], ['で', 'ﾃﾞ'], ['ど', 'ﾄﾞ'], ['ば', 'ﾊﾞ'], ['び', 'ﾋﾞ'], ['ぶ', 'ﾌﾞ'], ['べ', 'ﾍﾞ'], ['ぼ', 'ﾎﾞ'],
    ['ぱ', 'ﾊﾟ'], ['ぴ', 'ﾋﾟ'], ['ぷ', 'ﾌﾟ'], ['ぺ', 'ﾍﾟ'], ['ぽ', 'ﾎﾟ'], ['ぁ', 'ｧ'], ['ぃ', 'ｨ'], ['ぅ', 'ｩ'], ['ぇ', 'ｪ'], ['ぉ', 'ｫ'],
    ['っ', 'ｯ'], ['ゃ', 'ｬ'], ['ゅ', 'ｭ'], ['ょ', 'ｮ'], ['ゎ', 'ﾜ'], ['ゔ', 'ｳﾞ'], ['ゕ', 'ヵ'], ['ゖ', 'ヶ'],
    ['ア', 'ｱ'], ['イ', 'ｲ'], ['ウ', 'ｳ'], ['エ', 'ｴ'], ['オ', 'ｵ'], ['カ', 'ｶ'], ['キ', 'ｷ'], ['ク', 'ｸ'], ['ケ', 'ｹ'], ['コ', 'ｺ'],
    ['サ', 'ｻ'], ['シ', 'ｼ'], ['ス', 'ｽ'], ['セ', 'ｾ'], ['ソ', 'ｿ'], ['タ', 'ﾀ'], ['チ', 'ﾁ'], ['ツ', 'ﾂ'], ['テ', 'ﾃ'], ['ト', 'ﾄ'],
    ['ナ', 'ﾅ'], ['ニ', 'ﾆ'], ['ヌ', 'ﾇ'], ['ネ', 'ﾈ'], ['ノ', 'ﾉ'], ['ハ', 'ﾊ'], ['ヒ', 'ﾋ'], ['フ', 'ﾌ'], ['ヘ', 'ﾍ'], ['ホ', 'ﾎ'],
    ['マ', 'ﾏ'], ['ミ', 'ﾐ'], ['ム', 'ﾑ'], ['メ', 'ﾒ'], ['モ', 'ﾓ'], ['ヤ', 'ﾔ'], ['ユ', 'ﾕ'], ['ヨ', 'ﾖ'],
    ['ラ', 'ﾗ'], ['リ', 'ﾘ'], ['ル', 'ﾙ'], ['レ', 'ﾚ'], ['ロ', 'ﾛ'], ['ワ', 'ﾜ'], ['ヲ', 'ｦ'], ['ン', 'ﾝ'],
    ['ガ', 'ｶﾞ'], ['ギ', 'ｷﾞ'], ['グ', 'ｸﾞ'], ['ゲ', 'ｹﾞ'], ['ゴ', 'ｺﾞ'], ['ザ', 'ｻﾞ'], ['ジ', 'ｼﾞ'], ['ズ', 'ｽﾞ'], ['ゼ', 'ｾﾞ'], ['ゾ', 'ｿﾞ'],
    ['ダ', 'ﾀﾞ'], ['ヂ', 'ﾁﾞ'], ['ヅ', 'ﾂﾞ'], ['デ', 'ﾃﾞ'], ['ド', 'ﾄﾞ'], ['バ', 'ﾊﾞ'], ['ビ', 'ﾋﾞ'], ['ブ', 'ﾌﾞ'], ['ベ', 'ﾍﾞ'], ['ボ', 'ﾎﾞ'],
    ['パ', 'ﾊﾟ'], ['ピ', 'ﾋﾟ'], ['プ', 'ﾌﾟ'], ['ペ', 'ﾍﾟ'], ['ポ', 'ﾎﾟ'], ['ァ', 'ｧ'], ['ィ', 'ｨ'], ['ゥ', 'ｩ'], ['ェ', 'ｪ'], ['ォ', 'ｫ'],
    ['ッ', 'ｯ'], ['ャ', 'ｬ'], ['ュ', 'ｭ'], ['ョ', 'ｮ'], ['ヮ', 'ﾜ'], ['ヴ', 'ｳﾞ'],
    ['ー', 'ｰ'], ['゛', 'ﾞ'], ['゜', 'ﾟ'], ['－', '-'],
    ['虹', 'ﾆｼﾞ'], ['新', 'ｼﾝ'], ['空', 'ｸｳ'], ['港', 'ｺｳ'], ['遺', 'ｲ'], ['跡', 'ｾｷ'], ['砂', 'ｻ'], ['漠', 'ﾊﾞｸ'], ['平', 'ﾍｲ'], ['野', 'ﾔ'],
    ['岬', 'ﾐｻｷ'], ['森', 'ﾓﾘ'], ['東', 'ﾄｳ'], ['京', 'ｷｮｳ'], ['雪', 'ﾕｷ'], ['岩', 'ｲﾜ'], ['鉱', 'ｺｳ']
])

export const normalize = (text: string): string => {
    return [...text].reduce((acc, char) => {
        const normalized = normalizer.get(char)
        return normalized === undefined ? acc + char : acc + normalized
    })
}
