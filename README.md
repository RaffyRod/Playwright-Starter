# Playwright Automation Project (OrangeHRm demo page)

The following project is an Automation framework designed using Cypress and Javascript best practices applied for the following modules using a test plan:

| Module           |Number of Scenarios  | Status                                                                |
| ----------------- |------------ |------------------------------------------------------------------ |
| Login |5 | :white_check_mark: |
| User profile |5 | :white_check_mark: |
| Dashboard |5 | :white_check_mark: |
| Side menu |5 | :watch: |
| Admin page |13 | :watch: |

## Test Cases automated on each module
#### Login Page

- Login successful.
- Click on Login with empty fields.
- Login with invalid username and password.
- Login with just email typed.
- Login with just password typed.

#### User profile section

- Click on About.
- Click on Support.
- Click on Change password.
- Click on Logout.
- Close user profile section by clicking somewhere else.

#### Dashboard page

- Check Time at Work section.
- Check My Actions section.
- Check Quick Launch section.
- Check Employees on Leave Today section.
- Check Employee Distribution by Sub Unit section.
- Check Employee Distribution by Location section.

#### Side menu Test cases

- Collide side menu.
- Expand side menu.
- Perform search using the search bar.
- Visit all side menu pages.
- Click on OrangeHRM icon.

#### Admin page

- Expand/Collide System Users section.
- Search user by username.
- Search user by User Role.
- Search user by Employee Name.
- Search user by Status.
- Reset user search.
- Delete user.
- Edit user.
- Display number of users.
- Select all users.
- Delete selected users.
- Use filer by Ascending on Users table.
- Use filer by Descending on Users table.

## Tech Stack

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
[![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)](https://circleci.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/about/)
[![Playwright](https://img.shields.io/badge/-Playwright-orange)](https://playwright.dev/)
[![Prettier](https://img.shields.io/badge/-Prettier-ff69b4)](https://github.com/prettier/prettier)

## Important

- After pushing changes to the repo the CI will run and  finish providing results on the following link: https://app.circleci.com/pipelines/github/RaffyRod/Playwright-Starter

- SonarCloud code review information can be found at: https://sonarcloud.io/summary/overall?id=RaffyRod_Playwright-Starter
