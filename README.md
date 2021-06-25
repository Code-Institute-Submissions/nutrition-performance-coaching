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

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

### Validation Testing
You should try to ensure you code is valid and follows proper indentation.  In this section you should write up any websites you used to validate your code. As your projects becomes more complex these tools may change.

- [CSS Validator](https://jigsaw.w3.org/css-validator/) Note, any error associated with root: color variables were ignored.
- [HTML Validator](https://validator.w3.org/)
- [JSHINT Service](https://jshint.com/) 

### Cross Browser and Cross Device Testing
Create a table that lists out what devices, browsers, and operating system you tested your application on and a brief description of why you chose the mixture you did. The point is to prove that you looked at the site across various browsers, operating systems, and viewport breakpoints.

| TOOL / Device                 | BROWSER     | OS         | SCREEN WIDTH  |
|-------------------------------|-------------|------------|---------------|
| real phone: motog6            | chrome      | android    | XS 360 x 640  |
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

### Automated Testing
Whenever it is feasible, automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

If you did not run automating testing. State why you chose not to.

### Manual Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
    
Here is a [Manual Testing Template](https://docs.google.com/spreadsheets/d/189VpSeEG9oevSRhvb2WZl8zCk9L3s2iWQyrJ_1jjAGQ/edit?usp=sharing) that you can use as a starting point to keep track of your testing efforts. Make a copy of it in your own account and update as needed to reflect the browsers you are testing and features.  

It's ok to spot check specific functionality across devices and browsers but each page should be viewed as a whole for each device/browser combo at least once.

A quick way to check if items are exceeding the screen width of a project is to run this javascript in the console for various screen emulations:

```
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll('*'),function(el){if(el.offsetWidth > docWidth){console.log(el);}});
```

### Lighthouse Audits 
You should run your deployed website pages through lighthouse's audit to check performance, accessibility, best practices and SEO scores. You should aim to get 85 or higher score. https://web.dev/measure/ If you have lower scores, read the report and follow the links to address the flagged issues. You can run this tool from Chrome Dev Tools too against your local machine, but the performance will the worst (I personally ignore my performance results unless it's deployed code. I hope for > 60 on that mark, but > 85 on the other 3)

### Defect Tracking

You should mention  any  bugs or problems you discovered during your testing, even if you haven't addressed them yet.

Here is a [Defect Tracking Template](https://docs.google.com/spreadsheets/d/1tYB4X4wTCNEW_Y1no3hsGbclh2bLokl_I5Ev3s5EuJA/edit?usp=sharing) you use as a starting point to track defects. Make a copy of the sheet to your own account and update the Features sheet to match your project. 


### Defects of Note
Some defects are more pesky than others. Highlight 3-5 of the bugs that drove you the most nuts and how you finally ended up resolving them.


### Outstanding Defects
It's ok to not resolve all the defects you found. If you know of something that isn't quite right, list it out and explain why you chose not to resolve it.


## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages).

In particular, you should provide all details of the differences between the deployed version and the development version, if any.

Remember to use proper markdown for commands and enumerated steps.

### Deploy Locally

Write out the steps you take starting from cloning the repository in github or clicking a gitpod button to run your code locally. Test it out and make sure it works. This can be running from your IDE of choice like VSCode or PyCharm or GitPod.

You may want to re-watch the [initial deployment in gitpod video](https://learn.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/dcd449bd41a446f49df3268f91dd06fc/072c95175f1148438de9d82e7a756ee1/?child=first) when writing up this section.

### Deploy To GitHub Pages

Write out steps you would take and test them to deploy your code to GitHub Pages.

## Credits

To avoid plagiarism amd copyright infringement, you should mention any other projects, stackoverflow, videos, blogs, etc that you used to gather imagery or ideas for your code even if you used it as a starting point and modified things. Giving credit to other people's efforts and ideas that saved you time acknowledges the hard work others did. 

### Content

Use bullet points to list out sites you copied text from and cross-reference where those show up on your site

### Media

Make a list of sites you used images from. If you used several sites try to match up each image to the correct site. This includes attribution for icons if they came from font awesome or other sites, give them credit.

### Acknowledgments

This is the section where you refer to code examples, mentors, blogs, stack overflow answers and videos that helped you accomplish your end project. Even if it's an idea that you updated you should note the site and why it was important to your completed project.

If you used a CodeInstitute Example project as a starting point. Make note of that here.