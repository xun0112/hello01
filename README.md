# CSV File Uploader Project

## 專案描述
這是一個簡單的網頁應用程式，用於上傳 CSV 檔案並將其內容儲存到本地資料庫中。應用程式包含前端網頁（index.html）用於上傳和顯示檔案，以及後端伺服器（server.js）用於處理資料儲存。

## 功能
- 上傳 CSV 檔案並顯示其內容。
- 將上傳的資料儲存到 SQLite 資料庫。
- 查看資料庫中的資料。

## 設定步驟
1. 確保已安裝 Node.js 和 npm。
2. 導航到專案資料夾：`cd hello-world`。
3. 安裝依賴套件：`npm install express multer sqlite3`。
4. 啟動伺服器：`node server.js`。
5. 在瀏覽器中開啟 `index.html` 檔案（建議使用 http://localhost:3000/index.html）。

## 使用指南
- 上傳 CSV 檔案：選擇檔案並點擊「Upload」按鈕。
- 查看資料：點擊「View Database Data」按鈕來顯示資料庫中的記錄。

## 注意事項
- 請確保伺服器正在運行，否則 fetch 請求會失敗。
- CSV 檔案應包含標頭行，例如：Name,Age,Email。
