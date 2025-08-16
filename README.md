# 概要
本リポジトリは Nuxt.js の Layers 機能を使って、親から子のプロジェクトに共通部品を継承して使えるかどうを検証するためのプロジェクトです

呼び方
- 親　→ レイヤー側
- 子　→ アプリ側


# 詳細
## Nuxt.js の Layers 機能で継承されるディレクトリ

- アプリ側 > レイヤー側の優先度で上書きされて使われる
  - 同じ名前のコンポーネントがあった場合はアプリ側が使われる

|ディレクトリ名|継承可能かどうか|備考|
|---|---|---|
|components|○||
|composables|○||
|layouts|○||
|middleware|○||
|pages|○||
|plugins|○||
|utils|○||

## Nuxt.js の Layers 機能で継承されないディレクトリや機能

### i18n
nuxt-i18nを使うことでアプリ側 > レイヤー側の優先度でマージされる

### MSW
レイヤー側のmsw.client.tsと、アプリ側のhandler.tsの細工を行うことで継承可能。

レイヤー側のmsw.client.tsはMockServiceWorkerの重複起動防止のために環境変数（nuxt.config.ts）を見てclient-baseでなかった場合は起動しないみたいなことを仕込む必要がある。

アプリ側のhandler.ts側は、レイヤー側のhandler.tsをimportして結合する必要がある。（レイヤー側のpackgae.jsonでhandler.tsをexportしておく必要がある）

## nuxt.config.ts の設定

|設定名|継承可能かどうか|備考|
|---|---|---|
|css|○|レイヤー側は絶対パスで指定する必要がある。|

