## FireBase Rules

`match`  statements, which identify documents in your database, and `allow` expressions, which control access to those documents.  `{documents=**}` means any document in the db. `match /databases/{database}/documents`  means match any database in the dbs of the app. `{ }` is the wildcard which means any.
We can set the access perms also using the `allow` expression and give the conditions like

```
allow read: if condition;
allow write: if condition;
```

Access perms according to the type of request to the store by the user

```
// Applies to single document read requests

allow get: if <condition>;

// Applies to queries and collection read requests

allow list: if <condition>;

// Applies to writes to nonexistent documents

allow create: if <condition>;

// Applies to writes to existing documents

allow update: if <condition>;

// Applies to delete operations

allow delete: if <condition>;

```

Set rules for Heirarchial data

```
    match /cities/{city} {
      allow read, write: if <condition>;

        // Explicitly define rules for the 'landmarks' subcollection
        match /landmarks/{landmark} {
          allow read, write: if <condition>;
        }
    }

```
```
// Matches any document in the cities collection as well as any document
// in a subcollection.

match /cities/{document=**}
```

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}

```

Some cool conditions we can use:

- if resource.data.visibility == 'public';
- if request.auth != null && request.auth.uid == userId;
- if request.auth != null && exists(/databases/$(database)/documents/users/$(request.auth.uid))
- if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true
