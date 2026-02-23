import { readFileSync } from "fs";
import { join } from "path";

function getServiceAccountKey(): { client_email?: string; private_key?: string } {
  const saJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (saJson) {
    return JSON.parse(saJson) as { client_email?: string; private_key?: string };
  }
  const path = process.env.GOOGLE_SERVICE_ACCOUNT_PATH?.trim();
  if (path) {
    const fullPath = join(process.cwd(), path);
    const content = readFileSync(fullPath, "utf-8");
    return JSON.parse(content) as { client_email?: string; private_key?: string };
  }
  throw new Error("Set GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_SERVICE_ACCOUNT_PATH in .env.local");
}

export async function getDriveClient() {
  const key = getServiceAccountKey();
  if (!key.client_email || !key.private_key) {
    throw new Error("Invalid service account JSON (missing client_email or private_key)");
  }
  const { google } = await import("googleapis");
  const auth = new google.auth.GoogleAuth({
    credentials: key,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  return google.drive({ version: "v3", auth });
}
