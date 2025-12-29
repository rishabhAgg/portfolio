# Rishabh Portfolio Website

A professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

## 📦 Deployment to Vercel (Free)

### Option 1: Deploy via Git (Recommended)

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Sign up/Login with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

That's it! Vercel will automatically deploy.

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## ✏️ Customization Needed

### 1. Contact Form (Required)
Set up Formspree for free contact form:
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Replace `YOUR_FORM_ID` in `src/app/page.tsx`:
   ```tsx
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

### 2. Cal.com Setup (Required)
Set up free call booking:
1. Go to [cal.com](https://cal.com)
2. Create a free account
3. Set up your availability
4. Replace the Cal.com link in `src/app/page.tsx`:
   ```tsx
   href="https://cal.com/YOUR_USERNAME"
   ```

### 3. Social Links (Required)
Update these in `src/app/page.tsx`:
- Email address
- LinkedIn URL
- GitHub URL

### 4. Domain (Optional)
When you have a domain:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your domain
5. Update DNS as instructed

## 📁 Project Structure

```
├── src/
│   └── app/
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # Root layout with metadata
│       └── page.tsx       # Main page component
├── public/                # Static assets
├── package.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Customizing Colors

Edit `tailwind.config.ts` to change the primary color:

```ts
colors: {
  primary: {
    50: '#eff6ff',
    // ... change these hex values
    600: '#2563eb',  // Main brand color
    // ...
  },
}
```

## 📊 Analytics (Optional)

Vercel provides free analytics:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Analytics tab
4. Enable Web Analytics (free)

## 🔧 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel (free tier)
- **Forms:** Formspree (free tier)
- **Booking:** Cal.com (free tier)

## 📝 Content Updates

All content is in `src/app/page.tsx`. Edit:
- Hero section text
- Services descriptions
- Case studies
- About section
- Technologies list

## 🌐 SEO

SEO metadata is in `src/app/layout.tsx`. Update:
- Title
- Description
- Keywords
- Open Graph data

## 💡 Adding More Features

### Blog (Future)
Consider adding MDX for blog posts.

### More Case Studies
Duplicate the case study card pattern in the Work section.

### Testimonials
Add a testimonials section when you have client reviews.
