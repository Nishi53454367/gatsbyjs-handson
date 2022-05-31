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
docker-compose run --rm front_node sh
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
## コンテナを一時的に起動
```
docker-compose run --rm front_node sh
```

## gatsbyjs作成
```
gatsby new
```

2022/05/31 ↑これエラーなった。(Dockerコンテナ内の権限？)  
エラーメッセージを参考にホストOS上で以下を実行してgatsbyjsのgitから直接cloneするしかない？
```
git clone https://github.com/gatsbyjs/gatsby-starter-minimal-ts.git app --recursive --depth=1 --quiet
```