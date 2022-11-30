# REACT
React study


***
## Init

##### react-study : project name ->> can be change.

1. Create the react app

```yarn create react-app react-study```

2. Move to new folder

```cd .\react-study\ ```

3. start react app in folder

```yarn start```

Result
![image](https://user-images.githubusercontent.com/68217111/204902528-876f36b8-42a0-4acb-b44f-b108fa87cf0c.png)

***
## What's in my folder?
![image](https://user-images.githubusercontent.com/68217111/204903335-44d43b0d-cea1-4742-be37-d5403319949b.png)

- node_modules : module such as npm, yarn etc

- public : Default files ; No touch

- src : Have to coding in here

  - App.js : combine all html components

  - index.js : call component from App.js and push the code into react 

***

## Hello world!

1. Generate jsx file in src folder

![image](https://user-images.githubusercontent.com/68217111/204903795-8924599d-ab62-4c20-bef0-5cc08e053cb4.png)


2. Hello world!

![image](https://user-images.githubusercontent.com/68217111/204904488-bd16e3be-fa4d-466c-83c9-f3810240fd3c.png)

3. Change the App.js with our code

![image](https://user-images.githubusercontent.com/68217111/204905755-e4166de2-df1d-4193-b2a5-2c1ba824bfda.png)

4. Save all file and check the react app (browser)

![image](https://user-images.githubusercontent.com/68217111/204905871-5a8c05ea-0fb6-4487-9e66-9fa3d3f8f8c6.png)

***

## Extension for REACT

1. React developer tools google extension

![image](https://user-images.githubusercontent.com/68217111/204906172-3e94ef37-3417-41fa-8fd6-d14a99c3b191.png)

2. React code snippets (VScode extension)

![image](https://user-images.githubusercontent.com/68217111/204926796-19468034-fe1a-4c92-b3fd-cbe79373659f.png)

- rfc : react functional component shortcut


3. Auto Import  (VScode extension)

![image](https://user-images.githubusercontent.com/68217111/204927091-d7d9a1d1-d39c-4ce1-8932-506fefe93502.png)

- automatically import the library, module, framework

***
## What does BABEL do?

![image](https://user-images.githubusercontent.com/68217111/204928117-dd1c6ebf-85aa-4e52-a97a-cb55b9a50dd0.png)

- JSX = JS(grammer) + XML(carry the data)
- BABEL convert JSX code to JS code 

***

## Rule for React

1. Must warp with one component(function)

![image](https://user-images.githubusercontent.com/68217111/204928923-25804150-0ad7-41cb-979f-ad87f56d4dc2.png)
 - In return, all of xml components must wrap with one component
 
 - Thus, You only can return one tag in JSX
 
 - <frangment> tag will not render in html -> shortcut : <>, </>

2. Using brackets for js expression

![image](https://user-images.githubusercontent.com/68217111/204929888-8dc7b2a4-c9d5-4d8f-bede-48fca9bada35.png)

3. Condition -> You cannot use JS if else condition in jsx

You need to use like this way,

#### using return in outside of the return statement

![image](https://user-images.githubusercontent.com/68217111/204930048-69f695a1-551c-49ea-bca1-3d916b170c06.png)

#### using &&, || in return 

![image](https://user-images.githubusercontent.com/68217111/204932733-4329a810-eb56-4729-9be4-ff6a75724e84.png)

- && : If the left is True, return the right component
- || : If the left is False, return the right component

#### switch case expression

![image](https://user-images.githubusercontent.com/68217111/204932831-44a709d6-f582-4e6c-825d-aad3a473b05f.png)

#### ternary operator -> You can use JS grammer in this case

![image](https://user-images.githubusercontent.com/68217111/204932926-fa25c93c-e519-43f0-b5d4-8482c3d602c4.png)




