# Krishna Portfolio

Portfolio site with videos loaded from Google Drive.

## Google Drive setup

All videos (Hero carousel and Portfolio section) are fetched from Google Drive.

### Quick setup (no API key)

1. Upload videos to Google Drive and share each as **Anyone with the link can view**.
2. Copy each file ID from the share link: `https://drive.google.com/file/d/**FILE_ID**/view`
3. Create `.env.local` and add:
   ```bash
   NEXT_PUBLIC_DRIVE_VIDEO_IDS=id1,id2,id3
   ```
   Use commas between IDs, no spaces (or trim spaces).

### Optional: folder-based (Drive API)

To auto-list all videos from one folder:

1. Create a [Google Cloud project](https://console.cloud.google.com), enable **Google Drive API**, create a **Service account**, download its JSON key.
2. Share your Drive folder with the service account email (e.g. `xxx@project.iam.gserviceaccount.com`) as **Viewer**.
3. In `.env.local`:
   ```bash
   GOOGLE_DRIVE_FOLDER_ID=your_folder_id
   GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
   ```
   Paste the full JSON key as one line. If you use `NEXT_PUBLIC_DRIVE_VIDEO_IDS` as well, the simple list takes precedence.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
