# Krishna Portfolio

Portfolio site with videos loaded from Google Drive.

## Google Drive setup

You provide **one main folder**. All videos in that folder are fetched and shown in the Hero carousel and Portfolio section.

1. **Google Cloud & service account JSON:**
   - Go to [Google Cloud Console](https://console.cloud.google.com).
   - Create a project (or pick one) → **APIs & Services** → **Library** → search **Google Drive API** → **Enable**.
   - **APIs & Services** → **Credentials** → **Create credentials** → **Service account**.
   - Name it (e.g. “portfolio-drive”), finish. Open the new service account → **Keys** tab → **Add key** → **Create new key** → **JSON** → **Create**. A `.json` file downloads; that file’s contents are your `GOOGLE_SERVICE_ACCOUNT_JSON`. Copy the entire JSON and paste it in `.env.local` as one line (you can minify it or replace newlines with `\n` inside the string).
2. **Share the folder (two ways):**
   - **With the service account** (so the API can list videos): Add the service account email (e.g. `xxx@project.iam.gserviceaccount.com`) as **Viewer**.
   - **For embeds to play on your site:** Set the folder (or each video) to **“Anyone with the link” → Viewer**. Otherwise visitors will see a loading spinner or “Request access” inside the video frame.
3. **Folder ID:** From the folder URL `https://drive.google.com/drive/folders/FOLDER_ID`, copy the `FOLDER_ID`.
4. **Env:** Create `.env.local` and set:
   ```bash
   GOOGLE_DRIVE_FOLDER_ID=your_folder_id
   GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
   ```
   Paste the full JSON key as a single line (no newlines). Restart the dev server.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Debugging videos not playing

1. **Check video list:** Open [http://localhost:3000/api/drive-videos](http://localhost:3000/api/drive-videos) – you should see a JSON array of videos. If you get an error, fix the Drive setup first.
2. **Test single video:** Pick an `id` from that list, then open `http://localhost:3000/api/drive-video/debug?id=YOUR_VIDEO_ID`. You should see `"ok": true` and `"bytesReceived": 1024`. If you get an error, the folder may not be shared with the service account.
3. **Test video URL directly:** Open `http://localhost:3000/api/drive-video?id=YOUR_VIDEO_ID` in a new tab – the video should download or start playing.
