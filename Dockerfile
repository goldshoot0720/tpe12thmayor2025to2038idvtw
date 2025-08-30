FROM node:21

# 設定工作目錄
WORKDIR /app

# 複製 package.json & package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製全部程式碼
COPY . .

# 建置 Next.js
RUN npm run build

# 設定環境變數
ENV PORT 8080

EXPOSE 8080

# 啟動
CMD ["npm", "start"]
