# NPC - Nutrition Performance Coaching
![amireponsive](https://github.com/slammer1870/nutrition-performance-coaching/blob/main/public/amiresponsiveNPC.png)

[Live website](https://nutrition-performance-coaching.vercel.app/)

## Author
Sam Mc Nally

## Project Overview
The purpose of this website is to allow users to book consultation calls via an input form on the landing page. Log in ith an account provided to them by the website's administrator and then purchase a product from the user's dashboard.

This website is designed as a starting point for an online nutrition coach to use for gathering leads and selling services.

*The login details are EMAIL: hello@sammcnally.dev PASSWORD: Password123

**The test payment card details are CARD NUMBER: 4242 4242 4242 4242 EXP DATE: 01/23 CCV: 123

## UX
The basic user experience is designed to have a clean and simple design with informative graphics on the landing page. Secure user authorisation and card payments. Email feedback from varius services on the site. The site is built to be fast and responsive. The site is rendered using Server Side Rendering for extremely fast performance and user navigation.


### Project Goals
The goal of this project is to provide a fully integrated service for lead capture and service payments.

#### User Goals

As a user I want to be:
> - Informed about how the service operates
> - Able to make secure card payments for services
> - Have a pleasant mobile and desktop experience
> - Receive email feedback when interacting with certain services


#### Developer Goals

As a developer I want to be able to integrate user authentication via Firebase and secure payments via Stripe Checkout. I want there to be backend error handling to inform me should any services fail.

#### Website Owner Goals

As a website owner I want to provide my client with a very smooth and intuitive experience on the site for both desktop and mobile.

### User Stories
As a user I want to be able to:

> - Register interest in becoming a client via form submission
> - Log in to a dashboard
> - Make secure card payments
> - Receive email feedback when interacting with certain services


### Design Choices
The site design is geared towards female athletes hence the background video of female athletes and subsequent graphics.

#### Colours

The colours user are designed to appeal to female athletes. I used lighter colours, included rounded edges to the UI elements. I want the feel of the site to be "light" and inviting.

#### Typography

The typography used is Helvetica. I feel that the purpose of typography in this site is mostly informative and generally Helvetica is a good design choice for said purposes.
#### Images

I used SVG graphics from undraw.co and a background video with clips I found on mixkit.co and edited together in Adobe Premiere Pro

#### Design Elements

> - Top menu (desktop navigation)
> - Sidebar menu (mobile navigation)
> - Footer
> - Features Component
> - Coach Information Component
> - Testimonial Component
> - Login Component
> - Consultation Booking Button with accompanying Modal and Contact Form
> - Product Component


#### Animations and Transitions
The animations used were from TailwindCSS with React Hooks to change and update the state of components to create the animation effect

#### Custom Javascript
This project is built using the Javascript library 'React' with a framework called 'NextJS'. React is a component based library and NextJS includes it's own NodeJS integration.

### Wireframes

I built a basic wireframe with Adobe XD to start, which designed the components used and then reused those components on subsequent pages and features.

![wireframes](https://github.com/slammer1870/nutrition-performance-coaching/blob/main/public/wireframeNPC.png)


### Features

- Landing page - The landing page is designed to inform the user about the service provided and allow a form submission to register interest in a consultaiton appointment
- Login page - The login page allows a user to log in with an account provided by the site's administrator
- Dashboard - The dashboard allows a user to pay for a service via the Stripe Checkout

## Technologies Used

- React Js - React is a component based Javascript library
- Next Js - Next Js is a framework for React which allows service side rendering and has it's own API integration
- Tailwind CSS - Tailwind is a utility first CSS framework

### Programing Languages
- [ReactJs](https://reactjs.org) The project uses **React Js**.
- [CSS](https://www.w3schools.com/w3css/default.asp) The project uses **CSS** to define DOM appearance. 
- [HTML](https://www.w3schools.com/html/default.asp) The project uses **HTML** to define DOM elements.
- [Markdown](https://www.markdownguide.org/) Documentation within the readme was generated using markdown

### Frameworks and Extensions
- Next Js - Next Js is a framework for React which allows service side rendering and has it's own API integration
- Tailwind CSS - Tailwind is a utility first CSS framework

### Fonts
- Helvetica is the default font used in TailwindCSS

### Tools
- Adobe XD - Adobe XD was used for the wireframing and site mockups
- Premiere Pro - Premiere Pro was used for editing the background video
- Github - Github was used for version control
- VS Code - The site was developed using VS Code

### APIs
- Sendgrid - Sendgird is the email client used for sending emails on the backend
- Stripe - Stripe Checkout is used for taking payments
- Firebase - Firebase is used for user authentication

## Testing

### Cross Browser and Cross Device Testing
Device testing was user via Chrome Dev Tools, Broswers tested were Chrome and Safari

| TOOL / Device                 | BROWSER     | OS         | SCREEN WIDTH  |
|-------------------------------|-------------|------------|---------------|
| real phone: motog4            | chrome      | android    | XS 360 x 640  |
| browser stack: iPhone5s       | safari      | iOs        | XS 320 x 568  |
| dev tools emulator: pixel 2   | firefox     | android    | SM 411 x 731  |
| browserstack: iPhone 10x      | Chrome      | iOs        | SM 375 x 812  |
| browserstack: nexus 7 - vert  | Chrome      | android    | M 600 x 960   |
| real tablet: ipad mini - vert | safari      | iOs        | M 768 x 1024  |
| browserstack: nexus 7 - horiz | firefox     | android    | LG 960 x 600  |
| chrome emulator: ipad - horiz | safari      | iOs        | LG 1024 x 768 |
| browserstack                  | Chrome      | windows    | XL 1920 x 946 |
| real computer: mac book pro   | safari 12.1 | Mohave     | XL 1400 x 766 |
| browserstack                  | IE Edge 88  | windows 10 | XL 1920 x 964 |


### Lighthouse Audits 
![lighthouse](https://github.com/slammer1870/nutrition-performance-coaching/blob/main/public/lighthouseNPC.png)



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Deploy Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits

- tailblock.cc - The footer and porduct element were bootstrapped form tailblocks components
- unsplash.com - Product photo came from unsplash
- mixkit.co - Video footage came from mixkit
- undraw.co - Icons came from undraw.co

- firebase auth - code for firebase auth was provided by firebase



### Acknowledgments

Thanks to my mentor Malia for her help!