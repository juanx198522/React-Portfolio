# React Portfolio

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
- [Design](#design)
- [Deployed Application Link](#deployed-application-link)
- [Contributing](#contributing)
- [Questions](#questions)

## Description
This React Portfolio is designed to showcase my skills and projects as a web developer. It serves as a platform to share my work, collaborate with other developers, and make a strong impression on potential employers. Using the latest technologies and best practices in web development, this portfolio will set me apart from the competition.

## User Story
As an employer looking for candidates with experience in building single-page applications, I want to view a potential employee's deployed React portfolio of work samples. This will allow me to assess whether they are a good fit for an open position.

## Acceptance Criteria
- When the portfolio is loaded, it should present a page with a header, a content section, and a footer.
- The header should display the developer's name and navigation with titles corresponding to different sections of the portfolio.
- The navigation titles should include "About Me," "Portfolio," "Contact," and "Resume," with the current section title highlighted.
- Clicking on a navigation title should display the corresponding section below the navigation without reloading the page, and the title should remain highlighted.
- When the portfolio is loaded for the first time, the "About Me" title and section should be selected by default.
- In the "About Me" section, there should be a recent photo or avatar of the developer and a short bio.
- In the "Portfolio" section, there should be titled images of six of the developer's applications, with links to both the deployed applications and the corresponding GitHub repositories.
- The "Contact" section should include a contact form with fields for name, email address, and a message. Notifications should appear when required fields are not filled or when an invalid email address is entered.
- The "Resume" section should contain a link to download the developer's resume and a list of their proficiencies.
- The footer should provide text or icon links to the developer's GitHub and LinkedIn profiles, as well as their profile on a third platform (e.g., Stack Overflow or Twitter).

## Mock-Up
![About](../React-Portfolio/src/assets/about.png)
![Portfolio](../React-Portfolio/src/assets/portfolio.png)
![Contact](../React-Portfolio/src/assets/contact.png)
![Resume](../React-Portfolio/src/assets/resume.png)

## Getting Started
To build my portfolio, I used `create-react-app` and created the following components:

- Header: A single header component that appears on multiple pages.
- Navigation: A single navigation component within the header to conditionally render different sections.
- Project: A single project component that will be used multiple times in the Portfolio section. For each project featured in your portfolio, include:
    - An image of the deployed application (screenshot or animated GIF).
    - The project's title.
    - A link to the deployed application.
    - A link to the corresponding GitHub repository.
- Footer: A single footer component that appears on multiple pages.

I don't need backend functionality for the contact form at this stage. 

## Design
To create a polished design for my portfolio, I follow these guidelines:
- Use mobile-first design principles.
- Choose a unique color palette that distinguishes my site.
- Ensure that font sizes are legible and colors are easy on the eyes.
- Consider using animations and React component libraries to showcase my skills.

## Deployed Application Link
[https://juanx198522.github.io/React-Portfolio/](https://juanx198522.github.io/React-Portfolio/)

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit an issue or a pull request.

## Questions
If you have any questions, feel free to reach out to the project maintainers:

- Maintainer Name: Juan Cruz Garcia
- GitHub: [https://github.com/juanx198522](https://github.com/juanx198522)