# sit323-737-2024-t1-prac7p
1. **Clone the Repository**
   -
   git clone https://github.com/zainulabidins22/sit323-737-2024-t1-prac7p.git
   cd sit323-737-2024-t1-prac7p
Set Up MongoDB in Kubernetes

Define a deployment for MongoDB within Kubernetes.

Set up a Persistent Volume (PV) and Persistent Volume Claim (PVC) for MongoDB data.

Create MongoDB Credentials

Create a Kubernetes secret to securely store MongoDB credentials (username and password).

Modify your microservice code to reference these credentials.

Connect Your Application to MongoDB

Update the connection string in your microservice to point to the MongoDB deployment.

Ensure your app uses the environment variables for the credentials.

Deploy the Application

Deploy the microservice and MongoDB to your Kubernetes cluster using:

bash
Copy
Edit
kubectl apply -f <deployment_files>
Test the Setup

Verify that the application can connect to MongoDB and perform CRUD operations.
