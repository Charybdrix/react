# Step 1: Build React app using Node 22 (Alpine)
FROM node:22-alpine AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve the app with NGINX
FROM nginx:alpine

# Copy the build files from the previous stage into the NGINX container
COPY --from=build /app/build /usr/share/nginx/html

# Optional: Copy your custom NGINX config
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for NGINX
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]