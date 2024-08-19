# Step 1: Use the official Node.js image as a base image
FROM node:18

# Step 2: Set the working directory in the container
WORKDIR /Tran_Tin_final_site

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Expose port 5575
EXPOSE 5575

# Step 8: Start the application
CMD ["npm", "start"]