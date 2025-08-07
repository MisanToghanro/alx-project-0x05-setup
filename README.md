# alx-project-0x05-setup

🧠 HookMastery: Unleashing the Power of Hooks

A modern AI-powered image generation web application built with Next.js, TypeScript, Tailwind CSS, and the GPT-4 Image Generation API. Users can input text prompts to generate stunning images using GPT-4, with state management and custom hooks handling logic behind the scenes.


---

🚀 Project Overview

This app allows users to:

Generate images using GPT-4 via a text prompt

Preview generated images

Maintain a gallery of previously generated images


It implements best practices in React, custom hooks, API integration, and clean UI development using Tailwind CSS.


---

🎯 Learning Objectives

By building this project, you will learn to:

Use React state management with useState

Build and apply custom hooks (useFetchData)

Securely handle API keys using environment variables

Set up and call server-side API routes in Next.js

Build reusable, type-safe components with TypeScript

Handle loading states and asynchronous operations in React

Create responsive UIs using Tailwind CSS

Organize components and hooks following best practices



---

🧰 Tech Stack

Framework: Next.js 13+

Language: TypeScript

Styling: Tailwind CSS

API: GPT-4 Image Generation (via RapidAPI)

State Management: React Hooks

Runtime: Node.js 14+



---

🔑 Key Features

✅ Image Generation

User inputs a text prompt

App fetches image from GPT-4 API

Displays image with corresponding prompt


✅ State Management

Track loading state, current image, and image history

Reuse logic through custom hooks


✅ Responsive UI

Built with Tailwind CSS

Works on mobile, tablet, and desktop screens


✅ Security

API key stored in .env.local

Only accessible server-side through API route



---

🧠 Custom Hook: useFetchData

The useFetchData<T, R>() hook:

Handles loading and error states

Makes POST requests to any endpoint

Automatically tracks and stores image history



---

🔐 Environment Setup

1. Duplicate the project (if needed) as instructed.


2. Create .env.local in the root:



NEXT_PUBLIC_GPT_API_KEY="your-api-key-here"

3. Add .env.local to .gitignore to prevent accidental commits.




---

🖼 UI Preview

Home Page with prompt input

Loading indicator while image is being generated

Gallery view of all previously generated images


