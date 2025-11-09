# V Films — EZ Labs Assignment

**Live Website**: [https://ez-vfilms.vercel.app](https://ez-vfilms.vercel.app)  
**GitHub**: [https://github.com/Er-Ayush-DU/EZ-assignment](https://github.com/Er-Ayush-DU/EZ-assignment)  
**Deployed on**: Vercel

---

## Features Implemented

- **Pixel-perfect Figma design** (Mobile + Desktop)
- **Smooth scroll navigation** from header
- **Contact form** with:
  - Real-time validation (Yup)
  - API POST to `https://vernanbackend.ezlab.in/api/contact-us/`
  - "Form Submitted!" success message
- **Polaroid-style services** with detail pages
- **Highlight Reel**, **Team & Portfolio**, **About Us** sections


---

## Tech Stack

- **Next.js 14+** (App Router)
- **Tailwind CSS**
- **React Hook Form + Yup**
- **Axios**
- **TypeScript**

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


```

---

## Postman Collection — **Direct Import Link (100% Working)**

**Click to Import in Postman**:  
[Open in Postman](https://www.postman.com/collection-importer?collection-url=entityId%3D123456%26entityType%3Dcollection%26source%3Dgithub%26file%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FEr-Ayush-DU%2FEZ-assignment%2Frefs%2Fheads%2Fmain%2FPostman%2FEZ_Labs_Contact_API.postman_collection.json)