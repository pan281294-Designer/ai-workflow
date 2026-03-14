---
description: How to deploy the application to GitHub
---

1. When the user asks to "deploy":
2. Run `git add .` to stage all changes.
3. Run `git commit -m "Auto-deploy update"` to commit the changes.
4. Run `git push origin main`
// turbo-all
5. Once the push completes, reply to the user with a confirmation that the code has been successfully pushed to GitHub and is ready to deploy on Vercel.
