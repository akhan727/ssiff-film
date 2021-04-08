# Base image
FROM node:alpine

# Switches middlewares and dependencies to efficient code path
# NPM installs only packages in dependencies
ENV NODE_ENV=production

# Working directory in container
WORKDIR /app
# Copies package.json files so Docker can install dependencies
COPY package.json .
# Install dependencies
RUN npm install
# Copy files to container
COPY . .

# Default command
CMD ["npm", "start"]