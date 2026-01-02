# 🎌 Anime Fandom Hub

![App Preview](https://imgix.cosmicjs.com/dc23d960-e78c-11f0-8416-dd84a8b9d469-photo-1578632292335-df3abbb0d586-1767325262118.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive anime fan website built with Next.js 16 and powered by Cosmic CMS. Explore anime series, discover characters, and browse by genre in this vibrant showcase of anime culture.

## ✨ Features

- 🎬 **Series Gallery** - Browse beautiful anime series with detailed information
- 👤 **Character Profiles** - Explore character biographies with stunning imagery
- 🏷️ **Genre Organization** - Filter anime by Action, Fantasy, Shonen, and more
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js 16 App Router
- 🎨 **Modern UI** - Clean, anime-inspired design with Tailwind CSS
- 🔍 **SEO Optimized** - Great visibility in search engines

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69573df46d538c4d2c716287&clone_repository=69573f036d538c4d2c7162af)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website dedicated to anime fandom"

### Code Generation Prompt

> Based on the content model I created for "Create a website dedicated to anime fandom", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React 19** - Latest React features
- **Imgix** - Image optimization and transformation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime installed
- A Cosmic account with the anime content model set up

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd anime-fandom-hub
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run the development server**
```bash
bun dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Anime Series

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: series } = await cosmic.objects
  .find({ type: 'anime-series' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Characters with Series Data

```typescript
const { objects: characters } = await cosmic.objects
  .find({ type: 'characters' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes connected anime series data
```

### Fetching Single Series by Slug

```typescript
const response = await cosmic.objects
  .findOne({ type: 'anime-series', slug: 'demon-slayer' })
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses three main content types:

### Anime Series
- Series name and description
- Cover art images
- Genre relationships
- Release year and episode count
- Studio and status (Ongoing/Completed/Upcoming)

### Characters
- Character name and biography
- Character images
- Anime series relationships
- Role designation (Protagonist/Antagonist/Supporting)

### Genres
- Genre name and description
- Used to categorize anime series

All content is managed through your Cosmic dashboard and automatically synced to the application.

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the deploy button above
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Environment Variables for Production

Make sure to set these in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

<!-- README_END -->