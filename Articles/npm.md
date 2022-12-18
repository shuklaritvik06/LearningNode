## Important NPM Commands


```
*BASIC*

npm i moduleName  // Install
npm remove moduleName or npm uninstall moduleName  // Uninstall or remove the package
npm root -g // shows the directory in which global modules are stored
npm i -g moduleName or  npm i --location=global moduleName // install package globally, second one is preferred to use now
npm i -g npm@latest // upgrade npm
npm i --save-dev moduleName or npm i -D moduleName
npm update moduleName // update a module
npm whoami  // prints username of your npm registry account
npm bin // Gives the path of executables installation directory  (.bin directory in node_modules dir)
npm bugs package // Opens a browser (seedhi baat issues kholdega github pe)
npm start  // Run a start script specified in the package.json file
npm stop // runs a script specified in the package.json file
npm test // runs a test script in package.json file
npm shrinkwrap  // Renames the package-lock.json to npm-shrinkwrap.json and it takes precedence over other package-lock.json
npm pkg set scripts.scriptName="COMMAND"  // Set the script and its command from the cli
npm s|search|se packageName    // prints the packages and its info matching 
npm rb|rebuild  // When we have a new node installed then
npm prune packageName  // Prune Not in the package json file
npm outdated  // lists the outdated dependencies
npm install-test  // runs the npm test just after npm install
npm deprecate <pkg>@"version" <message>   // Deprecate a version of a package
npm dedupe   // This will search the package tree and will optimize by moving the package up the tree where can be shared among more


*PACKAGE ACCESS*

npm access public packageName
npm access restricted packageName
npm access grant read-only|read-write team packageName
npm access revoke read-only|read-write team packageName
npm access 2fa-required packageName  // Anyone publishing would need 2fa
npm access ls-packages user|team  // gives an object with the packages name and perms which user or team have access to
npm access ls-collaborators packageName // gives an object with the collabs name and perms which user or team have access to
npm ci  // Same like npm i but it is necessary to have lock file here, same data in both lock and package.json about packages


*FIX PACKAGES*

npm audit fix   // Scan and fix packages vulnerabilities
npm audit fix --package-lock-only  // Only update package lock not the modules
npm audit fix --only=prod  // Only audit the dependencies
npm audit fix --dry-run --json  // Dry run and give the json containing any vulnerability, level, number, what package etc
npm audit --audit-level=moderate // Only audit moderate level vulnerability


*TEAM COMMANDS*

npm team create @org:teamName   // Create a team under an org (Team Prime under org Amazon)
npm team destroy @org:teamName   // Delete a team under an org 
npm team add @org:teamName username  // Add a user to the team
npm team rm @org:teamName username  // remove user
npm team ls @org:teamName   // list all users in the team
npm team ls @org  // List all teams in an org

*PACKAGE INFO*

npm view packageName  // prints an Info about the given Package
npm view packageName dependencies  // prints the dependencies in json
npm view packageName repository.url  // prints github repo url
npm view packageName contributors.email  // prints the contributors email
npm view packageName contributors.name  // prints the name of the contributors of a package
npm view packageName versions  // Gives an array of the versions of the package


*AUTH TOKENS*

npm token list
npm token revoke tokenID
npm token create options name

*PROFILE*

npm profile enable-2fa auth-only|auth-and-writes
npm profile disable-2fa
npm profile get name|email|two-factor-auth|fullname
npm profile set name|email|two-factor-auth|fullname value

*OWNER*

npm owner add USER package
npm owner rm USER package
npm owner ls USER package

*ORGANIZATION*

npm org set orgname username [developer | admin | owner]   // Add user to org with the position
npm org rm orgname username  // Remove user from org
npm org ls orgname [<username>]  // list all users  or see what role a user has in org if used username too

*PACKAGE DIST TAGS*

npm dist-tag add <pkg>@<version> [<tag>]  // This will reference the version number to the provided tag Name
npm dist-tag rm <pkg> <tag>  // Remove the tag
npm dist-tag ls [<pkg>]  // list all version tags

*CONFIG*

npm config set key=value
npm config get key
npm config delete key
npm config list
npm config edit

*CACHE*

npm cache add <tarball file>
npm cache add <folder>
npm cache add <tarball url>
npm cache add <git url>
npm cache add <name>@<version>
npm cache clean [<key>]
npm cache ls [<name>@<version>]
npm cache verify

```

## Semantic Versioning

Semantic versioning is a standard to version a package with MAJOR.MINOR.PATCH.

- MAJOR is when there is a change which could break my code maybe package changed the implementation of the method which i was using.
- MINOR is when there is an addition of a feature , and it will not effect the code I have written.
- PATCH is when there is an bug fix of the new feature added to the package

- ^ => MAJOR same, MINOR & PATCH as much as you can (default)
- ~ => MAJOR , MINOR same, PATCH as much as you can 
- Nothing => Exact

For production environment make sure to set `NODE_ENV="production"`

## NPM Scripts

- `prepublish`
- `postpublish`
- `preinstall`
- `postinstall`
- `start`
- `dev`
- `prerestart`
- `restart`
- `postrestart`
- `prestop`
- `poststop`
