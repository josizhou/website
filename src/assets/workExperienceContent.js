import favicon from './favicon.png';
import invokeLogo from './invokeLogo.svg';
import kinaxisLogo from './kinaxisLogo.svg';

const workExperienceContent = [
    {
        title: "Associate Software Developer at Konrad Group",
        content: "At Konrad I supported our clients through their technical transformation projects by working closely with client and internal developers, project managers, and QA.",
        bulletPoints: [
            'Supported the development and release of a new loyalty program for a major airline which saw 6 Million users in the first 24 hours',
            'Focused on delivering a smooth user experience by completing 156 bug tickets over a 6-month engagement and providing the final QA sign off before release',
            'Leveraged Vite and React to build a classification system with pagination, search, filtering, and components from scratch',
            'Developed applications with a focus on accessibility and responsiveness to media sizes using SASS and CSS Grid',
            'Introduced testing to a client project and brought test coverage from 0 to 80% by writing 204 unit tests in 1 month - wrote Jest unit tests, API microservice integration tests, and Express route tests with SuperTest'
        ],
        imageSrc: favicon,
        imageAlt: "Konrad Group Logo",
    },
    {
        title: "Web Developer Co-op at Invoke Media",
        bulletPoints: [
            'Reduced live stream switching latency by 60% by restructuring components using JavaScript and React',
            'Identified state management issues in 2 key component trees and outlined a major refactor to unblock product roadmap',
            'Implemented interim fix and reduced tech debt by using Context to resolve 3 bugs and build 2 features by term deadline',
            'Reduced video connection time by 10s using GraphQL, Apollo Client, DynamoDB, and Pulumi infrastructure',
            'Debugged web application using Chrome and Safari browser developer tools to ensure cross-browser compatibility',
            'Updated web styling and layout using Tailwind CSS and React Native for mobile app experience'
        ],
        imageSrc: invokeLogo,
        imageAlt: 'Invoke Media Logo',
    },
    {
        title: "Co-op Developer at Kinaxis",
        bulletPoints: [
            'Developed web application features using asynchronous programming with Typescript, React, C#, and SQL',
            'Created standardized reusable and screen reader accessible User Interface components in a Storybook component library',
            'Completed full feature development processes for 6 shortcuts, wrote acceptance criteria and estimated complexity',
            'Resolved 20+ UI bugs and ensured 90% testing coverage for new features by writing Jest unit tests',
        ],
        imageSrc: kinaxisLogo,
        imageAlt: 'Kinaxis Logo',
    },
]

export default workExperienceContent;