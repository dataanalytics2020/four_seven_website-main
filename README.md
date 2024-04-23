

## 実行関連
### 仮想化環境の実行
venv/Scripts/Activate.ps1


### ローカル環境での開発command
cd front && npm start
venv/Scripts/Activate.ps1
uvicorn main:app --reload


## 導入関連
### tailwindowcssの導入
https://qiita.com/y_kato_eng/items/439dae65ba13d050c91e
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p