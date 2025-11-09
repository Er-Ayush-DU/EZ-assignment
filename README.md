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
[Open in Postman](https://github.com/Er-Ayush-DU/EZ-assignment/blob/main/Postman/EZ_Labs_Contact_API.postman_collection.json)

**Import in Postman (Paste this in Postman → Import → Link)**

---


**PDF Documentation**:  
[Download PDF](https://github.com/Er-Ayush-DU/EZ-assignment/blob/main/Postman/Contact_API_Documentation.pdf)

---

## Run Locally

```bash
git clone https://github.com/Er-Ayush-DU/EZ-assignment.git
cd EZ-assignment
npm install
npm run dev