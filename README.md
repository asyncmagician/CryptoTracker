# CryptoTracker

CryptoTracker is a simple web application that allows users to track and manage their cryptocurrency holdings.

## Releases
- v1.0: CRUD **(RELEASED)**
- v1.1: Authentication **(RELEASED)**

## Getting Started
To get started with CryptoTracker, follow these steps:

### Clone the repository

```
git clone https://github.com/csswasthebestcs/CryptoTracker.git
```

### Install dependencies

```
cd CryptoTracker
npm install
node index.js
``` 
CryptoTracker should now be running at http://localhost:3000

### Database
Before you can successfully run the application, you need to configure the database connection. In the `./config.js` file, you will find the following code:
```
const config = {
    mongoDB: "mongodb://<YOUR_USER>:<YOUR_PASSWORD>@localhost:27017/<YOUR_DB>?authSource=<YOUR_DB>"
};
```

This configuration is responsible for connecting the application to your MongoDB database. You might need to modify the mongoDB value to match your own database setup.


### Fetch the cryptocurrencies to the database

Navigate to http://localhost:3000/api/update

## Contributing
If you'd like to contribute to CryptoTracker, feel free to submit a pull request. All contributions are welcome.
Do not forget to sign your commits with GPG key, otherwise it won't be closed and merged.

## Security
For security reasons, all of my commits are signed using GPG keys. This ensures the authenticity and integrity of my codebase, as well as protects against unauthorized changes to my repository. I encourage all contributors to sign their commits with a trusted GPG key to help maintain the security of our project. 
If you are unfamiliar with GPG keys or need assistance in setting up your key, please refer to the documentation provided by your operating system or the GPG website.
## Technologies 
- Node.js
- Express.js
- MongoDB
- Mongoose
- CoinGecko API
- HTML
- CSS
- JavaScript

## About me
My name is Antony Bartolomucci, a 25-year-old software engineering student passionate about technology and programming. I have dedicated countless hours to learning and refining my skills in web development since I have started in September 2021, also in data management, and user experience design. 

My journey at the university has led me to start building this application.

I am always eager to learn new technologies and develop innovative projects. As a software engineering student, I am constantly looking for opportunities to expand my knowledge and create meaningful applications that can make a difference in people's lives.

If you have any questions, suggestions, or feedback about this project, please don't hesitate to reach out to me. I appreciate any constructive criticism and am open to collaborating with like-minded individuals in the software development community.

You can follow my progress, check out my other projects, or get in touch with me through my [GitHub](http://www.github.com/csswasthebestcs) or [LinkedIn](https://www.linkedin.com/in/bartolomucci/) profiles.