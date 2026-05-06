# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name: Michael Awad (I worked alone)

Answers to Part 3: **Check your understanding**
1. I would not only use a unit test to test the full “message” feature, because sending a message involves multiple parts working together. A user types a message, clicks send, the app sends it to another user, and the other user receives it. Since this involves user interaction, the frontend, possibly a backend/server, and message delivery, an integration test or end-to-end test would be better for testing the full feature. Unit tests could still be useful for smaller helper functions inside the feature.
2. I would use a unit test to test the “max message length” feature, because it is a small, specific rule that can be tested in isolation. For example, I could test that a message with 80 characters is accepted, a message with 81 characters is rejected or blocked, and shorter messages are allowed. Since this feature is mostly about checking one condition, it is a good fit for unit testing.