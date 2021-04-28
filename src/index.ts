import express from 'express'
import * as typePhoto from './photoType'

// var 変数名: 型
const app: express.Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3001, function(){
    console.log("Node.js is listening to PORT:3001");
    // console.log("Node.js is listening to PORT:3001");  server.address().portは使えなかった。。
});

// 構造体?宣言
type photo = {
    id: string
    name: string
    type: string
    dataUrl: string
};

// 写真のサンプルデータ
const photoList: photo[] = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]

function hello(name: string): photo[] {
    return photoList;
}

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
    res.json(hello("aa"));
});

function hello2(name: string): typePhoto.cPhoto[] {
    const dPhotolist: typePhoto.cPhoto[] = [];                // ここで初期化される
    let list: typePhoto.cPhoto = new typePhoto.cPhoto();
    list.id = "001";
    list.name = "photo001.jpg";
    list.type = "jpg";
    list.dataUrl = "http://localhost:3000/data/photo001.jpg";
    dPhotolist.push(list);

    const list2: typePhoto.cPhoto = {
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
    dPhotolist.push(list2);

    return dPhotolist;
}

app.get("/api/photo/list2", function(req, res, next){
    res.json(hello2("aa"));
});