# gatsbyjs-handson
gatsbyjs勉強用

gatsbyjsチュートリアル  
https://www.gatsbyjs.com/docs/tutorial/

# ローカル環境構築手順
## ビルド
```
docker-compose build
```

## node_modulesインストール
```
docker-compose run --rm front_node bash
npm install
exit
```

## コンテナ起動
```
docker-compose up -d
```

## 画面起動
http://localhost:8000

# 備忘録. プロジェクト初期化手順
## 1. ビルド
```
docker-compose build
```

## 2. コンテナを一時的に起動
```
docker-compose run --rm front_node bash
```

### (1). gatsbyjs作成
```
gatsby new
```

### (2). 起動
```
cd my-gatsby-site
gatsby develop
```