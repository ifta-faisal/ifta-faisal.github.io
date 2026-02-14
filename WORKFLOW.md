# Website Update Workflow

## 1. Work on the `source` branch
You are currently on the `source` branch. This is where your code lives.
Always make sure you are on this branch before making changes:
```bash
git checkout source
```

## 2. Save Your Changes
When you are done editing, save your changes to GitHub:
```bash
git add .
git commit -m "Describe your changes here"
git push origin source
```

## 3. Publish to Live Website
To update the live website at https://ifta-faisal.github.io/:
```bash
npm run deploy
```
This command will:
1. Build your project (create the `dist` folder)
2. Automatically push the built files to the `main` branch
3. Update your live website (takes 2-5 minutes to see changes)
