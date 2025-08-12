# Stage 1: Build the Vite app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and lock file first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build for production
RUN npm run build

# Stage 2: Serve the built app using a lightweight web server
FROM nginx:alpine

# Copy the build output to nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a default nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
