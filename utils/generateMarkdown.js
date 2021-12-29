// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license.license) {
    return ``;
  };

  let txtReturn = ``;

  license.license.forEach(data => {
    if (data === 'IBM') {
      txtReturn += `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)   `
    }
    else if (data === 'ISC') {
      txtReturn += `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)   `
    }
    else if (data === 'MIT') {
      txtReturn += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   `
    }
    else if (data === 'Boost') {
      txtReturn += `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)   `
    }
  });

  return txtReturn;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (!license.license) {
    return ``;
  };

  let txtReturn = `### Licenses Links

`;

  license.license.forEach(data => {
    if (data === 'IBM') {
      txtReturn += `- [IBM](https://opensource.org/licenses/IPL-1.0)
      
`
    }
    else if (data === 'ISC') {
      txtReturn += `- [ISC](https://opensource.org/licenses/ISC)
      
`
    }
    else if (data === 'MIT') {
      txtReturn += `- [MIT](https://opensource.org/licenses/MIT)
      
`
    }
    else if (data === 'Boost') {
      txtReturn += `- [Boost](https://www.boost.org/LICENSE_1_0.txt)
      
`
    }
  });

  return txtReturn;
};

// TODO: Create a function to generate markdown for README
const generateUser = userText => {
  if (!userText) {
    return '';
  };

  return `## About the dev(s)
  ---

  - ${userText.name}

  ${userText.about}

  ### Contact Info

  Email : ${userText.email}

  [GitHub](https://github.com/${userText.username})
  `
};

const generateDependecies = dependeciesText => {
  if(!dependeciesText.dependecies) {
    return '      npm install';
  };

  return `      npm install ${dependeciesText.dependecies}`
};

const generateLang = langText => {
  let txtReturn = ``;
  langText.lang.forEach(data => txtReturn += `- ${data}

  `);

  return txtReturn;
};

const generateLink = linkText => {
  if (!linkText.username) {
    return ``;
  }

  return `${linkText.username}`
};

module.exports = templateData => {
  const { project, ...user } = templateData;

  return `${renderLicenseBadge(project)}
  ---

  # ${project.projectName}

  ${generateUser(user)}

  ### Table of Contents
  
  1. [Project details](#project-description)
  2. [Dependencies](#dependencies)
  3. [Links](#links)
  4. [Licenses](#license-links)
  

  ## Project Description
  ---

  ${project.desc}

  ### Dependecies

  ${generateDependecies(project)}

  ### Languages Used:

  ${generateLang(project)}

  ### Links:

  [GitHub Repo](https://github.com/${generateLink(user)}/${project.projectName})

  [Project Website](https://${generateLink(user)}.github.io/${project.projectName})

  ${renderLicenseLink(project)}

`;
};
