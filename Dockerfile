# Use the official Nginx image to serve static files
FROM nginx:latest

# Copy your website files (HTML, CSS, JS) into Nginx's web directory
COPY . /usr/share/nginx/html

# Expose port 80 (default Nginx port)
EXPOSE 80