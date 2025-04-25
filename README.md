# AI Safety Incident Log Service

A RESTful API service to log and manage AI safety incidents.

## Tech Stack

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM (Object Document Mapper)**: Mongoose
- **Language**: JavaScript (As i'm more comfortable and confident)


## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (Node Package Manager)

## Project Setup

Step 1: Go to project folder. 
        - first open terminal then type this cmd: cd HumanChain-Backend

Step 2: install dependencies. cmd: npm install

Step 3: Environment Configuration

        Create a `.env` file in the root directory with the following content:

        MONGODB_URI=mongodb://localhost:27017/ai-safety-incidents
        PORT=3000

    I m asumming you have installed MongoDB Compass in your laptop/pc.

Step 4: Run the App. cmd: npm run dev


## API Endpoints

As we don't have any data initially, So do step 2 first to add data in database.

### 1. Get All Incidents
- **Method**: GET
- **URL**: `http://localhost:3000/incidents`
- **Response**: Array of incident objects
- **Postman Example**:
  1. Open Postman
  2. Create new GET request
  3. Enter URL: `http://localhost:3000/incidents`
  4. Click Send

I give "postman" example but if you dont have postman installed in your laptop, then install VS code Extension name:Thunder Client.

Thunder client is same as postman and all the functionalites and steps are same.

### 2. Create New Incident
- **Method**: POST  
- **URL**: `http://localhost:3000/incidents`
- **Body** (raw JSON):
```json
{
    "title": "Test Incident",
    "description": "Detailed description here",
    "severity": "Medium"
}
```
- **Postman Example**:
  1. Create new POST request
  2. Enter URL
  3. Select Body > raw > JSON
  4. Paste the JSON above
  5. Click Send


### 3. Get Incident by ID
- **Method**: GET
- **URL**: `http://localhost:3000/incidents/{id}`
- **Postman Example**:
  1. Replace `{id}` with actual incident ID
  2. Send GET request

### 4. Delete Incident
- **Method**: DELETE
- **URL**: `http://localhost:3000/incidents/{id}`
- **Postman Example**:
  1. Replace `{id}` with actual incident ID
  2. Send DELETE request


Thank You so much for checking my work!🤗
