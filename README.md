# サイコロゲーム (TypeScript + React + Storybook)

React 18とTypeScriptで構築された3Dサイコロゲームアプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-dice/demo/

## 主要機能
### 操作方法
- **ボタンクリック**: サイコロを振る
- **スペースキー**: サイコロを振る（キーボード操作）
- **履歴表示**: 過去の結果を時刻と共に表示

### ゲーム機能
- 回数カウンター
- 結果履歴（最大10件、時刻付き）
- レスポンシブデザイン（モバイル対応）
- 重複クリック防止機能

## 技術スタック
- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── dice-game/              # サイコロゲーム機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── Dice/           # 3Dサイコロコンポーネント
│       │   ├── DiceFace/       # サイコロの面コンポーネント
│       │   ├── DiceControls/   # サイコロ操作UI
│       │   └── ScoreBoard/     # スコアボード
│       ├── DiceGame/           # 機能ルートコンポーネント
│       ├── useDiceGame.ts      # ゲーム状態管理フック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   └── Text/                   # テキスト表示
├── stories/                    # Storybook用ストーリー
├── utils/                      # ユーティリティ関数
├── Config.ts                   # 設定値
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License
