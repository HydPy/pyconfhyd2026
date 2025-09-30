# Website for [PyConf Hyderabad 2025](http://2025.pyconfhyd.org/)

This is the repo for PyConf Hyderabad 2025's website. The 5th edition of the regional Python conference in India, taking place in the vibrant city of Hyderabad.

## Local Development / Setup Instructions

### Install Node.js and Package Manager

Before you start, ensure you have Node.js and a package manager installed on your machine. Follow these steps:

1. **Download Node.js**:

   - Visit the [Node.js official website](https://nodejs.org/).
   - Download the v20.18.0 version. This was the latest LTS version when the project was created.
   - Follow the installation instructions provided on the website.

2. **Verify Installation**:

   - Open your terminal or command prompt.
   - Run the following command to check if Node.js is installed:
     ```bash
     node -v
     ```
   - You should see the version number of Node.js.

3. **Install a Package Manager**:

   - Node.js comes with npm (Node Package Manager) by default. To check if npm is installed, run:
     ```bash
     npm -v
     ```
   - Alternatively, you can use other package managers like Yarn or pnpm.

4. **Run the Development Server**:

   - Once Node.js and a package manager are installed, you can start the development server:

     ```bash
     npm run dev
     # or
     yarn dev
     # or
     pnpm dev
     ```

   - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Contributing

Thank you for your interest in contributing to the PyConf Hyderabad 2025 website! This document will guide you on how to contribute effectively and collaboratively to ensure a smooth development process.

### Introduction

This project is a fork of [pyconfhyd2025](https://github.com/HydPy/pyconfhyd2025), initially developed as a **modular conference website** featuring reusable components. To learn more, refer to the [introduction section of pyconfhyd2025](https://github.com/HydPy/pyconfhyd2025?tab=readme-ov-file#introduction).

A feature flag configuration has been introduced, enabling a gradual rollout of features. Check out the [PyConf 2026 setup PR](https://github.com/HydPy/pyconfhyd2026/pull/1) to see how changes can be made when setting up the conference website.

This year's focus is on improving the template while seamlessly integrating it with [HydPy's website](https://www.hydpy.org/) by redirecting selected pages to the main site.

### How to Contribute

We welcome all contributions—bug fixes, feature implementations, or documentation updates.

#### Steps to Contribute

1. **Fork the Repository**: Create a personal copy of the repository.
2. **Clone and Branch**: Clone your fork locally and create a new branch for your changes.
3. **Make Changes**: Ensure your updates are clear, consistent, and align with the goals of the project.
4. **Submit a Pull Request (PR)**: Push your branch and open a PR. Complete all checks in the provided [PR Template](.github/pull_request_template.md).
