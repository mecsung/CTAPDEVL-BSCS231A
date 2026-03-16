# Original State Restored - Undo Changes

Restored files to state before major refactors:
- server.js: Original with duplicates (crash cause still present)
- routes/notes.js: Original dummy responses
- package.json: Original deps
- Removed controller/noteController.js
- Removed .env.example

**To fix npm run dev crash minimally:**
1. Create Backend/.env with PORT=5000 and MONGO_URI=...
2. cd Backend && npm install
3. npm run dev

Main crash was likely missing .env or import '../models/noteModel' (rename noteModels.js → noteModel.js)

Current status: Ready for minimal fix.

