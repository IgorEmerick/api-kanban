# Api Kanban

## User features

### Create user
- [x] Request name, email and password.
- [x] Should not create users with invalid emails.
- [x] Should not create users with invalid names.
- [x] Should not create users with invalid passwords.
- [x] Should not create two users with same email.

### Authenticate user
- [x] Request email and password.
- [x] Should not authenticate users with invalid emails.
- [x] Should not authenticate users with invalid passwords.
- [x] Should not authenticate users that does not exists.
- [x] Should not authenticate users with wrong passwords.

## Project features

### Create project
- [ ] Request authentication.
- [ ] Request project name.
- [ ] Request admin.
- [ ] Request at least one admin.
- [ ] Request at least one member.

### List projects
- [ ] Request authentication.
- [ ] Authenticated user should list only projects where he is a member.

### Update project name
- [ ] Request authentication.
- [ ] The user requesting update should be a project admin.

### Adding project members
- [ ] Request authentication.
- [ ] Request member emails.
- [ ] The user requesting update should be a project admin.

### Removind project members
- [ ] Request authentication.
- [ ] Request member emails.
- [ ] The user requesting update should be a project admin.

### Delete project
- [ ] Request authentication.
- [ ] Request project id.
- [ ] The user requesting to delete shoud be a project admin.

## Stage features

### Create stage
- [ ] Request authentication.
- [ ] Request stage name.
- [ ] Request stage project.

### Delete stage
- [ ] Request authentication.
- [ ] Request stage id.
- [ ] Should cascade delete stage cards.

## Card features

### Create card
- [ ] Request authentication.
- [ ] Request card title.
- [ ] Should be possible add a card description.
- [ ] Request card stage id.