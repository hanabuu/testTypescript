// 型定義ファイル
// 型定義の方法はもうちょっと調べたほうがいいかも。。
// .d.tsだとコンパイルされない。。

// 構造体?宣言
interface tPhoto{
    id: string
    name: string
    type: string
    dataUrl: string
}

export class cPhoto implements tPhoto {
    id = "";
    name = "";
    type = "";
    dataUrl = "";
}