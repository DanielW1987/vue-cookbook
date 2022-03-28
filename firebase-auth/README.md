# Firebase Authentication Demo

- <https://www.youtube.com/watch?v=uqpM7WVTKI4&list=WL&index=45&t=1330s>
- <https://www.youtube.com/watch?v=ULFAgn2ITko>
- <https://www.youtube.com/watch?v=MdZCRP2uKdE&list=WL&index=51&t=33s>
- <https://www.youtube.com/watch?v=MoBYBc1dkhE&list=WL&index=17>

## Prerequisites

Put your Firebase API Key in file `.env.development`.

## API keys for Firebase are different from typical API keys

Unlike how API keys are typically used, API keys for Firebase services are not used to control access to backend resources; that can only be done with Firebase Security Rules (to control which users can access resources) and App Check (to control which apps can access resources).

Usually, you need to fastidiously guard API keys (for example, by using a vault service or setting the keys as environment variables); however, API keys for Firebase services are ok to include in code or checked-in config files.

API keys are used to identify your Firebase project when interacting with Firebase/Google services. Specifically, they're used to associate API requests with your project for quota and billing. They're also useful for accessing public data.

If you use password-based Firebase Authentication and someone gets hold of your API key, they will not be able to access any of your Firebase project's database or Cloud Storage data as long as this data is protected by Firebase Security Rules. They could, however, use your API key to access Firebase's authentication endpoints and make authentication requests against your project.

To mitigate against the possibility that someone might misuse an API key to attempt a brute force attack, you can tighten the default quota of the identitytoolkit.googleapis.com endpoints to reflect the normal traffic expectations of your app. Be aware that if you tighten this quota and your app suddenly gains users, you might get sign-in errors until you increase the quota.

Resources:
- <https://firebase.google.com/docs/projects/api-keys>
- <https://stackoverflow.com/questions/54525554/firebase-browser-key-api-restrictions?rq=1>

Create new API Key: <https://console.cloud.google.com/apis/credentials>
