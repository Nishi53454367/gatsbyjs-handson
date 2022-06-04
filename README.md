# gatsbyjs-handson
gatsbyjs勉強用

gatsbyjsチュートリアル  
https://www.gatsbyjs.com/docs/tutorial/

# ローカル環境構築手順
## 1. ビルド
```
docker-compose build
```

## 2. node_modulesインストール

### コンテナ一時起動
```
docker-compose run --rm front_node bash
```

### インストール
```
npm ci
```

### 終了
```
exit
```

## 3. コンテナ起動
```
docker-compose up -d
```

## 4. 画面起動
http://localhost:8000
