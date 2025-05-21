#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install --legacy-peer-deps

# Build the frontend
echo "Building frontend..."
cd client
mkdir -p dist
cp -r public/* dist/
cd ..
npm run build

# Move the built files to the right location
echo "Setting up files for deployment..."
mkdir -p .vercel/output/static
cp -r dist/public/* .vercel/output/static/

# Create Vercel output config
echo "Creating Vercel output configuration..."
cat > .vercel/output/config.json << EOF
{
  "version": 3,
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1" },
    { "src": "/(.*)", "dest": "/$1" },
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
EOF

echo "Build completed successfully!"