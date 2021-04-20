# テストtypescriptプロジェクト

参考：
https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49

## プロジェクト作成
```
> cd .\workspace\
> mkdir testTypescript
> cd .\testTypescript\
> npm init     # プロジェクトファイルの作成

*** 以下プロンプト（基本Enterでいけるか）
package name: (testTypescript)
version: (1.0.0)
description: test typescript
entry point: (index.js)
test command: test
git repository:
keywords: typescript test
author: hanabusa
license: (ISC)
About to write to C:\work\nodejs\workspace\testExpressProject\package.json:
    package.jsonの内容が吐かれる
Is this OK? (yes)


```

## express導入
```
> npm install express
> npm install @types/express            # typescriptのためのnpmだと思う
```

## typescript導入
```
> npm install typescript @types/node@12   # 12はnodejsのバージョンを記載(環境に併せて記載すること)
> npx tsc --version     # typescriptのバージョン
Version 4.2.4

> npx tsc --init        # tsconfig.json作成(※１)
> vi tsconfig.json
~ 編集 ~
> mkdir src
> touch src/index.ts    # tsファイルの作成(※２)
> vi src/index.ts
~ 編集 ~
```

### コンパイル
```
> npx tsc               # コンパイル(dist配下にindex.js, index.js.mapが作成される)
> node .\dist\index.js  # 実行
```

※１ tsconfig.jsonの編集は[以下](#tsconfig.jsonの編集)
※２ tsファイルの編集は[以下](#tsファイルの編集)

コンパイル～実行を自動でしてくれるts-node,ts-node-devみたいなパッケージもあるが、自分的には不要なので、入れない


### tsconfig.jsonの編集
コメントは覗いて表記してます
```
{
  "compilerOptions": {
-   "target": "es5",
+   "target": "ES2019",
    "module": "commonjs",
+   "sourceMap": true,
+   "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
- }
+ },
+ "include": [
+   "src/**/*"
+ ],
}
```

### tsファイルの編集
これは例です。今はそうなっていない。
```
function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello("World"));
```