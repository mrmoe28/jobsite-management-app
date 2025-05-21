# Jobsite Management Platform

A comprehensive contractor jobsite management platform that streamlines digital workflows, documentation, and team collaboration through intelligent form management and real-time project tracking.

![Project Banner](https://github.com/mrmoe28/jobsite-management-app/raw/main/screenshot.png)

## Features

- **Team Management**: Add, edit, and manage team members with role-based permissions
- **Project Tracking**: Monitor project progress, deadlines, and resource allocation
- **Daily Sign-In**: Digital attendance tracking with signature collection
- **Document Management**: Store, organize, and collect e-signatures on important documents
- **Photo Management**: Upload and organize jobsite photos with descriptions
- **Weather Integration**: Real-time weather conditions for jobsites to help plan work activities
- **AI-Powered Insights**: Get intelligent recommendations and analysis using OpenAI integration
- **Mobile-First Design**: Fully responsive interface for field work on any device

## Technology Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Authentication**: OpenID Connect with Replit Auth
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js v18+ and npm
- PostgreSQL database
- OpenAI API key (for AI features)
- SendGrid API key (for email notifications)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mrmoe28/jobsite-management-app.git
   cd jobsite-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with the following variables:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/jobsite_db
   OPENAI_API_KEY=your_openai_api_key
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

4. Initialize the database:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to http://localhost:5000

### Deployment

#### Deploying to Vercel

1. Fork or push this repository to your GitHub account.

2. Sign up or log in to [Vercel](https://vercel.com/).

3. Click "New Project" on your Vercel dashboard.

4. Import your GitHub repository.

5. Configure the following environment variables in the Vercel dashboard:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `SENDGRID_API_KEY`: Your SendGrid API key (if using email features)
   - `SESSION_SECRET`: A random string for session security

6. Click "Deploy" and Vercel will build and deploy your application.

7. Once deployment is complete, you can access your application at the provided Vercel URL.

## Usage

### User Roles

- **Admin**: Full access to all features and user management
- **Project Manager**: Can create projects, assign team members, set deadlines
- **Team Member**: Can sign in daily, upload photos, and submit reports

### Key Workflows

1. **Daily Sign-In**: Team members sign in at the start of each day with digital signatures
2. **Photo Documentation**: Upload and categorize jobsite photos with captions
3. **Progress Tracking**: Update project status and view real-time completion metrics
4. **Document Signatures**: Request and collect electronic signatures on important documents

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Replit](https://replit.com)
- UI components powered by [shadcn/ui](https://ui.shadcn.com/)
- Weather data visualization inspired by various open-source projects
- Special thanks to the construction industry professionals who provided valuable feedback