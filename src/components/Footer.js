import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
    // Define the email address for the 'mailto' link
    const email = 'juanx1985@icloud.com';

    return (
        <div className='footer'>
            {/* Social media links */}
            <div className='socialMedia'>
                {/* Email link */}
                <a href={`mailto:${email}`}>
                    <EmailIcon />
                </a>
                {/* GitHub link */}
                <a href="https://github.com/juanx198522?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
                {/* LinkedIn link */}
                <a href="https://www.linkedin.com/in/juan-garcia-549277272" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
            </div>
            {/* Copyright notice */}
            <p> &copy; 2023 Juan Cruz Garcia </p>
        </div>
    );
}

export default Footer;
