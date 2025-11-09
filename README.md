# V Films — Official Website (EZ Labs Assignment)

**Live Demo**: [https://vfilms.vercel.app](https://vfilms.vercel.app)  
**GitHub Repo**: [https://github.com/yourusername/vfilms](https://github.com/yourusername/vfilms)  
**Deployed on**: Vercel  
**Tech Stack**: Next.js 14+ (App Router), Tailwind CSS, React Hook Form, Yup, Axios

---

## Features (100% Figma Matched)

| Feature | Status |
|-------|--------|
| Pixel-perfect responsive design | Done |
| Smooth scroll navigation | Done |
| Contact form with validation + API POST | Done |
| Success message on submit | Done |
| Polaroid-style services with detail pages | Done |
| Highlight Reel (video frame) | Done |
| Team & Portfolio (India Gate) | Done |
| About Us (stats + client logos) | Done |
| No border/shadow on header | Done |

---

## Navigation (Header Links → Sections)

| Link | Scrolls To |
|------|------------|
| `Services` | Services Section (Polaroids) |
| `Their Stories` | Team & Portfolio (India Gate) |
| `Our Story` | About Us (Stats) |
| `Varnan` | Highlight Reel (Video) |
| `Let’s Talk` | Contact Form |

---

## Tech Stack & Why

| Tool | Purpose |
|------|--------|
| **Next.js 14+ (App Router)** | Fast, SEO-ready, file-based routing |
| **Tailwind CSS** | Rapid, responsive, Figma-accurate design |
| **React Hook Form + Yup** | Lightweight form with real-time validation |
| **Axios** | Reliable API calls with error handling |
| **Vercel** | One-click deploy, free HTTPS |

---

## API Integration

**Endpoint**: `POST https://vernanbackend.ezlab.in/api/contact-us/`

**Request Body**:
```json
{
  "name": "Ayush Tiwari",
  "email": "er.ayush336@gmail.com",
  "phone": "1234567890",
  "message": "Hello i am a full stack developer"
}