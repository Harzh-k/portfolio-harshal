# 1. Use Node 20 (LTS) which is required for modern Next.js
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files first (for better caching)
COPY package.json package-lock.json* ./

# 4. Install dependencies
# Added --legacy-peer-deps to avoid strict version conflicts during build
RUN npm install --legacy-peer-deps

# 5. Copy the rest of the code
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose the port Next.js runs on
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]