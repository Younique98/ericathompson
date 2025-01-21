# Erica's Portfolio & Blog Platform

A full-stack portfolio and blog platform built with Next.js 14 and modern web technologies. Features a sleek dark theme, powerful blog system with Elasticsearch search, and a course management platform. Designed with pure Tailwind CSS for maximum flexibility and control.

## Tech Stack

### Frontend
- Framework: Next.js 14 (with App Router)
- Language: TypeScript
- Styling: Tailwind CSS (custom components)
- Component Design: Custom Tailwind components
- Search: Elasticsearch
- State Management: React Query

### Backend
- API: Flask (Blog/Search Service)
- Database: PostgreSQL + Elasticsearch
- ORM: Prisma
- Authentication: NextAuth.js
- File Storage: AWS S3

### DevOps
- Docker
- CI/CD: GitHub Actions
- Monitoring: Datadog
- Hosting: Vercel

### Testing
- Jest
- React Testing Library
- Cypress

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- Python 3.8+
- PostgreSQL
- Elasticsearch 8.x
- Docker
- npm or yarn

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-platform.git
cd portfolio-platform
```

2. Install dependencies
```bash
# Frontend dependencies
npm install

# Backend dependencies
cd backend
pip install -r requirements.txt
```

3. Set up environment variables
Create a `.env` file in the root directory:
```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# Next Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# AWS S3
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_REGION="your-region"
AWS_BUCKET_NAME="your-bucket-name"

# Elasticsearch
ELASTICSEARCH_HOST="localhost"
ELASTICSEARCH_PORT="9200"
```

4. Initialize services
```bash
# Start PostgreSQL
sudo systemctl start postgresql

# Start Elasticsearch
sudo systemctl start elasticsearch

# Initialize Prisma
npx prisma generate
npx prisma migrate dev

# Initialize Elasticsearch indices
python backend/init_elasticsearch.py
```

5. Run the development servers
```bash
# Frontend
npm run dev

# Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask run
```

[ ] Use a production WSGI server instead or similar when ready for prod.


Visit http://localhost:3000 to see your portfolio.

# Access the health check endpoint

## Make sure to run the flask server
http://localhost:5000/api/health-check


## Project Structure
```
portfolio-platform/
├── src/
│   ├── app/
│   │   ├── (blog)/           # Blog related pages
│   │   ├── (courses)/        # Course pages
│   │   ├── (portfolio)/      # Portfolio pages
│   │   ├── api/              # API routes
│   │   └── layout.tsx
│   ├── components/
│   │   ├── common/           # Shared components (Button, Card, etc.)
│   │   ├── blog/            # Blog components
│   │   ├── courses/         # Course components
│   │   └── layout/          # Layout components
│   ├── lib/
│   │   ├── prisma/          # Database client
│   │   ├── elasticsearch/    # Search client
│   │   └── utils/           # Helper functions
│   └── styles/
│       └── tailwind/        # Custom Tailwind components
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── models/
│   │   └── services/
│   └── requirements.txt
├── prisma/
│   └── schema.prisma
└── public/
```

## Features

### Custom Tailwind Components
- Reusable button system with variants
- Custom card components
- Flexible form elements
- Modal and dropdown systems
- Dark theme implementation
- Responsive navigation

### Blog System
- Full-text search with Elasticsearch
- Markdown support with syntax highlighting
- Tag-based categorization
- Draft system
- Image uploads to S3
- Custom comment system

### Course Platform
- Course creation and management
- Progress tracking
- Resource downloads
- Demo and GitHub integration
- Custom video player

### Portfolio
- Project showcase with filtering
- Skills and experience section
- Interactive contact form
- Resume download
- Social media integration

## Development

### Working with Tailwind Components
Custom components are located in `src/components/common`:
```typescript
// Example Button component usage
import { Button } from '@/components/common/Button';

<Button variant="primary" size="lg">
  Click me
</Button>
```

### Custom Theme Configuration
Tailwind theme configuration in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      }
    }
  }
}
```

### Working with the Blog
To create a new blog post:
```bash
npm run new-post
```

### Working with Elasticsearch
To reindex all blog posts:
```bash
python backend/reindex_blog.py
```

## Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy both frontend and backend services

### Backend Deployment
```bash
# Build Docker image
docker build -t portfolio-backend .

# Deploy to your preferred platform
docker push portfolio-backend
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Powered by [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Search powered by [Elasticsearch](https://www.elastic.co/)
- Icons by [Lucide](https://lucide.dev/)