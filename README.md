# 單身獸爺的退休生活攻略：醫療、長照與存在的意義

> 高齡相關的疾病與醫療，以及長照需求，還有退休後存在的意義，是青壯年還在打拚的階段不會想到，
> 但是自己或家長遲早會面對的議題。這個網站想幫大家整合資訊，把可能遇到的問題、有哪些解決方式、
> 各種解決方式要準備多少錢，先讓大家知道。先做好準備，退休後就不會迷惘。

## 網站

**GitHub Pages：** `https://nbkamo.github.io/SingleBadgerRetirementPlan/`

---

## 結構說明

```
SingleBadgerRetirementPlan/
├── index.html                          # 第一層：目錄（引言 + 三大分類卡片）
├── css/
│   └── style.css                       # 全站樣式
├── js/
│   └── main.js                         # 互動邏輯（bucket list 打勾記錄、側欄捲動追蹤）
├── assets/images/
│   ├── about/                          # 首頁「關於本站」用圖
│   ├── longterm-care/                  # 長照懶人包用的資訊圖表
│   └── bucket-list/                    # 人生清單 BINGO 圖
├── pages/                              # 第二層：內容頁
│   ├── medical/
│   │   ├── chronic-disease/            # 常見慢性疾病（待建置）
│   │   ├── health-checkup/             # 健康檢查（完整內容，整理自 Know_All）
│   │   ├── self-paid-medical/          # 自費醫療（完整內容，整理自 Know_All）
│   │   └── emergency-prevention/       # 急症與預防（待建置）
│   ├── longterm-care/
│   │   └── guide/                      # 長期照護懶人包（完整內容）
│   └── meaning/
│       ├── parenting/                  # 如何不成為你不喜歡的家長（待建置）
│       ├── bucket-list/                # 人生清單 Bucket List（完整內容）
│       └── legacy/                     # 你希望怎麼被記住（待建置）
└── README.md
```

## 內容架構

| 分類 | 主題 | 狀態 |
|---|---|---|
| 醫療 | 常見慢性疾病 | 待建置 |
| 醫療 | 健康檢查 | 完整內容 |
| 醫療 | 自費醫療 | 完整內容 |
| 醫療 | 急症與預防 | 待建置 |
| 長照 | 長期照護懶人包 | 完整內容 |
| 存在的意義 | 如何不成為你不喜歡的家長 | 待建置 |
| 存在的意義 | 人生清單 Bucket List | 完整內容 |
| 存在的意義 | 你希望怎麼被記住 | 待建置 |

## 新增一個內容頁

1. 在 `pages/[分類]/[主題]/` 建立 `index.html`（可參考同分類其他頁面的結構）
2. 在 `index.html` 首頁對應分類的 `topics-grid` 中新增一個 `topic-card` 連結
3. `git add . && git commit -m "add: [主題名稱]" && git push`

## 部署（GitHub Pages）

1. 前往 repo 的 **Settings → Pages**
2. Source 選擇 `Deploy from a branch`
3. Branch 選 `main`，資料夾選 `/ (root)`
4. 儲存後約 1 分鐘即可在上方網址存取
