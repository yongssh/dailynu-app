
<img width="429" alt="Screenshot 2024-11-10 at 3 50 00 PM" src="https://github.com/user-attachments/assets/15de059a-eecd-4387-9f5c-519d0859d8ab">


https://github.com/user-attachments/assets/3ce48edf-23b2-4767-9ca2-264f0e093e86


# Documentation

Index.tsx is the home screen.
- NewsArticleList.tsx is the current component featured here. It requests from the WPGraphQL and returns the latest stories 

__layout.tsx contains the different tabs: 
 - currently, we have the "index"(Home), "search"(Search), "about"(Explore).

search.tsx lists the different Daily sections

## TODO: 
- get links to article photos & display
- figure out how to access contributor names
- cut off article text before contributor contact info



# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
