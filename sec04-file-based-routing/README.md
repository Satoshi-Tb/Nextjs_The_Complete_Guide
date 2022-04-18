# Nextjs The Complete Guide

## 技術
* React (version 18.0.0)
* Next.js (version 12.1.3)

## 学習メモ
---
### セクション3: Pages & File-based Routing
* create-next-appを実施すると、最新のNext.js、および依存するReactがインストールされる。  
2022.4時点ではNext.js version 12.1.4、React 18.0.0がインストールされる。  
インストールは正常終了するが、ビルドを行うとエラーが発生する。  
これを回避するため、Next.jsはversion 12.1.3を利用する。Next.js 11系でもエラー回避できることを確認しているが、  
Next 12系を利用したいので上記バージョンを指定する。

---
### セクション4: Project Time: Working with File-based Routing
* Linkタグにスタイルを適用する場合、&lt;a&gt;タグを差し込む必要がある。  
Linkタグは内包するaタグを認識し、その機能性（アンカークリック時にサーバー通信を発生させない）を  
損なうことなく動作してくれる。  
スタイル指定（class属性）のみ行うことに注意。href等、リンク動作に関する  
機能はLinkタグが自動的に補完してくれる。
---

### 公式ドキュメント
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
