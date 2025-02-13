# AI Tasks and Goals Manager (GOALSYNC)

### Full-stack application designed to assist users align tasks with predefined goals, thereby boosting productivity and goal achievement.

> (*This web application is a personnal project designed to showcase its capabilities and the integration of the OpenAI GPT-4 model. Please do not enter any sensitive or personnal information. For more details on the usage of the OpenAI model, refer to Open AI's Usage Policies.*)
<br/>

## Technologies and Features
### Frontend:
- Developed using **TypeScript**, **React**, **Redux** Toolkit and **CSS** for styling.
### Backend:
- **API and Database**: Built with Node.js, TypeScript, Express.js and Axios, along with PostgreSQL database, and using Prisma to interact with the database.
- **User Authentication**: JWT authentication with Node.js and password hashing with bcrypt.
- **LLM**: integrated GPT-4 model from OpenAI. Structured approach using Zod and Langchain to support consistency of the results and ensure compatibility between the AI-generated data and the database.
### Testing: 
- **Unit and Integration Tests**: Vitest and React Testing Library.
- **End-to-End Tests**: Cypress .

<br/>

### Features:

- **CRUD operations**:  Users can easily create, view, edit and delete tasks and goals. 
    - **Tasks**: Each tasks includes a description, priority level (Low, Moderate or High), deadline, progress state ("To do", "In progress" or "Completed") and a category. 
    - **Goals**: Each goal includes a description, a category and associated month. 
    - **Categories**: Options include Career, Personal Development, Leisure, Family and Friends, Financial, Health and Wellness.

- **Dashboard**: 
    - **User interface**: A user-friendly interface where users can manage tasks and goals and track their progress.

- **Open AI model**:
    - **Purpose**: Integrated GPT-4 model from OpenAI to evaluate users’ progress and alignment with goals. 
    - **Monthly analysis**: Evaluates tasks and goals within a specific month. Compares tasks and goals within the same category, taking into account task priority, progress and overall contribution to achieving the related goals. 
    - **Insights and Tagging**: (results of the analysis)
        - Each goal is tagged as "Needs improvement", "In Progress" or "Achieved".
        - A brief overview of the monthly progress is provided, as well as suggestions to enhance productivity.



## CI pipeline:

1. **Install Dependencies, build and run tests** for both the frontend and backend.
2. **Docker-compose Build and Push** to ensure the application works within the containerized environment (docker-compose manages all containers - database, api and client).
3. **Run E2E tests** using Cypress.

GitHub Actions configuration file: `.github/workflows/ci.yml`


## Setup project :

**Clone repository**:

```bash
git clone https://github.com/fatimampg/ai-tasks-goals-containers.git
cd ai-tasks-goals-containers
```
### Run tests locally:

1. **Install dependencies:** (root, frontend and backend)

```bash
npm i
``` 

2. **Run tests from backend (/backend)** 

```bash
npm test
```

3. **Run tests from frontend (/frontend)** 

```bash
npm test
```

4. **Run server (/backend) and client (/frontend)** 

```bash
npn run dev
```

4. **Run E2E tests (root)** 

```bash
npx cypress open
```

### Setup with Docker:

**Create .env files** </br>
Add .env files in root, /frontend and /backend (use the example.env files as reference)


**Build Docker image:**

```docker
docker-compose up -d --build
```

**Check containers running:**

```docker
docker ps
```

**Access the application:** <br/>
Available on : http://localhost:3000/

**Stop containers**

```docker
docker-compose down
```