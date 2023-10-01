import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a rel="noreferrer" role="button" target="_blank" aria-label="Link taking to github" href="https://github.com/joelvinaykumar"><BsGithub /></a>
    </div>
    <div>
      <a rel="noreferrer" role="button" target="_blank" aria-label="Link taking to linkedin" href="https://linkedin.com/in/joelvinaykumar"><BsLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
